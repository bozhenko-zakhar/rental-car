import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import CatalogPageClient from "./page.client";

import { fetchCars } from "@/lib/api/clientApi";

const CatalogPage = async () => {
	const queryClient = new QueryClient();

	queryClient.prefetchQuery({
		queryKey: ['cars'],
		queryFn: () => fetchCars({})
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<CatalogPageClient />
		</HydrationBoundary>
	)
};

export default CatalogPage;