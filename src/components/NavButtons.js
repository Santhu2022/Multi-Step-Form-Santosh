import React from 'react'
import classes from './NavButtons.module.css'

const NavButtons = props => {
    const { activeStepId, prevStep, nextStep } = props
    return (
        <div className={classes.formNavigationContainer}>
            {
                activeStepId > 1 &&
                <button
                    type='button'
                    className={[classes.navButton, classes.goBackBtn].join(' ')}
                    onClick={prevStep}
                >
                    Go Back
                </button>
            }
            {
                activeStepId < 4 &&
                <button
                    type='button'
                    className={[classes.navButton, classes.nextStepBtn].join(' ')}
                    onClick={nextStep}
                >
                    Next Step
                </button>
            }
            {
                activeStepId === 4 &&
                <button
                    type='button'
                    className={[classes.navButton, classes.confirmBtn].join(' ')}
                    onClick={nextStep}
                >
                    Confirm
                </button>
            }
        </div>
    )
}

export default NavButtons