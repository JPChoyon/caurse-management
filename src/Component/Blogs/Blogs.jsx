import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("../../../public/fake_data/data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      <div className="card-containr grid grid-cols-3 gap-3">
        {blogs.map((blogs) => (
          <div key={blogs.ID} className=" bg-base-100 shadow-xl">
            <figure className="px-2 py-2">
              <img src={blogs.ImageURL} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-semibold ">{blogs.CourseName}</h2>
              <p className="py-2 px-1 text-[#1C1B1B99] text-left">
                {blogs.Details}
              </p>
              <div className="flex justify-around py-2">
                <div className="flex ">
                  <img
                    src="../../../public/images/dollar-sign 1.svg"
                    alt="dollar icon"
                  />
                  Price : {blogs.Price}
                </div>
                <div className="flex">
                  <img
                    src="../../../public/images/Frame.svg"
                    alt="bookmark icon"
                  />
                  Credit : {blogs.Credit} hr
                </div>
              </div>
              <div className="card-actions">
                <button className="btn btn-block  bg-[#2F80ED] text-white w-full rounded py-1">
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
