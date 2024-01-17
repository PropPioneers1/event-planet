// import { Link } from "react-router-dom";

// import { FcGoogle } from "react-icons/fc";
import { SiSpinrilla } from "react-icons/si";
import "./signup.css";
import Container from "../../components/ui/Container";
const SignUp = () => {
  const loading = false;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div className="signUp-bg">
    <div className="overlay">
      <Container>
        <div className="grid md:grid-cols-5 gap-y-12 items-center h-screen">
          {/* Left Section */}
          <div className="mb-8 text-center md:text-start md:col-span-3">
            <h1 className="my-3 text-4xl md:text-6xl font-bold text-white">
              WELLCOME <br />
              TO OUR EVENT PLANET
            </h1>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti id voluptatum cupiditate autem, omnis, inventore neque
              iure ipsum aspernatur odio similique hic. Iste veritatis aliquid
              fugiat nihil eius. Eaque, eius?
            </p>
            <div className="flex gap-6 pt-5">
            <button className="bg-secondary text-white py-2 px-4">LOG IN</button>
            <button className="bg-secondary text-white py-2 px-4">SIGNUP WITH GOOGLE</button>
            <button className="bg-secondary text-white py-2 px-4">SIGNUP WITH FACEBOOK</button>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="border-4 border-opacity-50 border-[#eeeeee] p-5 md:p-10 md:col-span-2">
            <div className="pb-6 text-white font-medium text-2xl">Sign Up For Free</div>
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
                    className="w-full px-3 py-2 input-style"
                  />
                </div>
                <div>
                  <input
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    className="text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter Your Email Here"
                    className="w-full px-3 py-2 input-style"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    id="password"
                    required
                    placeholder="*******"
                    className="w-full px-3 py-2 input-style"
                  />
                </div>
                <div className="flex gap-4 items-center">  
                  <input type="checkbox" className="text-xl hover:cursor-pointer" />
                  <span className="mt-4">I have read and agree to the website
                    <a href="" className="font-semibold text-primary ml-2 hover:underline">terms and conditions</a>
                  </span>

                </div>
              </div>
  
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-secondary w-full rounded-md py-3 text-white"
                >
                  {loading ? (
                    <SiSpinrilla className="animate-spin m-auto" />
                  ) : (
                    "Continue"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  </div>
  
  );
};

export default SignUp;

//<div className='flex items-center pt-4 space-x-1'>
{
  /* <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
<p className='px-3 text-sm dark:text-gray-400'>
  Signup with social accounts
</p>
<div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
</div>
<div
className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
>
<FcGoogle size={32} />

<p>Continue with Google</p>
</div>
<p className='px-6 text-sm text-center text-gray-400'>
Already have an account?{' '}
<Link
  to='/login'
  className='hover:underline hover:text-rose-500 text-gray-600'
>
  Login
</Link>
.
</p> */
}
