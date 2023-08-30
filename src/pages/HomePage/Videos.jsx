import React, { useState } from "react";

export const Videos = () => {

	const [autoplay, setAutoplay] = useState(0);

	return (
		<div className="videoSection">
			<h2 className="videoSection__title">SI UNA IMAGEN NO BASTA UN CHINGO SÍ</h2>
			<div className="videoSection__video">
				<iframe
					width="100%"
					height="100%"
					src={`https://www.youtube.com/embed/M2LVCZuB428?autoplay=${autoplay}&mute=1&vq=hd720`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
			<h2 className="videoSection__text">Frase o titulo para este video</h2>
			<div className="videoSection__video">
				<iframe
					width="100%"
					height="100%"
					src={`https://www.youtube.com/embed/o8CwK1Xz8K0?autoplay=${autoplay}&mute=1&vq=hd720`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
			<h2 className="videoSection__text">Frase o titulo para este video</h2>
		</div>
	);
};
