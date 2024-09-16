import React from "react";

const Team = () => {
	return (
		<div className="container mt-[96px]" id="team">
			<div className="space-y-5 flex items-center flex-col mb-16">
				<h2 data-aos="fade-right">Zespół</h2>
				<div
					className="w-[170px] h-[6px] bg-primary rounded-xl"
					data-aos="fade-right"
					data-aos-delay="200"
				/>
				<p data-aos="fade-right" data-aos-delay="400">
					Jesteśmy po to, aby Ci pomóc
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-[30px] md:gap-[70px] items-center justify-center">
				<div
					className="w-[336px] h-[337px] rounded-lg overflow-hidden bg-[url('/marek.jpg')] bg-cover bg-no-repeat bg-center"
					data-aos="zoom-in"
					data-aos-delay="200"
				/>
				<div className="md:w-1/2 space-y-4">
					<h4 data-aos="fade-left" data-aos-delay="400">
						Marek Bednarczuk
					</h4>
					<div
						className="w-[75px] h-[3px] bg-secondary rounded-xl"
						data-aos="fade-left"
						data-aos-delay="600"
					/>
					<p
						className="max-w-[350px] text-sm"
						data-aos="fade-left"
						data-aos-delay="800"
					>
						Marek od ponad 19 lat związany jest z obsługa Klienta, a
						właściwe relacje z ludźmi to fundament jego działania. W
						tym czasie miał okazję poznać wielu właścicieli firm
						różnych branż oraz specyfikę ich funkcjonowania, co
						nauczyło go postrzegania biznesu z poziomu wielu
						płaszczyzn i dopasowania odpowiednich rozwiązań. <br />
						<br />
						Oferując swoje usługi pośrednictwa w obrocie
						nieruchomościami kluczowym dla niego jest wnikliwe
						zapoznanie się z oczekiwaniami Klienta i zrozumienie
						jego potrzeb.
						<br />
						<br /> W życiu prywatnym, jak i zawodowym zawsze kieruje
						się zasadą: „Traktuj innych tak, jak sam byś chciał być
						traktowany”.
					</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-[30px] md:gap-[70px] items-center justify-center  mt-16 md:mt-20">
				<div className="md:w-1/2 space-y-4 flex flex-col md:items-end order-2 md:order-1">
					<h4
						data-aos="fade-right"
						data-aos-delay="200"
						className="md:text-right"
					>
						Elżbieta Mrowiec
					</h4>
					<div
						data-aos="fade-right"
						data-aos-delay="400"
						className="w-[75px] h-[3px] bg-primary rounded-xl"
					/>
					<p
						data-aos="fade-right"
						data-aos-delay="600"
						className="max-w-[350px] md:text-right text-sm"
					>
						Ela to osoba z ogromną wiedzą opartą na ponad
						dwudziestoletnim doświadczeniem zawodowym, a także
						współpracą z instytucjami bankowymi. Swoją przygodę z
						pracą na rzecz klientów rozpoczęła w 2004 roku w City
						Banku. Juz wtedy wiedziała, ze kluczem do sukcesu jest
						obsługa na najwyższym poziomie. <br />
						<br /> Nie ma sytuacji, na którą Ela nie potrafiłaby
						znaleźć rozwiązania. Trudne transakcje to jej
						specjalność. Prywatnie - pełnoetatowa mama, a w wolnym
						czasie miłośniczka książek, podróży i roweru.
					</p>
				</div>
				<div
					className="w-[336px] h-[337px] rounded-lg overflow-hidden bg-[url('/ela.jpg')] bg-cover bg-no-repeat bg-center order-1 md:order-2"
					data-aos="zoom-in"
					data-aos-delay="800"
				/>
			</div>
		</div>
	);
};

export default Team;
