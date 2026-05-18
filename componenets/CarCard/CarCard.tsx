"use client"

import Image from "next/image";
import { BsHeart, BsHeartFill } from "react-icons/bs";

import { Location } from "@/types/car";

import css from "./CarCard.module.css"
import { useState } from "react";

type Props = {
	id: string;
	year: number;
	brand: string;
	model: string;
	type: string;
	img: string;
	rentalPrice: string;
	rentalCompany: string;
	location: Location;
	mileage: number;
}

const CarCard = ({
	id,
	year,
	brand,
	model,
	type,
	img,
	rentalPrice,
	rentalCompany,
	location,
	mileage
}: Props) => {
	const [isFilled, fillHeart] = useState<boolean>(false);

	return (
		<li className={css.container}>
			<div onClick={() => fillHeart(!isFilled)} className={css.icon_container}>
				{
					isFilled
						? <BsHeartFill fill="#3470FF" />
						: <BsHeart fill="white"/>
				}
			</div>
			<div className={css.image_container}>
				<Image
					className={css.image}
					src={img}
					width={276}
					height={268}
					alt="Preview"
				/>
			</div>
			<div className={css.name}>
				<h3>{brand} <span className={css.mark_name}>{model},</span> {year}</h3>
				<p>${rentalPrice}</p>
			</div>
			<div className={css.descr}>
				<p>
					<span>{location.city}</span>
					<span>{location.country}</span>
					<span>{rentalCompany}</span>
				</p>
				<p>
					<span>{type}</span>
					<span>{mileage} km</span>
				</p>
			</div>
			<a target="_blank" className={css.link} href={`/catalog/${id}`}>Read more</a>
		</li>
	);
};

export default CarCard;