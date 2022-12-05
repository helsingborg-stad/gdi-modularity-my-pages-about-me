import axios from 'axios'
import { AboutMeContextType } from '../AboutMeContext'

const queryMe = `
	query queryMe {
		me {
			id
			type
			firstName
			lastName
			email {
				address
				isVerified
				verifiedDate
			}
			phone {
				isVerified
				number
				verifiedDate
			}
		}
	}			
`

const mutateMe = `
	mutation updateMe($me: PersonInput!) {
		updateMe(me: $me) {
			id
			type
			firstName
			lastName
			email {
				address
				isVerified
				verifiedDate
			}
			phone {
				isVerified
				number
				verifiedDate
			}
		}
	}
`

const gql = (uri: string, query: string, variables: object, headers: object) => axios({
	method: 'post',
	url: `${uri}/graphql`,
	data: {
		query,
		variables,
	},
	headers,
})

const post = (uri: string, data: object = {}, headers: object = {}) => axios({
	method: 'post',
	url: `${uri}`,
	data,
	headers,
})

const tryGetAuthorizationHeaders = async () => {
	const { token } = await window.gdiHost.getAccessToken()
	return token ? {
		Authorization: `Bearer ${token}`,
	} : {}
}

export const createGqlContext = (uri: string): AboutMeContextType => ({
	getPerson: () =>
		tryGetAuthorizationHeaders()
			.then(headers => gql(uri, queryMe, {}, headers))
			.then(response => response.data?.data?.me),
	updatePerson: (input) =>
		tryGetAuthorizationHeaders()
			.then(headers => gql(uri, mutateMe, { me: input }, headers))
			.then(response => response.data?.data?.updateMe),
	sendVerificationLink: (type) =>
		tryGetAuthorizationHeaders()
			.then(headers => {
				post(`${uri}/send-verification-notification/${type}`, {}, headers)
			}),
})
