import React from 'react'


interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	color?: 'default' | 'primary' | 'secondary'
	variant?: 'filled' | 'basic' | 'outline'
	size?: 'sm' | 'md' | 'lg'
	disabled?: boolean
}

const propsToClassNamesMap = {
	size: {
		sm: 'c-button--sm',
		md: 'c-button--md',
		lg: 'c-button--lg',
	},
	variant: {
		filled: 'c-button__filled',
		basic: 'c-button__basic',
		outline: 'c-button__outline',
	},
	color: {
		primary: '--primary',
		secondary: '--secondary',
		default: '--default',
	},
	disabled: 'is-disabled',
}

const Button = ({ 
	className, 
	children, 
	onClick, 
	color = 'default', 
	size = 'md', 
	variant = 'filled', 
	...props 
}: Props ): JSX.Element => (
	<button
		className={[
			'c-button',
			propsToClassNamesMap.size[size],
			propsToClassNamesMap.variant[variant],
			propsToClassNamesMap.variant[variant]+propsToClassNamesMap.color[color],
			...className ? [className] : [],
		].join(' ')}
		onClick={(e) => {
			e.preventDefault()
			return onClick ? onClick(e) : null
		}}
		{...props}
	>
		<span className="c-button__label">
			<span className="c-button__label-text">
				{ children }
			</span>
		</span>
	</button>
)

export {
	Button,
}
