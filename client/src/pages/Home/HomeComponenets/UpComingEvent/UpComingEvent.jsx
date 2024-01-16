import Container from "../../../../components/ui/Container";


const UpComingEvent = () => {
    return (
        <div className="bg-natural">
            <Container>
               {/* count down time */}
               <div className="flex justify-between items-center">
                <div>
                    <p className="bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-white px-1 rounded">Next</p>
                    <h3>UPCOMING EVENT</h3>
                </div>
                <div>
                    <h3>Monday Prayer</h3>
                    <p>January 22-2024</p>
                </div>
                <div className="flex gap-3 text-center justify-end items-center">
                    <div>
                    <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4 bg-gradient-to-t from-cyan-500 to-blue-500">5</div>
                    <h3>Days</h3>
                    </div>
                    <div>
                    <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4">5</div>
                    <h3>Hrs</h3>
                    </div>
                    <div>
                    <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4">5</div>
                    <h3>Mins</h3>
                    </div>
                    <div>
                    <div className="bg-primary rounded-sm text-neutral-300 font-medium p-4">5</div>
                    <h3>Secs</h3>
                    </div>
                </div>
                <div></div>
               </div>
            </Container>
        </div>
    );
};

export default UpComingEvent;