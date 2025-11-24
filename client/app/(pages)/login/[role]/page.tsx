"use client"
import {useParams, useRouter} from "next/navigation";
import { useDispatch} from 'react-redux'; // used to trigger an action
import { login } from '@/app/store/authSlice'; // the action to be triggered/dispatched;
import AuthForm, { AuthFormData } from "@/app/components/forms/AuthForm";
import { UserRole } from "@/app/collections/types";

const Login = () => {
  const {role} = useParams() as {role: string}; // the role is extracted from the path(/login/client) when a user clicks the link to register either as a client or as a provider
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = (data:AuthFormData) => {
    console.log("User about to log in");
    dispatch(login({
      user: {
        role: role as UserRole,
        email: data.email,
        firstName: "",
        lastName: ""
      }
    }));
    // dispatch(login({email: data.email}));
    router.replace("/")
  };

  return (
    <main>
      <AuthForm type="login" role={role as "client" | "provider"} onSubmit={handleLogin} />
    </main>
  )
}

export default Login