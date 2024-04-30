import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from './../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import registerPic from '../../../src/assets/register.jpg'

const Register = () => {

    const [showPassWord, SetShowPassWord] = useState(false);
    const navigate = useNavigate();

    const { createUserManually, updateUserProfile, SetReload } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        const { name, email, photoURL, password } = data;

        if (password.length < 6) {
            return toast('Sorry!!!Six character password required.');
        }

        const passWordValidationforLowerCaseAndUpperCase = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        const passWordValidationCheckingforLowerCaseAndUpperCaseCharacter = passWordValidationforLowerCaseAndUpperCase.test(password);

        if (!passWordValidationCheckingforLowerCaseAndUpperCaseCharacter) {
            return toast('Must Have a Lowercase and an Uppercase character in the password.');
        }

        createUserManually(email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                toast.success('Congratulations, your account has been successfully created.');
                navigate('/');
                updateUserProfile(name, photoURL)
                    .then(() => {
                        console.log('Profile Updated!');

                        fetch('https://art-and-craft-store-server-side.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify(data),
                        })
                            .then(response => response.json())
                            .then(json => console.log(json))

                        SetReload(true);
                    }).catch((error) => {
                        console.log('An Error Occurred', error.message);
                    });
            })
            .catch((error) => {
                toast(error.message);
            });

    }

    const handleshowPassWordButton = () => {
        SetShowPassWord(!showPassWord);
    }

    return (
        <div className="max-w-80 mt-4 md:mt-6 md:max-w-xl lg:mt-8 lg:max-w-4xl xl:mt-12 xl:max-w-7xl mx-auto mb-4 md:mb-6 lg:mb-8 xl:mb-12 border border-transparent p-4 md:p-6 lg:p-8 xl:p-12 rounded md:rounded-md lg:rounded-lg xl:rounded-xl flex flex-col lg:flex-row justify-center gap-28 items-center font-poppins">
            <Helmet>
                <title>Craft Planet | Register Page</title>
            </Helmet>

            <div className="hidden xl:flex w-2/4">
                <img src={registerPic} alt="...Loading" />
            </div>

            <div className="w-full max-w-80 p-4 md:max-w-xl md:p-12 rounded-md shadow sm:p-8 border border-neutral-300 text-black">
                <h2 className="mb-3 text-base md:text-2xl xl:text-3xl font-bold text-center">Please Register Your Account</h2>
                <p className="text-xs md:text-base text-center text-gray-500 my-3 md:my-6 mb-4 md:mb-6">Already have an account?
                    <Link to="/logIn" rel="noopener noreferrer" className="focus:underline hover:underline text-orange-500 font-semibold"><span> Login Now</span></Link>
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8 xl:space-y-12">

                    <div className="space-y-4">

                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm md:text-base xl:text-lg">Your Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter Your Full Name" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="photoURL" className="block text-sm md:text-base xl:text-lg">Your Photo</label>
                            <input type="text" name="photoURL" id="photoURL" placeholder="Enter Your Photo URL" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" {...register("photoURL", { required: true })} />
                            {errors.photoURL && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm md:text-base xl:text-lg">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter Your Email Address" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>

                        <div className="space-y-2 relative">

                            <label htmlFor="password" className="text-sm md:text-base xl:text-lg">Password</label>
                            <input
                                type={showPassWord ? 'text' : 'password'}
                                name="password" id="password" placeholder="Enter Your Password" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500">This field is required</span>}

                            <div onClick={handleshowPassWordButton} className="absolute text-sm md:text-base xl:text-lg top-9  md:top-10 xl:top-12 right-4 text-neutral-500">

                                {
                                    showPassWord ? <FaEyeSlash /> : <FaEye />
                                }

                            </div>

                        </div>

                    </div>

                    <button type="submit" className="w-full px-8 py-3 font-medium rounded-md bg-sky-900 hover:bg-sky-800 text-white text-sm md:text-base lg:text-lg">Register</button>

                </form>

            </div>

        </div>
    );
};

export default Register;