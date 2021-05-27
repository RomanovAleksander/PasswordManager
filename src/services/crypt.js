import CryptoJS from 'crypto-js';

export const encryptData  = (data, password) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), `Password Phrase ${password}`);
}

export const decryptData  = (data, password) => {
  const bytes  = CryptoJS.AES.decrypt(data, `Password Phrase ${password}`);
  let result;
  try {
    result = bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    result = false;
  }

  if (result) {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } else {
    return 'Invalid Password'
  }
}
