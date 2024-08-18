import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavLogo() {
	return (
		<Link href="/#hero">
			<Image
				width={160}
				height={30}
				src="/navbar-logo.png"
				alt="HomeTrust logo"
			/>
		</Link>
	);
}
