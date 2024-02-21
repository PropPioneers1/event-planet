import { useParams } from "react-router-dom";
// import { paymentSuccess } from "../../../api/payment";


const PaymentSuccess = async() => {
    const {tran_id} = useParams()
    // const data = await paymentSuccess(tran_id)
    // console.log(data);
    console.log(tran_id);
    return (
        <div className="mt-44">
            payment success{tran_id}
        </div>
    );
};

export default PaymentSuccess;