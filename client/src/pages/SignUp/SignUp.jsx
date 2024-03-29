// import { Link } from "react-router-dom";

// import { FcGoogle } from "react-icons/fc";
import { SiSpinrilla } from "react-icons/si";
import "./signup.css";
import Container from "../../components/ui/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../Home/HomeComponenets/UpComingEvent/upcoming.scss'
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { saveUser } from "../../api/user";
const SignUp = () => {
  const {createUser,updateUserProfile,signInGoogle, signInFacebook,loading} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmpassword.value;
    const termsAndConditionCheck =form.termsAndConditions.checked;
   
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long!");
    }

    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;

    if (!uppercaseRegex.test(password) || !numberRegex.test(password)) {
      return toast.error("Password must contain at least one uppercase letter and one number!");
    }

    if(password !== confirmPassword){
      return toast.error('Password dose not match')
    }
    if(!termsAndConditionCheck){
      return toast.error('Please agree to the terms and conditions.');
    }
    try{
      // sign Un user
     const result =  await createUser(email,password)
     
     // update user
     await updateUserProfile(name)

    //  save user in database
   if(result?.user?.email){

    const dbResponse = await saveUser(result?.user)
    console.log(dbResponse)
    navigate(from, { replace: true })
    toast.success('Signup successful!')
   }

    }
    catch(err){
      toast.error("Email Already An Used ☹")
    }
  };

  // handle google sign up
  const handleGoogleSignUp = async() => {
    try{
    const result = await signInGoogle();
     //4. save user data in database
    await saveUser(result?.user)
    toast.success('Successfully Sign Up')
    navigate(from, { replace: true })
    }
    catch(err){
      toast.error("SigIn Faild Please Try Again ☹")
    }
  }
  const handleFacebookSignUp = async() => {
    try{
    const result = await signInFacebook()
    await saveUser(result?.user);
    toast.success('Successfully Sign Up')
    navigate(from, { replace: true })
    }
    catch(err){
      toast.error("SigIn Faild Please Try Again ☹")
    }
  }
  return (
    <div className="signUp-bg py-[80px] md:pt-[50px] lg:pt-[68px]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-5 ld:gap-20 gap-12 min-h-screen place-items-center">
            {/* Left Section */}
            <div className="mb-8 text-center md:text-start md:col-span-3 col-span-1">
              <h1 className="my-3 text-4xl md:text-3xl lg:text-5xl font-bold text-white">
                WELLCOME 
                TO OUR</h1> 
                <h1 className="my-4 text-4xl md:text-3xl lg:text-5xl font-bold text-white">
                EVENT PLANET
                </h1>
              <p className="text-sm text-gray-400">
              Join Our Event Planet today! Sign up to create your account and unlock a world of event planning possibilities. From booking tickets to managing events, we have got you covered. Let make your events extraordinary together!
              </p>
              <div className="flex flex-col md:flex-row gap-6 pt-5">
                <Link to='/signIn'>
                <button className="button w-full">
                 SIGN IN
                </button>
                </Link>
                <button onClick={handleGoogleSignUp} className="button">
                  SIGNUP WITH GOOGLE
                </button>
                <button onClick={handleFacebookSignUp} className="button">
                  SIGNUP WITH FACEBOOK
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="border-4 rounded border-opacity-50 border-[#eeeeee] p-5 md:p-8 lg:p-10 col-span-1 md:col-span-2 md:w-full glass">
              <div className="pb-6 ">
               <h2 className="text-center text-white font-medium text-2xl uppercase"> Sign Up For Free</h2>
              </div>
              <form
                onSubmit={handleSubmit}
                noValidate=""
                action=""
                className="space-y-4"
              >
                {/* Form Inputs */}
                <div className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Name Here"
                      className="w-full px-3 py-2 input-style transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="Enter Your Email Here"
                      className="w-full px-3 py-2 input-style transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="Enter Password.."
                      className="w-full px-3 py-2 input-style  transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confirmpassword"
                      required
                      placeholder="Confirm Password.."
                      className="w-full px-3 py-2 input-style  transition-all duration-300"
                    />
                  </div>
                  <div className="flex items-start gap-2">
                    <input
                      name="termsAndConditions"
                      type="checkbox"
                      className="text-xl hover:cursor-pointer"
                    />
                    <span className="text-white -mt-[5px]">
                      I have read and agree to the website
                      <Link to="/termCondition"
                        href=""
                        className="font-semibold text-primary ml-2 hover:underline"
                      >
                        terms and conditions
                      </Link>
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="button w-full"
                  >
                    {loading ? (
                      <SiSpinrilla className="animate-spin m-auto" />
                    ) : (
                      "SIGN UP"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Section */}
      </Container>
    </div>
  );
};

export default SignUp;
