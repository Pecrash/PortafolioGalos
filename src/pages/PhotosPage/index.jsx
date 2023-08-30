import React, { useState } from "react";
import imagesPage from "../imagesRoutes/imagesPageRoutes.json";
import { Images } from "../../components/Images";

export const PhotosPage = () => {

	const [src, setSrc] = useState();
	const [visible,setVisible] = useState();

	const popUp = ({src, visible}) => {
		setSrc(src);
		setVisible(visible)
	}

	return (
		<>
			<div className={`popUp ${visible ? "visible" : ""}`}>
				<img className="popUp__image" src={src} alt="" />
				<button className="popUp__btn" onClick={() => {
					setVisible(false)
					document.body.classList.toggle('noScroll')
				}} />
			</div>


			<h1 className="imagesPage__title">TITULO MAMALON PARA LA PAGINA DE FOTOGRAFÍAS</h1>

			<section className="imageSection">
				<Images
					title={"EVENTOS"}
					arrayImages={imagesPage.eventos}
					link={false}
					addClass={""}
					popUp={popUp}
				/>
			</section>

			<section className="imageSection">
				<Images
					title={"MODA"}
					arrayImages={imagesPage.moda}
					link={false}
					addClass={""}
					popUp={popUp}
				/>
			</section>

			<section className="imageSection">
				<Images
					title={"NATURALEZA"}
					arrayImages={imagesPage.naturaleza}
					link={false}
					addClass={""}
					popUp={popUp}
				/>
			</section>

			<section className="imageSection">
				<Images
					title={"RETRATOS"}
					arrayImages={imagesPage.retrato}
					link={false}
					addClass={""}
					popUp={popUp}
				/>
			</section>

			<section className="imageSection">
				<Images
					title={"ALIMENTOS"}
					arrayImages={imagesPage.alimentos}
					link={false}
					addClass={""}
					popUp={popUp}
				/>
			</section>

			<section className="imageSection">
				<Images
					title={"PRODUCTOS"}
					arrayImages={imagesPage.productos}
					link={false}
					addClass={""}
					popUp={popUp}
				/>
			</section>
		</>
	);
};
