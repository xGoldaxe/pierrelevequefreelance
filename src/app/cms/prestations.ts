interface ProjectCms {
	slug: string,
	title: string,
	description: string,
	ctaLabel: string,
	longDescription: string,
	galery: [string, string, string],
	emphasedImage: string,
}

const prestations: ProjectCms[] = [
	{
		slug: "photo",
		title: "Photographie",
		description: "Here we defined your needs. Elements required, copy and contents to show.",
		ctaLabel: "Réserver une séance photo",
		longDescription: "Photographie Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis metus risus, nec ultrices orci congue nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris nec est sit amet turpis euismod aliquet in id dui. Cras eu efficitur turpis, et blandit massa. In luctus, metus nec ultrices dapibus, augue enim pharetra tellus, ac fringilla est massa vitae ligula. Aliquam erat volutpat. In posuere tellus at ex egestas, vel convallis ex maximus.",
		galery: [
			"/project.jpg",
			"/project2.jpg",
			"/project3.jpg",
		],
		emphasedImage: "/project.jpg",
	},
	{
		slug: "corporate",
		title: "Vidéo d'entreprise",
		description: "Here we defined your needs. Elements required, copy and contents to show.",
		ctaLabel: "Réserver une séance photo",
		longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis metus risus, nec ultrices orci congue nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris nec est sit amet turpis euismod aliquet in id dui. Cras eu efficitur turpis, et blandit massa. In luctus, metus nec ultrices dapibus, augue enim pharetra tellus, ac fringilla est massa vitae ligula. Aliquam erat volutpat. In posuere tellus at ex egestas, vel convallis ex maximus.",
		galery: [
			"/project.jpg",
			"/project2.jpg",
			"/project3.jpg",
		],
		emphasedImage: "/project.jpg",
	},
	{
		slug: "montage",
		title: "Montage vidéo",
		description: "Here we defined your needs. Elements required, copy and contents to show.",
		ctaLabel: "Réserver une séance photo",
		longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis metus risus, nec ultrices orci congue nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris nec est sit amet turpis euismod aliquet in id dui. Cras eu efficitur turpis, et blandit massa. In luctus, metus nec ultrices dapibus, augue enim pharetra tellus, ac fringilla est massa vitae ligula. Aliquam erat volutpat. In posuere tellus at ex egestas, vel convallis ex maximus.",
		galery: [
			"/project.jpg",
			"/project2.jpg",
			"/project3.jpg",
		],
		emphasedImage: "/project.jpg",
	},
]

export default prestations;