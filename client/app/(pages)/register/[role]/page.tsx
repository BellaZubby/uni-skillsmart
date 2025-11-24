"use client"
import AuthForm, { AuthFormData } from '@/app/components/forms/AuthForm'
import ProtectedRoute from '@/app/components/ProtectedRoute'
import { login } from '@/app/store/authSlice';
import { useParams } from 'next/navigation'
import { useDispatch } from 'react-redux';

const Register= () => {
  const {role} = useParams();
  const dispatch = useDispatch();

  const handleRegister = (data:AuthFormData) => {
    dispatch(login({ // sending to the store details of user that I may need within the app.
      // firstName: data.firstName,
      // lastName: data.lastName,
      // email: data.email,
      // role
        user: {
          role: 'client',
          email: '',
          firstName: ""
        }
    }));
  }
  return (
    // <ProtectedRoute>
      <AuthForm type="register" role={role as "client" | "provider"} onSubmit={handleRegister}/>
    // </ProtectedRoute>
  )
}

export default Register