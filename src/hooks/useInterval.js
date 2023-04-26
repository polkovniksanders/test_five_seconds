import React, { useEffect } from 'react';

const useInterval = (callback, timeout) => {

	useEffect(() => {
		const interval = setInterval(() => {
			callback()
		}, timeout)
		return () => clearInterval(interval);
	}, [])

}

export default useInterval;
