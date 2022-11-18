import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

document.addEventListener('DOMContentLoaded',
	() => {
		[...document.querySelectorAll('.js-gdi-modularity-about-me')]
			.map(e => ({
				root: ReactDOM.createRoot(e as HTMLElement),
				aboutMeGraphQLUri: e.getAttribute('data-about-me-graphql-uri') ?? '',
			}))
			.filter(({ aboutMeGraphQLUri }) => aboutMeGraphQLUri.length > 0)
			.forEach(({ root, aboutMeGraphQLUri }) => {
				root.render(
					<React.StrictMode>
						<App {...{ aboutMeGraphQLUri }} />
					</React.StrictMode>
				)
			})
	}
)