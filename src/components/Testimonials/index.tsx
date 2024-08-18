import React from "react";
import { AreaIcon, BedIcon, TopIcon } from "../ui/Icons";

const Testimonials = () => {
	return (
		<div className="container mt-[96px]">
			<div className="space-y-5 flex items-center flex-col mb-16">
				<h2>Opinie</h2>
				<div className="w-[170px] h-[6px] bg-secondary rounded-xl" />
				<p>Staramy się by każdy klient był zadowolony</p>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-center gap-8">
				<div className="rounded-lg shadow-xl flex items-center flex-col gap-8 p-7 w-[300px]">
					<TopIcon />
					<p className="text-dark text-center">
						“Lorem ipsum dolor sit amet consectetur. Diam magna
						luctus odio risus dolor nullam faucibus adipiscing
						egestas. Ultrices nulla at aliquam egestas malesuada
						nullam volutpat pharetra orci.”
					</p>
					<p className="italic">Jan Kowalski</p>
				</div>
				<div className="rounded-lg shadow-xl flex items-center flex-col gap-8 p-7 w-[300px]">
					<TopIcon />
					<p className="text-dark text-center">
						“Lorem ipsum dolor sit amet consectetur. Diam magna
						luctus odio risus dolor nullam faucibus adipiscing
						egestas. Ultrices nulla at aliquam egestas malesuada
						nullam volutpat pharetra orci.”
					</p>
					<p className="italic">Jan Kowalski</p>
				</div>
				<div className="rounded-lg shadow-xl flex items-center flex-col gap-8 p-7 w-[300px]">
					<TopIcon />
					<p className="text-dark text-center">
						“Lorem ipsum dolor sit amet consectetur. Diam magna
						luctus odio risus dolor nullam faucibus adipiscing
						egestas. Ultrices nulla at aliquam egestas malesuada
						nullam volutpat pharetra orci.”
					</p>
					<p className="italic">Jan Kowalski</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
