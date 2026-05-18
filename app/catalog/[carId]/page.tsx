import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import CatalogPageClient from "./page.client";

import { fetchCarById } from "@/lib/clientApi";

type Props = {
	params: Promise<{carId: string}>
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