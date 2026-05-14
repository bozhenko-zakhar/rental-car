"use client"

import Button from "@/componenets/UI KIT/Button/Button";
import css from "./page.module.css"

export default function Home() {
  return (
		<section className={css.home}>
			<div className={css.text_container}>
				<h1>Find your perfect rental car</h1>
				<p>Reliable and budget-friendly rentals for any journey</p>
			</div>
			
			<Button>View Catalog</Button>
    </section>
  );
}