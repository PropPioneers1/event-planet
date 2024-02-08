

const EventRequests = () => {
    return (
        <div>
            {/* Upcoming events */}
            <div className="overflow-x-auto my-12 bg-white p-6 rounded-md">
                <h2 className="text-2xl font-bold text-[#707070] my-6">Event Requests</h2>
                <table className="table  ">
                    {/* head */}
                    <thead>
                        <tr className="rounded-none bg-neutral text-lg" >
                            <th>#</th>
                            <th>Event Name</th>
                            <th>Speakers</th>
                            <th>Date</th>
                            <th>Venue</th>
                            <th>Organizer</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="font-bold text-base text-[#707070]">
                    
                             <tr >
                                <th>1</th>
                                <td>
                                    <p className="hover:text-primary">Summer Beats Music Festival</p>
                                </td>
                                <td><div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-12">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar placeholder">
                                        <div className="w-12 bg-secondary text-neutral-content">
                                            <span>+99</span>
                                        </div>
                                    </div>
                                </div></td>
                                <td>2024-08-20</td>
                                <td>Sunshine Park</td>
                                <td>EventX Productions</td>
                                <td>Pending</td>
                                <td></td>
                            </tr>
                      

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EventRequests;