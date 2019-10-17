import React from 'react';
import PropTypes from "prop-types";


const Title = ({ title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto mt-4 my-2 text-center">
        <p className="title-text noselect">
          <strong>{title}</strong>
        </p>
      </div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string
};


export default Title;
