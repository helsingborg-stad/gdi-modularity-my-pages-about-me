import { useState } from "react";

type Func<T> = () => Promise<T>

export interface AsyncView<TData, TState, TView> {
	pending: (state: TState) => TView,
	resolved: (data: TData, state: TState, update: ((p: Promise<TData>, state: TState) => void)) => TView,
	rejected: (e: Error, state: TState) => TView
}

/*
export type AsyncInspect<T> = {
	inspect<S>(view: AsyncView<T, S>): S
}
*/

export type AsyncInspect<TData, TState> = <TView>(view: AsyncView<TData, TState, TView>) => TView

export default function useAsync<TData, TState = any>(getData: Func<TData>, initialState?: TState): AsyncInspect<TData, TState> {

	const [state, setState] = useState<'dormant'|'pending'|'resolved'|'rejected'>('dormant')
	const [userState, setUserState] = useState<TState|undefined>(initialState)
	const [data, setData] = useState<TData|null>(null)
	const [error, setError] = useState<Error|null>(null)

	const setPending = (p: Promise<TData>) => {
		setState('pending')
		p
			.then(data => {
				setState('resolved')
				setData(data)
			})
			.catch(error => {
				setState('rejected')
				setError(error)
			})
	}
	if (state === 'dormant') {
		setPending(getData())
	}

	return <TView>(view: AsyncView<TData, TState, TView>) => {
		switch (state) {
			case 'resolved':
				return view.resolved(data!, userState!, (p, newState) => {
					setUserState(newState)
					setPending(p)
				})
			case 'rejected':
				return view.rejected(error!, userState!)
			default:
				return view.pending(userState!)
		}
	}

/*
	return {
		inspect<S>(view: AsyncView<T, S>) {
			switch (state) {
				case 'resolved':
					return view.resolved(data!, p => setPending(p))
				case 'rejected':
					return view.rejected(error!)
				default:
					return view.pending()
			}
		}
	}
*/
}
