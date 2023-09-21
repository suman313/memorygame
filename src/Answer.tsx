import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modals/Modal";
type props = {
  numberBank: number[];
};
function Answer({ numberBank }: props) {
  const [scatteredNumbers, setScatterdNumbers] = useState<number[]>([]);
  const [selectedElements, setSelectedElements] = useState<number[]>([]);
  const [wrongDetection, setWrongDetection] = useState<boolean>(false);
  const [lengthOfSelectedElements, setLengthOfSelectedElements] =
    useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");
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
    if (numberBank.length > 0) {
      let tempArray: number[] = [...numberBank];
      let alternate = 1;
      while (tempArray.length < 16) {
        alternate++;
        if (alternate % 2 == 0)
          var randomNum = Math.floor(Math.random() * 100 + 1);
        else var randomNum = Math.floor(Math.random() * 10 + 1);
        if (tempArray.includes(randomNum)) continue;
        else tempArray.push(randomNum);
      }
      // let allSixteenNumbers = [...tempArray, ...numberBank];
      // console.log(allSixteenNumbers);

      let getShuffeldNumbers: number[] = shuffleArray(tempArray);
      setScatterdNumbers(getShuffeldNumbers);
    } else {
      console.log("Numberbank length is zero");
    }
  };
  useEffect(() => {
    shuffledNumbers();
  }, [numberBank]);
  const selectedNumbers = (num: number) => {
    setSelectedElements((prev) => {
      let newArray = [...prev];
      newArray.push(num);
      setLengthOfSelectedElements((previous) => previous + prev.length);
      return newArray;
    });
    //check if the selected number exists in the number bank
    if (numberBank.includes(num)) {
      //check if the length of the selected elements matches the length of selected elements array
      console.log(selectedElements);
      if (selectedElements.length == 5) {
        setMsg("Congratulations! You have a great memory....");
        setShowModal(true);
      }
    } else {
      //update the color of the worng selected div
      setMsg("Oops! You have chosen a wrong number");
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        {scatteredNumbers.map((item) => (
          <button
            onClick={() => selectedNumbers(item)}
            className={`px-4 py-0 text-[4rem] font-bold text-center text-white  rounded-[9px] ${
              selectedElements.includes(item) ? "bg-[#0dea44]" : "bg-[#b2a9a3]"
            }`}
            disabled={selectedElements.includes(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {showModal &&
        createPortal(
          <Modal setShowModal={setShowModal} msg={msg} />,
          document.body
        )}
    </>
  );
}

export default Answer;
