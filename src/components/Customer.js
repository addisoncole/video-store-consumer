import React from 'react';
import PropTypes from 'prop-types';
// import './Customer.css';


const Customer = (props) => {
  console.log(props)
  return (
      <div>
        {props.name}
        <br />
        {props.phone}
        <br />
        <p># of movies checked out</p>
        <button>Select for Rental</button>
      </div>
  )
}

Customer.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string
};

export default Customer;