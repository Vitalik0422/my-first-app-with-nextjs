import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import Link from "next/link"
import { useState } from "react"


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
                {authPage ? (<LoginForm />) : (<RegisterForm />)}
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