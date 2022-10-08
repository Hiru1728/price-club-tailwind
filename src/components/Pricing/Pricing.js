import React from 'react';
import PriceOption from '../PriceOption/PriceOption';


const Pricing = () => {
    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Everything on Free',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
            ]
        },
        {
            id: 2, name: 'Platinum', price: 9.19, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
            ]
        },

    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best Deal of town</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOption.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;