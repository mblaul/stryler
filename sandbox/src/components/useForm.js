import { useState } from 'react';

const useForm = ({ initialValues = {}, callback = () => {} }) => {
  const [ values, setValues ] = useState(initialValues);

  const handleChange = async (event) => {
    event.persist();
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  const handleCheckboxChange = (event) => {
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
