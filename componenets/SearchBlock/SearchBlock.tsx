"use client"

import { useId, useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import DropDown from "../UI KIT/DropDown/DropDown";
import Button from "../UI KIT/Button/Button";

import css from "./SearchBlock.module.css"

import { fetchFilters } from "@/lib/api/clientApi";

type Props = {
	brand: string | undefined,
	setBrand: (brand: string | undefined) => void,
	price: number | undefined,
	setPrice: (price: number | undefined) => void,
	minMileage: number | undefined,
	setMinMileage: (mileage: number | undefined) => void,
	maxMileage: number | undefined,
	setMaxMileage: (mileage: number | undefined) => void,
}

const SearchBlock = (props: Props) => {
	const fieldId = useId();
	const [tempBrand, setTempBrand] = useState<string | undefined>(undefined);
	const [tempPrice, setTempPrice] = useState<number | undefined>(undefined);
	const [tempMinMileage, setTempMinMileage] = useState<string>("");
	const [tempMaxMileage, setTempMaxMileage] = useState<string>("");

	const { data } = useQuery({
		queryKey: ['filters'],
		queryFn: fetchFilters,
		placeholderData: keepPreviousData,
		refetchOnMount: false,
	});

	const brandOptions: string[] = data?.brands ? ["All", ...data?.brands] : [];
	const priceOptions: number[] = data?.price
		// сучасний React/TS
    ? Array.from(
				{ // встановлення довжини масиву наперед
					length: Math.floor((data.price.max - data.price.min) / 10) + 1,
				},
				// заповнення кожного наступного місця масиву
				(_, index) => data.price.min + index * 10
      )
		: [];
	
	function handleChange(e: React.ChangeEvent<HTMLInputElement>, fieldName: string) {
    const rawValue = e.target.value.replace(/,/g, "");

    if (!rawValue) {
			if (fieldName === "min") setTempMinMileage("");
			else setTempMaxMileage("");
      return;
    }

    const numbersOnly = rawValue.replace(/\D/g, "");
    const numberValue = Number(numbersOnly);
    const formatted = numberValue.toLocaleString("en-US");

		if (fieldName === "min") {
			setTempMinMileage(formatted);
		} else {
			setTempMaxMileage(formatted);
		}
  }
	
	function handleSubmit(event: React.MouseEvent) {
		event.preventDefault();
		
		props.setBrand(tempBrand);
		props.setPrice(tempPrice);
		props.setMinMileage(Number(tempMinMileage.replace(/,/g, "")) || undefined);
		props.setMaxMileage(Number(tempMaxMileage.replace(/,/g, "")) || undefined);
	}

	return (
		<form className={css.form}>
			
			<div className={css.input_box}>
				<label id={`${fieldId}-brand`}>Car brand</label>
				<DropDown
					options={brandOptions}
					selectId={fieldId}
					selectName="brand"
					selectedOption={tempBrand}
					setOption={setTempBrand}
				/>
			</div>

			<div className={css.input_box}>
				<label id={`${fieldId}-price`}>Price/ 1 hour</label>
				<DropDown
					options={priceOptions}
					selectId={fieldId}
					selectName="price"
					selectedOption={tempPrice}
					setOption={setTempPrice}
				/>
			</div>

			<div className={css.input_box}>
				<label htmlFor={`${fieldId}-from`}>Сar mileage / km</label>
				<div>
					<div className={`${css.input_wrapper} ${css.from}`}>

						<input
							id={`${fieldId}-from`}
							onChange={(e) => handleChange(e, "min")}
							value={tempMinMileage ?? ""}
							className={`${css.input} ${css.input_right}`}
						/>
					</div>
					<div className={`${css.input_wrapper} ${css.to}`}>
						<input
							id={`${fieldId}-to`}
							onChange={(e) => handleChange(e, "max")}
							value={tempMaxMileage ?? ""}
							className={`${css.input} ${css.input_left}`}
						/>
					</div>
				</div>
			</div>

			<Button onClick={handleSubmit} isLarge={false}>Search</Button>
		</form>
	)
};

export default SearchBlock;