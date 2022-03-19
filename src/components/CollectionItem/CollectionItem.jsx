import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item }) => {

    const { name, price, imageUrl } = item;

    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addItem(item));
    }

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={addItemToCart} inverted>Add to cart</CustomButton>
        </div>
    )
};

export default CollectionItem;