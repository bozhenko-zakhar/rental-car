import Image from "next/image";
import { BsCalendar2Week, BsCarFront, BsFuelPump, BsGear, BsCheckCircle } from "react-icons/bs";
import { PiMapPinThin } from "react-icons/pi";

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
					<h3>Book your car now</h3>
					<p>Stay connected! We are always ready to help you.</p>
					
					<Form />
				</div>
			</div>
			<div className={css.right_side}>
				<div className={css.details}>
					<div className={css.title}>
						<h2>Buick Enclave, 2008</h2>
						<p>Id: 9582</p>
					</div>
					<div className={css.state}>
						<p>
							<PiMapPinThin className={css.icon} />
							Kyiv, Ukraine
						</p>
						<p>Mileage: 5 858 km</p>
					</div>
					<p className={css.price}>40$</p>
					<p className={css.descr}>The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.</p>
				</div>

				<div className={css.car_info}>
					<div>
						<h3>Rental Conditions:</h3>
						<ul>
							<li>
								<BsCheckCircle className={css.icon} />
								Minimum age : 25
							</li>
							<li>
								<BsCheckCircle className={css.icon} />
								Security deposite required
							</li>
							<li>
								<BsCheckCircle className={css.icon} /> 
								Valid driver’s license
							</li>
						</ul>
					</div>
					
					<div>
						<h3>Car Specifications:</h3>
						<ul>
							<li>
								<BsCalendar2Week className={css.icon} />
								Year: 2008
							</li>
							<li>
								<BsCarFront className={css.icon} />
								Type: Suv
							</li>
							<li>
								<BsFuelPump className={css.icon} />
								Fuel Consumption: 10.5
							</li>
							<li>
								<BsGear className={css.icon} />
								Engine Size: 3.6L V6
							</li>
						</ul>
					</div>
					
					<div>
						<h3>Accessories and functionalities:</h3>
						<ul>
							<li>
								<BsCheckCircle className={css.icon} /> 
								Leather seats
							</li>
							<li>
								<BsCheckCircle className={css.icon} /> 
								Panoramic sunroof
							</li>
							<li>
								<BsCheckCircle className={css.icon} /> 
								Remote start
							</li>
							<li>
								<BsCheckCircle className={css.icon} /> 
								Blind-spot monitoring
							</li>
							<li>
								<BsCheckCircle className={css.icon} /> 
								Power liftgate
							</li>
							<li>
								<BsCheckCircle className={css.icon} /> 
								Premium audio system
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
};

export default CarDetailsPage;