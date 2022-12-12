import { useContext, useMemo } from 'react'
import AboutMeContext, { Person, PersonInput, UpdatePersonResult } from '../about-me-service/AboutMeContext'
import PersonEditor from './PersonEditor'
import useAsync from './UseAsync'
import './styles.css'
import { Button } from '../styleguide/components'
import PhraseContext from '../phrase/PhraseContext'


// We dont work directly with a person but rather a more stateful
// - input => edit values (last edit that failed validation or copy from person)
// - errorField => which filed failed validation on update?
// - person => the person...
interface PersonResult extends UpdatePersonResult {
	input?: PersonInput
}

const getInputFromPerson = (person: Person): PersonInput => ({ email: person?.email?.address||'', phoneNumber: person?.phone?.number||'' })

// Determine what to show in editor for email and phone. Should it be last known input or whats already stored in person data?
const getEffectiveInput = ({ person, input }: PersonResult): PersonInput => input ? input : getInputFromPerson(person)

export default (): JSX.Element => {
	const { getPerson, updatePerson } = useContext(AboutMeContext)

	// Fetch person and create wrapped/annotated result containing details about server side validation
	// This fetch however can never fail due to validation 
	const wrappedGetPerson = useMemo(() => (): Promise<PersonResult> => getPerson().then(person => ({ person, errorField: null })), [getPerson])

	// Update person and create wrapped/annotated result containing details about server side validation
	const wrappedUpdatePerson = useMemo(() => async (input: PersonInput, initialPerson: Person): Promise<PersonResult> => {
		const { person, errorField } = await updatePerson(input)
		if (errorField) {
			// validation errors during saving
			// show editor again with previous data and input
			return {
				person: initialPerson,
				errorField,
				input,
			}
		}
		return {
			person,
			errorField: null,
			input: getInputFromPerson(person),
		}
	}, [updatePerson])
	
	const inspect = useAsync(wrappedGetPerson)
	const { phrase } = useContext(PhraseContext)

	return inspect({
		pending: () => 
			<PersonEditor 
				key="pending"
				onCancel={() => ''} 
				onChange={(p) => p} 
			/>,
		resolved: (r, _, update) => 
			<PersonEditor 
				key="resolved" 
				person={r.person}
				input={getEffectiveInput(r)}
				showEditor={!!r.errorField}
				errorField={r.errorField}
				onCancel={() => update(wrappedGetPerson())} 
				onChange={input => update(wrappedUpdatePerson(input, r.person))}
				onError={e => update(Promise.reject(e))}
			/>,
		rejected: (err, state, update) => (
			<div>
				<Button onClick={() => update(wrappedGetPerson())}>{phrase('application_error', 'Något gick fel, försök igen')}</Button>
			</div>
		),
	})
}
