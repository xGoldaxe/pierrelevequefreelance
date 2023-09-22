import { Space_Grotesk, Sura } from "next/font/google";
import Image from "next/image";

interface TestimonialProps {
	comment: string;
	name: string;
	title: string;
	imgUrl: string;
}


const spaceGrotesk = Space_Grotesk({
	weight: ['700'],
	subsets: ['latin'],
	style: ['normal'],
  });

export default function Testimonial({
	comment, name, title, imgUrl,
}: TestimonialProps) {
	return (
		<div className="testimonial">
			<div className={`testimonial_coma ${spaceGrotesk.className}`}>"</div>
			<p className="testimonial_description">{comment}</p>
			<div className="testimonial_profile">
				<Image
				src={imgUrl}
				width={64}
				height={64}
				alt="Logo Client"
				/>
				<div>
					<h4>{name}</h4>
					<p className="testimonial_profile_title">{title}</p>
				</div>
			</div>
		</div>
	)
}