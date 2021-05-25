import React from 'react';
import './confirmBox.css';

const ConfirmBox = ({ openConfirmBox, handleLogOut, handleSaveAndLogOut, isUA }) => {
  return (
    <div className="container">
      <div className="confirm-box">
        <div className="confirm-box__message">
          { isUA ? 'Ви бажаєте зберегти цей файл перед виходом?' : 'Do you want to save this file before exit?'}
        </div>
      <div className="confirm-box__buttons">
        <button  className='confirm-box__btn btn'
                 onClick={handleSaveAndLogOut}>
          { isUA ? 'Зберегти та Вийти' : 'Save and Exit' }
        </button>
        <button  className='confirm-box__btn btn'
                 onClick={handleLogOut}>
          { isUA ? 'Вийти' : 'Exit' }
        </button>
        <button  className='confirm-box__btn btn cancel-btn'
                 onClick={openConfirmBox}>
          { isUA ? 'Скасувати' : 'Cancel' }
        </button>
      </div>
      </div>
    </div>
  )
};

export default ConfirmBox;
