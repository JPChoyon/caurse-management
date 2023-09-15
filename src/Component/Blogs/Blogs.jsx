import { useEffect } from "react";
import { useState } from "react";
import Bookmarks from "../Bookmarks/Bookmarks";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [caurse, setCaurse] = useState([]);
  const [remain, setRemain] = useState(20);
  const [totall, setTotall] = useState(0);
  const [totallCost, setTotallCost] = useState(0);

  useEffect(() => {
    fetch("../../../public/fake_data/data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleClick = (blog) => {
    const isExist = caurse.find((item) => item.ID == blog.ID);
    let count = blog.Credit;
    let cost = blog.Price;
    if (isExist) {
      return alert("already you added this prodact");
    } else {
      caurse.forEach((item) => {
        count = count + item.Credit;
        cost = cost + item.Price;
      });
      const totalRemaining = 20 - count;
      const totall = cost;
      if (count > 20) {
        alert("you cannot add greater than 20 hour");
      } else {
        setRemain(totalRemaining);
        setCaurse([...caurse, blog]);
        setTotall(count);
        setTotallCost(totall);
      }
    }
  };

  return (
    <div className="md:flex mt-5 gap-3">
      <div className="w-3/4">
        <div className="card-containr grid grid-cols-3 gap-3 mb-5">
          {blogs.map((blogs) => (
            <div key={blogs.ID} className=" bg-base-100 shadow-xl">
              <figure className="px-2 py-2">
                <img src={blogs.ImageURL} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title font-semibold ">
                  {blogs.CourseName}
                </h2>
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
                  <button
                    onClick={() => handleClick(blogs)}
                    className="btn btn-block  bg-[#2F80ED] text-white w-full rounded py-1"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Bookmarks
          caurse={caurse}
          remain={remain}
          totall={totall}
          totallCost={totallCost}
        ></Bookmarks>
      </div>
    </div>
  );
};

export default Blogs;
