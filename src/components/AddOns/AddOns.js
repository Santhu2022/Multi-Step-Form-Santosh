import React from 'react'
import classes from './AddOns.module.css'
import { addOnsList } from '../constants'

const AddOns = ({ selectedAddons, updateSelectedAddons, isYearlyPlan }) => {
    return (
        <div className={classes.mainContaier}>
            <h1 className={classes.mainHeading}>Pick add-ons</h1>
            <p className={classes.description}>Add-ons help enhance your gaming experience.</p>
            <div className={classes.addOnsList}>
                {
                    addOnsList.map(data => {
                        const isSelected = selectedAddons.includes(data.id)
                        return (
                            <label htmlFor={data.name} className={[classes.addOnItem, isSelected && classes.selectedAddon].join(' ')} key={data.id}>
                                <input
                                    id={data.name}
                                    name={data.name}
                                    type='checkbox'
                                    checked={isSelected}
                                    className={classes.checkBox}
                                    onChange={() => updateSelectedAddons(data.id)}
                                />
                                <div>
                                    <p className={classes.addonName}>{data.name}</p>
                                    <p className={classes.addonDescription}>{data.description}</p>
                                </div>
                                <p className={classes.addonPrice}>
                                    {isYearlyPlan === true ? `+$${data.price.perYear}/yr` : `+$${data.price.perMonth}/mo`}
                                </p>
                            </label>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default AddOns