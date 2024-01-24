import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Modal.css";

const CategoryCard = ({ label, icon: Icon, idx }) => {
	return (
		<>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			<button
				onClick={() =>
					document.getElementById(`my_modal_${idx}`).showModal()
				}
			>
				<div className="flex cursor-pointer flex-col justify-center rounded-lg items-center bg-neutral px-1 py-10 group hover:bg-primary transition-all">
					<div>
						{
							<Icon
								className="text-primary group-hover:text-white"
								size={36}
							/>
						}
					</div>
					<div className="text-lg text-gray-600 group-hover:text-white font-medium mt-4">
						{label}
					</div>
				</div>
			</button>
			<dialog
				id={`my_modal_${idx}`}
				className="modal modal-bottom sm:modal-middle"
			>
				<div
					style={{
						backgroundImage:
							"url(https://i.ibb.co/2gbq9qC/image-1.jpg)",
					}}
					className="modal-box modal-overlay bg-cover h-[300px]"
				>
					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<button className="btn font-title btn-sm modal-button">
								Close
							</button>
						</form>
					</div>
					<h1 className="text-center text-3xl font-medium font-title text-white py-5">
						{label}
					</h1>
					<div className="flex justify-center">
						<Link to={`/select-way/${label}`}>
							<button className="btn modal-button font-title">
								Create Event
							</button>
						</Link>
						<button className="btn ml-5 font-title modal-button">
							Book Now Event
						</button>
					</div>
				</div>
			</dialog>
		</>
	);
};

CategoryCard.propTypes = {
	label: PropTypes.string,
	icon: PropTypes.string,
	idx: PropTypes.number,
};

export default CategoryCard;
