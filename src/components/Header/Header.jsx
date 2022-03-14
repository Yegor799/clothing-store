import './Header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {

    const currentUser = useSelector(state => state.user.currentUser);

    console.log(currentUser)
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser
                        ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        : <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
};

export default Header;