import { PackageContainer } from './package.styles'
import { useDispatch } from 'react-redux'
import { IconContext } from "react-icons";
import { MdToday } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi';
import { ImCalendar } from 'react-icons/im';

import { addItemToCart, removeItemFromCart } from '../../redux/cart/cart.actions'

const Package = ({title, price, description, removeItem, quantity}) => {
    const dispatch = useDispatch();
    const packageType = () => {
        const packageIcon = [];
        switch (title) {
            case 'Daily Pick':
                return <MdToday />;
            case 'Full Slate of Picks':
                return <GiTakeMyMoney />;
            case 'Best Bets Only':
                return <RiMoneyDollarCircleFill />;
            case 'Bi-Weekly Package':
                return <GiMoneyStack />;
            default:
                return <ImCalendar />;
        }
    }
    
    return(
        <PackageContainer>
            <IconContext.Provider value={{className: 'package-icon'}}>
                {packageType()}
            </IconContext.Provider>
            <h3>{title}</h3>
            {
                removeItem ?
                <p className='price'>${price} × {quantity}</p>
                :
                <p className='price'>${price}</p>

            }
            <p className='description'>{description}</p>
            <span className='flex-grower'></span>
            {
                removeItem ?
            <div className='add-to-cart' onClick={() => dispatch(removeItemFromCart({title: title}))}>
                Remove from cart
            </div>
                 : 
            <div className='add-to-cart' onClick={() => dispatch(addItemToCart({title: title, price: price, id: Math.floor(Math.random() * Math.floor(1000000))}))}>
                Add to cart
            </div>
            }

        </PackageContainer>
)
}

export default Package;