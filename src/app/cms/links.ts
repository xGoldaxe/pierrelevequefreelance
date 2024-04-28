interface LinkCms {
	name: string;
	url: string;
	target?: string;
	prefetch?: boolean;
}

const linksCms = {
	socials: [
		{
			name: "Linkedin",
			url: "https://www.linkedin.com/in/pierre-leveque-723399201/"
		},
		{
			name: "Github",
			url: "https://github.com/xGoldaxe"
		},
		{
			name: "Cv",
			url: "/cv.pdf",
			target: "_blank",
			prefetch: false,
		},
	],
}

export default linksCms;