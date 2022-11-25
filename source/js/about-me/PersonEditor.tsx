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
import { ShowIf } from '../styleguide/utils/ShowIf'

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
			<Icon name={icon ?? 'email'} size={'lg'} style={{
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

export type PersonEditorProps = {
	person?: Person;
	hasBeenSaved?: boolean;
	onChange: (input: PersonInput) => void;
};

const PersonEditor = ({ person, onChange }: PersonEditorProps): JSX.Element => {
	const { firstName, lastName, id } = person || { firstName: '', lastName: '', id: '' }
	
	const [ editable, setEditable ] = useState<boolean>(false)
	const [ email, setEmail ] = useState(person?.email?.address || '')
	const [ phone, setPhone ] = useState(person?.phone?.number || '')

	const { phrase } = useContext(PhraseContext)

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

					<ShowIf condition={editable}>
						<div className="u-margin__bottom--3">
							<Typography variant="p">
								{phrase('phone_is_unverified', 'Dina kontaktuppgifter användas endast med förvaltningar och bolag inom Helsingborg Stad och endast när du valt att nyttja en tjänst. Du kan själv ändra dina inställningar när du vill.')}
							</Typography>
							<Typography variant="p" className="u-margin__top--2">
								{phrase('phone_is_unverified', 'När jag sparar mina uppgifter godkänner jag att dessa uppgifter används av Helsingborg Stad. Du hittar information om hur Helsingborgs stad behandlar personuppgifter.')}
							</Typography>
						</div>

						<Button
							disabled={!email && !phone && !person?.email?.address && !person?.phone?.number}
							onClick={() => onChange({ email, phoneNumber: phone })}
							color="primary"
							type="submit"
							aria-label={phrase('button_save', 'Spara')}
						>
							{phrase('button_save', 'Spara')}
						</Button>


						<Button
							onClick={() => setEditable(false)}
							type="submit"
							aria-label={phrase('button_cancel', 'Avbryt')}
						>
							{phrase('button_cancel', 'Avbryt')}
						</Button>		

					</ShowIf>
					
					<ShowIf condition={!editable}>
						<Button
							onClick={() => {
								setEditable(true) 
							}}
							type="button"
							color="primary"
							aria-label={phrase('button_edit', 'Ändra')}
						>
							{phrase('button_edit', 'Ändra')}
						</Button>
					</ShowIf>
				</CollectionItemWithIcon>
			</CollectionWithCard>
		</Stack>
	)
}

export default PersonEditor