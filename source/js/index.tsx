import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

document.addEventListener('DOMContentLoaded',
	() => {
		[...document.querySelectorAll('.js-gdi-modularity-about-me')]
			.map(e => ({
				root: ReactDOM.createRoot(e as HTMLElement),
				aboutMeApiUri: e.getAttribute('data-about-me-api-uri') ?? '',
				labels: JSON.parse(e.getAttribute('data-labels') ?? '{}'),
			}))
			.filter(({ aboutMeApiUri }) => aboutMeApiUri.length > 0)
			.forEach(({ root, aboutMeApiUri, labels }) => {
				root.render(
					<React.StrictMode>
						<App {...{ aboutMeApiUri, labels }} />
					</React.StrictMode>
				)
			})
	}
)