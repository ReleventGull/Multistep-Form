
export const PlanCard = ({selectedPlan, setSelectedPlan, index, text, price, img}) => {
    return (
        <div style={{backgroundColor: `${selectedPlan == index ? `var(--purple-200)` : ''}`}} onClick={() => setSelectedPlan(index)} className="planCardBox">
            <div className="planCardImageBox">
                <img src={img}/>
            </div>
            <div className="planCardTextBox">
                <h3>{text}</h3>
                <span>{price}</span>
            </div>
        </div>
    )
}