import { Helmet } from "react-helmet";
import logInPagePic from '../../../src/assets/logIn.jpg'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import { toast } from "react-toastify";

const LogIn = () => {

    const { signInUserManually, googleLogIn, gitHubLogIn } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        const email = data.email;
        const password = data.password;
        console.log(data, email, password);

        signInUserManually(email, password)
            .then((result) => {
                toast.success('Congratulation!!! User Login Succesful.');
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });

    }

    const handleGoogleLogInButton = () => {
        googleLogIn()
            .then((result) => {
                toast.success('Congratulation!!! Google Login Succesful.');
                console.log(result.user);
            }).catch((error) => {
                console.log(error.message);
            });
    }

    const handleGitHubLogInButton = () => {
        gitHubLogIn()
            .then((result) => {
                toast.success('Congratulation!!! GitHub Login Succesful.');
                console.log(result.user);
            }).catch((error) => {
                console.log(error.message);
            });
    }



    return (
        <div className="max-w-80 mt-4 md:mt-6 md:max-w-xl lg:mt-8 lg:max-w-4xl xl:mt-12 xl:max-w-7xl mx-auto mb-4 md:mb-6 lg:mb-8 xl:mb-12 border border-transparent p-4 md:p-6 lg:p-8 xl:p-12 rounded md:rounded-md lg:rounded-lg xl:rounded-xl flex flex-col lg:flex-row justify-center gap-28 items-center font-poppins">
            <Helmet>
                <title>Craft Planet | Login Page</title>
            </Helmet>

            <div className="hidden xl:flex w-2/4">
                <img className="" src={logInPagePic} alt="...Loading" />
            </div>

            <div className="w-full max-w-80 p-4 md:max-w-xl md:p-12 rounded-md shadow sm:p-8 border border-neutral-300 text-black">
                <h2 className="mb-3 text-base md:text-2xl xl:text-3xl font-bold text-center">Please Login to your account</h2>
                <p className="text-xs md:text-base text-center text-gray-500 my-3 md:my-6 mb-4 md:mb-6">Dont have an account?
                    <Link to="/register" rel="noopener noreferrer" className="focus:underline hover:underline text-orange-500 font-semibold hover:text-orange-400"><span> Register Now</span></Link>
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8 xl:space-y-12">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm md:text-base xl:text-lg">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter Your Email Address" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm md:text-base xl:text-lg">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Enter Your Password" className="w-full px-3 py-2 md:py-3 xl:py-4 border rounded-md border-neutral-300 bg-transparent text-gray-900 text-sm md:text-base xl:text-lg focus:border-violet-400" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                        </div>
                    </div>
                    <button type="submit" className="w-full px-8 py-3 font-medium rounded-md bg-sky-900 hover:bg-sky-800 text-white text-sm md:text-base lg:text-lg">Login</button>
                </form>


                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-400" />
                    <p className="px-3 text-gray-400">OR</p>
                    <hr className="w-full text-gray-400" />
                </div>

                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleLogInButton} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:dark:ring-violet-600 text-sm md:text-base lg:text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                    <button onClick={handleGitHubLogInButton} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:dark:ring-violet-600 text-sm md:text-base lg:text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                        <p>Login with GitHub</p>
                    </button>

                </div>

            </div>

        </div>
    );
};

export default LogIn;



