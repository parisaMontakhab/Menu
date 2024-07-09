import "./App.css";

function App() {
  return (
    <div >
      <HeaderMenu/>
      <MainMenu/>
      <FooterMenu/>
    </div>
  );
}

export default App;


function HeaderMenu (){
  return(
    <div>
      <h1 className="text-5xl text-center font-extrabold text-stone-700 my-10"> Welcome to <span className="text-red-950">"PS"</span> Pizzeria</h1>
      <p className="text-center text-3xl font-medium text-stone-700"> here you can find your favorite pizza and then order it ;) </p>
    </div>
  )
}

function MainMenu (){
  return(
    <div className="grid  grid-rows-3 grid-flow-col gap-4 text-center mt-20">

     <Pizza/>
      <Pizza/>
      <Pizza/>
      <Pizza/>
      <Pizza/>
      <Pizza/>

    </div>
  )
}

function Pizza (){
  return(
    <div className="grid grid-cols-2 mx-auto">
    <div className="w-48 rounded-lg ">
      <img src="../public/images/fochaccia.jpg" alt="pizza fochaccia" className="rounded-full bg-stone-500 shadow-lg shadow-stone-500/100 "/>
    </div>
    <div className="mt-20 w-64 text-pretty text-stone-500">
      <p>Pizza Focaccia is typically made with a base of olive oil, garlic, rosemary, and sea salt, often topped with tomatoes and other fresh ingredients.</p>
      <p className="mt-5 font-bold"> 10 $</p>
    </div>
    

  </div>
    
  )
}


function FooterMenu(){
  return(
    <div>
      <h2> we're open untill 22 come visit us or order online</h2>
      <button> order </button>
    </div>
  )
}