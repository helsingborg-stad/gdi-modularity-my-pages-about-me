import React from 'react'

const Collection = ({ children, className, ...props }: 
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => (
	<div {...props} 		
		className={[
			'c-collection',
			...className ? [className] : [],
		].join(' ')}>
		{children}
	</div>
)

const CollectionItem = ({ children, className, ...props }: 
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => (
	<div {...props} 		
		className={[
			'c-collection__item',
			...className ? [className] : [],
		].join(' ')}>
		{children}
	</div>
)

const CollectionContent = ({ children, className, ...props }: 
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => (
	<div {...props} className={[
		'c-collection__content',
		...className ? [className] : [],
	].join(' ')}>
		{children}
	</div>
)

const CollectionIcon = ({ children, className, ...props }: 
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => (
	<div {...props} className={[
		'c-collection__icon',
		...className ? [className] : [],
	].join(' ')}>
		{children}
	</div>
)

export {
	Collection,
	CollectionItem,
	CollectionContent,
	CollectionIcon,
}
