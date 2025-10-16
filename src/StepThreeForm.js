import { useState } from "react"
import { AddOnCard } from "./AddOnCard"
export const StepThreeForm = ({addOns, planOneSelected, planTwoSelected, planThreeSelected, currentBilling, setCurrentStep, setPlanTwoSelected, setPlanOneSelected, setPlanThreeSelected}) => {

    const handleSubmit = () => {
        setCurrentStep(4)
    }
    return(
        <div className="stepFormContainer">
            <div className="stepFormContainerTop three">
                <h1>Pick add-ons</h1>
                <span className="secondTitle">Add-ons help enhance your gaming experience.</span>
            </div>
            <div className="stepFormContainerMiddle three">
                {
                    addOns.map((item, index) => 
                        <AddOnCard currentBilling={currentBilling} index={index} planOneSelected={planOneSelected} planTwoSelected={planTwoSelected} planThreeSelected={planThreeSelected} setPlanThreeSelected={setPlanThreeSelected} setPlanTwoSelected={setPlanTwoSelected} setPlanOneSelected={setPlanOneSelected} title={item.title} subTitle={item.subTitle} priceYearly={item.priceYearly}priceMonthly={item.priceMonthly}/>
                    )
                }
            </div>
             <div className="stepFormContainerBottom two">
                <span onClick={() => setCurrentStep(2)}>Go Back</span>
                <button onClick={() => handleSubmit()} className="stepOneNextButton">Next Step</button>
            </div>
        </div>
    )
}