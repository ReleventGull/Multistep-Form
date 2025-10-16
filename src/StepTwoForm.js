import { useState } from "react"
import { PlanCard } from "./PlanCard"

export const StepTwoForm = ({cards, setCurrentStep, selectedPlan, setSelectedPlan, currentBilling, setCurrentBillling}) => {

    const ballStyle = {
        backgroundColor: 'var(--white)',
        padding: '.6rem',
        position: 'absolute',
        borderRadius: "100%",
        top: "50%",
        left: "50%",
        transform: `translate(${currentBilling == 'monthly' ? `-90%` : `-10%`}, -50%)`,
    }
    const handleSubmit = () => {
        setCurrentStep(3)
    }
    return (
        <div className="stepFormContainer two">
            <div className="stepFormContainerTop one">
                <h1>Select your plan</h1>
                <span className="secondTitle" >You have the option of monthly or yearly billing.</span>
            </div>
            <div className="stepFormContainerMiddle two">
                <div className="planCardContainer">
                    {
                        cards.map((item, index) => 
                        <PlanCard currentBilling={currentBilling} selectedPlan={selectedPlan} index={index} setSelectedPlan={setSelectedPlan} text={item.text} priceYearly={item.priceYearly} priceMonthly={item.priceMonthly} img={item.img}/>
                        )
                    }
                </div >

                <div className="monthlyYearlyContainer">
                    <span style={{color: `${currentBilling == 'monthly' ? 'var(--blue-950)': 'var(--grey-500)'}`}} className="monthlyYearlyTitle">Monthly</span>
                    <div onClick={() => setCurrentBillling(`${currentBilling == "monthly" ? "yearly" : "monthly"}`)} className="ballContainer">
                        <div style={ballStyle} className="ball"/>
                    </div>
                    <span style={{color: `${currentBilling == 'yearly' ? 'var(--blue-950)': 'var(--grey-500)'}`}} className="monthlyYearlyTitle">Yearly</span>
                </div>
            </div>

            <div className="stepFormContainerBottom two">
                <span onClick={() => setCurrentStep(1)}>Go Back</span>
                <button onClick={() => handleSubmit()} className="stepOneNextButton">Next Step</button>
            </div>

        </div>
    )
}