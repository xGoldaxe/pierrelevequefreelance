export default function Pricing() {
	return (
		<div className="pricings">
			<div className="pricing__box">
				<p className="pricing__box__price">600€<span className="pricing__box__price__tab">/jour</span></p>
				<p className="pricing__box__title">Forfait journée</p>
			</div>
			<div className="pricing__features">
				<h3>Comprend:</h3>
				<ul>
					<li>- Développement sur vos projets</li>
					<li>- Expertise React</li>
					<li>- Conception</li>
					<li>- Ux design</li>
					<li>- Remote ou présentiel (Paris)</li>
					<li>...</li>
				</ul>
			</div>
		</div>
	)
}