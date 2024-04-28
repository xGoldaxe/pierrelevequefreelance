"use client"

import useIsMobile from "@/app/hooks/useIsMobile";
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
	const isMobile = useIsMobile();

	return (
		<div className={`slider ${className ?? ""}`}>
			<div className="slider__elements first">{children}{isMobile ? children : null}</div>
			<div className="slider__elements second">{children}{isMobile ? children : null}</div>
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