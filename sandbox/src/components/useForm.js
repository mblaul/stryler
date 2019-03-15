import { useState } from 'react';

const useForm = ({ initialValues = {}, changeCallback = () => {}, submitCallback = () => {} }) => {
  const [ values, setValues ] = useState(initialValues);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
    changeCallback();
  };

  const handleCheckboxChange = (event) => {
    event.persist();
    let classNames = values.classNames || [];
    if (event.target.checked) {
      classNames.push(event.target.value);
    } else {
      let removalIndex = classNames.indexOf(event.target.value);
      if (removalIndex > -1) classNames.splice(removalIndex, 1);
    }

    setValues((values) => ({
      ...values,
      classNames,
    }));
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    submitCallback();
  };

  return {
    handleChange,
    handleCheckboxChange,
    handleSubmit,
    values,
  };
};

export default useForm;
