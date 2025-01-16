import Link from 'next/link';
import { useForm, SubmitHandler  } from 'react-hook-form';
import { schemaValidationLogin } from './validationSchema';
import { useJoiValidationResolver } from '@/common/hooks/useJoiValidationResolver';

type LoginInputs={
    email: string,
    password: string
}

export default function LoginForm() {
    const resolver = useJoiValidationResolver(schemaValidationLogin)
    const {
        register,
        handleSubmit,
        } = useForm<LoginInputs>({
            resolver
        })
    
        const onSubmit: SubmitHandler<LoginInputs>  = async(data) => {
        console.log(data);
    }
    return (
        <form action=""onSubmit={handleSubmit(onSubmit)}>
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