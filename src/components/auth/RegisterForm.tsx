import Link from "next/link"
import {SubmitHandler, useForm} from "react-hook-form"

type RegInputs = {
    name: string,
    email: string,
    password: string
}

export default function RegisterForm() {
    const {
            register, 
            handleSubmit
        } = useForm<RegInputs>()
    
    const onSubmit: SubmitHandler<RegInputs> = async(data) =>{
        console.log(data);  
    }
    return (
        <form action=""onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register('name')}
                placeholder="Full Name"
                type="text"
                className="input-auth-form"
            />
            <input
                {...register('email')}
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