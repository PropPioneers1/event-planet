// import { Link } from "react-router-dom";

// import { FcGoogle } from "react-icons/fc";
import { SiSpinrilla } from "react-icons/si";
import "./signup.css";
import Container from "../../components/ui/Container";
import { Link } from "react-router-dom";
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
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-5 ld:gap-20 gap-12 min-h-screen place-items-center">
            {/* Left Section */}
            <div className="mb-8 text-center md:text-start md:col-span-3 col-span-1">
              <h1 className="my-3 text-4xl md:text-3xl lg:text-6xl font-bold text-white">
                WELLCOME <br />
                TO OUR EVENT PLANET
              </h1>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti id voluptatum cupiditate autem, omnis, inventore neque
                iure ipsum aspernatur odio similique hic. Iste veritatis aliquid
                fugiat nihil eius. Eaque, eius?
              </p>
              <div className="flex flex-col md:flex-row gap-6 pt-5">
                <Link to='/sign-in'>
                <button className="bg-secondary text-white py-2 px-4 mb-2 md:mb-0 md:mr-2">
                 SIGN IN
                </button>
                </Link>
                <button className="bg-secondary text-white py-2 px-4 mb-2 md:mb-0 md:mr-2">
                  SIGNUP WITH GOOGLE
                </button>
                <button className="bg-secondary text-white py-2 px-4">
                  SIGNUP WITH FACEBOOK
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="border-4 rounded border-opacity-50 border-[#eeeeee] p-5 md:p-8 lg:p-10 col-span-1 md:col-span-2 md:w-full">
              <div className="pb-6 text-white font-medium text-2xl">
                Sign Up For Free
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
                      required
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      className="text-white border-none"
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
                      autoComplete="new-password"
                      id="password"
                      required
                      placeholder="*******"
                      className="w-full px-3 py-2 input-style  transition-all duration-300"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="text-xl hover:cursor-pointer"
                    />
                    <span className="ml-2">
                      I have read and agree to the website
                      <a
                        href=""
                        className="font-semibold text-primary ml-2 hover:underline"
                      >
                        terms and conditions
                      </a>
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
  );
};

export default SignUp;
