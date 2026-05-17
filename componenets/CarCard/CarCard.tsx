import Image from "next/image";
import css from "./CarCard.module.css"
import UiLink from "../UI KIT/UiLink/UiLink";


const CarCard = () => {
	return (
		<div className={css.container}>
			<div className={css.image_container}>
				<Image
					className={css.image}
					src="https://upload.wikimedia.org/wikipedia/commons/1/12/1925_Ford_Model_T_touring.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
					width={276}
					height={268}
					alt="Preview"
				/>
			</div>
			<div className={css.name}>
				<p>Buick <span className={css.mark_name}>Enclave,</span> 2008</p>
				<p>$50</p>
			</div>
			<div className={css.descr}>
				<p>
					<span>Kiev</span>
					<span>Ukraine</span>
					<span>Luxury Car Rentals</span>
				</p>
				<p>
					<span>Suv</span>
					<span>9 582 km</span>
				</p>
			</div>
			<UiLink href="/catalog/1">Read more</UiLink>
		</div>
	);
};

export default CarCard;