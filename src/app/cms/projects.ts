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
		name: 'Deep Tracker',
		id: 1,
		content: [
			'Project A involves the development of a sophisticated web application that enhances user experience.',
			'The application features cutting-edge technologies and aims to revolutionize the industry.',
		],
		year: 2023,
		type: 'Saas',
		client: 'Deeptracker',
	},
	{
		name: 'Webserver',
		id: 2,
		content: [
			'Un long projet visant à créer un serveur web (similaire à NGINX) en respectant la spécification rfc du protocole HTTP. Un serveur capable de servir tous types de fichiers et d\'indexer des pages. Le projet n\'utilise aucune libraire autre que std, il a donc fallu tout réimplémenter (et tester), notamment le parsing et la lecture de form-data par exemple. Outre l\'aspect spécification, il a été fait particulièrement attention aux performances, avec un mécanisme de file d\'attente permettant de répartir les requêtes les plus longues pour ne pas bloquer les plus petites. Le serveur conserve les connexions en keep-alive, il y a un système de timeout, de redirection, de multi-serveurs et bien d\'autres fonctionnalités, comme un vrai serveur. Ces fonctionnalités sont configurables via un fichier de configuration.',
		],
		year: 2022,
		type: 'Serveur web',
		client: 'Ecole 42',
	},
	{
		name: 'Pong online',
		id: 3,
		content: [
			'Le jeu de pong en temps réel. Avec un système de matchmaking, et un système de discussion avancé similaire à discord, avec une liste d\'amis, la posibilité de bloquer, un système de channel avec différents grade assignable, la posibilité de mute des jouers pendant un temps, d\'inviter un ami pour une partie, etc...',
			'Toutes les fonctionnalités de chat et de channel sont en temps réel.',
			'Fait avec React, nest.js, socket.io et stateX.',
		],
		year: 2022,
		type: 'Application web',
		client: 'Ecole 42',
	},
]

export default projects;