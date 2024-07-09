import "./App.css";
import HeaderMenu  from "./components/HeaderMenu";
import MainMenu from "./components/MainMenu";

function App() {
  return (
    <div>
      <HeaderMenu/>
      <MainMenu/>
      <FooterMenu />
    </div>
  );
}

export default App;







function FooterMenu() {
  return (
    <div className="text-center my-20">
      <h2 className="text-3xl font-medium text-stone-700 ">
        {" "}
        we're open untill 22 come visit us or order online !
      </h2>
      <button
        className=" transition  ease-in-out delay-150 w-40 bg-red-300 p-4 rounded-3xl mt-10 text-stone-600 font-semibold text-xl drop-shadow-md 
      hover:bg-red-400 hover:text-stone-700 hover:-translate  duration-300 "
      >
        {" "}
        order{" "}
      </button>
    </div>
  );
}
