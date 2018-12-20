import React from 'react';
import PropTypes from 'prop-types';
import './Customer.css';


const Customer = (props) => {
  return (
      <div className="customer-card">
        {props.name}
        <br />
        {props.phone}
        <br />
        <p>{props.movies} movie(s) checked out</p>
        <button onClick={props.selectCustomerCallback}>Select for Rental</button>
      </div>
  )
}

Customer.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  movies: PropTypes.int,
  selectCustomerCallback: PropTypes.func,
};

export default Customer;
