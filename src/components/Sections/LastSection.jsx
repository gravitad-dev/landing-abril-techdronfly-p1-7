import { useState } from 'react';
import data from '../../data.json';
import { Link } from 'react-scroll';

function LastSection() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    if (inputValue.trim() === '') {
      setIsValidEmail(true);
      setEmailError('');
    } else {
      validateEmail(inputValue);
    }
  };

  const validateEmail = (input) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(input);
    setIsValidEmail(isValid);
    setEmailError(isValid ? '' : data['section-contact'].error);
  };

  const handleButtonClick = () => {
    if (isValidEmail && email) {
      window.location.href = `mailto:${data.contact.email}?subject=Contact&body=Email contact: ${email}`;
      setEmail('');
    } else {
      alert(emailError || data['section-contact'].error);
    }
  };

  return (
    <>
      <section id="accessories">
        <div className="flex-col items-start justify-center max-w-[100vw] pt-6 bg-white">
          <h2 className="text-3xl pt-10 sm:px-20 lg:text-4xl font-bold text-center mb-6">
            {data['section-last'].title}
          </h2>
          <p className="px-10 pb-10 text-lg sm:w-2/3 lg:w-[80%] lg:text-[1.4rem] text-center mx-auto">
            {data['section-last'].subtitle}
          </p>
          <img
            src={data['section-last'].image.url}
            alt={data['section-last'].image.alt}
            className="w-4/5 mx-auto"
          />
        </div>
      </section>
      <section id="contact">
        <div className="flex mt-6"></div>
        <div className="xl:px-[8vw] flex h-[200px] sm:h-[150px] text-xl sm:text-xl lg:text-base 2xl:text-xl max-w-[100vw] justify-between items-center md:gap-12 2xl:gap-44 bg-black px-4">
          <div className="hidden md:flex items-center w-1/2 gap-4 mr-auto font-semibold">
            {data['section-header'].navbar.map((item, index) => (
              <Link
                to={item.href}
                spy={false}
                smooth={true}
                duration={500}
                key={index}
                offset={-80}
                className={`cursor-pointer ${item.id === 8 ? 'hidden' : ''}`}
              >
                <p
                  className="text-white hover:text-green-custom text-md sm:text-[12px] lg:text-[16px] 2xl:text-xl w-max"
                  key={item.id}
                >
                  {item.text}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col text-center mx-auto w-full">
            <div className="flex flex-col md:flex-row space-y-4 sm:gap-4 sm:space-y-0 items-center text-center">
              <p className="text-[16px] font-semibold flex md:hidden px-4 w-full text-white justify-center">
                {data['section-contact'].text}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-center w-full sm:w-5/6 md:w-full sm:pl-6 mx-auto 2xl:w-full">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="mx-auto w-2/3 sm:w-2/3 text-xs sm:text-md text-center sm:text-left bg-transparent text-white py-2 px-5 border sm:border-r-0 sm:rounded-r-none placeholder-gray-400 rounded-md"
                  placeholder={data['section-contact'].input_placeholder}
                />
                <button
                  className="min-w-max w-1/3 sm:w-2/5 mx-auto text-xs sm:text-md text-black font-bold bg-white py-2 px-5 border border-white rounded-md sm:rounded-l-none"
                  onClick={handleButtonClick}
                >
                  {data['section-contact'].button}
                </button>
              </div>
            </div>
            <div className="flex relative mx-auto w-full">
              {emailError && (
                <p
                  style={{
                    textShadow: '0.5px 0.5px 1px rgba(0, 0, 0, 0.5)',
                    left: 0,
                    right: 0,
                    margin: 'auto',
                  }}
                  className="absolute pt-0 sm:pt-1 md:pt-2 text-red-400 text-sm"
                >
                  {data['section-contact'].error}
                </p>
              )}
            </div>
          </div>
        </div>
        <hr className="bg-green-custom h-[1px] border-none min-w-[90vw] left-[5%] absolute 2xl:hidden" />
      </section>
    </>
  );
}
export default LastSection;
