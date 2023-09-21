import React, { SetStateAction } from "react";
import ReactHowler from "react-howler";
import congratsAudio from "../../audio/congrats.mp3";
import "./modal.css";
type props = {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  msg: string;
};
function Modal({ setShowModal, msg }: props) {
  const playAgain = () => {
    // setShowModal(false);
    window.location.reload();
  };
  return (
    <div className="modal flex justify-center items-center  absolute top-0 left-0 right-0 bottom-0">
      <ReactHowler src={congratsAudio} playing={true} />
      <div className="flex flex-col gap-6 justify-center items-center w-[30rem] h-[10rem] bg-[#f0a638e3] rounded-[9px]">
        <p className="text-[#963cac] text-lg font-semibold">{msg}</p>
        <button
          onClick={playAgain}
          className="bg-[#2d971a] text-[#d9ee53] text-[1.2rem] font-bold px-4 py-2 rounded-[9px]"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Modal;
