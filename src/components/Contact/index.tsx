"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useState } from "react";
import { ClockIcon, PhoneIcon, PlaceIcon } from "../ui/Icons";

const Contact = () => {
	const [item, setItem] = useState(1);

	const handleClick = (item: number) => {
		setItem(item);
	};

	const data = [
		{
			id: 1,
			title: "Pośrednictwo nieruchomości",
			content:
				"1 Lorem ipsum dolor sit amet consectetur. In sit ultricies in diam vestibulum tristique. Bibendum fermentum augue vestibulum sit odio adipiscing nisl turpis. Accumsan ultrices donec mi eu. Posuere sed eu bibendum metus nunc dictum vestibulum tempus ipsum.",
		},
		{
			id: 2,
			title: "Home staging",
			content:
				"2 Lorem ipsum dolor sit amet consectetur. In sit ultricies in diam vestibulum tristique. Bibendum fermentum augue vestibulum sit odio adipiscing nisl turpis. Accumsan ultrices donec mi eu. Posuere sed eu bibendum metus nunc dictum vestibulum tempus ipsum.",
		},
		{
			id: 3,
			title: "Kredyty hipoteczne",
			content:
				"3 Lorem ipsum dolor sit amet consectetur. In sit ultricies in diam vestibulum tristique. Bibendum fermentum augue vestibulum sit odio adipiscing nisl turpis. Accumsan ultrices donec mi eu. Posuere sed eu bibendum metus nunc dictum vestibulum tempus ipsum.",
		},
	];

	return (
		<div className="w-full bg-dark py-[96px] mt-24" id="contact">
			<div className="container flex items-center flex-col gap-4">
				<h2 className="text-light" data-aos="fade-right">
					Kontakt
				</h2>
				<div
					className="w-[170px] h-[6px] bg-primary rounded-xl"
					data-aos="fade-right"
					data-aos-delay="200"
				/>
				<p
					className="text-light"
					data-aos="fade-right"
					data-aos-delay="400"
				>
					Odpowiemy tak szybko jak to możliwe
				</p>
				<div className="flex flex-col md:flex-row gap-16 md:gap-[120px] mt-10">
					<div
						className="flex items-center justify-center"
						data-aos="fade-right"
						data-aos-delay="600"
					>
						<Image
							src="/logo-footer.png"
							width={253}
							height={123}
							alt="HomeTrust logo"
						/>
					</div>
					<div className="space-y-4">
						<div
							className="flex items-center gap-4"
							data-aos="fade-left"
							data-aos-delay="600"
						>
							<PhoneIcon />
							<div>
								<p className="text-light">
									665 668 027 - Marek
								</p>
								<p className="text-light">
									665 668 027 - Elżbieta
								</p>
							</div>
						</div>
						<div
							className="flex items-center gap-4"
							data-aos="fade-left"
							data-aos-delay="800"
						>
							<PlaceIcon />
							<div>
								<p className="text-light">50-033 Wrocław</p>
								<p className="text-light">
									Marszałka Józefa Piłsudskiego 36/lok. 2
								</p>
							</div>
						</div>
						<div
							className="flex items-center gap-4"
							data-aos="fade-left"
							data-aos-delay="1000"
						>
							<ClockIcon />
							<div>
								<p className="text-light">
									Poniedziałek - Piątek 09:00 - 18:00
								</p>
								<p className="text-light">
									Sobota - 09:00 - 15:00
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
