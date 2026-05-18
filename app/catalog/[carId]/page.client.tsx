"use client"

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { BsCalendar2Week, BsCarFront, BsFuelPump, BsGear, BsCheckCircle } from "react-icons/bs";
import { PiMapPinThin } from "react-icons/pi";
import Image from "next/image";

import Form from "@/componenets/Form/Form";

import { fetchCarById } from "@/lib/api/clientApi";

import css from "./page.client.module.css"

const CarDetailsClientPage = () => {
	const { carId } = useParams<{carId: string}>();

	const { data: car, isError, isLoading, isFetched } = useQuery({
		queryKey: ['car', carId],
		queryFn: () => fetchCarById({id: carId}),
		placeholderData: keepPreviousData,
		refetchOnMount: false,
	});
	

	return (
		<div className={css.container}>
			<div className={css.left_side}>
				<div className={css.image_container}>
					<Image
						className={css.image}
						src={car?.img || "/default-car.png"}
						width={640}
						height={512}
						alt="Preview"
					/>
				</div>
				
				<div className={css.form_container}>
					<h3>Book your car now</h3>
					<p>Stay connected! We are always ready to help you.</p>
					
					<Form carId={carId} />
				</div>
			</div>
			<div className={css.right_side}>
				<div className={css.details}>
					<div className={css.title}>
						<h2>{car?.brand} {car?.model}, {car?.year}</h2>
						<p>Id: {car?.stockNumber}</p>
					</div>
					<div className={css.state}>
						<p>
							<PiMapPinThin className={css.icon} />
							{car?.location.city}, {car?.location.country}
						</p>
						<p>Mileage: {car?.mileage} km</p>
					</div>
					<p className={css.price}>{car?.rentalPrice}$</p>
					<p className={css.descr}>{car?.description}</p>
				</div>

				<div className={css.car_info}>
					<div>
						<h3>Rental Conditions:</h3>
						<ul>
						{
						car?.rentalConditions?.map(condition => (
							<li key={condition}>
								<BsCheckCircle className={css.icon} /> 
								{condition}
							</li>
						))
						}
						</ul>
					</div>
					
					<div>
						<h3>Car Specifications:</h3>
						<ul>
							<li>
								<BsCalendar2Week className={css.icon} />
								Year: {car?.year}
							</li>
							<li>
								<BsCarFront className={css.icon} />
								Type: {car?.type}
							</li>
							<li>
								<BsFuelPump className={css.icon} />
								Fuel Consumption: {car?.fuelConsumption}
							</li>
							<li>
								<BsGear className={css.icon} />
								Engine Size: {car?.engine}
							</li>
						</ul>
					</div>
					
					<div>
						<h3>Accessories and functionalities:</h3>
						<ul>
						{
						car?.features?.map(feature => (
							<li key={feature}>
								<BsCheckCircle className={css.icon} /> 
								{feature}
							</li>
						))
						}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
};

export default CarDetailsClientPage;