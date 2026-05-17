"use client"

import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import clsx from "clsx";
import css from "./DropDown.module.css";


type Props = {
	options: string[]
	selectId: string
	selectName: string
	selectedOption: string
	setOption: (option: string) => void
}

const DropDown = ({ options, selectId, selectName, selectedOption, setOption }: Props) => {
	const [isOpened, setOpened] = useState<boolean>(false);
	const [activeIndex, setActiveIndex] = useState(0);

	function handleSelectSwithing(event: React.KeyboardEvent) {
		if (event.key === "ArrowDown") {
			if (activeIndex === options.length) return
			else if (activeIndex !== 0) {
				setOption(options[activeIndex]);
				setActiveIndex(activeIndex + 1);
				return
			} 

			setOption(options[activeIndex]);
			setActiveIndex(activeIndex + 1);
		} else if (event.key === "ArrowUp") {
			if (activeIndex - 1 === 0) return
			
			setActiveIndex(activeIndex - 1);
			setOption(options[activeIndex - 2])
		} else if (event.key === "Enter" || event.key === " ") {
			setOption(options[activeIndex-1]);
			setOpened(!isOpened)
		} else setOpened(false)
	}

	return (
		<div>
			<div
				role="combobox"
				tabIndex={0}
				aria-labelledby={`${selectId}-${selectName}`}
				aria-expanded={isOpened}
				aria-controls={`${selectId}-${selectName}-list`}
				aria-activedescendant={selectedOption ?? undefined}
				
				onClick={() => setOpened(!isOpened)}
				className={`${css.select} ${selectName === "price" ? css.second : css.first}`}
				onKeyDown={handleSelectSwithing}
			>
				<p>{selectedOption}</p>
				{isOpened ? <BsChevronUp /> : <BsChevronDown />}
			</div>

			{isOpened &&
			<div className={css.scroll_fix}>
				<ul
					role="listbox"
					id={`${selectId}-${selectName}-list`}
					className={css.menu}
				>
					{
						options.map(option => (
							<li
								key={option}
								id={`${selectId}-option-${option}`}
								role="option"
								aria-selected={selectedOption === option}
								onClick={() => {
									setOption(option);
									setActiveIndex(options.indexOf(option) + 1)
									setOpened(false);
								}}
								className={clsx(selectedOption === option && css.choise_made)}
							>{option}</li>
						))
					}
				</ul>
			</div>
			}
		</div>
	)
};

export default DropDown;