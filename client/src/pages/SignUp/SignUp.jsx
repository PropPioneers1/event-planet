// import { Link } from "react-router-dom";

// import { FcGoogle } from "react-icons/fc";
import { SiSpinrilla } from "react-icons/si";
import "./signup.css";
import Container from "../../components/ui/Container";
import { Link, useNavigate } from "react-router-dom";
import "../Home/HomeComponenets/UpComingEvent/upcoming.scss";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const SignUp = () => {
  const { createUser, signInGoogle, loading, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const termsAndConditionCheck = form.termsAndConditions.checked;

    if (password !== confirmPassword) {
      return toast.error("Password doesn't match");
    }

    if (!termsAndConditionCheck) {
      return toast.error("Please agree to the terms and conditions.");
    }

    console.log({ email, password, confirmPassword });

    createUser(email, password)
      .then((res) => {
        if (res) {
          updateUserProfile(name);
          navigate("/");
        }
        form.reset();
      })
      .catch((err) => console.log(err.message));
  };

  // handle google sign up
  const handleGoogleSignUp = async () => {
    try {
      await signInGoogle();
      toast.success("Successfully Sign Up");
      navigate("/");
    } catch (err) {
      toast.error(err?.message);
    }
  };
  return (
    <div className="signUp-bg py-[80px] md:pt-[50px] lg:pt-[68px]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 ld:gap-20 gap-12 min-h-screen place-items-center">
          {/* Left Section */}
          <div className="mb-8 text-center md:text-start md:col-span-3 col-span-1">
            <h1 className="my-3 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              WELLCOME <br />
              TO OUR EVENT PLANET
            </h1>

            <div className="flex flex-col md:flex-row gap-6 pt-5">
              <Link to="/sign-in">
                <button className="button">SIGN IN</button>
              </Link>
              <button onClick={handleGoogleSignUp} className="button">
                SIGNUP WITH GOOGLE
              </button>
              <button className="button">SIGNUP WITH FACEBOOK</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="border-4 rounded border-opacity-50 border-[#eeeeee] p-5 md:p-8 lg:p-10 col-span-1 md:col-span-2 md:w-full">
            <div className="pb-6 text-white font-medium text-2xl">
              Sign up for free
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
                    autoComplete="new-password"
                    required
                    placeholder="Enter Your Password"
                    className="w-full px-3 py-2 input-style  transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="confirmPassword"
                    autoComplete="new-password"
                    required
                    placeholder="Confirm Your password"
                    className="w-full px-3 py-2 input-style  transition-all duration-300"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    name="termsAndConditions"
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
                <button type="submit" className="button w-full">
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
