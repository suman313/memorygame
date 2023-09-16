import React, { useEffect, useState } from "react";
import Card from "./Card";
import Answer from "./Answer";

function App() {
  const [numberBank, setNumberBank] = useState<number[]>([]);
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
      <Card
        uniqueNumberGenerator={uniqueNumberGenerator}
        numberBank={numberBank}
      />
      <Answer numberBank={numberBank} />
    </div>
  );
}

export default App;
