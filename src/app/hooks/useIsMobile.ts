import { useEffect, useState } from "react";

export default function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		updateIsMobile();
		window.addEventListener("resize", updateIsMobile);
		return () => window.removeEventListener("resize", updateIsMobile);
	});

	function updateIsMobile() {
		const isMobile = window && window.innerWidth < 820;
		setIsMobile(isMobile);
	}

	return isMobile;
}