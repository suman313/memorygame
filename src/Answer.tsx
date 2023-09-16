import React, { useEffect, useState } from "react";
type props = {
  numberBank: number[];
};
function Answer({ numberBank }: props) {
  const [scatteredNumbers, setScatterdNumbers] = useState<number[]>([]);
  function shuffleArray(array: number[]) {
    // Create a copy of the original array to avoid modifying it directly
    const shuffledArray = [...array];

    // Perform the Fisher-Yates shuffle
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }
  const shuffledNumbers = () => {
    console.log(numberBank);

    let tempArray: number[] = [];
    let alternate = 1;
    while (tempArray.length < 10) {
      if (alternate % 2 == 0)
        var randomNum = Math.floor(Math.random() * 100 + 1);
      else var randomNum = Math.floor(Math.random() * 10 + 1);
      if (tempArray.includes(randomNum) || numberBank.includes(randomNum))
        continue;
      else tempArray.push(randomNum);
    }
    let allSixteenNumbers = [...tempArray, ...numberBank];
    console.log(allSixteenNumbers);

    let getShuffeldNumbers: number[] = shuffleArray(allSixteenNumbers);
    setScatterdNumbers(getShuffeldNumbers);
  };
  useEffect(() => {
    shuffledNumbers();
  }, [numberBank]);
  return (
    <div>
      {scatteredNumbers.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default Answer;
