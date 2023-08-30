import React, { useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink } from "react-router-dom";


export const Images = ({ title, arrayImages, link, addClass, popUp }) => {
	const sliderRef = useRef(null);
	// TAL VEZ SI NECESITE EL INDEX PARA RENDERIZAR LA IMAGEN SOBRE LA QUE HAGAN CLICK EN UNA ESPECIE DE POP UP
	const scroll = (direction) => {
		direction === "right"
			? (sliderRef.current.scrollLeft += 450)
			: (sliderRef.current.scrollLeft -= 450);
	};

	return (
		<>
			<div className={`photosSection`}>
				<h2 className={`photosSection__title ${addClass}`}> {title} </h2>
				<div className={`photosSection__container ${addClass}`}>
					<button
						className={`photosSection__container-btnL`}
						onClick={() => scroll("left")}
					/>
					<button
						className={`photosSection__container-btnR`}
						onClick={() => scroll("right")}
					/>
					<div className={`photosSection__slider`} ref={sliderRef}>
						{arrayImages.map((image) => {
							return (
								<LazyLoadImage
									className={`photosSection__slider-image ${addClass}`}
									effect="blur"
									src={image.src}
									alt={image.alt}
									key={image.src}
									onClick={() => {
										document.body.classList.toggle('noScroll')
										popUp({src:image.src, visible:true})
									}}
								/>
							);
						})}

						{/* RETORNO EL ANCLA HACIA LA PAGINA DE FOTOS DEPENDIENDO SI ESTOY EN ELLA O NO */}
						{link ? (
							<span className={`photosSection__callToAction`}>
								<NavLink
									className={"photosSection__callToAction-link"}
									to="/photos"
								>
									Conoce más de nuestro trabajo
								</NavLink>
							</span>
						) : (
							<span></span>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
