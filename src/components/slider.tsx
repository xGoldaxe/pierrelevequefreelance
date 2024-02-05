"use client"

import { ReactNode } from "react";

interface SliderProps {
	children: ReactNode;
	className?: string;
}

export default function Slider({ children, className }: SliderProps) {
	const isMobile = window.innerWidth < 820;

	return (
		<div className={`slider ${className ?? ""}`}>
			<div className="slider__elements first">{children}{isMobile ? children : null}</div>
			<div className="slider__elements second">{children}{isMobile ? children : null}</div>
		</div>
	)
}