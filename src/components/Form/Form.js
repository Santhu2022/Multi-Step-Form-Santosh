import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import classes from './Form.module.css'
import Plan from '../Plan/Plan'
import AddOns from '../AddOns/AddOns'
import Summary from '../Summary/Summary'
import { planDetails } from '../constants'
import NavButtons from '../NavButtons'
import Thankyou from '../Thankyou/Thankyou'


const Form = () => {
    const [activeStepId, setActiveStepId] = useState(1) //1 2 3 4 5
    const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phoneNumber: '' })
    const [selectedPlanId, setSelectedPlanId] = useState(planDetails[0].id) //Arcade Plan default
    const [isYearlyPlan, setIsYearlyPlan] = useState(false) //Montly plan default
    const [selectedAddons, setSelectedAddons] = useState([]) // No addons Default


    const nextStep = () => setActiveStepId(prev => prev + 1)
    const prevStep = () => setActiveStepId(prev => prev - 1)

    const updatePersonalInfo = data => {
        //Here we get the Step 1 Form data
        setPersonalInfo(data)
        nextStep()
    }

    const updateSelectedPlan = (planId) => {
        setSelectedPlanId(planId)
    }

    const updateSelectedAddons = addonId => {
        console.log(selectedAddons, addonId)
        if (!selectedAddons.includes(addonId))
            setSelectedAddons([...selectedAddons, addonId])
        else
            setSelectedAddons(prev => prev.filter(id => id !== addonId))
    }

    const onClickChangeButton = () => setActiveStepId(2) //Change Plan

    const renderForm = () => {
        switch (activeStepId) {
            case 1:
                return <PersonalInfo
                    activeStepId={activeStepId}
                    personalInfo={personalInfo}
                    updatePersonalInfo={updatePersonalInfo}
                />
            case 2:
                return <Plan
                    selectedPlanId={selectedPlanId}
                    updateSelectedPlan={updateSelectedPlan}
                    isYearlyPlan={isYearlyPlan}
                    setIsYearlyPlan={setIsYearlyPlan}
                />
            case 3:
                return <AddOns
                    selectedAddons={selectedAddons}
                    updateSelectedAddons={updateSelectedAddons}
                    isYearlyPlan={isYearlyPlan}
                />
            case 4:
                return <Summary
                    selectedPlanId={selectedPlanId}
                    isYearlyPlan={isYearlyPlan}
                    selectedAddons={selectedAddons}
                    onClickChangeButton={onClickChangeButton}
                />
            case 5:
                return <Thankyou />

            default:
                return <PersonalInfo />
        }
    }


    return (
        <div className={classes.rootContainer}>
            <div className={classes.mainContainer}>
                <div className={classes.subContainer}>
                    <SideBar activeStepId={activeStepId} />
                    <div className={classes.formContainer}>
                        {renderForm()}
                        {
                            activeStepId > 1 && activeStepId < 5 &&
                            <NavButtons
                                activeStepId={activeStepId}
                                prevStep={prevStep}
                                nextStep={nextStep}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form