interface ProjectCms {
	slug: string,
	title: string,
	pageTitle: string,
	description: string,
	sliderText: string,
	ctaLabel: string,
	longDescription: string,
	galery: [string, string, string],
	emphasedImage: string,
}

const prestations: ProjectCms[] = [
	{
		slug: "react",
		title: "Expertise React",
		pageTitle: "Développeur Expert React",
		description: "Bénéficiez de + de 5 ans d'expérience sur React",
		sliderText: "React",
		ctaLabel: "J'ai besoin d'un expert react !",
		longDescription: "Je me suis spécialisé sur React après plus de cinq ans à travailler sur cette libraire. J'ai suivi son évolution, des \"class components\" aux versions les plus récentes. Allant jusqu'à creuser dans le code source pour comprendre plus en détail son fonctionnement. Contribuant aussi à l'écosystème en créant diverses librairies autour de React.",
		galery: [
			"/typescriptIllustration.jpeg",
			"/reactIllustration2.jpg",
			"/nextIllustration.jpg",
		],
		emphasedImage: "/reactIllustration.png",
	},
	{
		slug: "backend",
		title: "Fullstack",
		pageTitle: "Développeur Fullstack",
		description: "Développement de bout en bout d'un produit, en passant par le front, le back, la db et le déploiement",
		sliderText: "Fullstack",
		ctaLabel: "J'ai besoin de développeur fullstack",
		longDescription: "Le développement d'une application ou d'un service requiert plus qu'un simple front en React, c'est toute une architecture avec beaucoup de constituante, l'interface utilisateur, les microservices et serveur en back, une bonne architecture devops pour être serein en tout instant, une pipeline de développement, des tests et même la gestion de projets. M'engager, c'est avoir un atout capable d'intervenir sur toutes ces compétences !",
		galery: [
			"/front.jpeg",
			"/server.webp",
			"/db.webp",
		],
		emphasedImage: "/fullstack.jpeg",
	},
	{
		slug: "ux",
		title: "Ux design",
		pageTitle: "Ux designer",
		description: "Conception d'interfaces et de parcours utilisateur efficace",
		sliderText: "Ux Design",
		ctaLabel: "J'ai besoin d'un designer UX",
		longDescription: "Lors de la conception d'un site ou d'une application il est important de mettre l'utilisateur au centre de la réflexion. Il est important de s'adapter à celui pour concevoir une application qu'il lui convidenra et surtout qu'il arrivera instinctivement à utiliser efficacement. C'est le rôle de l'Ux designer.",
		galery: [
			"/wireframes.png",
			"/user.webp",
			"/ux.png",
		],
		emphasedImage: "/figma.webp",
	},
]

export default prestations;