

export const AddOnCard = ({currentBilling, index, planOneSelected, planTwoSelected, planThreeSelected, setPlanTwoSelected, setPlanOneSelected, setPlanThreeSelected, title, subTitle, priceMonthly, priceYearly}) => {
    const determineValue = () => {
        switch(index) {
            case 0: 
                return planOneSelected
            case 1: 
                return planTwoSelected
            case 2: 
                return planThreeSelected
        }
    }
    const handleChange = (e) => {
        switch (index) {
            case 0:
            setPlanOneSelected(e.target.checked);
            break;
            case 1:
            setPlanTwoSelected(e.target.checked);
            break;
            case 2:
            setPlanThreeSelected(e.target.checked);
            break;
        }
    }
    return (
        <div className="addOnCard">
            <div className="addOneCardLeft">
                <input checked={determineValue()} onChange={(e) => handleChange(e)} type="checkbox" />
            </div>
            <div className="addOneCardMiddle">
                <h4>{title}</h4>
                <span>{subTitle}</span>
            </div>

            <div className="addOneCardRight">
                <span>${currentBilling == "monthly" ? priceMonthly + '/mo' : priceYearly + '/yr'}</span>
            </div>
            
        </div>
    )
}