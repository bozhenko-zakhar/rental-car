"use client"

import Link from "next/link";
import css from "./UiLink.module.css"

type Props = {
	children: React.ReactNode,
	href: string,
	isLarge?: boolean,
}

const UiLink = ({
	children,
	href,
	isLarge = true,
}: Props) => {
	return (
		<Link
			href={href}
			className={`${css.link} ${isLarge ? css.link_large : css.link_small}`}>
			{children}
		</Link>
	)
}

export default UiLink;