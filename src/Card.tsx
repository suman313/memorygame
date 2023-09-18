import React, { SetStateAction, useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./card.css";
type props = {
  uniqueNumberGenerator: () => void;
  numberBank: number[];
  setTimesUp: React.Dispatch<SetStateAction<number>>;
};
function Card({ uniqueNumberGenerator, numberBank, setTimesUp }: props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let getSeconds = setInterval(() => {
      setSeconds((prev) => {
        let newTime = prev + 1;
        if (newTime > 29) {
          setTimesUp(1);
          clearInterval(getSeconds);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(getSeconds);
  }, []);
  return (
    <div>
      {/* <div className="progress-bar"></div> */}

      <ProgressBar
        completed={seconds}
        maxCompleted={30}
        customLabel={`${seconds} seconds left`}
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
