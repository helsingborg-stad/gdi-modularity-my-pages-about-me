import React from 'react'


interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	disabled?: boolean
}

const Button = ({ className, children, onClick, ...props }: Props ): JSX.Element => (
	<button
		className={[
			'c-button',
			'c-button--md',
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
