import './App.css'
import MySettings from './about-me/MySettings'
import AboutMeProvider from './about-me-service/graphql/AboutMeProvider'

function App() {
	return (
		<div className="App">
			<AboutMeProvider uri='http://localhost:3000/api/v1/aboutme/graphql'>
				<MySettings/>
			</AboutMeProvider>
		</div>
	)
}

export default App
