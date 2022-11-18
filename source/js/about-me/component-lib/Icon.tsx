import React from 'react'

export interface IconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	name: string,
}

export const Icon = ({ name, style, ...props }: IconProps): JSX.Element => (
	<i
		className="c-icon c-icon--size-xxl material-icons"
		translate="no"
		style={{
			color: 'var(--color-complementary, #f0dbd9)',
			width: '48px',
			userSelect: 'none',
			...style,
		}}
		{...props}
	>{name}</i>
)