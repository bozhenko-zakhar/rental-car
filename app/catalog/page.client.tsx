"use client"

import SearchBlock from "@/componenets/SearchBlock/SearchBlock";
import css from "./page.client.module.css"
import Button from "@/componenets/UI KIT/Button/Button";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchCars } from "@/lib/clientApi";
import CarCard from "@/componenets/CarCard/CarCard";

const CatalogPageClient = () => {
	const { data } = useQuery({
		queryKey: ['cars'],
		queryFn: () => fetchCars({}),
		placeholderData: keepPreviousData,
		refetchOnMount: false,
	});

	console.log(data?.cars)
	
	return (
		<section className={css.catalog}>
			<div className={css.container}>
				<SearchBlock /> 

				<ul className={css.cards_container}>
					{
						data?.cars.map(car => (
							<CarCard
								key={car.id}
								year={car.year}
								brand={car.brand}
								model={car.model}
								type={car.type}
								img={car.img}
								rentalPrice={car.rentalPrice}
								rentalCompany={car.rentalCompany}
								location={car.location}
								mileage={car.mileage}
							/>
						))
					}
				</ul>

				<div className={css.loadmore}>
					<Button isLarge={false} leadMore={true}>Load more</Button>
				</div>
			</div>
		</section>
	)
};

export default CatalogPageClient;