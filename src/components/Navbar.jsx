import React from 'react'

const main = () => {
  return (
     <nav class="bg-[#02042a]">
        <div class="relative w-[1080px] mx-auto flex items-center justify-between">
            <a href="/" class="cursor-pointer py-7 pr-7">
                <img src="./images/logo.svg" width="125px" height="30px" />
            </a>
            <ul class="flex space-x-6">
                <li
                    class="text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Payments</a>
                    <div
                        class="absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block transition-all duration-200">
                    </div>
                </li>
                <li
                    class="text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Banking</a>
                    <div
                        class="absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block transition-all duration-200">
                    </div>
                </li>
                <li
                    class="text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Corporate Card</a>
                </li>
                <li
                    class="text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Payroll</a>
                </li>
                <li
                    class="text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Resources</a>
                    <div
                        class="absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block transition-all duration-200">
                    </div>
                </li>
                <li
                    class="text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Support</a>
                    <div
                        class="absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block transition-all duration-200">
                    </div>
                </li>
                <li
                    class="text-white font-[Mulish] py-7 hover:text-[#2b84ea] cursor-pointer transition-all duration-200 relative group">
                    <a href="#">Pricing</a>
                    <div
                        class="absolute bottom-0 w-full h-1 bg-[#2b84ea] hidden group-hover:block transition-all duration-200">
                    </div>
                </li>
            </ul>
            <div class="flex space-x-6">
                <img src="./images/india-flag.svg" width="28px" height="20px" />
                <button class="py-3 px-5 font-[Mulish] text-white border-[#2b84ea] border rounded-sm text-sm font-bold">
                    Log in
                </button>
                <button
                    class="font-[Mulish] text-[#4b94ed] bg-white border rounded-sm text-sm font-bold transition-all duration-200 hover:text-[#0b72e7] py-[14] px-[18]">
                    Sign Up
                </button>
            </div>
        </div>
    </nav>
  )
}

export default main
