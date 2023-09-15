import "./bookmarks.css";
const Bookmarks = ({ caurse }) => {
  console.log(caurse);
  return (
    <div className="">
      <h2 className="text-start text-2xl font-bold">Caurse Name :</h2>
      {caurse.map((blogs) => (
        <li className="subj text-[#1C1B1B99] text-left" key={blogs.ID}>
          {blogs.CourseName}
        </li>
      ))}
    </div>
  );
};

export default Bookmarks;
