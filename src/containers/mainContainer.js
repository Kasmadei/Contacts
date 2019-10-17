import { connect } from "react-redux";
import Main from "../pages/Main";
import { addNewContact } from "../store/actions/contact/addNewContactAction";


const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    errorMessage: state.errorMessage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewContact: (contact, contacts, callback) => {
      dispatch(addNewContact(contact, contacts, callback))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
