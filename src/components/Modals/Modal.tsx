import React, { SetStateAction, useEffect } from "react";
import ReactHowler from "react-howler";
import congratsAudio from "../../audio/congrats.mp3";
import "./modal.css";
import ConfettiGenerator from "confetti-js";
type props = {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  msg: string;
};
function Modal({ setShowModal, msg }: props) {
  const playAgain = () => {
    // setShowModal(false);
    window.location.reload();
  };
  useEffect(() => {
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
   
    return () => confetti.clear();
  },[])
  return (
<>

    <div className="modal flex justify-center items-center  absolute top-0 left-0 right-0 bottom-0">
    <canvas className="absolute" id='my-canvas'></canvas>
      <ReactHowler src={congratsAudio} playing={true} />
      <div className="flex flex-col gap-6 justify-center items-center w-[30rem] h-[10rem] bg-[#e2ddd5e3] rounded-[9px] z-20">
        <p className="text-[#cc3535] text-lg font-semibold">{msg}</p>
        <button
          onClick={playAgain}
          className="bg-[#2d971a] text-[#d9ee53] text-[1.2rem] font-bold px-4 py-2 rounded-[9px]"
        >
          Play Again
        </button>
      </div>
    </div>
    </>
  );
}

export default Modal;
