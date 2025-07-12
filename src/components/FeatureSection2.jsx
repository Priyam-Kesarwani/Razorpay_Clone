import feather from "feather-icons";
import { useEffect } from "react";

const FeatureSection2 = () => {
    useEffect(() => {
    feather.replace();
  }, []);

  return (
   <section className="bg-[url('/images/feature-section-2BG.svg')] bg-cover bg-no-repeat pt-[8rem] pb-[100px] mt-14">

  <div className="w-10/12 max-w-[1080px] pt-4 mx-auto relative ">
    <h2 className="font-[Mulish] text-center text-2xl leading-[1.2] font-bold text-white">Explore Razorpay Business Banking</h2>
    <div className="w-6 h-1 bg-[#61cea6] mx-auto mt-4 mb-20"></div>

    <div className="w-full flex flex-col min-h-[1440px] relative">
      <img src="/images/x-flame-1.png" alt="" loading="lazy" className="absolute -top-[142px] -left-[140px] w-[200px]" />
      <img src="/images/x-flame-2.png" alt="" loading="lazy" className="absolute top-[150px] -right-[180px] w-[270px]" />

      <div className="w-full min-h-[500px] flex rounded-md relative p-10 py-12 border border-slate-700 bg-[#181c2e] z-20">
        <div className="flex flex-col justify-between w-full items-start z-20 ">
          <h3 className=" text-white font-[Mulish] text-[28px] leading-10 font-bold max-w-[450px]">
            Manage your company's finances with 
            <img src="/images/razorpayX.svg" alt="" loading="lazy" width="168px" height="32px" className="inline" />
            <span className="text-[#61cea6]">Business Banking</span>
          </h3>
          <ul className="space-y-2 text-white">
            <li className="font-[Mulish] flex items-center space-x-2">
              <i data-feather="check" className="text-[#61cea6]"></i>
              <span>Open a fully digital current account</span>
            </li>
            <li className="font-[Mulish] flex items-center space-x-2">
              <i data-feather="check" className="text-[#61cea6]"></i>
              <span>Automate payables & compliment payments</span>
            </li>
            <li className="font-[Mulish] flex items-center space-x-2">
              <i data-feather="check" className="text-[#61cea6]"></i>
              <span>Simplify and track spends with Corporate cards</span>
            </li>
            <li className="font-[Mulish] flex items-center space-x-2">
              <i data-feather="check" className="text-[#61cea6]"></i>
              <span>View financial insights at a glance</span>
            </li>
          </ul>

          <div className="flex flex-row items-center space-x-4 w-full">
            <button className="relative bg-[#2b84ea] flex items-center justify-start text-white rounded-md  md:pr-[90px] font-[Mulish] font-bold hover:bg-[#0b72e7] transition-all duration-200 py-[14px] px-[18px]">
              Sign Up
              <div className="w-12 h-[60px] bg-[#61cea6] absolute right-6 skew-x-[20deg] flex justify-center items-center">
                <svg viewBox="0 0 24 24" focusable="false" className="w-[20px] h-[20px] -skew-x-[20deg] ">
                  <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                </svg>
              </div>
            </button>
            <div className="flex flex-row items-center cursor-pointer group">
              <a href="#" className="font-[Mulish] font-bold text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200">Know More</a>
              <i data-feather="chevron-right" className="w-5 h-5 text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"></i>
            </div>
          </div>
        </div>
        <img src="./images/buisness-banking.png" alt="" className="max-w-[600px] absolute right-0 bottom-0" />
      </div>

      <div className="grid grid-cols-3 w-full gap-4 my-14">
        <div className="w-full min-h-[15rem] relative cursor-pointer  border-slate-700">
          <img src="/images/current-icon.svg" alt="" className="bg-[#2b84ea] absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200" />
          <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200" style={{ strokeOpacity: 0.15 }}>
            <path d="m 0 6 a 6 6 0 0 1 6 -6 h 250.32501220703125 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.32501220703125 a 6 6 0 0 1 -6 -6 z" fill="#181c2e"></path>
          </svg>
          <div className="z-[100] absolute w-full h-full flex-col justify-between pl-5 py-6 pr-8">
            <div>
              <h3 className="font-[Mulish] font-bold text-white leading-[1.2] text-[1.375rem]">Current Account</h3>
              <p className="font-[Mulish] text-[#818597] mt-6">Current accounts for fast-growing businesses, supported by the best-in-class technology</p>
            </div>
            <div className="flex items-center cursor-pointer group py-6">
              <a href="#" className="font-[Mulish] font-bold text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200">Know More</a>
              <i data-feather="chevron-right" className="w-5 h-5 text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"></i>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[15rem] relative cursor-pointer  border-slate-700">
          <img src="/images/current-icon.svg" alt="" className="bg-[#2b84ea] absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200" />
          <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200" style={{ strokeOpacity: 0.15 }}>
            <path d="m 0 6 a 6 6 0 0 1 6 -6 h 250.32501220703125 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.32501220703125 a 6 6 0 0 1 -6 -6 z" fill="#181c2e"></path>
          </svg>
          <div className="z-[100] absolute w-full h-full flex-col justify-between pl-5 py-6 pr-8">
            <div>
              <h3 className="font-[Mulish] font-bold text-white leading-[1.2] text-[1.375rem]">Payouts</h3>
              <p className="font-[Mulish] text-[#818597] mt-6">Make instant payouts to vendors, employees, and partners directly from your dashboard or via APIs</p>
            </div>
            <div className="flex items-center cursor-pointer group py-6">
              <a href="#" className="font-[Mulish] font-bold text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200">Know More</a>
              <i data-feather="chevron-right" className="w-5 h-5 text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"></i>
            </div>
          </div>
        </div>

        <div className="w-full min-h-[15rem] relative cursor-pointer  border-slate-700">
          <img src="/images/current-icon.svg" alt="" className="bg-[#2b84ea] absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200" />
          <svg viewBox="0 0 349.32501220703125 225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200" style={{ strokeOpacity: 0.15 }}>
            <path d="m 0 6 a 6 6 0 0 1 6 -6 h 250.32501220703125 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.32501220703125 a 6 6 0 0 1 -6 -6 z" fill="#181c2e"></path>
          </svg>
          <div className="z-[100] absolute w-full h-full flex-col justify-between pl-5 py-6 pr-8">
            <div>
              <h3 className="font-[Mulish] font-bold text-white leading-[1.2] text-[1.375rem]">Corporate Cards</h3>
              <p className="font-[Mulish] text-[#818597] mt-6">Empower teams with smart corporate cards and spend controls integrated with your accounting systems</p>
            </div>
            <div className="flex items-center cursor-pointer group py-6">
              <a href="#" className="font-[Mulish] font-bold text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200">Know More</a>
              <i data-feather="chevron-right" className="w-5 h-5 text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"></i>
            </div>
          </div>
        </div>

  
      </div>

      <div className="w-full flex flex-row items-center justify-evenly border border-slate-700 mb-24 gap-y-6 p-8 relative rounded-md">
        <p className="font-[Mulish] text-xl text-white">Check out the live demo to learn how RazorpayX works.
          <span className="font-bold">No sign-up required!</span>
        </p>
        <button className="relative bg-[#2b84ea] flex items-center justify-start text-white rounded-md  md:pr-[90px] font-[Mulish] font-bold hover:bg-[#0b72e7] transition-all duration-200 py-[14px] px-[18px]">
          Checkout the demo
          <div className="w-12 h-[60px] bg-[#61cea6] absolute right-6 skew-x-[20deg] flex justify-center items-center">
            <svg viewBox="0 0 24 24" focusable="false" className="w-[20px] h-[20px] -skew-x-[20deg] ">
              <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
          </div>
        </button>
      </div>

    </div>
  </div>
    {/* <script>
        feather.replace();
    </script> */}
</section>

  )
}

export default FeatureSection2
