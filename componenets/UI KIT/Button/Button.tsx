"use client"

import css from "./Button.module.css"

type Props = {
	children: React.ReactNode,
	type?: "submit" | "button" | "reset" | undefined,
	onClick?: (event: React.MouseEvent) => void,
	disabled?: boolean,
	isLarge?: boolean,
	leadMore?: boolean,
}

const Button = ({
	type = "submit",
	onClick = (e) => e.preventDefault(),
	isLarge = true,
	leadMore = false,
	children
}: Props) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`${css.button} ${isLarge ? css.button_large : css.button_small} ${leadMore && css.loadmore}`}>
			{children}
		</button>
	)
}

export default Button;