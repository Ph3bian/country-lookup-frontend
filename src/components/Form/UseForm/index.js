import { useState, useEffect } from 'react';

const useForm = (callback, validate, formValues ) => {

  const [values] = useState(formValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
     callback();
     return setIsSubmitting(false)
    }
  }, [errors, callback, isSubmitting, setIsSubmitting]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };


  return {
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;