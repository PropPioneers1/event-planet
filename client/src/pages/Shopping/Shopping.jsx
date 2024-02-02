import Container from "../../components/ui/Container";
import { FaShoppingCart, FaEye, FaStar } from "react-icons/fa";
import ShoppingBanner from "./ShoppingBanner/ShoppingBanner";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Shopping = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: shopItem = [] } = useQuery({
    queryKey: ["shopItems"],
    queryFn: async () => {
      const res = await axiosSecure.get("/shop");
      return res.data.result;
    },
  });

  const handlePurchase = (cart) => {
    if (user) {
      const { _id, image, title, price } = cart;

      const cartItem = {
        email: user.email,
        image,
        title,
        price,
      };
      axiosSecure.post(`/shop/shopCart/${_id}`, cartItem).then((res) => {
        if (res.data) {
          Swal.fire({
            title: `${title} added to your cart`,
            text: "You clicked the button!",
            icon: "success",
          });
        }
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "You are not logged in",
        icon: "error",
      });
    }
  };

  return (
    <Container>
      <div>
        <h2 className="mt-20 mb-4 text-3xl text-center text-blue-500 font-serif font-bold">
          Purchase Product
        </h2>
        <ShoppingBanner />
        <div className="divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {shopItem?.map((cart, idx) => (
            <Card key={idx} className="mt-6 border-4 border-blue-500">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={cart.image} alt="card-image" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {cart?.title}
                </Typography>
                <Typography>$ {cart?.price}</Typography>
                <Typography>
                  <span className="flex text-center">
                    {cart?.rating} <FaStar className="mt-1" />
                  </span>
                </Typography>
                <Typography>{cart?.description}</Typography>
              </CardBody>
              <CardFooter className="pt-0 flex gap-2">
                <button className="btn btn-outline btn-success">
                  <FaEye /> Details
                </button>
                <button
                  onClick={() => handlePurchase(cart)}
                  className="btn btn-outline btn-secondary"
                >
                  <FaShoppingCart /> Add to cart
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Shopping;
