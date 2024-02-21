import Container from "../../components/ui/Container";
import { FaShoppingCart, FaEye, FaStar } from "react-icons/fa";
import ShoppingBanner from "./ShoppingBanner/ShoppingBanner";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
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
import {  useState } from "react";
import './Shop.css'
const Shopping = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage,setCurrentPage]=useState(0)

  const { data: shopItem = []} = useQuery({
    queryKey: ["shopItems",{currentPage,itemsPerPage}],
    queryFn: async () => {
      const res = await axiosSecure.get(`/shop?page=${currentPage}&size=${itemsPerPage}`);
      return res.data.result;
    },
  });
  
  
 

  // get total products
  const { data: totalProductsCount = [] } = useQuery({
    queryKey: ["totalProductsCounts"],
    queryFn: async () => {
      const res = await axiosSecure.get('/shop/totalProducts');
      return res.data.count;
    },
  });

  const numberOfPages = Math.ceil(totalProductsCount / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(0);
  };

const handlePreviousPage=()=>{
  if(currentPage>0){
    setCurrentPage(currentPage-1)
  }
}

const handleNextPage=()=>{
  if(currentPage<pages.length-1){
    setCurrentPage(currentPage+1)
  }
}






  const handleAddToCart = (cart) => {
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
      <div className="h-96">
        <h2 className="mt-20 mb-4 text-3xl text-center text-blue-500 font-serif font-bold">
          Purchase Product
        </h2>
        <ShoppingBanner />
        <div className="divider"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {shopItem?.map((cart, idx) => (
            <Card key={idx} className="mt-6 border-4 border-blue-500">
              <CardHeader className="relative mt-2 h-56">
                <img
                  src={cart.image}
                  alt="card-image"
                  className="object-cover w-full h-full"
                />
              </CardHeader>

              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {cart?.title}
                </Typography>
                <Typography>$ {cart?.price}</Typography>
                <Typography>
                  <span className="flex text-center">
                    {cart?.rating} <FaStar className="mt-1 ml-2" />
                     <FaStar className="mt-1" />
                     <FaStar className="mt-1" />
                     <FaStar className="mt-1" />
                     
                     
                  </span>
                </Typography>
                <Typography>{cart?.description.slice(0, 50)}.......</Typography>
              </CardBody>
              <CardFooter className="pt-0 flex flex-row justify-end gap-2">
                <Link to={`/details-shopCart/${cart._id}`}>
                  {" "}
                  <button className="btn btn-outline btn-success">
                    <FaEye /> Details
                  </button>
                </Link>
                <button
                  onClick={() => handleAddToCart(cart)}
                  className="btn btn-outline btn-secondary"
                >
                  <FaShoppingCart /> Add to cart
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="pagination">
          
          <button className="btn btn-outline btn-secondary" onClick={handlePreviousPage}>Previous</button>
          {pages.map((page) => (
            <button key={page} onClick={()=>setCurrentPage(page)} className={currentPage===page && 'selected'}>
              {page}
            </button>
          ))}
          <button className="btn btn-outline btn-secondary" onClick={handleNextPage}>Next</button>
          <select
            className="btn btn-outline btn-secondary"
            value={itemsPerPage}
            onChange={handleItemsPerPage}
            name=""
            id=""
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </Container>
  );
};

export default Shopping;
