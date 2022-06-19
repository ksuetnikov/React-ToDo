import React from "react";
import { BsCheck } from "react-icons/bs";

const Check = ({ isCompleted }) => {
  return (
    // <div className="border-2 rounded-md border-blue-400">
    //   {isCompleted && <BsBookmarkCheck size={64} />}

    // </div>
    // is existed! Here is a form for galochka
    <div class="check">
      <div class="galochka">
        {isCompleted && (
          <BsCheck size={24} color="white" className="text-white pr-90" />
        )}
      </div>
    </div>
  );
};

export default Check;
