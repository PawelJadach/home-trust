import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import Service from "@/components/Service";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Offers />
			<Service />
			<Testimonials />
			<Team />
			<Contact />
		</main>
	);
}
