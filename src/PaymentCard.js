

export const PaymentCard = ({item, currentBilling}) => {
    return ( 
        <div className="paymentServiceContainer">
            <span className='nameOfService'>
                {item.title}
            </span>
            <span className="serviceCost">
            {
                currentBilling == 'monthly' ? 
                `$${item.priceMonthly}/mo`:
                `$${item.priceYearly}/yr`
            }
            </span>
        </div>
    )
}