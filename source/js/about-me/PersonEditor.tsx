import { Box, Button, FormControl, FormHelperText, Stack, TextField } from '@mui/material'
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
		<Box
			component="form"
			noValidate
			mt={2}
		>
			<Stack
				spacing={{ xs:2 }}
			>
				<FormControl>
					{person?.email?.isVerified 
						? <FormHelperText>{phrase('email_is_verified', 'Din email är verifierad')}</FormHelperText>
						: <FormHelperText error={true}>{phrase('email_is_unverified', 'Din email är inte verifierad')}</FormHelperText>
					}
					<TextField
						type="email"
						label={phrase('email_placeholder', 'Email')}
						placeholder={phrase('email_placeholder', 'Email')}
						value={email}
						onChange={e => setEmail(e.target.value)}/>
					
				</FormControl>
				<FormControl>
					{person?.phone?.isVerified 
						? <FormHelperText>{phrase('phone_is_verified', 'Ditt telefonnummer är verifierat')}</FormHelperText>
						: <FormHelperText error={true}>{phrase('phone_is_unverified', 'Din telefonnummer är inte verifierat')}</FormHelperText>
					}
					<TextField
						type="tel"
						label={phrase('phone_placeholder', 'Telefon')}
						placeholder={phrase('phone_placeholder', 'Telefon')}
						value={phone}
						onChange={e => setPhone(e.target.value)}/>
				</FormControl>
				<FormControl>
					<Button type="submit" onClick={() => onChange({ email, phoneNumber: phone })}>{phrase('button_save', 'Spara')}</Button>
				</FormControl>
			</Stack>
		</Box>
	)
}

export default PersonEditor