import React from 'react';
import './confirmBox.css';

const ConfirmBox = ({ openConfirmBox, handleLogOut, handleSaveAndLogOut }) => {
  return (
    <div className="container">
      <div className="confirm-box">
        <div className="confirm-box__message">
          Do you want to save this file before exit?
        </div>
      <div className="confirm-box__buttons">
        <button  className='confirm-box__btn btn'
                 onClick={handleSaveAndLogOut}>
          Save and Exit
        </button>
        <button  className='confirm-box__btn btn'
                 onClick={handleLogOut}>
          Exit
        </button>
        <button  className='confirm-box__btn btn cancel-btn'
                 onClick={openConfirmBox}>
          Cancel
        </button>
      </div>
      </div>
    </div>
  )
};

export default ConfirmBox;
