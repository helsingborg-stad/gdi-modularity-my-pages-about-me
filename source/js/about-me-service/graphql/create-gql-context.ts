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

const gql = (uri: string, query: string, variables: object) => axios({
	method: 'post',
	url: `${uri}`,
	data: {
		query,
		variables,
	},
})

export const createGqlContext = (uri: string): AboutMeContextType => ({
	getPerson: () => gql(uri, queryMe, {})
		.then(response => response.data?.data?.me),
	updatePerson: (input) => gql(uri, mutateMe, { me: input })
		.then(response => response.data?.data?.updateMe),
})
