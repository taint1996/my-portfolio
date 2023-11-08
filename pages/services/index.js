import {
	RxCrop,
	RxPencil2,
	RxDesktop,
	RxReader,
	RxRocket,
} from "react-icons/rx";

// service data
export const serviceData = [
	{
		icon: <RxCrop />,
		title: "Branding",
		description: "Ad qui cupidatat ex officia labore enim.",
	},
	{
		icon: <RxPencil2 />,
		title: "Branding",
		description: "Fugiat excepteur labore minim esse aute excepteur pariatur.",
	},
	{
		icon: <RxDesktop />,
		title: "Branding",
		description:
			"Quis irure culpa sit laborum dolore labore magna deserunt ut non id labore fugiat.",
	},
	{
		icon: <RxReader />,
		title: "Branding",
		description:
			"Elit culpa irure commodo exercitation anim do nostrud aliquip veniam amet.",
	},
	{
		icon: <RxRocket />,
		title: "Branding",
		description:
			"Qui pariatur ut id pariatur est tempor ipsum minim Lorem consequat nostrud.",
	},
];

// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
	return (
		<div className="h-full bg-primary/30 py-36 flex items-center">
			<Circles />
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-x-8">
					{/* text */}
					<div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
						<h2 className="h2 xl:mt-8">
							My services <span className="text-accent">.</span>
						</h2>
						<p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
							Cupidatat ex dolore incididunt eu Lorem adipisicing culpa deserunt
							sint excepteur. Mollit non tempor consectetur cillum ad duis
							tempor reprehenderit laborum officia fugiat cupidatat irure
							consequat.
						</p>
					</div>
					{/* slider */}
					<ServiceSlider />
				</div>
			</div>
			<Bulb />
		</div>
	);
};

export default Services;
