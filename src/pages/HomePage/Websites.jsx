import React, { useEffect, useState } from "react";

export const Websites = () => {
	const [active, setActive] = useState(0);

	const changeImage = () => {
		setActive((active + 1) % 3);
	};

	// PARECE QUE HAY PROBLEMAS CON EL SETINTERVAL, DEBO CORREGIRLO Y AGREGAR LA TERCERA IMAGEN
	useEffect(() => {
		const intervalImage = setInterval(changeImage, 5000);
		return () => clearInterval(intervalImage);
	}, [active]);
	return (
		<div className="websiteSection">
			<h2 className="websiteSection__title">
				AQUI VA EL TITULO PARA LOS WEBSITES
			</h2>
			<div className="websiteSection__container">
				<img
					className={`websiteSection__container-img ${
						active === 1 ? "active" : ""
					}`}
					src="/src/assets/Images/websites/odontologia.png"
				/>
				<img
					className={`websiteSection__container-img ${
						active === 2 ? "active" : ""
					}`}
					src="/src/assets/Images/websites/hotel.png"
					alt=""
				/>
				<img
					className={`websiteSection__container-img ${
						active === 0 ? "active" : ""
					}`}
					src="/src/assets/Images/websites/peluqueria.png"
				/>
			</div>
			<figure className="websiteSection__icons">
				<img
					className="websiteSection__icons-icon"
					src="/src/assets/extraIcons/HTML5.svg"
					alt=""
				/>
				<img
					className="websiteSection__icons-icon"
					src="/src/assets/extraIcons/css.svg"
					alt=""
				/>
				<img
					className="websiteSection__icons-icon"
					src="/src/assets/extraIcons/javascript.svg"
					alt=""
				/>
			</figure>
			<p className="websiteSection__paragraph">
				Es indispensable un sitio web para la presencia online, por eso nos
				aseguramos de poder construirte uno 100% a tu medida, atractivo y con
				una experiencia agradable para los usuarios
			</p>
		</div>
	);
};
