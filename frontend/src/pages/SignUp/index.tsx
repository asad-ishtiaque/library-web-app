import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignupMutation } from "../../store/api/Auth"; // Assuming you have a signup mutation
import { useNavigate } from "react-router-dom";
import RouteNames from "../../routes/RouteNames";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";

// Define validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters and contain numbers")
    .required("Password is required"),
});

interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
}

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    resolver: yupResolver(validationSchema) as any,
  });

  const [signup] = useSignupMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: SignUpFormInputs) => {
    try {
      const response = await signup(data).unwrap();
      console.log("Sign-up successful:", response);
      toast.success("Sign-up successful");
      navigate(RouteNames.Home.route);
    } catch (err) {
      console.log("Sign-up failed:", err);
      toast.error("Sign-up failed. Please try again.");
    }
  };

  return (
    <div className="flex h-screen w-screen flex-wrap items-center text-slate-800">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="my-auto  mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:leading-tight md:text-left md:text-5xl">
            Welcome to <br />
            <span className="text-orange-400">Book Library </span>
          </p>
          <p className="mt-6 text-center font-medium md:text-left">
            Sign up to your account below.
          </p>
          <form
            className="flex flex-col items-stretch pt-3 md:pt-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name Field */}
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md  transition focus-within:border-orange-600">
                <Input
                  id="name"
                  error={errors.name?.message}
                  label="Your Name"
                  placeholder="Name"
                  type="text"
                  {...register("name")}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md  transition focus-within:border-orange-600">
                <Input
                  id="login-email"
                  error={errors.email?.message}
                  label="Your Email"
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                />
              </div>
            </div>
            {/* Password Field */}
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md  transition focus-within:border-orange-600">
                <Input
                  id="login-password"
                  error={errors.password?.message}
                  label="Password"
                  placeholder="Password"
                  type="password"
                  {...register("password")}
                />
              </div>
            </div>
            <a
              href="#"
              className="mb-6 text-center text-sm font-medium text-gray-600 md:text-left"
            >
              Forgot password?
            </a>
            {/* Submit Button */}
            <Button text="Sign up" />
          </form>
          <div className="pt-4 text-center">
            <p className="text-gray-600">
              Already have an account?
              <a
                className="whitespace-nowrap ml-1 font-semibold text-orange-400 underline underline-offset-4 cursor-pointer"
                onClick={() => {
                  navigate(RouteNames.Signin.route);
                }}
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center">
        <img
          className="ml-8 w-11/12 max-w-lg rounded-lg object-cover"
          src="/src/assets/book-stacks-vector.png"
        />
      </div>
    </div>
  );
}

export default Signup;
