"use client"

import Button from "../UI KIT/Button/Button";
import css from "./Form.module.css"

const Form = () => {
	function handleSubmit(event: React.MouseEvent) {
		event.preventDefault();
	}

	return (
		<form className={css.form}>
			<input />
			<input />
			<textarea></textarea>
			<Button
				onClick={handleSubmit}
				isLarge={false}
			>
				Send
			</Button>
		</form>
	);
};

export default Form;