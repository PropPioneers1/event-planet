/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../../api/UserRequests";
import useAuth from "../../hooks/useAuth";

const Conversation = ({ data, currentUser, online }) => {
	const [userData, setUserData] = useState(null);
	const { user } = useAuth();
	const dispatch = useDispatch();

	useEffect(() => {
		const userId = data.members.find((id) => id !== currentUser);
		const getUserData = async () => {
			try {
				const { data } = await getUser(userId);
				setUserData(data);
				dispatch({ type: "SAVE_USER", data: data });
			} catch (error) {
				console.log(error);
			}
		};

		getUserData();
	}, [currentUser, data?.members, dispatch]);

	console.log("User Data Is", userData);
	console.log("User Data Is", getUser);

	return (
		<>
			<div className="follower conversation">
				<div>
					{online && <div className="online-dot"></div>}
					<img
						src={user?.photoURL && user?.photoURL}
						alt="Profile"
						className="followerImage"
						style={{ width: "50px", height: "50px" }}
					/>
					<div className="name" style={{ fontSize: "0.8rem" }}>
						<span>
							{userData?.firstname} {userData?.lastname}
						</span>
						<span style={{ color: online ? "#51e200" : "" }}>
							{online ? "Online" : "Offline"}
						</span>
					</div>
				</div>
			</div>
			<hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
		</>
	);
};

export default Conversation;
