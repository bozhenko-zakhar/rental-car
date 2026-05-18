import Link from "next/link";

import Navigation from "../Navigation/Navigation";

import css from "./Header.module.css";

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.container}>
				<Link href="/" aria-label="Home">
					<svg className={css.logo}>
						<use href="/logo.svg"></use>
					</svg>
				</Link>

				<Navigation />
			</div>
		</header>
	);
};

export default Header;