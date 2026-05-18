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

type fetchCarByIdParams = {
	id: string;
}

type fetchFiltersResponse = {
	brands: string[];
	price: {
		min: number;
		max: number;
	}
}

type BookRequestParams = {
	carId: string;
	name: string;
	email: string;
	comment: string;
}

export type BookRequestResponse = {
	message: string
}

export async function fetchCars({ ...params }: FetchCarsParams): Promise<FetchCarsResponse> {
	// це воно для того, щоби передати тільки ті параметри, які є в аргументах
	const filteredParams = Object.fromEntries(
		Object.entries(params).filter(([, value]) => value !== undefined)
	);

	const response = await nextServer.get<FetchCarsResponse>("/cars", {
		params: filteredParams
	});

	return response.data;
}

export async function fetchCarById({ id }: fetchCarByIdParams): Promise<Car> {
	const response = await nextServer.get<Car>(`/cars/${id}`, {
		params: {
			id: id
		}
	});

	return response.data;
}

export async function fetchFilters(): Promise<fetchFiltersResponse> {
	const response = await nextServer.get<fetchFiltersResponse>("/cars/filters");

	return response.data;
}

export async function bookRequest({carId, name, email, comment}: BookRequestParams): Promise<BookRequestResponse> {
	const response = await nextServer.post<BookRequestResponse>(`/cars/${carId}/booking-requests`, {
		name: name,
		email: email,
		comment: comment
	});

	return response.data;
}