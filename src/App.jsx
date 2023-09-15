import "./App.css";
import Blogs from "./Component/Blogs/Blogs";

function App() {
  return (
    <div>
      
      <header>
        <h1 className="font-black text-center text-4xl border-b-2 p-2">
          Course Registration
        </h1>
      </header>
      <main>
        <Blogs></Blogs>
      </main>
    </div>
  );
}

export default App;
