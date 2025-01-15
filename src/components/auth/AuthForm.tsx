import Link from "next/link"
import { useState } from "react"
import { useForm, SubmitHandler  } from 'react-hook-form';

type Inputs={
    name: string,
    password: string
}

function LoginForm() {
    const {
        register,
        handleSubmit,
        } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs>  = async(data) => {
        console.log(data);
    }
    return (
        <form action=""onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('name')}              
                placeholder="E-mail Address"
                type="text"
                className="input-auth-form"
            />
            <input
                {...register('password')}   
                placeholder="Password"
                type="text"
                className="input-auth-form"
            />
            <div className="w-[100%] mb-6">
                <button className="btn-auth-subm">
                    Login
                </button>
                <Link
                    href='#'
                    className="font-title text-[13px] underline font-bold">
                    Forget password?
                </Link>
            </div>
        </form>
    )
}
function RegisterForm() {

    return (
        <form action="">
            <input
                placeholder="Full Name"
                type="text"
                className="input-auth-form"
            />
            <input
                placeholder="E-mail Address"
                type="text"
                className="input-auth-form"
            />
            <input
                placeholder="Password"
                type="text"
                className="input-auth-form"
            />
            <div className="w-[100%] mb-6">
                <button className="btn-auth-subm">
                    Login
                </button>
                <Link
                    href='#'
                    className="font-title text-[13px] underline font-bold">
                    Forget password?
                </Link>
            </div>
        </form>
    )
}


export default function AuthForm() {
    const [authPage, setAuthPage] = useState(true)
    const isActiveLog = authPage ? ('btn-login active') : ("btn-login")
    const isActiveReg = authPage ? ('btn-register') : ("btn-register active")
    return (
        <div className="w-full h-full">
            <div className="max-w-[340px] h-full mx-auto flex flex-col place-content-center">
                <div className="max-w-full max-h-full mb-8 flex gap-5">
                    <button
                        type="button"
                        onClick={() => setAuthPage(true)}
                        className={isActiveLog}>
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => setAuthPage(false)}
                        className={isActiveReg}>
                        Register
                    </button>
                </div>
                {authPage ? (<LoginForm/>):(<RegisterForm/>)}
                <div className="flex font-title text-base gap-2.5">
                    <span>Or login with</span>
                    <Link
                        href="#"
                    >
                        F
                    </Link>
                    <Link
                        href="#"
                    >
                        G
                    </Link>
                    <Link
                        href="#"
                    >
                        in
                    </Link>
                </div>
            </div>
        </div>

    )
}