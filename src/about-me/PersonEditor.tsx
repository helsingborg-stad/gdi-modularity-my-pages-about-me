import { Button, TextField } from '@mui/material'
import { useContext, useState } from 'react'
import { Person, PersonInput } from '../about-me-service/AboutMeContext'
import PhraseContext from '../phrase/PhraseContext'

export type PersonEditorProps = {
	person: Person;
	onChange: (input: PersonInput) => void;
};

const PersonEditor = ({ person, onChange }: PersonEditorProps): JSX.Element => {
	const [ email, setEmail ] = useState(person?.email?.address || '')
	const [ phone, setPhone ] = useState(person?.phone?.number || '')
	const { phrase } = useContext(PhraseContext)
	return (
		<>
			<TextField placeholder={phrase('email_placeholder', 'Email')} value={email} onChange={e => setEmail(e.target.value)}/>
			<TextField placeholder={phrase('phone_placeholder', 'Telefon')} value={phone} onChange={e => setPhone(e.target.value)}/>
			<Button onClick={() => onChange({ email, phoneNumber: phone })}>{phrase('button_save', 'Spara')}</Button>
		</>
	)
}

export default PersonEditor