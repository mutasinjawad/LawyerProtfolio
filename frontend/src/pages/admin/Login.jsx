import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../../App";
import Swal from "sweetalert2";

const Login = () => {
  window.scrollTo(0, 0);
  const { logOut, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(async (result) => {
        const token = await result.user.getIdToken();
        const response = await fetch("http://localhost:5000/verify-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        const data = await response.json();
        if (data.authorized) {
          navigate(location.state ? location.state : "/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Returned to Home page",
            text: "Access denied. Your email is not authorized.",
          });
          logOut(); // Immediately log out the unauthorized user
          return navigate("/");
        }
        setTimeout(() => {
          navigate(location.state ? location.state : "/");
        }, 100);
      });
  };
  return (
    <div className="">
      <section className=" h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-20 w-full lg:w-[90%]">
          <div className="w-[95%] bg-white rounded-lg shadow-md  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl text-center font-bold leading-tight tracking-tight pb-3 text-gray-900 md:text-3xl ">
                Login
              </h1>
              <form className="space-y-4 md:space-y-4">
                <div className=" space-y-1 lg:py-1">
                  <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className=" inline-flex w-full items-center justify-center rounded-md   text-gray-700  border-gray-400  px-3.5 py-2.5 font-semibold transition-all duration-200 bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  >
                    <span className="mr-2 inline-block">
                      <svg
                        className="h-6 w-6 text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                      </svg>
                    </span>
                    Login with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;