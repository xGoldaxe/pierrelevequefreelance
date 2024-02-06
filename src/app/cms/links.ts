interface LinkCms {
	name: string;
	url: string;
}

const linksCms = {
	socials: [
		{
			name: "Instagram",
			url: "https://www.instagram.com"
		},
		{
			name: "Linkedin",
			url: "https://www.linkedin.com"
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