import data from '../../data.json';
function Future() {
  return (
    <section id="future">
      <div className="py-10 p-2 flex flex-col text-center bg-black">
        <h2 className="text-3xl pt-10 lg:text-4xl font-bold text-center text-white mb-6">
          {data['section-future'].title}
        </h2>
        <p className="sm:px-10 pb-10 text-lg sm:w-2/3 lg:w-[80%] lg:text-[1.4rem] text-white text-center mx-auto">
          {data['section-future'].subtitle}
        </p>
        <div className="mx-auto flex flex-col sm:flex-row items-center gap-4 2xl:mx-auto sm:gap-8 xl:gap-0 justify-start pt-12">
          <div className="animate-bounce animate-duration-[5000ms] animate-alternate-reverse">
            <img
              src={data['section-future'].image.url}
              alt={data['section-explore'].bg.alt}
              className="mx-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Future;
