import { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import { FaShoppingCart, FaEye,FaStar } from "react-icons/fa";
import ShoppingBanner from "./ShoppingBanner/ShoppingBanner";


const Shopping = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    fetch("shopping.json")
      .then((res) => res.json())
      .then((data) => setShoppingCart(data));
  }, []);

  return (
    <Container>
      <div>
        <h2 className="mt-20 mb-4 text-3xl text-center text-blue-500 font-serif  font-bold">
          Purchase Product
        </h2>
        <ShoppingBanner></ShoppingBanner>
        <div className="divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {shoppingCart?.map((cart, idx) => (
            <div key={idx}>
              <div className="card sm:h-full lg:card-side bg-base-100 shadow-xl w-full  p-4 h-[500px] border-4 border-blue-500">
                <figure>
                  <img src={cart.img} alt="Album" />
                </figure>
                <div className="card-body ">
                  <h2 className="font-bold">{cart.title}</h2>
                  <p>Hey this is new product</p>
                  <div className="badge badge-primary badge-outline text-lg">$ {cart.newPrice}</div>
                  <div className="rating text-center">
                   <span className="mr-1 font-bold">4</span> <FaStar></FaStar>
                  </div>
                  <div className="card-actions justify-center">
                    <button className="btn btn-sm bg-gradient-to-r from-green-100 to-violet-300">
                      Details<FaEye></FaEye>
                    </button>
                    <button className="btn btn-sm bg-gradient-to-r from-yellow-200 to-pink-300">
                      Add To Cart<FaShoppingCart></FaShoppingCart>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Shopping;
