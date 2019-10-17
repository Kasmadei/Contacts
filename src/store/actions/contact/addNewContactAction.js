import { isAlphabeticString, removeDiacritic } from "../../../services/string";
import { formatePhoneNumber } from "../../../services/phoneNumber";
import { createId } from "../../../services/id";
import { addStart, throwErr, addContact } from "../../actionCreators/contact/contact";


export const addNewContact = (contact, contacts, callback) => {
  return (dispatch) => {
    dispatch(addStart());
    const { name, surname, phoneNumber, note } = contact;
    const normalizedName = removeDiacritic(name);
    const normalizedSurame = removeDiacritic(surname);
    if (!isAlphabeticString(name)) {
      dispatch(throwErr(`Name contains incorrect symbols`));
      return;
    }
    if (!isAlphabeticString(surname)) {
      dispatch(throwErr(`Surname contains incorrect symbols`));
      return;
    }
    const normalizedFullName = `${normalizedName} ${normalizedSurame}`;
    const formattedPhoneNumber = formatePhoneNumber(phoneNumber);
    if (typeof formattedPhoneNumber !== "string") {
      dispatch(throwErr(`Phone number is not correct`));
      return;
    }
    const id = createId(normalizedFullName, contacts);
    const newContact = {
      id,
      fullname: `${name} ${surname}`,
      phoneNumber: formattedPhoneNumber,
      note
    }
    dispatch(addContact(newContact));
    callback();
  }
}
