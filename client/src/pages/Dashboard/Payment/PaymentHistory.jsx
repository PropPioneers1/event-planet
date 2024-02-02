

const PaymentHistory = () => {

    const paymentHistory = [
        { price: 25.50, transactionId: 'T12345', date: '2024-01-01', status: 'Successful' },
        { price: 40.20, transactionId: 'T12346', date: '2024-01-05', status: 'Failed' },
        { price: 15.75, transactionId: 'T12347', date: '2024-01-10', status: 'Pending' },
        { price: 60.00, transactionId: 'T12348', date: '2024-01-15', status: 'Successful' },
        { price: 12.30, transactionId: 'T12349', date: '2024-01-20', status: 'Successful' },
        { price: 35.80, transactionId: 'T12350', date: '2024-01-25', status: 'Failed' },
        { price: 50.45, transactionId: 'T12351', date: '2024-01-30', status: 'Successful' },
        { price: 18.90, transactionId: 'T12352', date: '2024-02-05', status: 'Pending' },
        { price: 42.60, transactionId: 'T12353', date: '2024-02-10', status: 'Successful' },
        { price: 28.75, transactionId: 'T12354', date: '2024-02-15', status: 'Failed' }
    ];



    return (
        <div className="p-10 bg-white">
            <h2 className="text-2xl font-bold my-6">Total Payments: {paymentHistory.length}</h2>
            <div className="bg-white">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-neutral text-xl">
                                <th>#</th>
                                <th>Price</th>
                                <th>Transition Id</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-base">
                            {
                                paymentHistory?.map((item, idx) => <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>${item?.price}</td>
                                    <td>{item?.transactionId}</td>
                                    <td>{item?.date}</td>
                                    <td>{item?.status}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;