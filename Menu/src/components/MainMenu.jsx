 
 export default function MainMenu(){
    return(
        <div className="grid  grid-rows-3 grid-flow-col gap-4 text-center mt-20">
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </div>

    )
 }

 function Pizza() {
    return (
      <div className="grid grid-cols-2 mx-auto mb-5">
        <div className=" rounded-lg ">
          <img
            src="../public/images/fochaccia.jpg"
            alt="pizza fochaccia"
            className="rounded-full bg-stone-500 shadow-lg shadow-stone-500/100 w-56 "
          />
        </div>
        <div className="mt-20 w-64 text-pretty text-stone-500">
          <p>
            Pizza Focaccia is typically made with a base of olive oil, garlic,
            rosemary, and sea salt, often topped with tomatoes and other fresh
            ingredients.
          </p>
          <p className="mt-5 font-bold"> 10 $</p>
        </div>
      </div>
    );
  }