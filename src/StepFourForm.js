import { useEffect, useState } from "react"
import{ PaymentCard } from './PaymentCard'
export const StepFourForm = ({setIsDone, addOns, planThreeSelected, planOneSelected, planTwoSelected, currentBilling, cards, selectedPlan, setCurrentStep}) => {
    const [newAddOns, setNewAddOns] = useState([])
    const [cost, setCost] = useState('')
   
    const generateList = () => {
        addOns[0].selected = planOneSelected
        addOns[1].selected = planTwoSelected
        addOns[2].selected = planThreeSelected
        setNewAddOns(addOns)
    }
    const generateCost = () => {
        let cost = 0
        if(currentBilling == 'monthly') {
            for(let i = 0; i < addOns.length; i++) {
                if(addOns[i].selected) {
                    cost += addOns[i].priceMonthly
                }
            }
            cost += cards[selectedPlan].priceMonthly
        }else {
            for(let i = 0; i < addOns.length; i++) {
                if(addOns[i].selected) {
                    cost += addOns[i].priceYearly
                }
            }
            cost += cards[selectedPlan].priceYearly
        }
        setCost(cost)
    }
    
    useEffect(() => {
        generateList()
        generateCost()
    }, [])

    const handleSubmit = () => {
        setIsDone(true)
    }

    return (
        <div className="stepFormContainer four">
            <div className="stepFormContainerTop four">
                <h1>Finishing Up</h1>
                <span className="secondTitle">Double-check everything looks OK before confirming.</span>
            </div>
            
            <div className="stepFormContainerMiddle four">
                <div className="paymentList">
                    <div className="paymentTop">
                        <div className="paymentTopLeft">
                            <h4>{cards[selectedPlan].text} ({currentBilling[0].toUpperCase() + currentBilling.slice(1)})</h4>
                            <span onClick={() => setCurrentStep(2)}>Change</span>
                        </div>
                        
                        <div className="paymentTopRight">
                            <span>${currentBilling == "monthly" ? cards[selectedPlan].priceMonthly + "/mo" : cards[selectedPlan].priceYearly + "/yr"}</span>
                        </div>
                    </div>
                    <div style={{border: '1px solid var(--purple-200)', marginTop: '2rem', marginBottom: "2rem"}}></div> 
                    <div className="paymentBottom">
                        {
                            newAddOns.map((item) =>
                            {
                                return item.selected ? 
                                 <PaymentCard currentBilling={currentBilling} item={item}/>
                                :
                                null
                            }
                                
                            )
                        }
                    </div> 
                    
                </div>
                <div className="finalPaymentBox">
                        <span>Total {currentBilling == "monthly" ? '(per month)' : '(per year)'}</span>
                        <h4>${cost}{currentBilling == 'monthly' ? '/mo' : '/yr'}</h4>
                </div>   
            </div>    
             
             <div className="stepFormContainerBottom four">
                <span onClick={() => setCurrentStep(3)}>Go Back</span>
                <button onClick={() => handleSubmit()} className="stepOneNextButton">Confirm</button>
            </div>
        </div>
    )
}