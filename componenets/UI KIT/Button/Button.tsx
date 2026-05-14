"use client"

import css from "./Button.module.css"

type Props = {
	isLarge?: boolean,
	leadMore?: boolean,
	children: React.ReactNode,
}

const Button = ({isLarge = true, leadMore = false, children}: Props) => {
	return (
		<button className={`${css.button} ${isLarge ? css.button_large : css.button_small} ${leadMore && css.loadmore}`}>
			{children}
		</button>
	)
}

export default Button;