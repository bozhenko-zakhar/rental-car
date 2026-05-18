"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
	const pathname = usePathname();

	return (
		<nav>
			<ul className={css.nav_items}>
				<li className={clsx(css.nav_item, {[css.active]: pathname==="/"})}>
					<Link href="/">Home</Link>
				</li>
				<li className={clsx(css.nav_item, {[css.active]: pathname.startsWith ("/catalog")})}> 
					<Link href="/catalog">
						Catalog
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;