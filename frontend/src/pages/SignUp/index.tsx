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
                SIGN UP
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Name Field */}
                {/* <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 text-left"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-white border border-gray-300 text-black placeholder-[#51545e] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-3"
                    placeholder="Name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div> */}
                <Input
                  id={"name"}
                  error={errors.name}
                  label={"Name"}
                  placeholder="Name"
                  type="name"
                  {...register("name")}
                />

                {/* Email Field */}
                {/* <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 text-left"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-white border border-gray-300 text-black placeholder-[#51545e] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-3"
                    placeholder="Email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div> */}
                <Input
                  id={"email"}
                  error={errors.email}
                  label={"Your Email"}
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                />

                {/* Password Field */}
                {/* <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 text-left"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-white border border-gray-300 text-black placeholder-[#51545e] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 py-3"
                    placeholder="Password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div> */}
                <Input
                  id={"password"}
                  error={errors.password}
                  label={"Password"}
                  placeholder="Password"
                  type="password"
                  {...register("password")}
                />

                {/* Submit Button */}
                <Button text={"Sign up"} />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
