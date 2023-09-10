import divider from "../assets/pattern-divider.svg";
import dividerMobile from "../assets/pattern-divider-mobile.svg";
import dice from "../assets/icon-dice.svg";
import { useState, useEffect } from "react";
import axios from "axios";

export const Advice = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    const advice = await response.data.slip;
    setAdvice(advice);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="bg-darkGrayishBlue font-Manrope w-100 max-w-md p-8 sm:10 rounded-xl text-center text-lightCyan flex flex-col gap-4 relative">
      <p className="text-neonGreen text-sm tracking-[.25em] uppercase font-semibold">
        Advice <span className="gap-2">#{advice.id}</span>
      </p>
      <div>
        <p className="text-2xl font-semibold">"{advice.advice}"</p>
      </div>
      <img src={divider} alt="divider" className="hidden pb-2 pt-5 md:block" />
      <img src={dividerMobile} alt="dividerMobile" className="md:hidden" />
      <div
        className="w-12 h-12 bg-neonGreen rounded-full flex items-center justify-center absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 diceBox cursor-pointer"
        onClick={getAdvice}
      >
        <img src={dice} alt="dice" className="w-5 " />
      </div>

      <div></div>
    </div>
  );
};
