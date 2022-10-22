import CryptoJS from 'crypto-js';

export const encryptData  = (data, password, secret) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), `Password Phrase ${password}, Secret Phrase ${secret}`);
}

export const decryptData  = (data, password, secret) => {
  const bytes  = CryptoJS.AES.decrypt(data, `Password Phrase ${password}, Secret Phrase ${secret}`);
  let result;
  try {
    result = bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    result = false;
  }

  if (result) {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } else {
    return 'Invalid Data'
  }
}
