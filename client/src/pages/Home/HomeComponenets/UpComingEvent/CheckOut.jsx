import Container from "../../../../components/ui/Container";
import nagad from '../../../../../src/assets/payment-methods-logo/nagad.png';
import bkash from '../../../../../src/assets/payment-methods-logo/bkash.png'
import rokect from '../../../../../src/assets/payment-methods-logo/rocket.png'
import paypal from '../../../../../src/assets/payment-methods-logo/paypal.png'
// import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";
import { signleCheckOutData } from "../../../../api/event";
const CheckOut = async () => {
  const {id} = useParams()
  console.log(id)
  const data = await signleCheckOutData(id)
  console.log(data)

  const{user}=useAuth()

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const mobile = form.mobile.value;
    const paymentMethod = form.paymentMethod.value;
    const data = {
      mobileNUmber: mobile,
      eventName: 'xyz',
      // productId: 9999999,
      cus_email: user.email,
      currency: paymentMethod, // Fix the typo here
      totalAmount: 20000,
      success_url: 'http://localhost:5000/success/:id',
      fail_url: 'http://localhost:5000/failure'
    };
    axios.post('http://localhost:5000/payment', data)
      .then(response => {
        console.log(response.data);
      window.location.replace(response.data.url)
      })
      .catch(error => {
        console.error(error.message);
    
      });
  
    console.log(data);
  };
  
  return (
    <div className="py-[100px]">
      <Container>
        <div>
          <h2 className="text-2xl font-semibold">CHECKOUT</h2>
          <p className="my-4">Thank you your order has been resived</p>
        </div>
        {/* table */}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="col-span-4">Order Number</th>
                  <th>Date</th>
                  <th>Email</th>
                  <th> Total</th>
                  <th> Payment method</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>5845</th>
                  <td>12.2.2024</td>
                  <td>proppionears1@gmail.com</td>
                  <td>400$</td>
                  <td>Stripe</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Pay with stripe upon delevery*/}
        <div className="my-8">
            <h3>Pay with stripe upon delevery</h3>
            {/* table */}
            <h1 className=" font-medium text-2xl my-5">Order Details</h1>
            <div className="border border-gray-400 rounded">
                <div className="bg-secondary rounded text-white grid grid-cols-4">
                    <div className="col-span-3 border-r-2 p-4 font-medium text-xl">Product</div>
                    <div className="col-span-1 p-4 font-medium text-xl">Total</div>
                </div>
                <div className=" grid grid-cols-4">
                    <div className="col-span-3">
                    <div className="  border-gray-400 border-r border-b p-4 min-h-[150px]">
                    <div>date:</div>
                    <div>VIP:</div>
                    <div>Normal:</div>
                    <div>Location:</div>
                    </div>
                    <div className="p-4 border-gray-400 border-r border-b">Sub Total</div>
                    <div className="p-4 border-gray-400 border-r border-b">Payment Method 👇</div>
                    <div className="flex items-center justify-center gap-5 mt-12">
                      <img className="border border-gray-400" src={bkash} width={100} alt="" />
                      <img className="border border-gray-400" src={nagad} width={100} alt="" />
                      <img className="border border-gray-400" src={rokect} width={100} alt="" />
                      <img className="border border-gray-400" src={paypal} width={115} alt="" />
                    </div>
                    </div>

                    <div className="col-span-1">
                     <div className=" min-h-[150px] border-b border-gray-400 p-4 flex items-center">
                    <div className="">200$</div>
                    </div>
                    <div className="p-4 border-b border-gray-400">300$</div>
                    <div className="p-4 border-b border-gray-400">Stripe</div>
                    <div className="p-3 border-gray-400 border-l">
                   <form onSubmit={handlePaymentSubmit}>
                      <input placeholder="Enter Your Mobile.." type="text" className="appearance-none mb-3 w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="mobile" />
                      <div className="relative">
                      <select name="paymentMethod" className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option>select</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>NUR</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                      <button className=" mt-3 w-full button">Pay
                      </button>
                    </form>
                   </div>
                    </div>
                </div>
            </div>
        </div>

      </Container>
    </div>
  );
};

export default CheckOut;