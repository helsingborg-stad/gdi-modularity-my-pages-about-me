import { Box, FormControl, FormHelperText, Stack, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Person, PersonInput } from '../about-me-service/AboutMeContext'
import PhraseContext from '../phrase/PhraseContext'
import { Button } from './component-lib/Button'
import { Card, CardBody } from './component-lib/Card'
import { Collection, CollectionContent, CollectionIcon, CollectionItem } from './component-lib/Collection'
import { Icon } from './component-lib/Icon'

export type PersonEditorProps = {
	person: Person;
	onChange: (input: PersonInput) => void;
};

const PersonEditor = ({ person, onChange }: PersonEditorProps): JSX.Element => {
	const { firstName, lastName, id } = person
	const [ email, setEmail ] = useState(person?.email?.address || '')
	const [ phone, setPhone ] = useState(person?.phone?.number || '')
	const { phrase } = useContext(PhraseContext)
	return (
		<Stack
			spacing={{ xs: 2, md: 3 }}
			maxWidth={'var(--container-width-content, calc(var(--base, 8px) * 76))'}
		>
			<Card>
				<CardBody>
					<Collection className="c-collection c-collection--unbox">
						<CollectionItem>
							<CollectionIcon className="c-collection__icon u-display--none@xs">
								<Icon name={'account_circle'} style={{
									color: 'var(--color-complementary, #f0dbd9)',
									width: '48px',
								}} />
							</CollectionIcon>
							<CollectionContent>
								<h3>{firstName} {lastName}</h3>
								<span>{id}</span>
							</CollectionContent>
						</CollectionItem>
					</Collection>
				</CardBody>
			</Card>

			<Card>
				<CardBody>
					<Box
						component="form"
						noValidate
					>
						<Collection className="c-collection c-collection--unbox">
							<CollectionItem>
								<CollectionIcon className="c-collection__icon u-display--none@xs">
									<Icon name={'email'} style={{
										color: 'var(--color-complementary, #f0dbd9)',
										width: '48px',
									}} />
								</CollectionIcon>
								<CollectionContent>
									<FormControl fullWidth>
										<TextField
											type="email"
											label={phrase('email_placeholder', 'Email')}
											placeholder={phrase('email_placeholder', 'Email')}
											value={email}
											onChange={e => setEmail(e.target.value)} />
										{person?.email?.isVerified
											? <FormHelperText>{phrase('email_is_verified', 'Din email är verifierad')}</FormHelperText>
											: <FormHelperText error={true}>{phrase('email_is_unverified', 'Din email är inte verifierad')}</FormHelperText>
										}
									</FormControl>
								</CollectionContent>
							</CollectionItem>
							<CollectionItem>
								<CollectionIcon className="c-collection__icon u-display--none@xs">
									<Icon name={'phone'} style={{
										color: 'var(--color-complementary, #f0dbd9)',
										width: '48px',
									}} />
								</CollectionIcon>
								<CollectionContent>
									<FormControl fullWidth>
										<TextField
											type="tel"
											label={phrase('phone_placeholder', 'Telefon')}
											placeholder={phrase('phone_placeholder', 'Telefon')}
											value={phone}
											onChange={e => setPhone(e.target.value)} />

										{person?.phone?.isVerified
											? <FormHelperText>{phrase('phone_is_verified', 'Ditt telefonnummer är verifierat')}</FormHelperText>
											: <FormHelperText error={true}>{phrase('phone_is_unverified', 'Din telefonnummer är inte verifierat')}</FormHelperText>
										}
									</FormControl>
								</CollectionContent>
							</CollectionItem>
							<CollectionItem>
								<CollectionIcon className="c-collection__icon u-display--none@xs">
									<Icon name={'phone'} style={{
										color: 'white',
										width: '48px',
										visibility: 'hidden',
									}} />
								</CollectionIcon>
								<CollectionContent>
									<FormControl>
										<Button
											onClick={() => onChange({ email, phoneNumber: phone })}
											className="c-button c-button__filled c-button__filled--primary c-button--md"
											type="submit"
											aria-label={phrase('button_save', 'Spara')}
										>
											{phrase('button_save', 'Spara')}
										</Button>
									</FormControl>
								</CollectionContent>
							</CollectionItem>
						</Collection>
					</Box>
				</CardBody>
			</Card>
		</Stack>
	)
}

export default PersonEditor