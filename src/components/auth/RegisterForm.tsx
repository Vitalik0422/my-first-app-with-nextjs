import Link from "next/link"

export default function LoginForm() {
    return (
        <div className="w-[100%] h-[100%]">
            <div className="max-w-[340px] h-[100%] mx-auto flex flex-col place-content-center">
                <div className="max-w-[100px] max-h-[100px] mb-[34px]">
                    <Link href='/' className="font-title text-[14px] pb-[10px] mr-[20px] border-b-2 hover:border-defaultBlue">Login</Link>
                    <Link href='/' className="font-title pb-[10px] text-[14px] border-b-2 hover:border-defaultBlue">Register</Link>
                </div>
                <form action="">
                    <input
                        placeholder="Full Name"
                        type="text"
                        className="w-[100%] px-[20px] py-[9px] mb-[14px] focus:outline-none bg-[#F7F7F7] rounded-[6px] text-black placeholder:text-black placeholder:font-title"
                    />
                    <input
                        placeholder="E-mail Address"
                        type="text"
                        className="w-[100%] px-[20px] py-[9px] mb-[14px] focus:outline-none bg-[#F7F7F7] rounded-[6px] text-black placeholder:text-black placeholder:font-title"
                    />
                    <input
                        placeholder="Password"
                        type="text"
                        className="w-[100%] px-[20px] py-[9px] mb-[14px] focus:outline-none bg-[#F7F7F7] rounded-[6px] text-black placeholder:text-black placeholder:font-title"
                    />
                    <div className="w-[100%] mb-[24px]">
                        <button className="bg-defaultBlue text-[14px] text-white font-title mr-[10px] px-[28px] py-[6px] rounded-[6px]">
                            Login
                        </button>
                        <Link
                            href='#'
                            className="font-title text-[13px]">
                            Forget password?
                        </Link>
                    </div>
                </form>
                <div className="flex font-title text-[14px] gap-[10px]">
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