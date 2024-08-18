import { Metadata } from "next";

type Config = {
	metadata: {
		[key: string]: Metadata;
	};
	locale: string;
};

export const config: Config = {
	metadata: {
		root: {
			title: "Home Trust",
			description: "Kup, sprzedaj lub wynajmij nieruchomość",
			metadataBase: new URL("https://home-trust.vercel.app/"),
			openGraph: {
				images: "/opengraph-image.png",
			},
		},
	},
	locale: "pl",
};
