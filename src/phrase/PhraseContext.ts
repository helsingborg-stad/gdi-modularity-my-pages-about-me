import React from 'react'

interface PhraseContext {
	phrase: (key: string, defaultPhrase: string) => string
}

const PhraseContext = React.createContext<PhraseContext>({
	phrase: (key: string, defaultPhrase: string) => defaultPhrase
})

export default PhraseContext