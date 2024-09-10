import React from "react";
import Image from "next/image";

const About = () => {
	return (
		<div className="w-full bg-primary py-[96px] mt-[96px]" id="about">
			<div className="container flex gap-[40px] xl:gap-[95px] flex-col xl:flex-row items-center">
				<div className="xl:w-1/2" data-aos="fade-right">
					<Image
						width={596}
						height={489}
						src="/about.png"
						alt="Home from top"
						className="shadow-main rounded-xl"
					/>
				</div>
				<div className="space-y-5 xl:w-1/2">
					<h2
						className="text-light leading-relaxed tracking-wide"
						data-aos="fade-left"
						data-aos-delay="200"
					>
						Nowoczesne podejście do rynku nieruchomości
					</h2>
					<div
						className="w-[120px] h-[6px] bg-secondary rounded-xl"
						data-aos="fade-left"
						data-aos-delay="400"
					/>
					<p
						className="text-light tracking-wide"
						data-aos="fade-left"
						data-aos-delay="600"
					>
						HOME TRUST - jednym z nadrzędnych fundamentów, na
						których budowana jest nasza marka to <b>ZAUFANIE</b>. Na
						nim opieramy współpracę z naszymi klientami i
						kształtujemy relacje, które bardzo często są relacjami
						długofalowymi.
					</p>
					<p
						className="text-light tracking-wide"
						data-aos="fade-left"
						data-aos-delay="800"
					>
						Nie ma dla nas rzeczy <b>niemożliwych</b> – zawsze
						uparcie dążymy do celu i szukamy rozwiązań, które dla
						innych mogą wydawać się niemożliwe. To one sprawiają, że
						stajemy się coraz lepsi, skuteczniejsi i jeszcze
						bardziej kreatywni. Daje nam to ogromną satysfakcję.
					</p>
					<p
						className="text-light tracking-wide"
						data-aos="fade-left"
						data-aos-delay="900"
					>
						Elżbieta Mrowiec i Marek Bednarczuk – jesteśmy
						założycielami <b>HOME TRUST</b>. Nasza współpraca od
						początku opierała się na <b>ZAUFANIU</b>, rzetelności i
						lojalności. Klient i jego potrzeby są dla nas
						priorytetem. Działalność oparta jest licencjami
						zawodowymi w zakresie pośrednictwa w obrocie
						nieruchomościami wydanymi przez Polską Federację Rynku
						Nieruchomości. Stale dążymy do profesjonalizmu i
						wysokiej jakości świadczonych przez nas usług. Na każdym
						etapie klient ma nasze wsparcie i pomoc. Może nam{" "}
						<b>ZAUFAĆ</b>.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
