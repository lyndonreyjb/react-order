import food from "../../assets/food.jpg";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <div className="p-2 flex flex-col w-full max-w-5xl mx-auto">
        <header className="flex w-full">
          <div className="h-24">
            <img src={logo} className="h-full w-full object-contain" />
          </div>
        </header>
        <div className="relative">
          <div className="w-full h-96 overflow-hidden">
            <img
              src={food}
              alt="food on table"
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg "></div>
          </div>
          <section className="absolute top-0 left-0 p-4 w-full h-full flex flex-col justify-center ">
            <div className="md:w-1/2 rounded-md p-4 text-white">
              <h2 className="text-6xl uppercase font-bold text-white shadow-lg">
                Satisfy your cravings!
              </h2>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Header;
