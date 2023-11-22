import { ReactNode } from "react";

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