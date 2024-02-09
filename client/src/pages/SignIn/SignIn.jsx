import { TbLoaderQuarter } from "react-icons/tb";
import "../SignUp/signup.css";
import Container from "../../components/ui/Container";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/Home/HomeComponenets/UpComingEvent/upcoming.scss";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const SignIn = () => {
  const { loading, signIn, signInGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const termsAndConditionCheck = form.termsAndCondition.checked;

    if (!termsAndConditionCheck) {
      return toast.error("Please agree to the terms and conditions.");
    }

    try {
      await signIn(email, password);
      toast.success("Successfully Sign In");
      navigate("/");
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInGoogle();
      toast.success("Sign In Successfully");
      navigate("/");
    } catch (err) {
      toast.error(err?.message);
    }
  };
  return (
    <div className="signUp-bg">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 ld:gap-20 gap-12 min-h-screen place-items-center">
          {/* Left Section */}
          <div className="mb-8 text-center md:text-start md:col-span-3 col-span-1">
            <h1 className="my-3 text-4xl md:text-3xl lg:text-6xl font-bold text-white">
              WELLCOME <br />
              BACK TO OUR EVENT PLANET
            </h1>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              id voluptatum cupiditate autem, omnis, inventore neque iure ipsum
              aspernatur odio similique hic. Iste veritatis aliquid fugiat nihil
              eius. Eaque, eius?
            </p>
            <div className="flex flex-col md:flex-row gap-6 pt-5">
              <Link to="/sign-up">
                <button className="button">SIGN UP</button>
              </Link>
              <button className="button" onClick={handleSignIn}>
                SIGNUP WITH GOOGLE
              </button>
              <button className="button">SIGNUP WITH FACEBOOK</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="border-4 rounded border-opacity-50 border-[#eeeeee] p-5 md:p-8 lg:p-10 col-span-1 md:col-span-2 md:w-full">
            <div className="pb-6 text-white font-medium text-2xl">
              Please Log In Now
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
                    name="termsAndCondition"
                    className="text-xl hover:cursor-pointer"
                  />
                  <span className="ml-2 text-white">
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
                    <TbLoaderQuarter
                      size={20}
                      className="animate-spin m-auto"
                    />
                  ) : (
                    "SIGN IN"
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

export default SignIn;
