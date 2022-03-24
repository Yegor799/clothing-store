import './SignUp.scss';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { createUserWithEmailAndPassword } from "firebase/auth";


const SignUp = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onNameChange = (e) => {
        setDisplayName(e.target.value)
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                createUserProfileDocument(user, { displayName });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

    };

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={onNameChange}
                    label='Display Name'
                    required
                />
                
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={onEmailChange}
                    label='Email'
                    required
                />
                
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={onPasswordChange}
                    label='Password'
                    required
                />
                
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={onConfirmPasswordChange}
                    label='Confirm Password'
                    required
                />
                
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
};

export default SignUp;