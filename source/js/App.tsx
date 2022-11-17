import MySettings from './about-me/MySettings'
import AboutMeProvider from './about-me-service/graphql/AboutMeProvider'

interface Props {
	aboutMeGraphQLUri: string;
}

function App({ aboutMeGraphQLUri } : Props): JSX.Element {
	return (
		<div className="App">
			<AboutMeProvider uri={aboutMeGraphQLUri}>
				<MySettings/>
			</AboutMeProvider>
		</div>
	)
}

export default App
