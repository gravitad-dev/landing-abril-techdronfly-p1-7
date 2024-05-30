import data from '../data.json';

function Footer() {
  return (
    <footer className="bg-black overflow-hidden">
      <div className="text-white mx-auto flex flex-col space-y-6 sm:space-y-0 mt-8 sm:flex-row items-center justify-around">
        <a href="/">
          <img
            src={data['logo-white'].url}
            alt={data.logo.alt}
            width={200}
            className="cursor-pointer mr-2 hover:animate-rotate-x hover:animate-duration-[1500ms]"
          />
        </a>
        <p className="flex italic text-xl md:text-2xl tracking-widest hover:animate-rotate-x hover:animate-duration-[1500ms] cursor-default">
          &quot;{data['section-footer'].slogan}&quot;
        </p>
        <div className="flex items-center text-white">
          <a href={data.blog.url} target="_blank" className="ml-auto">
            <div className="text-center hover:animate-rotate-x hover:animate-duration-[1500ms] text-white cursor-pointer flex items-center gap-2 justify-center w-full">
              <img
                src={data.blog.icon}
                alt={`${data.blog.title} icon`}
                style={{ filter: 'invert(1)' }}
                className="w-8"
              />
              <div className="flex flex-col text-left justify-center">
                <p className="text-md md:text-lg font-bold">
                  {data.blog.title}
                </p>
                <h6 className="hidden sm:flex text-[12px] -mt-1 text-gray_default">
                  {data.blog.text}
                </h6>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="flex w-full items-center justify-around px-4 gap-6 text-xs">
        <p className="mt-6">{data['section-footer'].copy}</p>
      </div>
    </footer>
  );
}

export default Footer;
