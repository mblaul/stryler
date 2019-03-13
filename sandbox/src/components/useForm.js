import { useState } from 'react';

const useForm = (callback) => {
  const [ values, setValues ] = useState({});

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  const handleCheckboxChange = (event) => {
    console.log(event.target.name);
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  return {
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    values,
  };
};

export default useForm;
