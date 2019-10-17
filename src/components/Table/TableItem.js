import React from 'react';
import PropTypes from 'prop-types';


const TableItem = ({ contact }) => {
  const {
    id,
    fullname,
    phoneNumber,
    note
  } = contact;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-3">
        <strong className="text-uppercase d-lg-none">ID: </strong>
        {id}
      </div>
      <div className="col-10 mx-auto col-lg-3">
        <strong className="text-uppercase d-lg-none">Full name: </strong>
        {fullname}
      </div>
      <div className="col-10 mx-auto col-lg-3">
        <strong className="text-uppercase d-lg-none">Phone number: </strong>
        {phoneNumber}
      </div>
      <div className="col-10 mx-auto col-lg-3">
        <strong className="text-uppercase d-lg-none">Note: </strong>
        {note}
      </div>
    </div>
  );
};

TableItem.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string,
      fullname: PropTypes.string,
      phoneNumber: PropTypes.string,
      note: PropTypes.string
    })
};


export default TableItem;
