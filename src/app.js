import { useState } from "react"
import { StepCard } from "./StepCard"
import { StepOneForm } from "./StepOneForm"
import { StepTwoForm } from "./StepTwoForm"
import { StepThreeForm } from "./StepThreeForm"
import { StepFourForm } from "./StepFourForm"
export const App = () => {
    const [steps, setSteps] = useState(["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"])
    const [currentStep, setCurrentStep] = useState(3)

    //For step 1 state
    const [name, setName] = useState('')
    const [emailAddress, setEmailAddres] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    
    //For step 2 state (saving purposes on top level app)
    const [currentBilling, setCurrentBillling] = useState("monthly")
    const [selectedPlan, setSelectedPlan] = useState(0)
    const [cards, setCards] = useState([
        {
            text: "Arcade",
            priceMonthly: 9,
            priceYearly: 90,
            img: 'assets/images/icon-arcade.svg',
        },
        {
            text: "Advanced",
             priceMonthly: 12,
            priceYearly: 120,
            img: 'assets/images/icon-advanced.svg',
        },
            {
            text: "Pro",
             priceMonthly: 15,
            priceYearly: 150,
            img: 'assets/images/icon-pro.svg',
        }
    ])
    //for step 3 state
        const [addOns, setAddOns] = useState([
        {
            title: "Online service",
            subTitle: "Access to multiplayer games",
            priceMonthly: 1,
            priceYearly: 10,
        },
        {
            title: "Larger Storage",
            subTitle: "Extra 1TB of cloud save",
             priceMonthly: 2,
            priceYearly: 20,
        },
                {
            title: "Customizable profile",
            subTitle: "Custom theme on your profile",
            priceMonthly: 2,
            priceYearly: 20,
        },
    ])
    const [planOneSelected, setPlanOneSelected] = useState(false)
    const [planTwoSelected, setPlanTwoSelected] = useState(false)
    const [planThreeSelected, setPlanThreeSelected] = useState(false)
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
                        <StepOneForm setName={setName} setEmailAddres={setEmailAddres} setPhoneNumber={setPhoneNumber}   name={name} emailAddress={emailAddress} phoneNumber={phoneNumber}  setCurrentStep={setCurrentStep}/>
                        : currentStep == 2 ?
                        <StepTwoForm cards={cards} setCurrentStep={setCurrentStep} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} setCurrentBillling={setCurrentBillling} currentBilling={currentBilling}/> 
                        : currentStep == 3 ?
                        < StepThreeForm addOns={addOns} planOneSelected={planOneSelected} planTwoSelected={planTwoSelected} planThreeSelected={planThreeSelected} setPlanThreeSelected={setPlanThreeSelected} setPlanTwoSelected={setPlanTwoSelected} setPlanOneSelected={setPlanOneSelected} setCurrentStep={setCurrentStep} currentBilling={currentBilling}/>
                        : currentStep == 4 ?
                        <StepFourForm planOneSelected={planOneSelected} planTwoSelected={planTwoSelected} planThreeSelected={planThreeSelected} addOns={addOns} setCurrentStep={setCurrentStep} selectedPlan={selectedPlan} currentBilling={currentBilling} cards={cards}/>
                        : null
                    }
            </div>
        </div>
    )
}