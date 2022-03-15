import React from 'react';


const validateMessages = {
  required: 'Please input your ${label}!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
    min: 6
  },
  };

export default validateMessages;