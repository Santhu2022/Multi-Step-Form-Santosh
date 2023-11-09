import React from 'react'
import classes from './SideBar.module.css'

const stepsData = [
    { id: 1, name: 'YOUR INFO' },
    { id: 2, name: 'SELECTED PLAN' },
    { id: 3, name: 'ADD-ONS' },
    { id: 4, name: 'SUMMARY' },
]


const SideBar = props => {
    let { activeStepId } = props
    activeStepId = activeStepId === 5 ? 4 : activeStepId //handle 5th step 

    return (
        <div className={classes.mainContainer}>
            {
                stepsData.map(data => {
                    const isActive = data.id === activeStepId
                    return (
                        <div className={classes.stepContainer} key={data.id}>
                            <div className={[classes.stepCircle, isActive && classes.activeStepCircle].join(' ')}>
                                <p>{data.id}</p>
                            </div>
                            <div>

                                <p className={classes.stepNumber}>{`STEP ${data.id}`}</p>
                                <p className={classes.stepName}>{data.name}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideBar