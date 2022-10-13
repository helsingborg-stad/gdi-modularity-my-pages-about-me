import { useContext, useState } from "react"
import AboutMeContext, { Person } from "../about-me-service/AboutMeContext"
import PhraseContext from "../phrase/PhraseContext"
import PersonEditor from "./PersonEditor"
import useAsync from "./UseAsync"

export default () => {
	const {phrase} = useContext(PhraseContext)
	const {getPerson, updatePerson} = useContext(AboutMeContext)

	const inspect = useAsync(getPerson)
	
	return inspect({
		pending: () => <><span>{phrase('person_loading', 'Laddar...')}</span></>,
		resolved: (person, update) => <PersonEditor person={person} onChange={input => update(updatePerson(input))}/>,
		rejected: err => <span>{phrase('person_error', 'Fel...')}</span>
	})
}
