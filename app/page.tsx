"use client"

import UiLink from "@/componenets/UI KIT/UiLink/UiLink";
import css from "./page.module.css"

export default function Home() {
  return (
		<section className={css.home}>
			<div className={css.text_container}>
				<h1>Find your perfect rental car</h1>
				<p>Reliable and budget-friendly rentals for any journey</p>
			</div>
			
			<UiLink href="/catalog">View Catalog</UiLink>
    </section>
  );
}