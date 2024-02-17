import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../../../components/ui/Container";
import { FaCalendar, FaHandshake, FaHatWizard, FaLocationArrow, FaLocationCrosshairs, FaPeopleArrows, FaStar, FaTeamspeak, FaWhatsapp } from "react-icons/fa6";
import SectionHeading from "../../../../components/shared/SectionHeading/SectionHeading";
import { FaGlassCheers } from "react-icons/fa";
import { GiBrain, GiTeamIdea } from "react-icons/gi";
import { AiOutlineSolution } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";

const WhyChoose = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("./Advantages.json")
            .then(res => {
                setItems(res.data)
            })
    }, [])

    const iconMap = {
        1: <FaHandshake />,
        2: <FaStar />,
        3: <FaGlassCheers />,
        4: <GiBrain />,
        5:  <FaLocationCrosshairs/>,
        6:<MdSupportAgent />,
        7: < AiOutlineSolution/>,
        8: <GiTeamIdea />
    };

    return (
        <div className="bg-neutral p-4 mb-10">
            <Container>
                <SectionHeading
                    colortitle='text-[rgb(255 255 255 / var(--tw-text-opacity))]'
                    align="text-center"
                    title="Why Choose US"
                    normalSubTitleWord="OUR "
                    boldSubTitleWord=" ANVANTAGES"
                    colorboldmrsub='text-accent'
                    colornormrsub='text-black'
                />
           <div className="grid grid-cols-1 md:grid-cols-2 justify-center align-middle items-center ms-auto ml-16 md:ml-2
           lg:grid-cols-4 gap-6">
    {items?.map((item, index) => (
        <div
            key={index}
            className="relative border border-opacity-10 py-16 shadow hover:scale-110 hover:bg-accent transition duration-300 h-64 w-64 text-center flex flex-col justify-center group"
        >
            <div className="text-5xl mx-auto transition w-full h-full flex justify-center align-middle items-center">
                <h1 className="text-center text-accent group-hover:text-white">{iconMap[item.id]}</h1>
            </div>
            <h1 className="text-center text-black font-bold group-hover:text-white  pt-5">{item.title}</h1>
            <p className="text-center group-hover:text-white">{item.description}</p>
        </div>
    ))}
</div>

            </Container>
        </div>
    );
};

export default WhyChoose;
