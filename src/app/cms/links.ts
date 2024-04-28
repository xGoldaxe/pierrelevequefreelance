interface LinkCms {
	name: string;
	url: string;
	target?: string;
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
		},
	],
	legals: [
		{
			name: "Mentions légales",
			url: "/mentions-legales"
		},
		{
			name: "Politique de confidentialité",
			url: "/politique-de-confidentialite"
		}
	]
}

export default linksCms;