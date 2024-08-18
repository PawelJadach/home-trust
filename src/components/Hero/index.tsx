import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="container flex gap-[40px] xl:gap-[95px] flex-col xl:flex-row items-center">
			<div className="space-y-5 xl:w-1/2">
				<h1>Kup, sprzedaj, wynajmij nieruchomość.</h1>
				<p>
					Razem z nami szybciej i prościej dokonasz <br />{" "}
					interesującej Cię transakcji.
				</p>
				<div className="flex flex-col xl:flex-row gap-4">
					<Button className="bg-secondary hover:bg-secondary/80">
						Poznaj ofertę
					</Button>
					<Button>Skontaktuj się</Button>
				</div>
			</div>
			<div className="xl:w-1/2">
				<Image
					width={680}
					height={474}
					src="/hero.png"
					alt="Big home"
					className="shadow-main rounded-xl"
				/>
			</div>
		</div>
	);
};

export default Hero;
