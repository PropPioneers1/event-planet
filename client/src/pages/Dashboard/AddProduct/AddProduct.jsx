import axios from "axios";
import { uploadImage } from "../../../api/utlis";
import SectionTitle from "../../../components/ui/SectionTitle/SectionTitle";
import toast from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const localImage = form.image.files[0];
    const description = form.description.value;

    form.reset();

    const imageUpload = await uploadImage(localImage);

    const product = {
      title,
      quantity,
      price,
      rating,
      image: imageUpload?.data?.display_url,
      description,
    };

    try {
      const { data } = await axios.post(
        "https://event-planet-server.vercel.app/shop",
        product
      );
      toast.success(data?.message);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className=" bg-neutral h-screen">
      <div className="bg-white p-6">
        <SectionTitle title="Add Product" />
        <form onSubmit={handleAddProduct} className="p-4 mt-6">
          {/* Raw-1 */}
          <div className="lg:flex w-full gap-4 mb-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">Name</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Please Enter Product Name"
                className="input input-bordered focus:outline-none"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Please Enter Product Quantity"
                className="input input-bordered focus:outline-none"
                required
              />
            </div>
          </div>
          {/* Raw-2 */}
          <div className="lg:flex w-full gap-4 mb-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Please Enter Product Price"
                className="input input-bordered focus:outline-none"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                placeholder="Please Enter Product Rating"
                className="input input-bordered focus:outline-none"
                required
              />
            </div>
          </div>
          {/* Raw-3 */}
          <div className="lg:flex w-full gap-4 mb-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered focus:outline-none h-16"
                placeholder="Please Enter Description"
              ></textarea>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Choose A Product Image
                </span>
              </label>
              <input
                type="file"
                name="image"
                className="file-input file-input-bordered w-full h-16"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn bg-primary text-white w-full my-4"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
