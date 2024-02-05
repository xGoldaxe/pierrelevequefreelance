"use client"

import useIsMobile from "@/app/hooks/useIsMobile";
import { ReactNode } from "react";

interface SliderProps {
	children: ReactNode;
	className?: string;
}

export default function Slider({ children, className }: SliderProps) {
	const isMobile = useIsMobile();

	return (
		<div className={`slider ${className ?? ""}`}>
			<div className="slider__elements first">{children}{isMobile ? children : null}</div>
			<div className="slider__elements second">{children}{isMobile ? children : null}</div>
		</div>
	)
}