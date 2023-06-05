import React, { useState } from "react";
import ADD_ICON from "../../assets/add_icon.svg";

const AccordionText = ({ description = "", setDescription }) => {
	const [accordionOn, setAccordion] = useState(false);

	return (
		<>
			<button
				className="text-caption-tab accordion-btn"
				onClick={() => setAccordion(true)}
			>
				{!accordionOn ? (
					<>
						{description === "" && (
							<img
								src={ADD_ICON}
								alt="icon"
								className="add_icon"
							/>
						)}
						<input
							type="text"
							placeholder="Write a note (Optional)"
							value={description}
							disabled={!accordionOn}
						/>
					</>
				) : (
					<textarea
						type="text"
						value={description}
						className="multiline-input"
						autoFocus="autofocus"
						onChange={(e) => setDescription(e.target.value)}
						placeholder="Write a note (Optional)"
						onKeyDown={(e) => {
							if (e.code === "Enter" || e.code === "Escape") {
								e.preventDefault();
								setAccordion(false);
							}
						}}
					/>
				)}
			</button>
		</>
	);
};

export default AccordionText;
