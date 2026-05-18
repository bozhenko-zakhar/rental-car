"use client"

import css from "./page.module.css"
import Link from "next/link";

export default function Home() {
  return (
		<section className={css.home}>
			<div className={css.text_container}>
				<h1>Find your perfect rental car</h1>
				<p>Reliable and budget-friendly rentals for any journey</p>
			</div>
			
			<Link
				href="/catalog"
				className={css.link}>
				View Catalog
			</Link >
    </section>
  );
}