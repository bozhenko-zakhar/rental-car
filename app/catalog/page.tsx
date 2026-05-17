"use client"

import SearchBlock from "@/componenets/SearchBlock/SearchBlock";
import css from "./page.module.css"
import CarCard from "@/componenets/CarCard/CarCard";
import Button from "@/componenets/UI KIT/Button/Button";

const CatalogPage = () => {
	return (
		<section className={css.catalog}>
			<div className={css.container}>
				<SearchBlock /> 

				<ul className={css.cards_container}>
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
					<CarCard />
				</ul>

				<div className={css.loadmore}>
					<Button isLarge={false} leadMore={true}>Load more</Button>
				</div>
			</div>
		</section>
	)
};

export default CatalogPage;