import React from 'react'

const HeroSection = () => {
  return (
   <section class="relative bg-[#02042a]">
        <div class="w:10/12 max-w-[1080px] flex flex-row justify-between items-center mx-auto">
          
            <div class="space-y-8">
                <h1 class="font-[Mulish] font-bold text-[40px] leading-[1.2] text-white">
                    Power your finance, grow your business
                </h1>
                <div class="w-6 h-1 bg-[#61cea6]"></div>
                <p class="font-[Mulish] text-[18px] leading-7 text-white opacity-70">
                    Accept payments from customers. Automate payouts to vendors &
                    employees. Never run out of working capital.
                </p>
                <button
                    class="bg-[#2b84ea] text-white rounded-md font-[Mulish] font-bold hover:bg-[#0b72e7] transition-all duration-200 py-[18px] px-[10px]">
                    Sign Up Now
                </button>
            </div>
          
            <img src="./images/hero-illustration.jpg" alt="" class="w-full max-w-[680px]" />
        </div>

    
        <div class="w-[100.1%] absolute left-0 right-0">
            <img src="./images/hero-shape.svg" alt="" class="w-full object-fill" />
        </div>
    </section>
  )
}

export default HeroSection
