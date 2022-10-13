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

interface AboutMeContext {
	getPerson: () => Promise<Person>,
	updatePerson: (input: PersonInput) => Promise<Person>
}

const notImplemented = () => { throw new Error('not implemented') }

const AboutMeContext = React.createContext<AboutMeContext>({
	getPerson: notImplemented,
	updatePerson: notImplemented
})

export default AboutMeContext
/*
type Query {
	me: Person
}
type Mutation {
	updateMe(me: PersonInput): Person
}
schema {
	query: Query
	mutation: Mutation
}
*/