import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../data.json';

function Products() {
  const cards = data['section-products'];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1922,
        settings: {
          slidesToShow: 3,
        },
      },
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
    <section id="products">
      <div
        className="px-4 pb-16"
        style={{
          backgroundSize: 'cover',
          width: '100%',
        }}
      >
        <div className="flex flex-col text-center w-[98%]">
          <Slider {...settings} className="flex min-h-96 p-6 w-[95%] mx-auto">
            {cards.map((card, index) => (
              <div key={index} className="container flex">
                <div
                  className="flex justify-center items-center"
                  style={{ height: '30rem' }}
                >
                  <img
                    src={card.url}
                    alt={card.alt}
                    className="shadow-only-painted"
                  />
                </div>
                <div
                  key={card.id}
                  className="flex flex-col text-left px-6 bg-white"
                >
                  {/* <div className="flex gap-4">
                    <p className="text-[12px] mt-4 font-semibold">
                      {card.epigraph}"
                    </p>
                  </div> */}
                  <p className="mt-2 font-semibold text-[24px] ">
                    {card.title}
                  </p>
                  <p className="mt-4 opacity-[65%] text-[12px] ">
                    {card.paragraph}
                  </p>
                  <p className="mt-4 opacity-[65%] text-[12px] ">
                    {card['line-p']}
                  </p>
                  <button className="mt-4 border-black border w-max py-2 px-6 rounded-full text-[14px]">
                    {card.button}
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

export default Products;
