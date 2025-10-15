

export const AddOnCard = ({index, planOneSelected, planTwoSelected, planThreeSelected, setPlanTwoSelected, setPlanOneSelected, setPlanThreeSelected, title, subTitle, price}) => {
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
        switch(index) {
            case 0: 
                if(e.target.value == "false") {
                    setPlanOneSelected(true)
                }else {
                    setPlanOneSelected(false)
                }
                break
             case 1: 
                if(e.target.value == "false") {
                    setPlanTwoSelected(true)
                }else {
                    setPlanTwoSelected(false)
                }
                break 
            case 2: 
                if(e.target.value == "false") {
                    setPlanThreeSelected(true)
                }else {
                    setPlanThreeSelected(false)
                }
                break 
           
        }
    }
    return (
        <div className="addOnCard">
            <div className="addOneCardLeft">
                <input value={determineValue()} onChange={(e) => handleChange(e)} type="checkbox" />
            </div>
            <div className="addOneCardMiddle">
                <h4>{title}</h4>
                <span>{subTitle}</span>
            </div>

            <div className="addOneCardRight">
                <span>{price}</span>
            </div>
            
        </div>
    )
}