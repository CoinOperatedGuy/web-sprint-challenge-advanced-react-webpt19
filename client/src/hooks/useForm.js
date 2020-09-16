// write your custom hook here to control your checkout form
import React, {useState} from 'react';

export const useForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    };

    const [values, setValues] = useState(initialValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
        clearValues();
      };

    const clearValues = () => {
        setValues("");
    };

    return [values, handleChanges, handleSubmit]
}; 