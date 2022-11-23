/* eslint-disable no-undef */
import React from 'react'

type TypographyVariants = 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'caption'|'meta';

type TypographyElements = 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'p'|'span'|'small';

const VariantToElementMap : Record<TypographyVariants, TypographyElements>  = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	h5: 'h5',
	h6: 'h6',
	p: 'p',
	caption: 'span',
	meta: 'span',
}

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	variant?: TypographyVariants,
	element?: TypographyElements,
}

const Typography = ({ 
	children, 
	element, 
	variant = 'p', 
	className,
	...props 
} : Props): JSX.Element => {

	const Element = element ?? VariantToElementMap[variant]

	return (
		<Element 
			{...props} 
			className={[
				'c-typography',
				`c-typography__variant--${variant}`,
				...className ? [className] : [],
			].join(' ')}
		>
			{children}
		</Element>
	)
}

export {
	Typography,
}