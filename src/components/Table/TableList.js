import React from 'react';
import PropTypes from 'prop-types';
import TableItem from './TableItem';


const TableList = ({ contacts }) => {
  return (
    <div className="container-fluid">
      {contacts.map(contact => {
        return <TableItem key={contact.id} contact={contact}/>
      })}
    </div>
  );
};

TableList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      surname: PropTypes.string,
      phoneNumber: PropTypes.string,
      note: PropTypes.string
    })
  )
};


export default TableList;
