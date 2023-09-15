import "./bookmarks.css";

const Bookmarks = ({ caurse, totall, remain }) => {
  // console.log(caurse);
  return (
    <div className="text-left bg-white rounded px-4">
      <div className="border-b-2 py-2">
        <h1 className=" text-[#2F80ED] font-semibold">
          Credit Hour Remaining {remain} hr
        </h1>
      </div>
      <div className="border-b-2 py-2">
        <h2 className="text-start text-2xl font-bold py-2">Caurse Name :</h2>
        {caurse.map((blog) => (
          <li className="subj text-[#1C1B1B99]  " key={blog.ID}>
            {blog.CourseName}
          </li>
        ))}
      </div>
      <div className="border-b-2 py-2">
        <h3 className="font-medium">Total Credit Hour : {totall}</h3>
      </div>
    </div>
  );
};

export default Bookmarks;
