import Container from "../../../../components/ui/Container";

const CheckOut = () => {
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
            <div className="border">
                <div className="bg-secondary text-white grid grid-cols-4">
                    <div className="col-span-3 border-r-2 p-4">Product</div>
                    <div className="col-span-1 p-4">Total</div>
                </div>
                <div className=" grid grid-cols-4">
                    <div className="col-span-3">
                    <div className="border-r-2 border-b-2 p-4 min-h-[150px]">
                    <div>date:</div>
                    <div>VIP:</div>
                    <div>Normal:</div>
                    <div>Location:</div>
                    </div>
                    <div className="p-4 border-r-2 border-b-2">Sub Total</div>
                    <div className="p-4 border-r-2 ">Payment Method</div>
                    </div>

                    <div className="col-span-1">
                     <div className=" min-h-[150px] border-b-2 p-4">
                    <div>300</div>
                    </div>
                    <div className="p-4 border-b-2">300</div>
                    <div className="p-4">Stripe</div>
                    </div>
                </div>
            </div>
        </div>

      </Container>
    </div>
  );
};

export default CheckOut;
