import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const About = () => {
	return (
		<div className="w-full bg-primary py-[96px] mt-[96px]">
			<div className="container flex gap-[40px] xl:gap-[95px] flex-col xl:flex-row items-center">
				<div className="xl:w-1/2">
					<Image
						width={596}
						height={489}
						src="/about.png"
						alt="Home from top"
						className="shadow-main rounded-xl"
					/>
				</div>
				<div className="space-y-5 xl:w-1/2">
					<h2 className="text-light">
						Nowoczesne podejście do rynku nieruchomości
					</h2>
					<div className="w-[120px] h-[6px] bg-secondary rounded-xl" />
					<p className="text-light">
						Szukasz nieruchomości do celów prywatnych? Sprzedajesz
						dom, mieszkanie lub grunty? Potrzebujesz lokalu
						komercyjnego pod własną działalność? A może jesteś
						inwestorem, który chciałby poszerzyć swoje portfolio?{" "}
						<b>Porozmawiaj z nami – pomożemy!</b>
					</p>
					<p className="text-light">
						<b>
							Jesteśmy specjalistami z wieloletnim doświadczeniem
						</b>{" "}
						a wrocławski rynek nieruchomości znamy od podszewki.
						Przeprowadzamy nawet najbardziej skomplikowane
						transakcje tak abyście czuli się pewnie i bezpiecznie.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
