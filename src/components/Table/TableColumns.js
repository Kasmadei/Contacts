import React from 'react';


const TableColumns = () => {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <strong className="text-uppercase text-center">ID: </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong className="text-uppercase text-center">Full name: </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong className="text-uppercase text-center">Phone number: </strong>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <strong className="text-uppercase text-center">Note: </strong>
        </div>
      </div>
    </div>
  );
};


export default TableColumns;
