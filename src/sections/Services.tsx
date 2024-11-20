import CategoryCart from "../components/CategoryCart";
import { category } from "../constants";

const Services = () => {
  return (
    <section
      id="about-us"
      className="px-[34px] sm:px-[120px] mt-[100px] sm:mt-[200px] w-full relative"
    >
      <p className="font-poppins font-semibold text-lg text-center uppercase text-text-color">
        Category
      </p>
      <h2 className="font-volkhov capitalize font-bold text-5xl mt-3 text-center">
        We offer best Services
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-14">
        {category.map((item, index) => (
          <CategoryCart index={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Services;
