import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../../../components/ui/Container";


const WhyChoose = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("./whyChoose.json")
            .then(res => {
                console.log(res.data)
                setItems(res.data)
            })
    }, [])

    return (
        <div className="bg-[#EEEEEE]">
            <Container>
                <h2 className="text-3xl font-bold text-center my-10">Why Choose Event Planet</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                    {
                        items?.map(item=> <div 
                            key={item.title}
                            className="border-2 p-10 hover:scale-110 hover:bg-slate-50 transition duration-200"
                            >
                                <h2 className="text-xl font-medium text-start mb-4 hover:text-[#3F72AF] transition duration-200">{item?.title}</h2>
                                <p className="text-start">{item?.description}</p>
                            </div>)
                    }

                </div>
            </Container>

        </div>
    );
};

export default WhyChoose;