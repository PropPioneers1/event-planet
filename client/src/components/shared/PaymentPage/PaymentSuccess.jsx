import { useParams } from "react-router-dom";


const PaymentSuccess = () => {
    const {trans_id} = useParams()
    return (
        <div>
            payment success
        </div>
    );
};

export default PaymentSuccess;