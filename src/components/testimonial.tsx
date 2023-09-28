import Image from "next/image";

interface TestimonialProps {
	comment: string;
	name: string;
	title: string;
	imgUrl: string;
}

export default function Testimonial({
	comment, name, title, imgUrl,
}: TestimonialProps) {
	return (
		<div className="testimonial">
			<p className="testimonial_description">{comment}</p>
			<p className="testimonial_title"><span>{name}</span> - {title}</p>
		</div>
	)
}