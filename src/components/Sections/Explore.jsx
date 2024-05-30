import data from "../../data.json";

function Explore() {
  return (
    <section id="explore">
      <div className="py-12 sm:py-40 flex bg-black max-w-[100vw]">
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center text-center px-8 gap-20 sm:gap-6">
          <div className="flex flex-col w-full sm:w-[16vw] space-y-8 sm:space-y-24 text-white">
            {data["section-explore"].column1.map((item, index) => (
              <div key={index} className="flex-col space-y-1">
                <p className="text-xl font-bold">{item.title}</p>
                <p>{item.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="h-auto">
            <img
              src={data["section-explore"].bg.url}
              alt={data["section-explore"].bg.alt}
            />
          </div>
          <div className="flex flex-col w-full sm:w-[16vw] space-y-8 sm:space-y-24 text-white">
            {data["section-explore"].column2.map((item, index) => (
              <div key={index} className="flex-col space-y-1">
                <p className="text-xl font-bold">{item.title}</p>
                <p className="">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
