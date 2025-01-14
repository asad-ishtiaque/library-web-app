import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSigninMutation } from "../../store/api/Auth";
import { useNavigate } from "react-router-dom";
import RouteNames from "../../routes/RouteNames";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Input from "../../components/Input";

// Define validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters and contains numbers")
    .required("Password is required"),
});

interface SignInFormInputs {
  email: string;
  password: string;
}

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>({
    resolver: yupResolver(validationSchema) as any,
  });
  const [signin] = useSigninMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: SignInFormInputs) => {
    try {
      const response = await signin(data).unwrap();
      console.log("Sign-in successful:", response);
      localStorage.setItem("accessToken", response.tokens.accessToken);
      toast.success("Sign-in successful");
      navigate(RouteNames.Home.route);
    } catch (err) {
      console.log("Sign-in failed:", err);
      toast.error("Sign-in failed. Please try again.");
    }
  };

  return (
    <div>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
          >
            BOOK LIBRARY APP
          </a>
          <div className="w-full border-gray-900 md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-10 rounded-3xl border border-gray-200 shadow-2xl space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                LOG IN
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Email Field */}
                <Input
                  id={"email"}
                  error={errors.email}
                  label={"Your Email"}
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                />

                {/* Password Field */}

                <Input
                  id={"password"}
                  error={errors.password}
                  label={"Password"}
                  placeholder="Password"
                  type="password"
                  {...register("password")}
                />

                {/* Submit Button */}
                <Button text={"Sign in"} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signin;
