export const StepCard = ({currentStep, index, text}) => {
    return (
    <div className="stepCard">
        <div className="stepCardLeftSide">
            <div style={{backgroundColor: `${currentStep == index+1 ? "var(--blue-200)" : ""}`, color: `${currentStep == index+1 ? "black" : "white"}`}} className="stepCircle">
                <div className="textInStepCircle">
                    {index + 1}
                </div>
            </div>
        </div>
         <div  className="stepCardRightSide">
            <span className="stepName">Step {index+1} </span>
            <span className="stepText">{text}</span>
        </div>
    </div>
    )

}