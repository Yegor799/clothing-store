import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    
    const dispatch = useDispatch();

    const itemCount = cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0);

    return (
        <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    );
   
};

export default CartIcon;