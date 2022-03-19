import './CartDropdown.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

const CartDropdown = () => {

    const cartItems = useSelector(state => state.cart.cartItems);  
    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const navigateToCheckout = () => {
        navigate("/checkout");
        dispatch(toggleCartHidden());
    }

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length
                        ? cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        ))
                        : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={navigateToCheckout}>CHECKOUT</CustomButton>
        </div>
    )
};

export default CartDropdown;