import { Stack } from '@mui/material'
import React, { ReactChild, ReactChildren, useContext, useMemo, useState } from 'react'
import { Person, PersonInput } from '../about-me-service/AboutMeContext'
import PhraseContext from '../phrase/PhraseContext'
import {
	Collection,
	CollectionContent,
	CollectionIcon,
	CollectionItem,
	Icon,
	Card,
	CardBody,
	Button,
	Field,
	Typography,
} from '../styleguide/components'

export type PersonEditorProps = {
	person: Person;
	onChange: (input: PersonInput) => void;
};

const CollectionWithCard = ({ children }: { children: React.ReactNode }) => (
	<Card>
		<CardBody>
			<Collection className="c-collection c-collection--unbox">
				{children}
			</Collection>
		</CardBody>
	</Card>
)

const CollectionItemWithIcon = ({ icon, children }: { icon?: string, children: React.ReactNode }) => (
	<CollectionItem>
		<CollectionIcon className="c-collection__icon u-display--none@xs">
			<Icon name={icon ?? 'email'} style={{
				color: 'var(--color-complementary, #f0dbd9)',
				width: '40px',
				visibility: icon ? 'visible' : 'hidden',
			}} />
		</CollectionIcon>
		<CollectionContent>
			{children}
		</CollectionContent>
	</CollectionItem>
)

const PersonEditor = ({ person, onChange }: PersonEditorProps): JSX.Element => {
	const { firstName, lastName, id } = person
	const [ editable, setEditable ] = useState<boolean>(person?.email?.address || person?.phone?.number ? false : true)

	const [ notice, setNotice ] = useState('')
	const [ email, setEmail ] = useState(person?.email?.address || '')
	const [ phone, setPhone ] = useState(person?.phone?.number || '')

	const { phrase } = useContext(PhraseContext)

	const EditButton = useMemo(() => () =>
		!editable
			? (
				<Button
					onClick={() => setEditable(true)}
					type="button"
					color="primary"
					aria-label={phrase('button_edit', 'Ändra')}
				>
					{phrase('button_edit', 'Ändra')}
				</Button>
			) 
			: null
	, [editable])

	const SubmitButton = useMemo(() => ({ onSubmit }: { onSubmit: () => void }) =>
		editable 
			? (
				<Button
					disabled={!email && !phone && !person.email?.address && !person.phone?.number}
					onClick={onSubmit}
					color="primary"
					type="submit"
					aria-label={phrase('button_save', 'Spara')}
				>
					{phrase('button_save', 'Spara')}
				</Button>
			) 
			: null
	, [ editable, email, phone, person ])

	const CancelButton = useMemo(() => () =>
		(person?.email?.address && editable || person?.phone?.number && editable)
			? (
				<Button
					onClick={() => setEditable(false)}
					type="submit"
					aria-label={phrase('button_cancel', 'Avbryt')}
				>
					{phrase('button_cancel', 'Avbryt')}
				</Button>
			)
			: null
	, [ person, editable ])

	return (
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
						label={phrase('email_placeholder', 'Email')}
						placeholder={phrase('email_placeholder', 'Email')}
						value={!editable && !email ? '-' : email}
						onChange={e => setEmail(e.target.value)}
						readOnly={!editable}
						helperText={
							!editable && email && !person?.email?.isVerified
								? phrase('email_is_verified', 'Din email är inte verifierad')
								: undefined
						}
					/>
				</CollectionItemWithIcon>
				<CollectionItemWithIcon icon={'phone'}>
					<Field
						type="tel"
						name="phone"
						label={phrase('phone_placeholder', 'Phone')}
						placeholder={phrase('phone_placeholder', 'Phonenumber')}
						value={!editable && !phone ? '-' : phone}
						onChange={e => setPhone(e.target.value)}
						readOnly={!editable}
						helperText={
							!editable && phone && !person?.phone?.isVerified
								? phrase('phone_is_unverified', 'Ditt telefonnummer är inte verifierat')
								: undefined
						}
					/>
				</CollectionItemWithIcon>
				<CollectionItemWithIcon>
					<EditButton />
					<SubmitButton onSubmit={() => onChange({ email, phoneNumber: phone })} />
					<CancelButton />
				</CollectionItemWithIcon>
			</CollectionWithCard>
		</Stack>
	)
}

export default PersonEditor