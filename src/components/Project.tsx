import { Libre_Baskerville } from "next/font/google";
import Image from "next/image";

const libreBaskerville = Libre_Baskerville({
	weight: ['400'],
	subsets: ['latin'],
});

interface ProjectProps {
	color: string;
}

export default function Project({ color }: ProjectProps) {
	return (
		<section className="project" style={{ backgroundColor: color }}>
			<h2 className={libreBaskerville.className}>Name of the project</h2>
			<div className="project_content">
			<div className="project_content_description">
				<p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un rep</p>
				<p>Racontez votre histoire avec un reportage. Une méthode de communication particulièrement efficace et engageante. Cette approche combine les avantages de l'interview et la puissance de l'immersion journalistique, Racontez votre histoire avec un rep</p>
			</div>
			<div className="project_content_image">
				<Image
				src="/photo-entreprise.webp"
				width={1358}
				height={903}
				alt="Arrow delimiter"
				/>
			</div>
			</div>
		</section>
	);
}