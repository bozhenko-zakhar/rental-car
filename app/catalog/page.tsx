"use client"

import SearchBlock from "@/componenets/SearchBlock/SearchBlock";
import css from "./page.module.css"

const CatalogPage = () => {
	return (
		<section className={css.catalog}>
			<div className={css.container}>
				<SearchBlock /> 
			</div>
		</section>
	)
};

export default CatalogPage;