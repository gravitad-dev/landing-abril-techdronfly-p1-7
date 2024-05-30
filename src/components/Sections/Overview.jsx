import data from "../../data.json";
import { IoPlaySharp } from "react-icons/io5";

function Overview() {
  return (
    <section id="overview">
      <div className="relative flex bg-black max-w-[100vw]">
        <img
          src={data["section-overview"].bg.url}
          alt={data["section-overview"].bg.alt}
          className="p-8 sm:p-12 xl:p-20 w-full"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="w-40 h-40 p-3 rounded-full bg-white bg-opacity-20 transition duration-300 ease-in-out hover:bg-opacity-30 active:bg-opacity-40 border">
            <IoPlaySharp color="white" size={120} className="pl-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Overview;
