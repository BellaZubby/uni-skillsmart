"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Logo from "../Logo";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

// defining types for form data.
// This defines the shape of the form data to be collected
export interface AuthFormData {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  gender: string;
}

interface AuthFormProps {
  type: "login" | "register";
  role: "client" | "provider";
  onSubmit: (data: AuthFormData) => void;
  loading?: boolean;
}
const AuthForm = ({ type, role, onSubmit, loading }: AuthFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);
  // const router = useRouter();

  // handle input changes and update state
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clears error message once input updates
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {}; // creates an empty object to store error messages by key.
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_]).{6,}$/;

    if (type === "register") {
      // validation for first name
      if (!formData.firstName?.trim()) {
        newErrors.firstName = "First name is required";
      } else if (formData.firstName.length < 3) {
        newErrors.firstName = "First name must be at least 3 characters";
      } else if (formData.firstName.length > 30) {
        newErrors.firstName = "First name must not exceed 30 characters";
      }

      // validation for last name
      if (!formData.lastName?.trim()) {
        newErrors.lastName = "Last name is required";
      } else if (formData.lastName.length < 3) {
        newErrors.lastName = "Last name must be at least 3 characters";
      } else if (formData.lastName.length > 30) {
        newErrors.lastName = "Last name must not exceed 30 characters";
      }

      // validation for gender
      if (!formData.gender?.trim()) {
        newErrors.lastName = "Please select a gender";
      }
    }

    // validation for email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // validation for password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    } else if (!regex.test(formData.password)) {
      newErrors.password =
        "Password must contain atleast one letter, number, and special character";
    }

    setErrors(newErrors);

    /**
     * Returns `true` if there are **no errors** (i.e. the form is valid).
    - `Object.keys(newErrors)` gives us an array of error keys.
    - If the array is empty, the form passed validation.
     */
    return Object.keys(newErrors).length === 0;
  };

  // handle form submission and pass data to parent
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      onSubmit(formData); // sends from data to parent page
    }
    console.log("User about to log in");
  };
  return (
    <div className="bg-linear-to-tl from-primary-200/80 to-primary-200/20 px-4 flex min-h-screen py-14 font-inter items-center">
      <div className="grid grid-cols-1 xs:grid-cols-5 gap-5 md:w-[90%] mx-auto bg-white rounded-lg px-4 py-5 w-full">
        {/* form */}
        <div className="xs:col-span-2 py-3">
          <Link href="/">
            <Logo />
          </Link>
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col  justify-center gap-6"
          >
            <div className="text-center text-sm">
              <h2 className="text-xl sm:text-2xl text-primary-100 font-playfair font-semibold mb-2">
                {type === "register" ? "Create an account" : "Login"} as a{" "}
                {role}
              </h2>
              {type === "register" && role === "client" && (
                <p className="text-gray-500">
                  Already have an account?{" "}
                  <Link
                    href="/login/client"
                    className="text-primary-100 font-semibold"
                  >
                    Login
                  </Link>
                </p>
              )}
              {type === "register" && role === "provider" && (
                <p className="text-gray-500">
                  Already have an account?{" "}
                  <Link
                    href="/login/provider"
                    className="text-primary-100 font-semibold"
                  >
                    Login
                  </Link>
                </p>
              )}
              {type === "login" && role === "client" && (
                <p className="text-gray-500">
                  Don't have an account?{" "}
                  <Link
                    href="/register/client"
                    className="text-primary-100 font-semibold"
                  >
                    Register
                  </Link>
                </p>
              )}
              {type === "login" && role === "provider" && (
                <p className="text-gray-500">
                  Don't have an account?{" "}
                  <Link
                    href="/register/provider"
                    className="text-primary-100 font-semibold"
                  >
                    Register
                  </Link>
                </p>
              )}
            </div>

            {type === "register" && (
              <>
                <div className="flex gap-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-primary-100 text-sm pl-3 mb-1"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="Enter your first Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={loading}
                      className="border-2 border-primary-200 py-2 pl-2 w-full outline-0 text-primary-100 placeholder:text-[12px] sm:placeholder:text-sm"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1 pl-3">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* last name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="text-primary-100 text-sm pl-3 mb-1"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Enter your last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={loading}
                      className="border-2 border-primary-200 py-2 pl-2 w-full outline-0 text-primary-100 placeholder:text-[12px] sm:placeholder:text-sm"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1 pl-3">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* container for email and gender*/}
            <div className={`${type === "register" ? "flex gap-2" : "w-full"}`}>
              {type === "register" && (
                <div>
                  <label
                    htmlFor="gender"
                    className="text-primary-100 text-sm pl-3 mb-1"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    disabled={loading}
                    className="border-2 border-primary-200 py-2 pl-2 w-full outline-0 text-primary-100 placeholder:text-[12px] sm:placeholder:text-sm"
                  >
                    <option value={""}>Select</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                  </select>
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1 pl-3">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="text-primary-100 text-sm pl-3 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="border-2 border-primary-200 py-2 pl-2 w-full outline-0 text-primary-100 placeholder:text-[12px] sm:placeholder:text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 pl-3">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            {/* for password */}
            <div>
              <label
                htmlFor="password"
                className="text-primary-100 text-sm pl-3 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loading}
                  className="border-2 border-primary-200 py-2 pl-2 w-full outline-0 text-primary-100 placeholder:text-[12px] sm:placeholder:text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1 pl-3">
                  {errors.password}
                </p>
              )}
            </div>

            {/* forgot password feature */}
            <div className="text-sm text-gray-500">
              {type === "login" && (
                <p>
                  Don't remember your password?{" "}
                  <Link
                    href={"/forgot-password"}
                    className="text-primary-100 font-semibold"
                  >
                    Reset password
                  </Link>
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-primary-100 border-2 border-primary-100/50 w-full rounded-full cursor-pointer text-white font-semibold py-2 hover:border-primary-100 hover:bg-primary-100/50 hover:text-gray-700 transition duration-300 ease-in-out disabled:bg-primary-100/50 disabled:cursor-not-allowed"
            >
              {loading
                ? "processing..."
                : type === "register"
                ? "Register"
                : "Login"}
            </button>
          </form>
        </div>

        {/* image */}
        <div className="xs:col-span-3 relative w-full">
          {type === "register" && role === "client" && (
            <CldImage
              src="https://res.cloudinary.com/dxveggtpi/image/upload/v1763635354/registerClient_fjmqrm.jpg"
              alt="client-register"
              fill
              className="object-cover rounded-lg"
            />
          )}
          {type === "register" && role === "provider" && (
            <CldImage
              src="https://res.cloudinary.com/dxveggtpi/image/upload/v1763635353/registerProvider_1_ail28w.jpg"
              alt="provider-register"
              fill
              className="object-cover rounded-lg"
            />
          )}
          {type === "login" && role === "client" && (
            <CldImage
              src="https://res.cloudinary.com/dxveggtpi/image/upload/v1763635356/loginClient_ssmyco.jpg"
              alt="client-login"
              fill
              className="object-cover rounded-lg"
            />
          )}
          {type === "login" && role === "provider" && (
            <CldImage
              src="https://res.cloudinary.com/dxveggtpi/image/upload/v1763635363/loginProvider_zkhdpp.jpg"
              alt="provider-login"
              fill
              className="object-cover rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
