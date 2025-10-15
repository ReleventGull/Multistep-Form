import { useState } from "react"
import { StepCard } from "./StepCard"
import { StepOneForm } from "./StepOneForm"
import { StepTwoForm } from "./StepTwoForm"
export const App = () => {
    const [steps, setSteps] = useState(["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"])
    const [currentStep, setCurrentStep] = useState(2)


    //For step 2 state (saving purposes on top level app)
    const [currentBilling, setCurrentBillling] = useState("monthly")
    const [selectedPlan, setSelectedPlan] = useState(null)
    return(
        <div className="formContainer">
            <div className="formContainerLeftSide">
                <img src="assets/images/bg-sidebar-desktop.svg"/>
                <div className="stepCardsContainer">
                    {
                        steps.map((text, index) => 
                            <StepCard currentStep={currentStep} text={text} index={index}/>
                        )
                    }
                </div>
            </div>
            <div className="formContainerRightSide">
                    {
                        currentStep == 1 ? 
                        <StepOneForm setCurrentStep={setCurrentStep}/>
                        : currentStep == 2 ?
                        <StepTwoForm setCurrentStep={setCurrentStep} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setCurrentBillling={setCurrentBillling} currentBilling={currentBilling}/> :
                        null
                    }
                    
                    
                    
            </div>
        </div>
    )
}