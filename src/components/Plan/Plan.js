import React from 'react'
import classes from './Plan.module.css'

import { planDetails } from '../constants'


const Plan = ({ updateSelectedPlan, selectedPlanId, isYearlyPlan, setIsYearlyPlan }) => {


    const onClickPlan = (planId) => {
        updateSelectedPlan(planId)
    }

    return (
        <div className={classes.mainContaier}>
            <h1 className={classes.mainHeading}>Select your plan</h1>
            <p className={classes.description}>You have the option of monthly or yearly billing.</p>
            <div className={classes.plansContainer}>
                {
                    planDetails.map(data => {
                        const isSelected = data.id === selectedPlanId
                        return (
                            <button key={data.id} type='button' className={[classes.plan, isSelected && classes.selectedPlan].join(' ')} onClick={() => onClickPlan(data.id)}>
                                <img src={data.icon} alt='plan Icon' className={classes.planIcon} />
                                <div>
                                    <p className={classes.planName}>{data.name}</p>
                                    <p className={classes.planPrice}>
                                        {isYearlyPlan === true ? `$${data.price.perYear}/yr` : `$${data.price.perMonth}/mo`}
                                    </p>
                                    {isYearlyPlan && <p className={classes.freeMonths}>2 months free</p>}
                                </div>
                            </button>
                        )
                    })
                }
            </div>
            <div className={classes.planTypeContainer}>
                <p className={[classes.planType, !isYearlyPlan && classes.activePlanType].join(' ')} onClick={() => setIsYearlyPlan(!isYearlyPlan)}>Monthly</p>

                <p className={[classes.planType, isYearlyPlan && classes.activePlanType].join(' ')} onClick={() => setIsYearlyPlan(!isYearlyPlan)}>Yearly</p>
            </div>
        </div>
    )
}

export default Plan