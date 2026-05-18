import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

import CatalogPageClient from "./page.client";

import { fetchCars } from "@/lib/api/clientApi";

export async function generateMetadata(): Promise<Metadata> {

	return {
		title: "Cars Catalog"
	}
}

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