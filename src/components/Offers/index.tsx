import React from "react";
import { AreaIcon, BedIcon } from "../ui/Icons";
import { cn } from "@/utils/cn";
import Button from "../ui/Button";

const offers = [
	{
		price: "675 900 zł",
		pricePerMeter: "9 500 zł/m²",
		location: "ul. Południowa - Długołęka",
		rooms: "3 pokoje",
		area: "71 m²",
		image: "bg-[url('/1.webp')]",
		url: "https://www.otodom.pl/pl/oferta/przestrzennie-i-komfortowo-idealne-dla-rodziny-ID4rHOs",
	},
	{
		price: "734 000 zł",
		pricePerMeter: "10 998 zł/m²",
		location: "ul. Suwalska 26 - Wrocław",
		rooms: "3 pokoje",
		area: "66 m²",
		image: "bg-[url('/2.webp')]",
		url: "https://www.otodom.pl/pl/oferta/piekne-mieszkanie-z-komorka-i-miejscem-parkingowym-ID4r38G",
	},
	{
		price: "1 390 000 zł",
		pricePerMeter: "8 225 zł/m²",
		location: "Brzezinki",
		rooms: "5 pokoi",
		area: "169 m²",
		image: "bg-[url('/3.webp')]",
		url: "https://www.otodom.pl/pl/oferta/pomiedzy-lasami-idealna-przestrzen-dla-rodziny-ID4s3SX",
	},
	{
		price: "2 100 000 zł",
		pricePerMeter: "10 145 zł/m²",
		location: "ul. Rzeczna - Nadolice Wielkie",
		rooms: "4 pokoje",
		area: "207 m²",
		image: "bg-[url('/4.webp')]",
		url: "https://www.otodom.pl/pl/oferta/klasyczna-bryla-z-basenem-9min-od-wroclawia-ID4rf7b",
	},
	{
		price: "660 000 zł",
		pricePerMeter: "8 987 zł/m²",
		location: "ul. Trzebnicka - Wrocław",
		rooms: "3 pokoje",
		area: "73 m²",
		image: "bg-[url('/5.webp')]",
		url: "https://www.otodom.pl/pl/oferta/przestronne-3-pokojowe-przy-trzebnickiej-ID4nOT3",
	},
	{
		price: "1 199 000 zł",
		pricePerMeter: "7 082 zł/m²",
		location: "ul. Kamiennogórska - Wrocław",
		rooms: "4 pokoje",
		area: "169 m²",
		image: "bg-[url('/6.webp')]",
		url: "https://www.otodom.pl/pl/oferta/wygodny-dom-dla-rodziny-ID4psO6",
	},
];

const Offers = () => {
	return (
		<div className="container mt-[96px]" id="offer">
			<div className="space-y-5 flex items-center justify-center flex-col mb-16">
				<h2 data-aos="fade-right">Nasze najnowsze oferty</h2>
				<div
					className="w-[170px] h-[6px] bg-secondary rounded-xl"
					data-aos="fade-right"
					data-aos-delay="200"
				/>
				<p data-aos="fade-right" data-aos-delay="400">
					Znajdź swoją wymarzoną nieruchomość
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
				{offers.map((offer, id) => (
					<div
						className="rounded-lg shadow-lg overflow-hidden"
						data-aos="zoom-in"
						key={id}
					>
						<a
							className={cn(
								"block cursor-pointer w-full h-[225px] bg-cover bg-no-repeat bg-center hover:scale-110 transition-all",
								offer.image,
							)}
							href={offer.url}
							target="_blank"
							rel="noreferrer"
						/>
						<div className="p-5 space-y-3">
							<p className="text-dark space-x-4">
								<span className="text-secondary text-xl font-extrabold">
									{offer.price}
								</span>{" "}
								<span>{offer.pricePerMeter}</span>
							</p>
							<p className="text-dark">{offer.location}</p>
							<hr />
							<div className="flex gap-4">
								<div className="flex gap-2 text-sm">
									<BedIcon /> <span>{offer.rooms}</span>
								</div>
								<div className="flex gap-2 text-sm">
									<AreaIcon /> <span>{offer.area}</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col items-center mt-12">
				<a
					href="https://www.otodom.pl/pl/firmy/biura-nieruchomosci/home-trust-ID9623847?search%5Bcategory_id%5D=2"
					target="_blank"
				>
					<Button className="bg-secondary">
						Zobacz wszystkie oferty
					</Button>
				</a>
			</div>
		</div>
	);
};

export default Offers;
