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
        <div className="bg-neutral">
            <Container>
                <h2 className="text-3xl font-bold text-center py-10">Why Choose Event Planet</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                    {
                        items?.map((item, index) =>
                            <div
                                key={item.title}
                                className="relative border border-primary border-opacity-10 shadow pl-16 p-10 hover:scale-110 hover:bg-slate-50 transition duration-200">
                                <h2
                                    className="text-base font-semibold uppercase text-start mb-6 hover:text-[#3F72AF] transition delay-200">
                                    {item?.title}
                                </h2>
                                <p className="text-start">{item?.description}</p>
                                <div
                                    className="absolute top-8 left-4 flex justify-center items-center h-10 w-10 bg-primary rounded-full text-white font-bold text-center">
                                    0{index + 1}
                                </div>
                            </div>)
                    }

                </div>
            </Container>

        </div>
    );
};

export default WhyChoose;