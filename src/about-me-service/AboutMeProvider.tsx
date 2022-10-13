import { useMemo } from "react"
import axios from 'axios'
import AboutMeContext from './AboutMeContext'

type AboutMeProviderProps = {
	uri: string
	children: JSX.Element[] | JSX.Element

}

const queryMe = `
	query queryMe {
		me {
			id
			type
			firstName
			lastName
			email {
				address
				isVerified
				verifiedDate
			}
			phone {
				isVerified
				number
				verifiedDate
			}
		}
	}			
`
const mutateMe = `
mutation updateMe($me: PersonInput!) {
	updateMe(me: $me) {
		id
		type
		firstName
		lastName
		email {
			address
			isVerified
			verifiedDate
		}
		phone {
			isVerified
			number
			verifiedDate
		}
	}
}
`

const createProvider = (uri: string): AboutMeContext => ({
	getPerson: () => axios({
		method: 'post',
		url: `${uri}`,
		data: {
			query: queryMe,
			variables: {}
		}
	})
	.then(response => response.data?.data?.me),
	updatePerson: (input) => axios({
		method: 'post',
		url: `${uri}`,
		data: {
			query: mutateMe,
			variables: {me: input}
		}
	})
	.then(response => response.data?.data?.updateMe),
})

const AboutMeProvider = ({uri, children}: AboutMeProviderProps) => {
	const provider = useMemo(() => createProvider(uri), [uri])

	return (
		<AboutMeContext.Provider value={provider}>
			{children}
		</AboutMeContext.Provider>)
}

export default AboutMeProvider