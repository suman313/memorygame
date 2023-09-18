import React, { useEffect, useState } from "react";
import Card from "./Card";
import Answer from "./Answer";

function App() {
  const [numberBank, setNumberBank] = useState<number[]>([]);
  const [timesUp, setTimesUp] = useState<number>(0);
  const uniqueNumberGenerator = () => {
    let tempArray: number[] = [];
    while (tempArray.length < 6) {
      let randomNum = Math.floor(Math.random() * 10 + 1);
      if (tempArray.includes(randomNum)) continue;
      else tempArray.push(randomNum);
    }
    setNumberBank(tempArray);
  };
  useEffect(() => {
    uniqueNumberGenerator();
  }, []);
  return (
    <div className="flex justify-center items-center mt-[5%]">
      {timesUp==0 && <Card
        uniqueNumberGenerator={uniqueNumberGenerator}
        numberBank={numberBank}
        setTimesUp={setTimesUp}
      />}
      {timesUp==1 && <Answer numberBank={numberBank} />}
    </div>
  );
}

export default App;
