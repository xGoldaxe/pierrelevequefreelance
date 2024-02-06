interface TestimonialProps {
	comment: string;
	name: string;
	title: string;
}

export default function Testimonial({
	comment, name, title,
}: TestimonialProps) {
	return (
		<div className="testimonial">
			<p className="testimonial_description">{comment}</p>
			<p className="testimonial_title"><span>{name}</span> - {title}</p>
		</div>
	)
}