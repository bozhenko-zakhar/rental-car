"use client"

import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import clsx from "clsx";
import css from "./DropDown.module.css";

const options = [
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

type Props = {
	selectedOption: string
	setOption: (option: string) => void
}

const DropDown = ({ selectedOption, setOption }: Props) => {
	const [isOpened, setOpened] = useState<boolean>(false);

	return (
		<div>
			<div onClick={() => setOpened(!isOpened)} className={css.select}>
				<p>{selectedOption}</p>
				{isOpened ? <BsChevronUp /> : <BsChevronDown />}
			</div>

			{ isOpened &&
			<div className={css.scroll_fix}>
				<ul className={css.menu}>
					<div className={css.scroll_bar}>
						{
							options.map(option => (
								<li
									key={option}
									onClick={() => {
										setOption(option);
										setOpened(false);
									}}
									className={clsx(selectedOption === option && css.choise_made)}
								>{option}</li>
							))
						}
					</div>
				</ul>
			</div>
			}
		</div>
	)
};

export default DropDown;