import { Stack } from '@mui/material'
import { useContext, useRef, useState } from 'react'
import { Person, PersonInput } from '../about-me-service/AboutMeContext'
import PhraseContext from '../phrase/PhraseContext'
import {
	Button,
	Field,
	Typography,
} from '../styleguide/components'
import { ShowIf } from '../styleguide/utils/ShowIf'
import { CollectionItemWithIcon } from './CollectionItemWithIcon'
import { CollectionWithCard } from './CollectionWithCard'

export type PersonEditorProps = {
	person?: Person;
	hasBeenSaved?: boolean;
	onChange: (input: PersonInput) => void;
	onCancel: () => void;
};

const PersonEditor = ({ person, onChange, onCancel }: PersonEditorProps): JSX.Element => {
	const { firstName, lastName, id } = person || { firstName: '', lastName: '', id: '' }

	const formRef = useRef<HTMLFormElement>(null)
	
	const [ editable, setEditable ] = useState<boolean>(false)
	const [ email, setEmail ] = useState(person?.email?.address || '')
	const [ phone, setPhone ] = useState(person?.phone?.number || '')

	const { phrase } = useContext(PhraseContext)

	return (
		<form ref={formRef}>
			<Stack
				spacing={{ xs: 2, md: 3 }}
				maxWidth={'var(--container-width-content, calc(var(--base, 8px) * 76))'}
			>
				<CollectionWithCard>
					<CollectionItemWithIcon icon={'account_circle'}>
						<Typography variant={'h3'}>
							{firstName} {lastName}
						</Typography>
						<Typography variant={'p'}>
							{id}
						</Typography>
					</CollectionItemWithIcon>
				</CollectionWithCard>
				<CollectionWithCard>
					<CollectionItemWithIcon icon={'email'}>
						<Field
							type="email"
							name="email"
							label={phrase('email_label', 'Email')}
							placeholder={phrase('email_placeholder', 'Email')}
							value={!editable && !email ? '-' : email}
							onChange={e => setEmail(e.target.value)}
							readOnly={!editable}
							helperText={
								!editable && email && !person?.email?.isVerified
									? phrase('email_is_verified', 'Your email is not verified')
									: undefined
							}
						/>
					</CollectionItemWithIcon>
					<CollectionItemWithIcon icon={'phone'}>
						<Field
							type="tel"
							name="phone"
							label={phrase('phone_label', 'Phone')}
							placeholder={phrase('phone_placeholder', 'Phonenumber')}
							value={!editable && !phone ? '-' : phone}
							onChange={e => setPhone(e.target.value)}
							readOnly={!editable}
							helperText={
								!editable && phone && !person?.phone?.isVerified
									? phrase('phone_is_unverified', 'Your phone number is not verified.')
									: undefined
							}
							inputProps={{
								pattern: '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
							}}
						/>
					</CollectionItemWithIcon>
					<CollectionItemWithIcon>
						<ShowIf condition={!editable}>
							<Button
								onClick={() => {
									setEditable(true)
								}}
								type="button"
								color="primary"
								aria-label={phrase('button_edit', 'Edit')}
							>
								{phrase('button_edit', 'Edit')}
							</Button>
						</ShowIf>
						<ShowIf condition={editable}>
							<ShowIf condition={phrase('form_terms', '').length > 0}>
								<div className="u-margin__bottom--3 contact-details-form-terms" dangerouslySetInnerHTML={{ __html: phrase('form_terms', '') }}>
								</div>
							</ShowIf>	

							<Button
								onClick={() => formRef.current?.reportValidity() && onChange({ email, phoneNumber: phone })}
								color="primary"
								type="submit"
								aria-label={phrase('button_save', 'Save')}
							>
								{phrase('button_save', 'Save')}
							</Button>

							<Button
								onClick={onCancel}
								type="submit"
								aria-label={phrase('button_cancel', 'Cancel')}
							>
								{phrase('button_cancel', 'Cancel')}
							</Button>
						</ShowIf>
					</CollectionItemWithIcon>
				</CollectionWithCard>
			</Stack>
		</form>
	)
}

export default PersonEditor