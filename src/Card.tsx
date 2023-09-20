import React, { SetStateAction, useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { RotatingLines } from "react-loader-spinner";
import "./card.css";
type props = {
  uniqueNumberGenerator: () => void;
  numberBank: number[];
  setTimesUp: React.Dispatch<SetStateAction<number>>;
};
function Card({ uniqueNumberGenerator, numberBank, setTimesUp }: props) {
  const [seconds, setSeconds] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    let getSeconds = setInterval(() => {
      setSeconds((prev) => {
        let newTime = prev + 1;
        if (newTime > 10) {
          setLoader(true);
          setTimeout(() => {
            setTimesUp(1);
          }, 2000);

          clearInterval(getSeconds);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(getSeconds);
  }, []);
  if (loader) return <RotatingLines />;
  return (
    <div>
      {/* <div className="progress-bar"></div> */}

      <ProgressBar
        completed={seconds}
        maxCompleted={10}
        customLabel={`${seconds}`}
      />
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-3">
          {numberBank.map((item) => (
            <div className="py-4 px-8 font-bold text-[3rem] m-[5rem] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[9px] text-[#cfdda0] text-center">
              {item}
            </div>
          ))}
        </div>
        <div>
          <button
            className="px-6 bg-[#30d84c] text-white text-[1.5rem] rounded-[9px]"
            onClick={uniqueNumberGenerator}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
