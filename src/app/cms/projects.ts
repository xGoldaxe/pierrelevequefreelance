export interface CmsProject {
	name: string;
	id: number;
	content: string[];
	year: number;
	type: string;
	client: string;
}

const projects: CmsProject[] = [
	{
		name: 'Project A',
		id: 1,
		content: [
			'Project A involves the development of a sophisticated web application that enhances user experience.',
			'The application features cutting-edge technologies and aims to revolutionize the industry.',
		],
		year: 2022,
		type: 'Web Development',
		client: 'Client A',
	},
	{
		name: 'Project B',
		id: 2,
		content: [
			'Project B focuses on creating a robust mobile app designed to meet the diverse needs of users.',
			'The app leverages innovative features and promises a seamless user journey.',
		],
		year: 2023,
		type: 'Mobile App',
		client: 'Client B',
	},
	{
		name: 'Project C',
		id: 3,
		content: [
			'Project C showcases our creative prowess in graphic design, delivering visually stunning concepts.',
			'Our teams artistic approach ensures a captivating and memorable visual identity for the client.',
		],
		year: 2024,
		type: 'Graphic Design',
		client: 'Client C',
	},
]

export default projects;