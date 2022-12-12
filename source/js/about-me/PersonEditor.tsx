import { Stack } from '@mui/material'
import { RefObject, useCallback, useContext, useEffect, useRef, useState } from 'react'
import AboutMeContext, { Person, PersonInput, UpdatePersonValidationResult } from '../about-me-service/AboutMeContext'
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
	person?: Person	// for displaying info
	input?: PersonInput	// editable email/phone
	errorField?: 'email'|'phoneNumber'|null	// indication of validationError in last save
	showEditor?: boolean	// start in edit mode? (as a response to validation error...)
	hasBeenSaved?: boolean
	onChange: (input: PersonInput) => void
	onCancel: () => void
	onError?: (e: Error) => void 
}

const PersonEditor = ({ input, person, errorField, showEditor, onChange, onCancel }: PersonEditorProps): JSX.Element => {
	const { firstName, lastName, id } = person || { firstName: '', lastName: '', id: '' }

	const formRef = useRef<HTMLFormElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const phoneRef = useRef<HTMLInputElement>(null)
	
	const [ editable, setEditable ] = useState<boolean>(showEditor || false)
	const [ email, setEmail ] = useState(input?.email || '')
	const [ phone, setPhone ] = useState(input?.phoneNumber || '')
	const [ didValidate, setDidValidate ] = useState(false)
	
	const [ resentEmail, setResentEmail ] = useState(false)
	const [ resentSms, setResentSms ] = useState(false)

	const { phrase } = useContext(PhraseContext)
	const { sendVerificationLink } = useContext(AboutMeContext)

	const validateInputFor = useCallback((isInvalid: boolean, ref: RefObject<HTMLInputElement>, validationMessage: string) => {
		if (isInvalid) {
			ref.current?.setCustomValidity(validationMessage)
			ref.current?.setAttribute('aria-invalid', 'true')
			ref.current?.reportValidity()
		}
		return true
	}, [])

	useEffect(() => {
		if (!didValidate) {
			validateInputFor(errorField === 'email', emailRef, phrase('email_validation', 'Vänligen ange en giltig e-postadress')) 
			validateInputFor(errorField === 'phoneNumber', phoneRef, phrase('phone_validation', 'Vänligen ange ett giltigt telefonnummer'))
			setDidValidate(true)
		}
	}, [])

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
							forwardRef={emailRef}
							type="email"
							name="email"
							label={phrase('email_label', 'Email')}
							placeholder={phrase('email_placeholder', 'Email')}
							value={!editable && !email ? '-' : email}
							onChange={e => setEmail(e.target.value)}
							readOnly={!editable}
							helperText={
								!editable && email && !person?.email?.isVerified
									? (
										<Typography>
											{phrase('email_is_unverified', 'Your email is not verified.') + ' '}
											<ShowIf condition={!resentEmail}>
												<a href="#" role="button" onClick={(e) => {
													e.preventDefault()
													setResentEmail(true)
													sendVerificationLink('email')
												}}>{phrase('resend_verification_email', 'Resend mail')}</a>
											</ShowIf>
											<ShowIf condition={resentEmail}>
												<a>{phrase('sent_verification_email', 'Sent mail to {email}').replace('{email}', email)}</a>
											</ShowIf>
										</Typography>
									)
									: undefined
							}
						/>
					</CollectionItemWithIcon>
					<CollectionItemWithIcon icon={'phone'}>
						<Field
							forwardRef={phoneRef}
							type="tel"
							name="phone"
							label={phrase('phone_label', 'Phone')}
							placeholder={phrase('phone_placeholder', 'Phonenumber')}
							value={!editable && !phone ? '-' : phone}
							onChange={e => setPhone(e.target.value)}
							readOnly={!editable}
							helperText={
								!editable && phone && !person?.phone?.isVerified
									? (
										<Typography>
											{phrase('phone_is_unverified', 'Your phone number is not verified.') + ' '}
											<ShowIf condition={!resentSms}>
												<a href="#" role="button" onClick={(e) => {
													e.preventDefault()
													setResentSms(true)
													sendVerificationLink('phone')
												}}>{phrase('resend_verification_sms', 'Resend SMS')}</a>
											</ShowIf>
											<ShowIf condition={resentSms}>
												<a>{phrase('sent_verification_sms', 'Sent SMS to {phone}').replace('{phone}', phone)}</a>
											</ShowIf>
										</Typography>
									)
									: undefined
							}
							inputProps={{
								//pattern: '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
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
								onClick={async () => {
									onChange({ email, phoneNumber: phone })
								}}
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