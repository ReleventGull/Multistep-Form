import { useState } from "react"
import { StepCard } from "./StepCard"
import { StepOneForm } from "./StepOneForm"
export const App = () => {
    const [steps, setSteps] = useState(["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"])
    const [currentStep, setCurrentStep] = useState(1)
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
                    
                    <div className="formRightTop">

                    </div>
                    
                    <div className="formRightContainer">

                    </div>
                   
                    <div className="formRightBottom">

                    </div>
            </div>
        </div>
    )
}