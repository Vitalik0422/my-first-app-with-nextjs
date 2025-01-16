'use client'
import AuthStructure from "@/components/auth/AuthStructure"
import Banner from "@/components/auth/Banner"

export default function Auth() {
    return (
        <div className="flex">
            <div className="w-[550px] h-dvh flex-none bg-defaultBlue flex justify-center items-center">
                <Banner></Banner>
            </div>
            <div className="w-[100%] h-dvh p-[60px]">
            <AuthStructure />
            </div>
        </div>
    )
}