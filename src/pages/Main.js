import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, FormInputs } from "../styled";
import Title from "../components/Title";
import TableColumns from "../components/Table/TableColumns";
import TableList from "../components/Table/TableList";


class Main extends Component {
  state = {
    name: '',
    surname: '',
    phoneNumber: '',
    note: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSet = (e) => {
    e.preventDefault();
    const { addNewContact, contacts } = this.props;
    const clearInputs = () => {
      this.setState({
        name: '',
        surname: '',
        phoneNumber: '',
        note: ''
      })
    }
    addNewContact(this.state, contacts, clearInputs);
  }

  render() {
    const {contacts, errorMessage} = this.props;
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title title={`Contacts`}/>
            <FormInputs>
              <form onSubmit={this.handleSet}>
                <div className="row">
                  <div className="col-12 mx-auto col-md-10 col-lg-8 pt-2">
                    <div className="form-group darkgreen-border">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="surname"
                        value={this.state.surname}
                        placeholder="Surname"
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="phoneNumber"
                        value={this.state.phoneNumber}
                        placeholder="Phone number"
                        onChange={this.handleChange}
                        required
                      />
                      <input
                        type="text"
                        className="form-control"
                        id="note"
                        value={this.state.note}
                        placeholder="Note"
                        onChange={this.handleChange}
                      />
                    </div>
                    {errorMessage && (
                      <>
                        <p className="text-center text-danger">{errorMessage}</p>
                      </>
                    )}
                    <div className="d-flex justify-content-center">
                      <ButtonContainer>
                        <div className="add-button noselect">Add</div>
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </form>
            </FormInputs>
            {contacts.length > 0 && (
              <>
                <TableColumns/>
                <TableList contacts={contacts}/>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
};

Main.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      surname: PropTypes.string,
      phoneNumber: PropTypes.string,
      note: PropTypes.string
    })
  ),
  addNewContact: PropTypes.func,
  errorMessage: PropTypes.string
};


export default Main
