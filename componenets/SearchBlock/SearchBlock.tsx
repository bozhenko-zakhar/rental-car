"use client"

import { useState } from "react";
import DropDown from "../UI KIT/DropDown/DropDown";
import css from "./SearchBlock.module.css"

const SearchBlock = () => {
	const [selectedOption, setOption] = useState<string>("")
	return (
		<form className={css.form}>
			
			<DropDown selectedOption={selectedOption ? selectedOption : "Choose a brand"} setOption={setOption} />

			<label> Сar mileage / km
				<div>
					<input className={css.input} />
					<input className={css.input} />	
				</div>
			</label>
		</form>
	)
};

export default SearchBlock;