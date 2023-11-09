import React from 'react'
import classes from './InputField.module.css'

const InputField = ({ formik, fieldName, placeholder }) => {

    return (
        <div className={classes.inputFieldWrapper}>
            <div className={classes.labelContainer}>
                <label htmlFor={fieldName} className={classes.inputLabel}>
                    {fieldName}
                </label>
                {formik.errors[fieldName] && formik.touched[fieldName] && <p className={classes.errorMsg}>{formik.errors[fieldName]}</p>}
            </div>
            <input
                type="text"
                id={fieldName}
                name={fieldName}
                className={[
                    classes.inputField,
                    formik.errors[fieldName] && formik.touched[fieldName] && classes.errorField,
                ].join(' ')}
                placeholder={placeholder}
                {...formik.getFieldProps(fieldName)}
            />
        </div>
    )
}

export default InputField