import ChatBot from "react-simple-chatbot";

const Chat = () => {
	return (
		<div>
			<ChatBot
				steps={[
					{
						id: "1",
						message:
							"Hello! Welcome to the Event Management Chatbot. What's your name?",
						trigger: "2",
					},
					{
						id: "2",
						user: true,
						trigger: "3",
					},
					{
						id: "3",
						message:
							"Hi {previousValue}! How can I assist you with your event planning?",
						trigger: "4",
					},
					{
						id: "4",
						options: [
							{
								value: 1,
								label: "Tell me about upcoming events",
								trigger: "5",
							},
							{
								value: 2,
								label: "Help with event registration",
								trigger: "6",
							},
							{
								value: 3,
								label: "Provide information about venues",
								trigger: "7",
							},
						],
					},
					{
						id: "5",
						message:
							"Sure! We have some exciting events coming up. Would you like details about a specific event?",
						trigger: "8",
					},
					{
						id: "6",
						message:
							"Great! I can help you with event registration. Could you specify the event you're interested in?",
						trigger: "8",
					},
					{
						id: "7",
						message:
							"Sure thing! What type of venue are you looking for, and in which location?",
						trigger: "8",
					},
					{
						id: "8",
						user: true,
						trigger: "9",
					},
					{
						id: "9",
						message:
							"Awesome! I'll get the information for you. Anything else you'd like assistance with?",
					},
				]}
				floating={true}
			/>
		</div>
	);
};

export default Chat;
