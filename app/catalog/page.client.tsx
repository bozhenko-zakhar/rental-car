"use client"

import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

import SearchBlock from "@/componenets/SearchBlock/SearchBlock";
import Button from "@/componenets/UI KIT/Button/Button";
import CarCard from "@/componenets/CarCard/CarCard";

import { fetchCars } from "@/lib/api/clientApi";

import css from "./page.client.module.css"

const CatalogPageClient = () => {
	const [selectedBrand, setBrand] = useState<string | undefined>(undefined);
	const [selectedPrice, setPrice] = useState<number | undefined>(undefined);
	const [miliageFrom, setMiliageFrom] = useState<number | undefined>(undefined);
	const [miliageTo, setMiliageTo] = useState<number | undefined>(undefined);

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isError,
		isLoading,
		isFetched,
	} = useInfiniteQuery({
		queryKey: [
			'cars',
			selectedBrand,
			selectedPrice,
			miliageFrom,
			miliageTo
		],
		queryFn: ({ pageParam }) => {
			return fetchCars({
				brand: selectedBrand === "All" ? undefined : selectedBrand,
				price: selectedPrice,
				minMileage: miliageFrom,
				maxMileage: miliageTo,
				page: pageParam
			});
		},
		initialPageParam: 1,
		getNextPageParam: (lastResponse) => {
			const nextPage = lastResponse.page + 1;
			return nextPage < (lastResponse.totalPages + 1) ? nextPage : undefined;
		},
		select: (data) => {
			return {
			...data,
			cars: data.pages.flatMap((page) => page.cars),
			};
		},
	});

	const cars = data?.cars ?? [];
	const hasCars = cars.length > 0;
	const showNoResults = isFetched && !isError && !hasCars;

	return (
		<section className={css.catalog}>
			<div className={css.container}>
				<SearchBlock
					brand={selectedBrand}
					setBrand={setBrand}
					price={selectedPrice}
					setPrice={setPrice}
					minMileage={miliageFrom}
					setMinMileage={setMiliageFrom}
					maxMileage={miliageTo}
					setMaxMileage={setMiliageTo}
				/> 

				{isLoading && <p className={css.alert}>Loading data, please wait...</p>}
				{isError && <p className={css.alert}>Whoops, something went wrong! Please try again!</p>}
				{showNoResults && <p className={css.alert}>No cars found. Try another search.</p>}
				{hasCars && (
				<>
					<ul className={css.cards_container}>
					{
					data?.cars.map(car => (
						<CarCard
							key={car.id}
							id={car.id}
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
						<Button
							onClick={() => fetchNextPage()}
							isLarge={false}
							leadMore={true}
						>
							{isFetchingNextPage
							? 'Loading more...'
							: hasNextPage
							? 'Load more'
							: 'Nothing more to load'}
						</Button>
					</div>
				</>
			)}

			</div>
		</section>
	)
};

export default CatalogPageClient;