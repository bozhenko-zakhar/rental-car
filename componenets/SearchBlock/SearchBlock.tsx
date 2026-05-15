"use client"

import { useId, useState } from "react";
import DropDown from "../UI KIT/DropDown/DropDown";
import css from "./SearchBlock.module.css"
import Button from "../UI KIT/Button/Button";

const brandOptions: string[] = [
	"Aston Martin",
	"Audi",
	"BMW",
	"Bentley",
	"Buick",
	"Chevrolet",
	"Chrysler",
	"GMC",
	"HUMMER"
];

const priceOptions: string[] = [
	"30",
	"40",
	"50",
	"60",
	"70",
	"80"
];

const SearchBlock = () => {
	const fieldId = useId();
	const [selectedBrand, setBrand] = useState<string>("");
	const [selectedPrice, setPrice] = useState<string>("");
	return (
		<form className={css.form}>
			
			<div className={css.input_box}>
				<label id={`${fieldId}-brand`}>Car brand</label>
				<DropDown
					options={brandOptions}
					selectId={fieldId}
					selectName="brand"
					selectedOption={selectedBrand ? selectedBrand : "Choose a brand"}
					setOption={setBrand}
				/>
			</div>

			<div className={css.input_box}>
				<label id={`${fieldId}-price`}>Price/ 1 hour</label>
				<DropDown
					options={priceOptions}
					selectId={fieldId}
					selectName="price"
					selectedOption={selectedPrice ? selectedPrice : "Choose a price"}
					setOption={setPrice}
				/>
			</div>

			<div className={css.input_box}>
				<label htmlFor={`${fieldId}-from`}>Сar mileage / km</label>
				<div>
					<input
						id={`${fieldId}-from`}
						className={`${css.input} ${css.input_right}`}
						placeholder="From"
					/>
					<input
						id={`${fieldId}-to`}
						className={`${css.input} ${css.input_left}`}
						placeholder="To"
					/>
				</div>
			</div>

			<Button isLarge={false}>Search</Button>
		</form>
	)
};

export default SearchBlock;