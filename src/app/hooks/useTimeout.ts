import { useEffect, useState } from "react";

export default function useTimeout() {
	const [currentTimer, setCurrentTimer] = useState<null | NodeJS.Timeout>(null);

	function cleanup() {
		if (currentTimer) {
			clearTimeout(currentTimer);
			setCurrentTimer(null);
		}
	}

	useEffect(() => cleanup, []);

	return (time: number, callback: () => void) => {
		cleanup();
		setCurrentTimer(
			setTimeout(() => {
				callback();
				setCurrentTimer(null);
			}, time)
		);
	};
}