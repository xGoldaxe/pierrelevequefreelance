import { Syne } from "next/font/google";
import { ReactNode } from "react";

const syne = Syne({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

interface SliderProps {
	children: ReactNode;
	className?: string;
}

export default function Slider({ children, className }: SliderProps) {
	return (
		<div className={`slider ${className ?? ""}`}>
			<div className="slider__elements first">{children}</div>
			<div className="slider__elements second">{children}</div>
		</div>
	)
}

export function LogoScrollSlider({ content, small }: { content: string, small?: boolean }) {
	return (
		<div className={`logoScrollSlider ${small ? "sliderSmallTop" : ""}`}>
			<h2 className={syne.className}>{content}</h2>
			<h2 className={syne.className}>{content}</h2>
			<h2 className={syne.className}>{content}</h2>
			<h2 className={syne.className}>{content}</h2>
		</div>
	)
}