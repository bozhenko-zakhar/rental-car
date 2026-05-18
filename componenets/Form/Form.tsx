"use client"

import Button from "../UI KIT/Button/Button";
import css from "./Form.module.css"

const Form = () => {
	function handleSubmit(event: React.MouseEvent) {
		event.preventDefault();
	}

	return (
		<form className={css.form}>
			<input className={css.input} placeholder="Name*" />
			<input className={css.input} placeholder="Email*" />
			<div className={css.scroll_fix}>
				<textarea className={css.textarea} placeholder="Comment"></textarea>
			</div>
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