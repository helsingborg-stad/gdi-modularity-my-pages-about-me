import { useContext } from 'react'
import AboutMeContext, { Person } from '../about-me-service/AboutMeContext'
import PersonEditor from './PersonEditor'
import useAsync from './UseAsync'
import './styles.css'
import { Button } from '../styleguide/components'

interface State {
	person?: Person
	isSaving: boolean
}

export default (): JSX.Element => {
	const { getPerson, updatePerson } = useContext(AboutMeContext)

	const inspect = useAsync<Person, State>(getPerson, { isSaving: false })
	
	return inspect({
		pending: (state) => 
			<PersonEditor 
				key="pending" 
				person={state?.person} 
				onCancel={() => ''} 
				onChange={(p) => p} 
			/>,
		resolved: (person, _, update) => 
			<PersonEditor 
				key="resolved" 
				person={person} 
				onCancel={() => update(getPerson(), { isSaving: false, person })} 
				onChange={input => update(updatePerson(input), { isSaving: true, person })}
			/>,
		rejected: (err, state, update) => (
			<div>
				<Button onClick={() => update(getPerson(), { isSaving: false })}>Något gick fel, försök igen</Button>
			</div>
		),
	})
}
