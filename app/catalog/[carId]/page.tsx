type Props = {
	params: Promise<{carId: string}>
}

const CarDetailsPage = async ({ params }: Props) => {
	const { carId } = await params;

	return (
		<div>
			<strong>{carId}</strong>
		</div>
	)
};

export default CarDetailsPage;