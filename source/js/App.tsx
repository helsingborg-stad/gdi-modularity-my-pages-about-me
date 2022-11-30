import MySettings from './about-me/MySettings'
import AboutMeProvider from './about-me-service/graphql/AboutMeProvider'
import PhraseProvider from './phrase/PhraseProvider'

interface Props {
	aboutMeGraphQLUri: string;
	labels?: Record<string, string>;
}

function App({ aboutMeGraphQLUri, labels } : Props): JSX.Element {
	return (
		<div className="App">
			<PhraseProvider phrases={labels}>
				<AboutMeProvider uri={aboutMeGraphQLUri}>
					<MySettings />
				</AboutMeProvider>
			</PhraseProvider>
		</div>
	)
}

export default App
