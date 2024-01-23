import { useEffect, useState } from "react";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";
import axios from "axios";
import Blog from "./BlogsComponents/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("./blogs.json")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const categories = blogs?.map((blog) => blog.category);

  console.log(categories);
  return (
    <div className="py-20">
      <SectionTitle title="Blogs" />
      <Container>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-1 border">
            <h2 className="font-lora text-2xl font-bold">Blogs</h2>
            <div>
              <div className="grid grid-cols-2">
                {categories?.map((category, idx) => (
                  <div key={idx} className="py-1">
                    <button className="border px-5 py-2">{category}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 border">
            <form>
              <input type="Search blogs..." />
              <button>Search</button>
            </form>
            {blogs?.map((blog, idx) => (
              <Blog key={idx} blog={blog} />
            ))}
          </div>
          <div className="col-span-1"></div>
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
