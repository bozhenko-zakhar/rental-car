"use client"

import SearchBlock from "@/componenets/SearchBlock/SearchBlock";
import css from "./page.client.module.css"
import Button from "@/componenets/UI KIT/Button/Button";
import { keepPreviousData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { fetchCars } from "@/lib/clientApi";
import CarCard from "@/componenets/CarCard/CarCard";

const CatalogPageClient = () => {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		isError,
		isLoading,
		isFetched,
	} = useInfiniteQuery({
		queryKey: ['cars'],
		queryFn: ({ pageParam }) => {
			return fetchCars({page: pageParam});
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
				<SearchBlock /> 

				{isLoading && <p>Loading data, please wait...</p>}
				{isError && <p>Whoops, something went wrong! Please try again!</p>}
				{showNoResults && <p>No articles found. Try another search.</p>}
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
							disabled={!hasNextPage || isFetching}
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