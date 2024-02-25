import { useEffect, useRef, useState } from "react";
import Container from "../../components/ui/Container";
import emailjs from '@emailjs/browser';
import SectionHeading from "../../components/shared/SectionHeading/SectionHeading";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Footer from "../../components/shared/Footer";
import toast from 'react-hot-toast';
const ContactUs = () => {

    const form = useRef();
    const [selectedCategory, setSelectedCategory] = useState('');
    const [jsonData, setJsonData] = useState([]);
    const [meetData, setMeetData] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());


    // Time related

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    }, []);

    function tick() {
        setCurrentTime(new Date());
    }

    // Function to check if current time is between 9:00 PM and 11:00 PM
    const isTimeInRange = () => {
        const currentHour = currentTime.getHours();
        return currentHour >= 21 && currentHour < 23;
    };


    const handleSubmitClick = () => {
        if (!isTimeInRange()) {
            toast.error("This time is not for the meeting.")
        } else {
            toast.success('Online Video Call Support Are Running!')
        }
    };

    // Time Related 

    useEffect(() => {
        fetch('Ourteam.json')
            .then(res => res.json())
            .then(data => {
                setJsonData(data);
            })
    }, [])

    useEffect(() => {
        fetch('Meet.json')
            .then(res => res.json())
            .then(data => {
                setMeetData(data);
            })
    }, [])




    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };


    const filteredData = jsonData?.filter(event => event?.category === selectedCategory);
    const filteredMeetData = meetData?.filter(item => item?.category === selectedCategory);

    const formData = (e) => {
        e.preventDefault();
        const form = e.target;
        const optionCategory = form.optionCategory.value;
        const question = form.question.value;

        const meetData = { optionCategory, question };
        console.log(meetData);
        setFormSubmitted(true);
        form.reset();
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u09zdz6', 'template_9ps8lsj', form.current, {
            publicKey: 'levwNTMWimh6iO1DX',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div>
            <div className="hero min-h-[50vh] bg-cover mt-12 " style={{ backgroundImage: 'url(https://jthemes.net/themes/html/harmony-event/assets/images/breadcrumb/0.breadcrumb-bg.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-3xl font-bold">CONTACT US NOW</h1>
                        <h1 className="mb-5 text-5xl font-bold">KEEP IN TOUCH</h1>

                    </div>
                </div>
            </div>
            <Container>

                <div>
                    <div>
                        <SectionHeading title="Meet Support" normalSubTitleWord="Contact With Our " boldSubTitleWord="Event Planer"></SectionHeading>
                        <div className="flex justify-center text-white">

                            <div style={{ backgroundImage: 'url(https://i.ibb.co/51qN9bn/image.png) ', backgroundSize: `cover`, backgroundPosition: `center` }} className=" rounded-md   md:w-[600px] bg-base-100 shadow-xl p-20">

                                <form onSubmit={formData} className="max-w-xl mx-auto">
                                    <div className="py-4">
                                        <div id="eventDetails">
                                            <h1 className="text-lg text-center font-title">Contact with our event planer 9:00 PM to 11:00 PM</h1>
                                            {filteredData.map(event => (
                                                <div className="text-center text-lg space-y-1" key={event.id}>
                                                    <h1 className="text-xl mb-3 font-title">Your Meet Supporter</h1>
                                                    <div className="flex justify-center">
                                                        <img className="w-[100px] h-[100px] rounded-full object-cover" src={event.image} alt={event.name} />
                                                    </div>
                                                    <h2>{event.name}</h2>
                                                    <p>{event.professional}</p>
                                                    <p>{event.speciality}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="py-4 space-y-3">
                                            <select value={selectedCategory} onChange={handleCategoryChange} name="optionCategory" className="bg-gray-50 border  text-gray-900 border-primary rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-lg">
                                                <option  >Select Category</option>
                                                {
                                                    jsonData?.map((item, idx) => (<option key={idx}>
                                                        {item?.category}
                                                    </option>))
                                                }
                                            </select>

                                            <textarea name="question" placeholder="Your Question" className="textarea textarea-bordered textarea- w-full max-w-full border-primary text-black" required></textarea>
                                        </div>
                                        <div className="flex justify-around">
                                            <input
                                                type="submit"
                                                disabled={formSubmitted}
                                                className="btn bg-primary text-white hover:bg-primary"
                                                onClick={handleSubmitClick}
                                            />
                                            {selectedCategory ? (
                                                <div>
                                                    {filteredMeetData.map((event, idx) => (
                                                        <a
                                                            key={idx}
                                                            className={`btn ${formSubmitted ? 'bg-primary' : 'bg-gray-300'} border text-white hover:bg-primary`}
                                                            href={event?.meet_link}
                                                            disabled={!formSubmitted || !isTimeInRange()} // Disable if not submitted or not in the time range
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Join Now
                                                        </a>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div>
                                                    <a
                                                        className={`btn ${formSubmitted ? 'bg-primary' : 'bg-gray-300'} text-white hover:bg-primary`}
                                                        disabled={!formSubmitted || !isTimeInRange()} // Disable if not submitted or not in the time range
                                                    >
                                                        Join Now
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </form>

                            </div>



                        </div>
                    </div>
                </div>
            </Container>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16  md:px-4 md:mx-auto max-w-screen-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    {/* Main div */}
                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 md:p-7 rounded-lg text-white" style={{ backgroundImage: 'url(https://i.ibb.co/MG2RBj3/image-2.png)' }} >
                        <div>
                            <form ref={form} onSubmit={sendEmail} className="space-y-8 ">
                                <div>
                                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your Name</label>
                                    <input type="text" name="from_name" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your name" required />

                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
                                    <input type="email" name="from_email" id="email" className="shadow-sm w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
                                    <textarea id="message" name="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                                </div>
                                <button type="submit" value="Send" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Send message</button>
                            </form>
                        </div>
                        <div className=" p-5 space-y-3">
                            <iframe className="sm:mb-10 w-full "
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.062360049844!2d91.81983580698456!3d24.89998049301974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1708321918956!5m2!1sen!2sbd"
                                // width="360"
                                height="280"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                            <div className="flex items-center  gap-5">
                                < FaLocationDot className="w-6 h-6 text-primary" />
                                <p className="text-xl font-title">Level-4, 34, Awal Centre,  Dhaka</p>
                            </div>
                            <div className="flex items-center  gap-5">
                                < FaPhone className="w-6 h-6 text-primary" />
                                <p className="text-xl font-title">+880120000000</p>
                            </div>
                            <div className="flex items-center  gap-5">
                                < MdEmail className="w-6 h-6 text-primary" />
                                <p className="text-xl font-title">proppioneers1@gmail.comx</p>
                            </div>
                        </div>
                    </div>

                    {/* MAin div end */}
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default ContactUs;