import React from 'react'

export interface PersonInput {
	email: string
	phoneNumber: string
}

export interface PersonEmail {
	address: string
	isVerified?: boolean
	verifiedDate?: string
}
export interface PersonPhone {
	number: string,
	isVerified?: boolean
	verifiedDate?: string
}
export interface Person {
	id: string
	type: string
	firstName: string
	lastName: string
	email?: PersonEmail
	phone?: PersonPhone
}

export interface UpdatePersonValidationResult {
	email: boolean
	phoneNumber: boolean
}

export interface UpdatePersonResult {
	person: Person,
	errorField: 'email'|'phoneNumber'|null
}

export interface AboutMeContextType {
	getPerson: () => Promise<Person>,
	updatePerson: (input: PersonInput) => Promise<UpdatePersonResult>,
	sendVerificationLink: (type: 'email' | 'phone') => Promise<void>,
}


const notImplemented = () => { throw new Error('not implemented') }

const AboutMeContext = React.createContext<AboutMeContextType>({
	getPerson: notImplemented,
	updatePerson: notImplemented,
	sendVerificationLink: notImplemented,
})

export default AboutMeContext
