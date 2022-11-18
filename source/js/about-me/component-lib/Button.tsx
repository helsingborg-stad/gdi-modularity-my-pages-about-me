import React from 'react'

const Button = ({ children, ...props }: 
	React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
): JSX.Element => (
	<button
		className="c-button c-button__filled c-button__filled--primary c-button--md"
		type="submit"
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
