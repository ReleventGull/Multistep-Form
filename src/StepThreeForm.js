import { useState } from "react"
import { AddOnCard } from "./AddOnCard"
export const StepThreeForm = ({planOneSelected, planTwoSelected, planThreeSelected, currentBilling, setCurrentStep, setPlanTwoSelected, setPlanOneSelected, setPlanThreeSelected}) => {
    const [addOns, setAddOns] = useState([
        {
            title: "Online service",
            subTitle: "Access to multiplayer games",
            price: `${currentBilling == 'monthly' ? '+$1/mo' : '+$10/yr'}`
        },
        {
            title: "Larger Storage",
            subTitle: "Extra 1TB of cloud save",
            price: `${currentBilling == 'monthly' ? '+$2/mo' : '+$20/yr'}`
        },
                {
            title: "Customizable profile",
            subTitle: "Custom theme on your profile",
            price: `${currentBilling == 'monthly' ? '+$2/mo' : '+$20/yr'}`
        },

    ])
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
                        <AddOnCard index={index} planOneSelected={planOneSelected} planTwoSelected={planTwoSelected} planThreeSelected={planThreeSelected} setPlanThreeSelected={setPlanThreeSelected} setPlanTwoSelected={setPlanTwoSelected} setPlanOneSelected={setPlanOneSelected}title={item.title} subTitle={item.subTitle} price={item.price}/>
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