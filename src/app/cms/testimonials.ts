interface TestimonialCms {
	description: string;
	name: string;
	job: string;
}

const testimonialCms: TestimonialCms[] = [
	{
		description: "Pierre est quelqu’un qui s’adapte très rapidement à ce qu’on lui demande. Avec un projet Figma, des assets, et des directives, il a réussi à faire un site web très optimisé en Next.js et respectant à la lettre la maquette.",
		name: "Lothaire Guée",
		job: "Entrepreneur",
	},
	{
		description: "Tout au long de sa mission, Pierre a su faire preuve de sérieux et de rigueur sur les différentes tâches qui lui ont été demandées. Il a été d'une grande aide et a fait évoluer les projets dans la bonne direction tout en réduisant la dette technique.",
		name: "Coreoz",
		job: "Agence web",
	},
]

export default testimonialCms;