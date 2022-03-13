import './SignIn.scss';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {  signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
            });

        setEmail('');
        setPassword('');
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" label="email" value={email} handleChange={onEmailChange} required />
                <FormInput name="password" type="password" label="password" value={password} handleChange={onPasswordChange} required />

                
                <div className='buttons'>
                <CustomButton type="submit">
                    Sign in
                </CustomButton>

                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with google
                </CustomButton>
                </div>
                
            </form>
        </div>
    )
};

export default SignIn;