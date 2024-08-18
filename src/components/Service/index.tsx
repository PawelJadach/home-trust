"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";

const Service = () => {
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
		<div className="w-full bg-secondary py-[96px] my-24">
			<div className="container flex items-center flex-col gap-4">
				<h2 className="text-light">W czym możemy Ci pomóc</h2>
				<div className="w-[170px] h-[6px] bg-primary rounded-xl" />
				<p className="text-light">Zostaw nam swoje problemy</p>
				<div className="flex flex-col md:flex-row gap-[60px] mt-10">
					<div className="md:w-1/2 flex flex-col items-baseline gap-6">
						{data.map(({ id, title }) => (
							<button
								key={id}
								onClick={() => handleClick(id)}
								className={cn(
									"p-[10px] rounded-xl text-light text-xl md:text-3xl font-bold",
									item === id && "bg-primary",
								)}
							>
								{title}
							</button>
						))}
					</div>
					<div className="md:w-1/2">
						{data.map(({ id, content }) => (
							<div
								key={id}
								className={cn(item === id ? "block" : "hidden")}
							>
								<p className="text-light">{content}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
