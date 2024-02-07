import { useParams } from "react-router-dom";


const PaymentSuccess = () => {
    const {tran_id} = useParams()
    console.log(tran_id);
    return (
        <div className="mt-44">
            payment success{tran_id}
        </div>
    );
};

export default PaymentSuccess;