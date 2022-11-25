import React from 'react'
import {
	Collection, Card,
	CardBody,
} from '../styleguide/components'

export const CollectionWithCard = ({ children }: { children: React.ReactNode; }) => (
	<Card>
		<CardBody>
			<Collection className="c-collection c-collection--unbox">
				{children}
			</Collection>
		</CardBody>
	</Card>
)
