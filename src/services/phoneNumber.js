export const formatePhoneNumber = (number) => {
  let phoneNumber = number.match(/[0-9.]+/g);
  if (Array.isArray(phoneNumber)) {
    phoneNumber = phoneNumber.join('');
    phoneNumber = phoneNumber.replace(/\s/g, '');
    if (phoneNumber.length === 9) {
      return `+420 ${phoneNumber.substring(0, 3)} ${phoneNumber.substring(3, 6)} ${phoneNumber.substring(6, 9)}`;
    } else if (phoneNumber.length === 12) {
      return `+${phoneNumber.substring(0, 3)} ${phoneNumber.substring(3, 6)} ${phoneNumber.substring(6,
        9)} ${phoneNumber.substring(9, 12)}`;
    } else {
      return null;
    }
  }
  return null
};
