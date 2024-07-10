const pizzaList = [
  {
    id: 1,
    img: "./public/images/fochaccia.jpg",
    alt: "Pizza Fochaccia",
    des: " Pizza Focaccia is typically made with a base of olive oil, garlic, rosemary, and sea salt, often topped with tomatoes and other fresh ingredients.",
    price: 10,
  },
  {
    id: 2,
    img: "./public/images/formaggio.jpg",
    alt: "Pizza Formaggio",
    des: " Pizza Formaggio is a delightful blend of multiple cheeses, creating a rich and creamy experience with every bite.",
    price: 15,
  },
  {
    id: 3,
    img: "./public/images/funghi.jpg",
    alt: "Pizza Funghi",
    des: " Pizza Funghi is a savory delight featuring a generous topping of mushrooms, offering a deliciously earthy and umami-rich flavor.",
    price: 12,
  },
  {
    id: 4,
    img: "./public/images/margarita.jpg",
    alt: "Pizza Margarita",
    des: " Pizza Margherita is a classic Italian dish topped with fresh tomatoes, mozzarella cheese, and basil, representing the colors of the Italian flag.",
    price: 9,
  },
  {
    id: 5,
    img: "./public/images/spaghetti.jpg",
    alt: "Pizza Spaghetti",
    des: " Pizza Spaghetti is a unique fusion dish that combines the flavors of pizza and spaghetti, featuring a crust topped with spaghetti, marinara sauce, and melted cheese.",
    price: 12,
  },
  {
    id: 6,
    img: "./public/images/spinaci.jpg",
    alt: "Pizza Spinaci",
    des: " Pizza Spinaci is a nutritious and flavorful choice, topped with fresh spinach, garlic, mozzarella cheese, and often a hint of ricotta or feta, offering a delightful mix of creamy and savory tastes.",
    price: 13,
  },
];

export default function MainMenu() {
  return (
    <ul className="grid  grid-rows-3 grid-flow-col gap-4 text-center mt-20">
      {pizzaList.map((Pizza) => (
        <li key={Pizza.id} className="grid grid-cols-2 mx-auto mb-5">
          <div className=" rounded-lg ">
            <img
              src={Pizza.img}
              alt={Pizza.alt}
              className="rounded-full bg-stone-500 shadow-lg shadow-stone-500/100 w-56 h-64"
            />
          </div>
          <div className="mt-14 w-64 text-pretty text-stone-500">
            <p className="font-bold">
                {Pizza.alt}
            </p>
            <p>
             {Pizza.des}
            </p>
            <p className="mt-5 font-bold"> {Pizza.price} $</p>
          </div>
        </li>
      ))}
    </ul>
  );
}


