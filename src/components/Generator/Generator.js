import React, {useState} from 'react';
import {connect} from "react-redux";
import {toast, ToastContainer} from 'react-toastify';
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from '../../utils/characters';
import {closeGenerator} from "../../actions/generator/actions";
import {copyToClipboard} from '../../utils/copyToClipboard';
import 'react-toastify/dist/ReactToastify.css';
import './Generator.css';

const Generator = ({closeGenerator, isUA}) => {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(20)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const handleGeneratePassword = (e) => {
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify(`${ isUA ? 'Ви повинні вибрати принаймні один варіант' : 'You must select at least one option'}`, true)
    }
    let characterList = ''

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters
    }

    if (includeNumbers) {
      characterList = characterList + numbers
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters
    }

    setPassword(createPassword(characterList))
  }

  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast.dark(`${ isUA ? 'Скопійовано' : 'Copied'}`, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  const handleCopyPassword = (e) => {
    if (password === '') {
      notify(`${ isUA ? 'Копіювати нічого' : 'Nothing To Copy'}`, true)
    } else {
      copyToClipboard(password);
      notify(`${ isUA ? 'Пароль успішно скопійовано в буфер обміну' : 'Password successfully copied to clipboard'}`)
    }
  }

  return (
    <div className='container'>
      <div className='generator'>
        <div className="generator__close" onClick={() => closeGenerator()}>X</div>
        <h2 className='generator__header'>{ isUA ? 'Генератор Паролю' : 'Password Generator' }</h2>
        <div className='generator__password'>
          <div>{password}</div>
          <button onClick={handleCopyPassword} className='copy__btn'>
            <i className='fa fa-clipboard'> </i>
          </button>
        </div>

        <div className='form-group'>
          <label htmlFor='password-strength'>{ isUA ? 'Довжина паролю' : 'Password length' }</label>
          <input
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            type='number'
            id='password-strength'
            name='password-strength'
            max='20'
            min='10'
          />
        </div>

        <div className='form-group'>
          <span>{ isUA ? 'Використовувати великі літери' : 'Include Uppercase Letters' }</span>
          <input
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            type='checkbox'
            id='uppercase-letters'
            name='uppercase-letters'
          />
          <label htmlFor='uppercase-letters'> </label>
        </div>

        <div className='form-group'>
          <span>{ isUA ? 'Використовувати маленькі літери' : 'Include Lowercase Letters' }</span>
          <input
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
            type='checkbox'
            id='lowercase-letters'
            name='lowercase-letters'
          />
          <label htmlFor='lowercase-letters'> </label>

        </div>

        <div className='form-group'>
          <span>{ isUA ? 'Використовувати числа' : 'Include Numbers' }</span>
          <input
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            type='checkbox'
            id='include-numbers'
            name='include-numbers'
          />
          <label htmlFor='include-numbers'> </label>
        </div>

        <div className='form-group'>
          <span>{ isUA ? 'Використовувати символи' : 'Include Numbers' }</span>
          <input
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            type='checkbox'
            id='include-symbols'
            name='include-symbols'
          />
          <label htmlFor='include-symbols'> </label>
        </div>

        <button onClick={handleGeneratePassword} className='generator__btn btn'>
          { isUA ? 'Згенерувати пароль' : 'Generate Password' }
        </button>
        <ToastContainer
          position='top-center'
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  )
};

const mapDispatchToProps = {
  closeGenerator
};

export default connect(null, mapDispatchToProps)(Generator);
