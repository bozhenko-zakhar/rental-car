import Image from "next/image";
import css from "./CarCard.module.css"
import UiLink from "../UI KIT/UiLink/UiLink";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Location } from "@/types/car";

type Props = {
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
	return (
		<li className={css.container}>
			<div className={css.icon_container}>
				<BsHeart fill="white"/>
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
			<UiLink href="/catalog/1">Read more</UiLink>
		</li>
	);
};

export default CarCard;