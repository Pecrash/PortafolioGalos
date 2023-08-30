import React from "react";

export const WebsitesPage = () => {
	return (
		<div className="websitesPage">
			<h1 className="websitesPage__title">TU PAGINA WEB 100% PERSONALIZADA</h1>
			<div className="websitesPage__website">
				<img className="websitesPage__website-img" src="/assets/Images/websites/peluqueria.png" alt="" />
				<a className="websitesPage__website-link" target="_blank" href="https://muestra-webpeluqueria-production-c79a.up.railway.app/">IR AL SITIO WEB</a>
			</div>
			<p className="websitesPage__paragraph">
				Un sitio web es la carta de presentación que tienes con el mundo,
				nuestro deber es captar la esencia y personalidad de tu marca o negocio
			</p>
			<div className="websitesPage__website">
				<img className="websitesPage__website-img" src="/assets/Images/websites/odontologia.png" alt="" />
				<a className="websitesPage__website-link" target="_blank" href="https://muestra-webodontologia-production.up.railway.app/">IR AL SITIO WEB</a>
			</div>
			<p className="websitesPage__paragraph">
				No utilizamos plantillas prediseñadas, nos aseguramos de que tu sitio
				web cumpla completamente con tus necesidades
			</p>
			<div className="websitesPage__website">
				<img className="websitesPage__website-img" src="/assets/Images/websites/servicentro.png" alt="" />
				<a className="websitesPage__website-link" target="_blank" href="https://servicentrosuroeste.com/">IR AL SITIO WEB</a>
			</div>
			<p className="websitesPage__paragraph">
				Buscamos que tu presencia en línea sea atractiva y amena para tus
				clientes, de fácil acceso y de uso intuitivo
			</p>
		</div>
	);
};
