import React from 'react'

const Collection = ({ children, ...props }: 
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => (
	<div {...props} className="c-collection">
		{children}
	</div>
)

const CollectionItem = ({ children, ...props }: 
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => (
	<div {...props} className="c-collection__item">
		{children}
	</div>
)

const CollectionContent = ({ children, ...props }: 
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => (
	<div {...props} className="c-collection__content">
		{children}
	</div>
)

const CollectionIcon = ({ children, ...props }: 
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => (
	<div {...props} className="c-collection__icon">
		{children}
	</div>
)

export {
	Collection,
	CollectionItem,
	CollectionContent,
	CollectionIcon,
}
