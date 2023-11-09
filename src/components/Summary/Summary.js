import React from 'react'
import classes from './Summary.module.css'
import { planDetails } from '../constants'
import { addOnsList } from '../constants'

const Summary = props => {
    const { selectedPlanId, isYearlyPlan, selectedAddons, onClickChangeButton } = props
    const plan = planDetails.find(each => each.id === selectedPlanId)
    const selectedAddonsList = addOnsList.filter(each => selectedAddons.includes(each.id))

    const getTotalBillAmount = () => {
        let totalBillAmount = isYearlyPlan ? plan.price.perYear : plan.price.perMonth
        selectedAddonsList.forEach(each => {
            totalBillAmount += isYearlyPlan ? each.price.perYear : each.price.perMonth
        })

        return totalBillAmount
    }

    return (
        <div className={classes.mainContaier}>
            <h1 className={classes.mainHeading}>Finishing up</h1>
            <p className={classes.description}>Double-check everything looks OK before confirming.</p>
            <div className={classes.purchaseDetails}>
                <div className={classes.planDetails}>
                    <div>
                        <p className={classes.planName}>{`${plan.name} (${isYearlyPlan ? 'Yearly' : 'Monthly'})`}</p>
                        <button type='button' className={classes.changeBtn} onClick={() => onClickChangeButton()}>Change</button>
                    </div>
                    <p className={classes.planPrice}>
                        {isYearlyPlan === true ? `$${plan.price.perYear}/yr` : `$${plan.price.perMonth}/mo`}
                    </p>
                </div>
                {selectedAddonsList.length > 0 ? <hr className={classes.horizontalRule} /> : null}

                <ul className={classes.addonsList}>
                    {
                        selectedAddonsList.map(data =>
                            <li className={classes.addonItem} key={data.id}>
                                <p className={classes.addonName}>{data.name}</p>
                                <p className={classes.addonPrice}>
                                    {isYearlyPlan === true ? `+$${data.price.perYear}/yr` : `+$${data.price.perMonth}/mo`}
                                </p>
                            </li>
                        )
                    }

                </ul>
            </div>
            <div className={classes.totalBillContainer}>
                <p className={classes.totalBillHeading}>{`Total per ${isYearlyPlan ? 'year' : 'month'}`}</p>
                <p className={classes.totalBillAmount}>
                    {isYearlyPlan === true ? `+$${getTotalBillAmount()}/yr` : `+$${getTotalBillAmount()}/mo`}
                </p>
            </div>
        </div>
    )
}

export default Summary