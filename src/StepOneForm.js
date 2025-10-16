import { useState } from "react"
export const StepOneForm = ({setName, name, emailAddress, phoneNumber, setEmailAddres, setPhoneNumber, setCurrentStep}) => {
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [phoneNumberError, setPhoneNumberError] = useState("")
    const handleSubmit = () => {
        let error = false
        if(!name) {
            setNameError("This field is required")
            error = true
        }
        if(!emailAddress) {
            setEmailError("This field is required")
            error = true
        }
        if(!phoneNumber) {
            setPhoneNumberError("This field is required")
            error = true
        }
        if(!error) {
            setCurrentStep(2)
        }
    }
    return (
        <div className="stepFormContainer one">
            <div className="stepFormContainerTop one">
                <h1>Personal Info</h1>
                <span className="secondTitle">Please provide your name, email adress, and phone number.</span>
            </div>
            <div className="stepFormContainerMiddle one">
                <div className="stepOneForm">
                    <div className="stepOneLabelContainer">
                        <div className="labelContainer">
                            <span className="labelName">Name</span>
                            <span className="errorMessage">{nameError}</span>
                        </div>
                        
                        <div style={{border: `${nameError ? "1px solid red" : "1px solid var(--grey-500"}`}} className="stepOneInputContainer">
                            <input  placeholder="e.g. Stephen King" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    </div>

                   <div className="stepOneLabelContainer">
                        <div className="labelContainer">
                            <span className="labelName">Email Address</span>
                            <span className="errorMessage">{emailError}</span>
                        </div>
                        <div style={{border: `${emailError ? "1px solid red" : "1px solid var(--grey-500"}`}} className="stepOneInputContainer">
                            <input placeholder="e.g. stephenkind@lorem.com" value={emailAddress} onChange={(e) => setEmailAddres(e.target.value)}/>
                        </div>
                    </div>
                    
                    <div className="stepOneLabelContainer">
                        <div className="labelContainer">
                            <span className="labelName">Phone Number</span>
                            <span className="errorMessage">{phoneNumberError}</span>
                        </div>
                        <div style={{border: `${phoneNumberError ? "1px solid red" : "1px solid var(--grey-500"}`}} className="stepOneInputContainer">
                            <input placeholder="e.g. +1 234 678 890" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="stepFormContainerBottom One">
                <button onClick={() => handleSubmit()} className="stepOneNextButton">Next Step</button>
            </div>
        </div>
    )
}