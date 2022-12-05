import MySettings from './about-me/MySettings'
import AboutMeProvider from './about-me-service/graphql/AboutMeProvider'
import PhraseProvider from './phrase/PhraseProvider'

interface Props {
	aboutMeApiUri: string;
	labels?: Record<string, string>;
}

function App({ aboutMeApiUri, labels } : Props): JSX.Element {
	return (
		<div className="App">
			<PhraseProvider phrases={labels}>
				<AboutMeProvider uri={aboutMeApiUri}>
					<MySettings />
				</AboutMeProvider>
			</PhraseProvider>
		</div>
	)
}

export default App
