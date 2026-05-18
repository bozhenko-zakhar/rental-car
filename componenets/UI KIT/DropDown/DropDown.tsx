"use client"

import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import clsx from "clsx";
import css from "./DropDown.module.css";


type Props<T> = {
	options: T[]
	selectId: string
	selectName: string
	selectedOption: T | undefined
	setOption: (option: T) => void
}

// extends обмежує допустимі типи
const DropDown = <T extends string | number>({ options, selectId, selectName, selectedOption, setOption }: Props<T>) => {
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
		<>
			<div
				role="combobox"
				tabIndex={0}
				aria-labelledby={`${selectId}-${selectName}`}
				aria-expanded={isOpened}
				aria-controls={`${selectId}-${selectName}-list`}
				aria-activedescendant={String(selectedOption) ?? undefined}
				
				className={`${css.select} ${selectName === "price" ? css.second : css.first}`}
				onClick={() => setOpened(!isOpened)}
				onBlur={() => setOpened(false)}
				onKeyDown={handleSelectSwithing}
			>
				<p>
					{
						selectName === "price"
							? selectedOption
								? "To $" + selectedOption
								: "Choose a price"
							: selectedOption
								? selectedOption
								: "Choose a brand"
					}
				</p>
				{isOpened ? <BsChevronUp /> : <BsChevronDown />}
			</div>

			{isOpened &&
				<div className={`${css.scroll_fix} ${selectName === "price" ? css.second : css.first}`}>
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
								className={clsx(selectedOption === option && css.choise_made)}
								onMouseDown={() => {
									setOption(option);
									setActiveIndex(options.indexOf(option) + 1)
									setOpened(false)
								}}
							>{option}</li>
						))
					}
				</ul>
			</div>
			}
		</>
	)
};

export default DropDown;