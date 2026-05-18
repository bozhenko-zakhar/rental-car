import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

import CatalogPageClient from "./page.client";

import { fetchCarById } from "@/lib/api/clientApi";

type Props = {
	params: Promise<{carId: string}>
}
export async function generateMetadata({params}: Props): Promise<Metadata> {
	const { carId } = await params;
	const currentCar = await fetchCarById({id: carId});

	return {
		title: `${currentCar.brand} ${currentCar.model} ${currentCar.year}`
	}
}


const CarDetailsPage = async ({ params }: Props) => {
	const { carId } = await params;

	const queryClient = new QueryClient();
	queryClient.prefetchQuery({
		queryKey: ['car', carId],
		queryFn: () => fetchCarById({id: carId})
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<CatalogPageClient />
		</HydrationBoundary>
	)
};

export default CarDetailsPage;