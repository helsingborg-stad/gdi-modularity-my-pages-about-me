/* eslint-disable no-undef */
import React from 'react'

const Card = ({ children, ...props }: 
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => (
	<div {...props} className="c-card">
		{children}
	</div>
)

const CardBody = ({ children, ...props }: 
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element => (
	<div {...props} className="c-card__body">
		{children}
	</div>
)

export {
	Card,
	CardBody,
}