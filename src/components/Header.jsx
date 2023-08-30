import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
	const [active, setActive] = useState(false);
	const [btnText, setBtnText] = useState("MENU")

	const menuActivation = () => {
		!active ? setActive(true): setActive(false);
		!active ? setBtnText("CLOSE"): setBtnText("MENU");
		document.body.classList.toggle('noScroll', !active)
	}

	return (
		<>
			<div className="header">
			    <NavLink className="logo" to="/" ><img className="logo__img" src="/assets/Galos.svg" alt="" /></NavLink>
				<div className={`menu ${active == 1 ? "active": ""}`}>
					<ul className="menu__list">
						<li className="menu__item"><NavLink onClick={menuActivation} className={`menu__item-link ${({isActive}) => isActive ? 'active': ""}`} to="/">INICIO</NavLink></li>
						<li className="menu__item"><NavLink onClick={menuActivation} className={`menu__item-link ${({isActive}) => isActive ? 'active': ""}`} to="/photos">FOTOGRAFÍA</NavLink></li>
						<li className="menu__item"><NavLink onClick={menuActivation} className={`menu__item-link ${({isActive}) => isActive ? 'active': ""}`} to="/videos">VIDEO</NavLink></li>
						<li className="menu__item"><NavLink onClick={menuActivation} className={`menu__item-link ${({isActive}) => isActive ? 'active': ""}`} to="/websites">DISEÑO WEB</NavLink></li>
					</ul>
					<ul className="menu__networks">
						<li className="menu__network"><a className="menu__network-link" href="#"><img className="menu__network-icon" src="/src/assets/networksIcons/facebook.svg" alt="" /></a></li>
						<li className="menu__network"><a className="menu__network-link" href="#"><img className="menu__network-icon" src="/src/assets/networksIcons/instagram.svg" alt="" /></a></li>
						<li className="menu__network"><a className="menu__network-link" href="#"><img className="menu__network-icon" src="/src/assets/networksIcons/whatsapp.svg" alt="" /></a></li>
					</ul>
				</div>
			    <button className={`menu__btn ${active ? "active": ""}`} onClick={menuActivation}>{btnText}</button>
			</div>
		</>
	);
};
