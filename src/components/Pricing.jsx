import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      monthlyPrice: "50$",
      yearlyPrice: "499$",
      green: "/src/assets/green.png",
      red: "/src/assets/red.png",
    },
    {
      name: "Advance",
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      monthlyPrice: "85$",
      yearlyPrice: "699$",
      green: "/src/assets/green.png",
      red: "/src/assets/red.png",
    },
    {
      name: "Premium",
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      monthlyPrice: "99$",
      yearlyPrice: "899$",
      green: "/src/assets/green.png",
    },
  ];

  return (
    <div className="p-4 md:px-14 max-w-s mx-auto py-10">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h1>
        <p className="text-base text-tertiary md:w-1/3 mx-auto px-4">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>

        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="text-2xl mr-8 font-semibold text-primary">
              Monthly
            </span>
            <div
              className={`w-[70px] h-8 bg-secondary rounded-full transition duration-300 ease-in-out flex items-center`}
            >
              <div
                className={`w-8 h-6 ${
                  !isYearly && "ml-[5px]"
                } rounded-full transition duration-300 ease-in-out ${
                  isYearly ? "bg-[#d9d9d9] ml-8" : "bg-[#d9d9d9]"
                }`}
              ></div>
            </div>
            <span className="text-2xl ml-8 font-semibold text-primary">
              Yearly
            </span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => {
              setIsYearly(!isYearly);
            }}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-20 md:w-11/12 md:gap-12 gap-10 mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>
            <p className="text-tertiary text-center my-5">{pkg.description}</p>
            <p className="mt-5 text-center text-secondary text-4xl font-bold">
              {isYearly ? `${pkg.yearlyPrice}` : `${pkg.monthlyPrice}`}{" "}
              <span className="text-base text-tertiary font-medium -ml-[10px]">
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            <ul className="mt-4 space-y-4 px-4">
              <li className="flex items-center gap-5 font-semibold text-lg">
                <img src={pkg.green} alt="green" className="w-4 h-4" /> Videos
                of Lessons
              </li>
              <li className="flex items-center gap-5 font-semibold text-lg">
                <img src={pkg.green} alt="green" className="w-4 h-4" /> Homework
                check
              </li>
              <li className="flex items-center gap-5 font-semibold text-lg">
                <img
                  src={pkg.name === "Start" ? `${pkg.red}` : `${pkg.green}`}
                  alt="green"
                  className="w-4 h-4"
                />{" "}
                Additional practical task
              </li>
              <li className="flex items-center gap-5 font-semibold text-lg">
                <img
                  src={pkg.name === "Start" ? `${pkg.red}` : `${pkg.green}`}
                  alt="green"
                  className="w-4 h-4"
                />{" "}
                Monthly conferences
              </li>
              <li className="flex items-center gap-5 font-semibold text-lg">
                <img
                  src={pkg.name === "Premium" ? `${pkg.green}` : `${pkg.red}`}
                  alt="green"
                  className="w-4 h-4"
                />{" "}
                Personal advice from teachers
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
