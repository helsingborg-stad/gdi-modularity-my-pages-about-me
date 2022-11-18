import { Box, FormControl, FormHelperText, Stack, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Person, PersonInput } from '../about-me-service/AboutMeContext'
import PhraseContext from '../phrase/PhraseContext'

export type PersonEditorProps = {
	person: Person;
	onChange: (input: PersonInput) => void;
};

interface IconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	name: string,
}

const Icon = ({ name, style, ...props }: IconProps) => (
	<i 
		className="c-icon c-icon--size-xxl material-icons" 
		translate="no" 
		style={{ 
			color: 'var(--color-complementary, #f0dbd9)', 
			width: '48px',
			userSelect: 'none',
			...style, 
		}}
		{...props}
	>{ name }</i>
)

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
			<div className="c-card">
				<div className="c-card__body">
					<div className="c-collection c-collection--unbox">
						<div className="c-collection__item">
							<div className="c-collection__icon u-display--none@xs">
								<Icon name={'account_circle'} style={{ 
									color: 'var(--color-complementary, #f0dbd9)', 
									width: '48px', 
								}} />
							</div>
							<div className="c-collection__content">
								<h2>{firstName} {lastName}</h2>
								<h4>{id}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="c-card">
				<div className="c-card__body">
					<Box
						component="form"
						noValidate
					>
						<div className="c-collection c-collection--unbox">
							<div className="c-collection__item">
								<div className="c-collection__icon u-display--none@xs">	
									<Icon name={'email'} style={{ 
										color: 'var(--color-complementary, #f0dbd9)', 
										width: '48px', 
									}} />								
								</div>
								<div className="c-collection__content">
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
								</div>
							</div>

							<div className="c-collection__item">
								<div className="c-collection__icon u-display--none@xs">
									<Icon name={'phone'} style={{ 
										color: 'var(--color-complementary, #f0dbd9)', 
										width: '48px', 
									}} />				
								</div>
								<div className="c-collection__content">
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
								</div>
							</div>

							<div className="c-collection__item">
								<div className="c-collection__icon u-display--none@xs">
									<Icon name={'phone'} style={{ 
										color: 'white', 
										width: '48px', 
										visibility: 'hidden',
									}} />
								</div>
								<div className="c-collection__content">
									<FormControl>
										<button onClick={() => onChange({ email, phoneNumber: phone })} className="c-button c-button__filled c-button__filled--primary c-button--md" type="submit" aria-label={phrase('button_save', 'Spara')}>
											<span className="c-button__label">
												<span className="c-button__label-text ">
													{phrase('button_save', 'Spara')}
												</span>
											</span>
										</button>
									</FormControl>
								</div>
							</div>
						</div>
					</Box>
				</div>
			</div>
		</Stack>
	)
}

export default PersonEditor