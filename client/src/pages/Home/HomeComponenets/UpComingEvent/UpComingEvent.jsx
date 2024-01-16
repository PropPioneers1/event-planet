import Container from "../../../../components/ui/Container";

const UpComingEvent = () => {
  const image = "https://i.ibb.co/QFrKPX3/birthday.jpg";
  return (
    <div className="">
      <div className="bg-natural">
        <Container>
          {/* count down time */}
          <div className="flex justify-between items-center">
            <div>
              <p className="bg-gradient-to-r from-cyan-500 to-blue-600 inline-block text-white px-1 rounded">
                Next
              </p>
              <h3 className="font-medium text-lg">UPCOMING EVENT</h3>
            </div>
            <div>
              <h3 className="font-medium text-lg">Monday Event</h3>
              <p>January 22-2024</p>
            </div>
            <div className="flex gap-8 text-center justify-end items-center">
              <div>
                <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4">
                  90
                </div>
                <h3>Days</h3>
              </div>
              <div>
                <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4">
                  12
                </div>
                <h3>Hrs</h3>
              </div>
              <div>
                <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4">
                  10
                </div>
                <h3>Mins</h3>
              </div>
              <div>
                <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4">
                  40
                </div>
                <h3>Secs</h3>
              </div>
            </div>
            <div>
              <button className="btn bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded text-white font-medium">
                All Upcoming Event
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* up coming event card maping */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <div className="relative group bg-slate-400 p-4 rounded overflow-hidden">
            <img className="rounded relative w-full" src={image} alt="Event" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300">
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded">Booked now</button>
            </div>
            {/* Show price at the top */}
            <div className="absolute top-7 right-7 bg-opacity-60 rounded text-white font-bold p-2 bg-primary">
              Price $500 USD
            </div>

            <div className="">
              <div className=" text-white p-4">
                <div className="text-slate-300 my-2">
                  <p>date || time</p>
                </div>
                <p className="text-white">event name</p>
                <p className="text-white">description</p>
                <a href="" className="text-white hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          {/*  */}




          <div className="relative group bg-slate-400 p-4 rounded overflow-hidden">
            <img className="rounded relative w-full" src={image} alt="Event" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300">
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded">Booked now</button>
            </div>
            {/* Show price at the top */}
            <div className="absolute top-7 right-7 bg-opacity-60 rounded text-white font-bold p-2 bg-primary">
              Price $500 USD
            </div>

            <div className="">
              <div className=" text-white p-4">
                <div className="text-slate-300 my-2">
                  <p>date || time</p>
                </div>
                <p className="text-white">event name</p>
                <p className="text-white">description</p>
                <a href="" className="text-white hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>


          <div className="relative group bg-slate-400 p-4 rounded overflow-hidden">
            <img className="rounded relative w-full" src={image} alt="Event" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300">
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded">Booked now</button>
            </div>
            {/* Show price at the top */}
            <div className="absolute top-7 right-7 bg-opacity-60 rounded text-white font-bold p-2 bg-primary">
              Price $500 USD
            </div>

            <div className="">
              <div className=" text-white p-4">
                <div className="text-slate-300 my-2">
                  <p>date || time</p>
                </div>
                <p className="text-white">event name</p>
                <p className="text-white">description</p>
                <a href="" className="text-white hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>



          <div className="relative group bg-slate-400 p-4 rounded overflow-hidden">
            <img className="rounded relative w-full" src={image} alt="Event" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300">
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded">Booked now</button>
            </div>
            {/* Show price at the top */}
            <div className="absolute top-7 right-7 bg-opacity-60 rounded text-white font-bold p-2 bg-primary">
              Price $500 USD
            </div>

            <div className="">
              <div className=" text-white p-4">
                <div className="text-slate-300 my-2">
                  <p>date || time</p>
                </div>
                <p className="text-white">event name</p>
                <p className="text-white">description</p>
                <a href="" className="text-white hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>


        </div>
        
      </Container>
    </div>
  );
};

export default UpComingEvent;
