import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
	const [active, setActive] = useState(false);
	const [btnText, setBtnText] = useState("MENU");
	const header = useRef(null);

	const menuActivation = () => {
		!active ? setActive(true) : setActive(false);
		!active ? setBtnText("CLOSE") : setBtnText("MENU");
		document.body.classList.toggle("noScroll", !active);
	};


	/* useEffect(() => {
		gsap.to(header.current, {
			y: 0,
			opacity: 1,
			duration: 3,
			scrollTrigger: {
				trigger: header.current,
				start: '-=40',
				end: '-=50',
			},
		});

		gsap.to(header.current, {
			y: -100,
			opacity: 1,
			duration: 3,
			scrollTrigger: {
				trigger: header.current,
				start: '+=40',
				end
			},
		});
	}, []); */

	return (
		<>
			<div className="header" ref={header}>
				<NavLink className="logo" to="/">
					<img className="logo__img" src="/assets/Galos.svg" alt="" />
				</NavLink>
				<button
					className={`menu__btn ${active ? "active" : ""}`}
					onClick={menuActivation}
				>
					{btnText}
				</button>
			</div>
			<div className={`menu ${active == 1 ? "active" : ""}`}>
				<ul className="menu__list">
					<li className="menu__item">
						<NavLink
							onClick={menuActivation}
							className={`menu__item-link ${({ isActive }) =>
								isActive ? "active" : ""}`}
							to="/"
						>
							INICIO
						</NavLink>
					</li>
					<li className="menu__item">
						<NavLink
							onClick={menuActivation}
							className={`menu__item-link ${({ isActive }) =>
								isActive ? "active" : ""}`}
							to="/photos"
						>
							FOTOGRAFÍA
						</NavLink>
					</li>
					<li className="menu__item">
						<NavLink
							onClick={menuActivation}
							className={`menu__item-link ${({ isActive }) =>
								isActive ? "active" : ""}`}
							to="/videos"
						>
							VIDEO
						</NavLink>
					</li>
					<li className="menu__item">
						<NavLink
							onClick={menuActivation}
							className={`menu__item-link ${({ isActive }) =>
								isActive ? "active" : ""}`}
							to="/websites"
						>
							DISEÑO WEB
						</NavLink>
					</li>
				</ul>
				<ul className="menu__networks">
					<li className="menu__network">
						<a className="menu__network-link" target="_blank" href="https://www.facebook.com/profile.php?id=100066974475945">
							<img
								className="menu__network-icon"
								src="/assets/networksIcons/facebook.svg"
								alt=""
							/>
						</a>
					</li>
					<li className="menu__network">
						<a className="menu__network-link" target="_blank" href="https://instagram.com/galosvisualservices?igshid=MzRlODBiNWFlZA==">
							<img
								className="menu__network-icon"
								src="/assets/networksIcons/instagram.svg"
								alt=""
							/>
						</a>
					</li>
					<li className="menu__network">
						<a className="menu__network-link" href="#">
							<img
								className="menu__network-icon"
								src="/assets/networksIcons/whatsapp.svg"
								alt=""
							/>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};
