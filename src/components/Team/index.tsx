import React from "react";

const Team = () => {
	return (
		<div className="container mt-[96px]">
			<div className="space-y-5 flex items-center flex-col mb-16">
				<h2>Zespół</h2>
				<div className="w-[170px] h-[6px] bg-primary rounded-xl" />
				<p>Jesteśmy tu po to żeby Ci pomóc</p>
			</div>
			<div className="flex flex-col md:flex-row gap-[30px] md:gap-[70px] items-center justify-center">
				<div className="w-[336px] h-[337px] rounded-lg overflow-hidden bg-[url('/marek.png')] bg-contain bg-no-repeat bg-center" />
				<div className="md:w-1/2 space-y-4">
					<h4>Marek Bednarczuk</h4>
					<div className="w-[75px] h-[3px] bg-secondary rounded-xl" />
					<p className="max-w-[350px]">
						“Lorem ipsum dolor sit amet consectetur. Diam magna
						luctus odio risus dolor nullam faucibus adipiscing
						egestas. Ultrices nulla at aliquam egestas malesuada
						nullam volutpat pharetra orci.”
					</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-[30px] md:gap-[70px] items-center justify-center  mt-16 md:mt-0">
				<div className="md:w-1/2 space-y-4 flex flex-col md:items-end order-2 md:order-1 ">
					<h4 className="md:text-right">Elżbieta Mrowiec</h4>
					<div className="w-[75px] h-[3px] bg-primary rounded-xl" />
					<p className="max-w-[350px] md:text-right">
						“Lorem ipsum dolor sit amet consectetur. Diam magna
						luctus odio risus dolor nullam faucibus adipiscing
						egestas. Ultrices nulla at aliquam egestas malesuada
						nullam volutpat pharetra orci.”
					</p>
				</div>
				<div className="w-[336px] h-[337px] rounded-lg overflow-hidden bg-[url('/ela.png')] bg-contain bg-no-repeat bg-center order-1 md:order-2" />
			</div>
		</div>
	);
};

export default Team;
