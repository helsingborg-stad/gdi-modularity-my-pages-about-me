import React from 'react'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	name: string,
}

export const Icon = ({ name, style, ...props }: Props): JSX.Element => (
	<i
		className="c-icon c-icon--size-xl material-icons"
		translate="no"
		style={{
			color: 'var(--color-complementary, #f0dbd9)',
			userSelect: 'none',
			...style,
		}}
		{...props}
	>{name}</i>
)