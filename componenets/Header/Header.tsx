import Link from "next/link";
import css from "./Header.module.css"

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.container}>
				<Link href="/" aria-label="Home">
					<svg className={css.logo}>
						<use href="/logo.svg"></use>
					</svg>
				</Link>
				<nav>
					<ul className={css.nav_items}>
						<li className={css.nav_item}>
							<Link href="/">Home</Link>
						</li>
						<li className={css.nav_item}>
							<Link href="/catalog">Catalog</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
};

export default Header;