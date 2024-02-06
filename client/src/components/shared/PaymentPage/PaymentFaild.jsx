import { useParams } from "react-router-dom";


const PaymentFaild = () => {
    const {trans_id} = useParams()
    return (
        <div>
            payment faild
        </div>
    );
};

export default PaymentFaild;