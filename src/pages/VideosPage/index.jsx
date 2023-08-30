import React from "react";

export const VideosPage = () => {
	return (
		<>
			<div className="videosPage">
				<h1 className="videosPage__title">TITULO PARA LA PAGINA BRO</h1>

				<h2 className="videosPage__subtitle">Titulo para este video bro</h2>
				<div className="videosPage__video">
					<iframe
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/M2LVCZuB428?autoplay=${0}&mute=1&vq=hd720`}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>

				<h2 className="videosPage__subtitle">Y para este otro video</h2>
				<div className="videosPage__video">
					<iframe
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/E0JtTVe_6Rc?autoplay=${0}&mute=1&vq=hd720&si=jHveLR4zmmYxwXDx`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>

				<h2 className="videosPage__subtitle">Y para este otro video</h2>
				<div className="videosPage__video">
					<iframe
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/s2phk3PRb9I?autoplay=${0}&mute=1&vq=hd720&si=S7mpTc8TBkeppzNt`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>

				<h2 className="videosPage__subtitle">Y para este otro video</h2>
				<div className="videosPage__video">
					<iframe
						width="100%"
						height="100%"
						src={`https://www.youtube.com/embed/o8CwK1Xz8K0?autoplay=${0}&mute=1&vq=hd720&si=0zsSby7qy_EkMmLw`}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</>
	);
};
