import React, { useState } from "react";
import Typed from "typed.js";
import { Images } from "../../components/Images";
import { Services } from "./Services";
import { Videos } from "./Videos";
import { Websites } from "./Websites";
import homeImages from "../imagesRoutes/homeImagesRoutes.json";

export const HomePage = () => {
	const el = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(el.current, {
			strings: [
				'<span class="title__first">EXPERIENCIAS</span><span class="title__second">VISUALES QUE LOGRAN</span><span class="title__third">PERDURAR</span>',
				'<span class="title__first">CAPTURANDO</span><span class="title__second">MOMENTOS, CONTANDO</span><span class="title__third">HISTORIAS</span>',
				'<span class="title__first">CADA</span><span class="title__second">IMAGEN ES UNA</span><span class="title__third">OPORTUNIDAD</span>',
				'<span class="title__first">MÁS QUE FOTOS</span><span class="title__second">Y VIDEOS, VISUALES</span><span class="title__third">QUE PERDURAN</span>',
				'<span class="title__first">EXPERIENCIAS</span><span class="title__second">DIGITALES QUE</span><span class="title__third">DEJAN HUELLA</span>',
				'<span class="title__first">CADA PIXEL</span><span class="title__second">PUEDE CONTAR</span><span class="title__third">UNA HISTORIA</span>',
			],
			typeSpeed: 60,
			backSpeed: 30,
			loop: true,
			backDelay: 1800,
			contentType: "html",
		});

		return () => {
			typed.destroy();
		};
	}, []);

	const [src, setSrc] = useState();
	const [visible,setVisible] = useState();

	const popUp = ({src, visible}) => {
		setSrc(src);
		setVisible(visible)
	}

	return (
		<>
			<h1 className="title" ref={el} />
			<Services />
			<Images
				title={"CAPTURAMOS MOMENTOS, DESTACAMOS DETALLES."}
				arrayImages={homeImages}
				link={true}
				addClass={"home"}
				popUp={popUp}
			/>
			<Videos />
			<Websites />

			<div className={`popUp ${visible ? "visible" : ""}`}>
				<img className="popUp__image" src={src} alt="" />
				<button className="popUp__btn" onClick={() => {
					setVisible(false)
					document.body.classList.toggle('noScroll')
				}} />
			</div>
		</>
	);
};
