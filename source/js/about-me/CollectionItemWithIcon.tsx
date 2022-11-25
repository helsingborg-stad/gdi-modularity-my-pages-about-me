import React from 'react'
import {
	CollectionContent,
	CollectionIcon,
	CollectionItem,
	Icon,
} from '../styleguide/components'

export const CollectionItemWithIcon = ({ icon, children }: { icon?: string; children: React.ReactNode; }) => (
	<CollectionItem>
		<CollectionIcon className="c-collection__icon u-display--none@xs">
			<Icon name={icon ?? 'email'} size={'lg'} style={{
				color: 'var(--color-complementary, #f0dbd9)',
				width: '40px',
				visibility: icon ? 'visible' : 'hidden',
			}} />
		</CollectionIcon>
		<CollectionContent>
			{children}
		</CollectionContent>
	</CollectionItem>
)
