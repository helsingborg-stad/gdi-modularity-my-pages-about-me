import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

document.addEventListener('DOMContentLoaded',
	() => {
		[...document.querySelectorAll('.js-gdi-modularity-about-me')]
			.map(e => ({
				root: ReactDOM.createRoot(e as HTMLElement),
				aboutMeGraphQLUri: e.getAttribute('data-about-me-graphql-uri') ?? '',
				labels: JSON.parse(e.getAttribute('data-labels') ?? '{}'),
			}))
			.filter(({ aboutMeGraphQLUri }) => aboutMeGraphQLUri.length > 0)
			.forEach(({ root, aboutMeGraphQLUri, labels }) => {
				root.render(
					<React.StrictMode>
						<App {...{ aboutMeGraphQLUri, labels }} />
					</React.StrictMode>
				)
			})
	}
)