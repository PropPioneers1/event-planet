import "./LogoSearch.css";
import { UilSearch } from "@iconscout/react-unicons";
const LogoSearch = () => {
	return (
		<div className="LogoSearch">
			<img
				className="w-24 h-24"
				src="https://i.ibb.co/W0txKvj/eventlogo.jpg"
				alt=""
			/>
			<div className="Search">
				<input type="text" placeholder="#Explore" />
				<div className="s-icon">
					<UilSearch />
				</div>
			</div>
		</div>
	);
};

export default LogoSearch;
