import React from 'react'
import classes from './Thankyou.module.css'
import ThankYouIcon from '../../assets/images/icon-thank-you.svg'

const Thankyou = () => {
    return (
        <div className={classes.mainContainer}>
            <img src={ThankYouIcon} alt='Thank You' className={classes.thankYouIcon} />
            <h1 className={classes.thankyouHeading}>Thank you!</h1>
            <p className={classes.thankyouDescription}>Thanks for confirming your subscription! We hope you have fun using our platform.
                If you ever need support, please feel free to email us at suppport@loremgaming.com
            </p>
        </div>
    )
}

export default Thankyou