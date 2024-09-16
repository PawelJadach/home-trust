import React from "react";
import { TopIcon } from "../ui/Icons";

const Testimonials = () => {
	return (
		<div className="container mt-[96px]" id="testimonials">
			<div className="space-y-5 flex items-center flex-col mb-16">
				<h2 data-aos="fade-right">Opinie</h2>
				<div
					className="w-[170px] h-[6px] bg-secondary rounded-xl"
					data-aos="fade-right"
					data-aos-delay="200"
				/>
				<p data-aos="fade-right" data-aos-delay="400">
					Klienci, którzy nam zaufali:
				</p>
			</div>
			<div className="flex flex-col md:flex-row items-start justify-center gap-8">
				<div
					className="rounded-lg shadow-xl flex items-center flex-col gap-8 p-7 w-[300px]"
					data-aos="zoom-in"
				>
					<TopIcon />
					<p className="text-dark text-center">
						“Obsługa na najwyższym poziomie. Pan Marek przeprowadził
						nas przez cały proces zakupu nieruchomości - od jej
						prezentacji, poprzez uzyskanie kredytu, a następnie
						finalizację transakcji w kancelarii notarialnej. Polecam
						!”
					</p>
					<p className="italic">Artur Błuś</p>
				</div>
				<div
					className="rounded-lg shadow-xl flex items-center flex-col gap-8 p-7 w-[300px]"
					data-aos="zoom-in"
					data-aos-delay="200"
				>
					<TopIcon />
					<p className="text-dark text-center">
						“Współpraca z Elżbietą to sama przyjemność. Pełen
						profesjonalizm, wzorcowa komunikacja, ogrom wiedzy
						merytorycznej połączonej z doświadczeniem dają gwarancję
						doskonałej obsługi na każdym etapie procesu kredytowego
						i zakupu nieruchomości. Polecam.”
					</p>
					<p className="italic">Adrian Krysztofiak</p>
				</div>
				<div
					className="rounded-lg shadow-xl flex items-center flex-col gap-8 p-7 w-[300px]"
					data-aos="zoom-in"
					data-aos-delay="400"
				>
					<TopIcon />
					<p className="text-dark text-center">
						“Polecam współpracę. Cały proces przebiega sprawnie, a
						Pani Elżbieta wspiera klienta na każdym etapie.”
					</p>
					<p className="italic">Magdalena Pamuła</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
