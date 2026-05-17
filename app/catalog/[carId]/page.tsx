import Image from "next/image";

import css from "./page.module.css"
import Form from "@/componenets/Form/Form";

type Props = {
	params: Promise<{carId: string}>
}

const CarDetailsPage = async ({ params }: Props) => {
	const { carId } = await params;

	return (
		<div className={css.container}>
			<div className={css.left_side}>
				<div className={css.image_container}>
					<Image
						className={css.image}
						src="https://upload.wikimedia.org/wikipedia/commons/1/12/1925_Ford_Model_T_touring.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
						width={640}
						height={512}
						alt="Preview"
					/>
				</div>
				
				<div className={css.form_container}>
					<h2>Book your car now</h2>
					<p>Stay connected! We are always ready to help you.</p>
					
					<Form />
				</div>
			</div>
			<div className={css.right_side}>
				
			</div>
		</div>
	)
};

export default CarDetailsPage;