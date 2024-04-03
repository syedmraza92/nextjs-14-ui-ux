import Image from "next/image";
import Logo from '../../public/assets/Logo.svg'
import Facebook from '../../public/assets/Facebook.svg'
import Twitter from '../../public/assets/X.svg'
import Feed from '../../public/assets/Feed.svg'



export function Footer(){
    return(
        <div className="pt-[80px] pb-[40px]">
            <div className="flex items-center justify-center gap-x-[12px]">
                <Image src={Logo} alt="Logo"/>
                <p className="font-bold text-[#36485C] text-[17px]">Syed Raza</p>
            </div>

            <ul className="flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5">
                <li>Features</li>
                <li>Pricing</li>
                <li>Enterprise</li>
                <li>Careers</li>
            </ul>

            <p className="pt-5 text-center text-[14px] text-[#36485C] ">© Copyright 2024. Your Site. All rights reserved.</p>

            <div className="flex items-center justify-center gap-x-[56px] pt-[40px]">
                <Image src={Facebook} alt="facebook"/>
                <Image src={Twitter} alt="x"/>
                <Image src={Feed} alt="feed"/>
            </div>
        </div>
    )
};