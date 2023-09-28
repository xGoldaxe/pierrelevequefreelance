import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
	weight: ['400'],
	subsets: ['latin'],
});

export default function Project() {
	return (
		<section className="project"
		// style={{ backgroundColor: color }}
		>
			<div className="project_content">
				<div className="project_content_inner">
					<div className="project_content_description">
						<h2 className={libreBaskerville.className}>Project Name</h2>
						<p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l interview et la puissance de l immersion journalistique, Racontez votre histoire avec un rep</p>
						<p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l interview et la puissance de l immersion journalistique, Racontez votre histoire avec un rep</p>
					</div>
					<div className="project_details">
						<p className="project_details_label">Date de production</p>
						<p className="project_details_label">Type de projet</p>
						<p className="project_details_label">Client</p>
						<div className="project_details_line"></div>
						<p className="project_details_value">2023</p>
						<p className="project_details_value">Réalisation vidéo pour entreprise</p>
						<p className="project_details_value">Johndoecorporation</p>
					</div>
				</div>
				<div className="project_content_image" style={{ backgroundImage: `url("/project.jpg")`}} />
			</div>
		</section>
	);
}