import React, {useState} from "react";
import Footer from "../../../components/footer/footer";
import "./signUp.scss";
import Navigation from "../../../components/navigation/mainNavMenu/navigation"
import Modal from "./Modal/Modal"
import Home from "../../home/home"

/**
 * Renders Sign Up Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function SignUp() {
	const [openModal, setOpenModal] = useState(true)
	const onClose = () => { 
		setOpenModal(false)
	}

	return (
		<>
			<Navigation className="modal-nav"/>
			{/* I didn't need to use stopPropagation() because the modal is outside of the overlay div */}
			<div onClick={onClose} className="overlay">
			</div>
			<Modal open={openModal} onClose={onClose} />
			<Home className="modal-home"/>
		</>
	);
}
