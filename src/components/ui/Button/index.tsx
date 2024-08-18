"use client";
import { cn } from "@/utils/cn";
import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const Button = ({ children, ...rest }: ButtonProps) => {
	return (
		<button
			{...rest}
			className={cn(
				"bg-primary shadow-main text-light rounded-lg px-10 py-3 hover:bg-primary/80 transition-all font-bold tracking-wider disabled:bg-primary/30 disabled:text-light/40 disabled:cursor-not-allowed",
				rest.className,
			)}
		>
			{children}
		</button>
	);
};

export default Button;
