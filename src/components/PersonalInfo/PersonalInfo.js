import React from 'react'
import classes from './PersonalInfo.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import InputField from '../InputField';
import NavButtons from '../NavButtons';

const PersonalInfo = props => {
    const { activeStepId, updatePersonalInfo, personalInfo } = props

    const onSubmitForm = (values) => {
        // alert(JSON.stringify(values, null, 2));
        updatePersonalInfo(values)
    }

    //Form validations using Formik and Yup Schema
    const formik = useFormik({
        initialValues: personalInfo,
        validationSchema: Yup.object({
            name: Yup.string().required('This field is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('This field is required'),
            phoneNumber: Yup.string()
                .matches(/^[6-9]\d{9}$/, 'Please enter a valid phone number')
                .required("This field is required"),
        }),
        onSubmit: values => {
            onSubmitForm(values)
        }
    })


    return (
        <form className={classes.mainContainer} onSubmit={formik.handleSubmit}>
            <h1 className={classes.mainHeading}>Personal info</h1>
            <p className={classes.description}>Please provide you name, email address, and phone number.</p>
            <InputField
                fieldName='name'
                formik={formik}
            />
            <InputField
                fieldName='email'
                formik={formik}
                placeholder='example@gmail.com'
            />
            <InputField
                fieldName='phoneNumber'
                formik={formik}
                placeholder='e.g. 9876543212'
            />
            <NavButtons
                activeStepId={activeStepId}
                nextStep={formik.submitForm}
            />
        </form >
    )
}

export default PersonalInfo
