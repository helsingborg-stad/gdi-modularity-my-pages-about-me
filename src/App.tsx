import './App.css'
import MySettings from './about-me/MySettings'
import AboutMeProvider from './about-me-service/graphql/AboutMeProvider'

function App(): JSX.Element {
	console.log(process.env)
	const aboutMeGraphQLUri = process.env.REACT_APP_ABOUTME_GRAPHQL_URI||''
	return (
		<div className="App">
			<AboutMeProvider uri={aboutMeGraphQLUri}>
				<MySettings/>
			</AboutMeProvider>
		</div>
	)
}

export default App
