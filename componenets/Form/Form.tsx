"use client"

import { useState } from "react";
import { QueryClient, useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast'

import Button from "../UI KIT/Button/Button";

import { bookRequest, BookRequestResponse } from "@/lib/api/clientApi";

import css from "./Form.module.css"
import { useDraftStore } from "@/lib/store/offerStore";
import { NewOffer } from "@/types/offer";

type Props = {
	carId: string;
}

const Form = ({ carId }: Props) => {
	const { draft, setDraft, clearDraft } = useDraftStore();

	const { mutate, isPending } = useMutation({
		mutationFn: async (newOffer: NewOffer): Promise<BookRequestResponse> => {
			const createdNote = bookRequest({
				carId: carId,
				name: newOffer.name,
				email: newOffer.email,
				comment: newOffer.comment
			});
			return createdNote;
		},
		onSuccess: (response: BookRequestResponse) => {
			clearDraft();
		
			toast.success(response.message);
		},
		onError: (error) => {
			toast.error(`${error.message}`);
		}
	});

	function handleChange(event: React.ChangeEvent<
		HTMLInputElement | HTMLTextAreaElement
	>) {
		setDraft({
			...draft,
			[event.target.name]: event.target.value
		})
	}

	async function handleSubmit(event: React.MouseEvent) {
		event.preventDefault();

		if (draft.name.trim() && draft.email.trim() && draft.comment.trim()) {
			mutate({
				name: draft.name,
				email: draft.email,
				comment: draft.comment
			});
		} else {
			toast.error("Every field must be filled in");
		}
	}

	return (
		<form className={css.form}>
			<input
				className={css.input}
				onChange={handleChange}
				value={draft.name}
				type="text"
				name="name"
				placeholder="Name*"
			/>
			<input
				className={css.input}
				onChange={handleChange}
				value={draft.email}
				type="email"
				name="email"
				placeholder="Email*"
			/>
			<div className={css.scroll_fix}>
				<textarea 
				 	className={css.textarea} 
					onChange={handleChange}
					value={draft.comment}
					name="comment" 
					placeholder="Comment"
				></textarea>
			</div>
			<Button
				onClick={handleSubmit}
				isLarge={false}
			>
				{isPending 
					? 'Sending...'
					: 'Send'
				}
			</Button>
		</form>
	);
};

export default Form;