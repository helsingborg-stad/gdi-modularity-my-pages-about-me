import { useContext } from 'react'
import AboutMeContext, { Person } from '../about-me-service/AboutMeContext'
import PhraseContext, { PhraseFn } from '../phrase/PhraseContext'
import PersonEditor from './PersonEditor'
import useAsync from './UseAsync'
import './styles.css'

type State = 'loading'|'saving'

const PendingElements: Record<State, (phrase: PhraseFn) => JSX.Element> = {
	loading: phrase => <span>{phrase('person_loading', 'Laddar...')}</span>,
	saving: phrase => <span>{phrase('person_saving', 'Sparar...')}</span>,
} 

export default (): JSX.Element => {
	const { phrase } = useContext(PhraseContext)
	const { getPerson, updatePerson } = useContext(AboutMeContext)

	const inspect = useAsync<Person, State>(getPerson, 'loading')
	
	return inspect({
		pending: (state) => PendingElements[state](phrase),
		resolved: (person, _, update) => <PersonEditor person={person} onChange={input => update(updatePerson(input), 'loading')}/>,
		rejected: () => <span>{phrase('person_error', 'Fel...')}</span>,
	})
}
