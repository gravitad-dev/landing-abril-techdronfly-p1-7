import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../data.json';

function Project() {
  const { title, paragraph, products } = data['section-project'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="project">
      <div className="px-4 pt-12 pb-16">
        <div className="flex flex-col text-center w-[98%]">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6">
            {title}
          </h2>
          <p className="px-10 text-lg lg:text-xl lg:mb-8 text-gray-custom text-center mx-auto">
            {paragraph}
          </p>
          <Slider {...settings} className="flex w-[95%] mx-auto">
            {products.map((product, index) => (
              <div key={index} className="container flex pb-8">
                <div
                  className="flex justify-center items-center -mb-12 sm:mb-0"
                  style={{ height: '20rem' }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.alt}
                    className="shadow-only w-3/4 rounded-lg border-2"
                  />
                </div>
                <div
                  key={product.title}
                  className="flex flex-col text-left px-6 bg-white"
                >
                  <div className="flex">
                    {/* <p className="text-[12px] mt-4 font-semibold">
                      {product.title}
                    </p> */}
                  </div>
                  <p className="mt-2 font-semibold text-[20px]">
                    {product.subtitle}
                  </p>
                  <p className="mt-4 opacity-[65%] text-[12px] ">
                    {product.description}
                  </p>
                  <button className="mt-4 border-black border w-max py-2 px-6 rounded-full text-[14px]">
                    {product.button}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Project;
