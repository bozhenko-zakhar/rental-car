import { Car } from "@/types/car";
import { nextServer } from "./api";

type FetchCarsParams = {
	brand?: string;
	price?: number;
	minMileage?: number;
	maxMileage?: number;
	perPage?: number;
	page?: number;
}

type FetchCarsResponse = {
	cars: Car[];
	totalCars: number;
	page: number;
	totalPages: number;
}

export async function fetchCars({ ...params }: FetchCarsParams): Promise<FetchCarsResponse> {
	// це воно для того, щоби передати тільки ті параметри, які є в аргументах
	const filteredParams = Object.fromEntries(
		Object.entries(params).filter(([, value]) => value !== undefined)
	);

	const response = await nextServer.get("/cars", {
		params: filteredParams
	});

	return response.data;
}