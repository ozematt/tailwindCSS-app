import { footerData, socialIcon } from "../constants";
import googlePlay from "../assets/Google Play.png";
import appleStore from "../assets/Apple Store.png";

const Footer = () => {
  return (
    <footer className="px-[34px] sm:px-[120px] mt-[100px] sm:mt-[200px] w-full relative h-[200px]">
      <div className="pb-[100px] flex max-xl:flex-col">
        <div className="max-w-[250px] mr-[100px]">
          <h4 className="font-poppins font-medium text-primary text-[44px]">
            Jadoo.
          </h4>
          <p className="font-poppins font-medium text-text-color text-[13px]">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="flex gap-6 max-[523px]:flex-col">
          {footerData.map((section) => (
            <div key={section.title}>
              <h5 className="font-poppins font-bold text-primary text-[21px] pt-[20px] pr-10 max-xl:mt-[50px]  pb-6">
                {section.title}
              </h5>
              {section.items.map((item) => (
                <p
                  key={item}
                  className="font-poppins font-medium text-text-color text-[18px] py-1 hover:text-opacity-40 cursor-pointer"
                >
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="xl:ml-[80px] max-xl:mt-10">
          <div className="flex mt-4 ">
            {socialIcon.map((social) => (
              <img
                key={social.title}
                src={social.icon}
                alt={social.title}
                width={60}
                height={60}
                className="cursor-pointer"
              />
            ))}
          </div>
          <p className="font-poppins font-medium text-text-color text-[20px] my-[20px]">
            Discover our app
          </p>
          <div className="flex gap-2">
            <img
              src={googlePlay}
              alt="google play icon"
              className="cursor-pointer"
            />
            <img
              src={appleStore}
              alt="apple store icon"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <p className="font-poppins font-medium text-text-color text-[14px] text-center pb-[50px]">
        All right reserved@jadoo.co
      </p>
    </footer>
  );
};

export default Footer;
