import { useState } from "react";
import { uploadImage } from "../../../api/utlis";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const CreateBlog = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [category, setCategory] = useState("");
  const { user } = useAuth();

  const getImageUrl = (event) => {
    console.log("working");
    let imageLink = URL.createObjectURL(event.target.files[0]);
    setImagePreview(imageLink);
  };

  const handleBlog = async (event) => {
    event.preventDefault();
    const form = event.target;
    const post = form.post.value;
    const image = form.imageFile.files[0];
    const title = form.title.value;

    const imageUpload = await uploadImage(image);

    const blog = {
      title,
      post,
      blogImg: imageUpload?.data?.display_url,
      category,
      likes: 0,
      comments: [],
      postedTimestamp: new Date(),
      user: {
        name: user?.displayName,
        email: user?.email,
        userImage: user?.photoURL,
      },
    };

    console.log(blog);

    try {
      const { data } = await axios.post(
        "https://server-orpin-alpha.vercel.app/blog",
        blog
      );
      console.log(data);
      toast.success(data?.message);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className=" min-h-screen flex justify-center  bg-neutral">
      <div className="w-[500px] border shadow-xl rounded p-4 bg-white">
        <h2 className="text-3xl font-bold text-center border-b py-2">
          Create Blog
        </h2>
        {/* User logo and name */}
        <div className="avatar flex items-center gap-2 py-2">
          <div className="w-12 rounded-full">
            <img src={user?.photoURL} />
          </div>
          <p className="text-xl">{user?.displayName}</p>
        </div>
        <form onSubmit={handleBlog}>
          {/* Post area */}
          <textarea
            name="post"
            placeholder={`What's on your mind, ${user?.displayName}?`}
            className="input px-0 w-full mb-6 focus:outline-none focus:border-none"
            required
          ></textarea>
          {/* Select image and preview */}
          <div className="w-full min-h-[150px] flex items-center justify-center">
            <label
              htmlFor="image-file"
              className="min-h-40 w-full border text-center rounded-2xl"
            >
              <input
                onChange={getImageUrl}
                name="imageFile"
                className="hidden"
                type="file"
                id="image-file"
                required
              />
              <div
                className="flex flex-col items-center justify-center h-64"
                style={{
                  backgroundImage: `url("${imagePreview}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {!imagePreview && (
                  <img
                    src="https://i.ibb.co/chQCG2h/upload-icon.png"
                    alt="Image Preview"
                    className="object-fill h-[100px] w-[100px]"
                  />
                )}
                <p className={imagePreview ? "hidden" : "block"}>
                  Drag and Drop or click here to upload image
                </p>
              </div>
            </label>
          </div>
          {/* input for title */}
          <input
            type="text"
            name="title"
            placeholder="Write A Title For Your Blog"
            className="input input-bordered w-full focus:outline-none mt-6 mb-2"
            required
          />
          {/* Category */}
          <select
            className="select select-bordered w-full my-4 focus:border-none"
            onChange={(e) => setCategory(e.target.value)}
            defaultValue={category}
            required
          >
            <option disabled value="">
              Select Event Category
            </option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
            <option value="Sport">Sports</option>
            <option value="Fashion">Fashion</option>
            <option value="Food Festival">Food Festival</option>
            <option value="Innovation Showcase">Innovation Showcase</option>
          </select>

          <div className="flex  justify-center">
            <button
              type="submit"
              className="btn w-full bg-primary text-white my-6"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
