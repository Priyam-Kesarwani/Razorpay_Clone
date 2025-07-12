import { ChevronRight } from "react-feather";

const FeatureSection1 = () => {
  return (
    <section className="relative mt-[190px] overflow-hidden">
      <img
        src="/images/feature-section1-dottedrows.png"
        alt=""
        loading="lazy"
        width="233"
        height="167"
        className="absolute -top-[8rem] left-[8rem] inline-block -z-10"
      />
      <img
        src="/images/feature-section1-dottedrows.png"
        alt=""
        loading="lazy"
        width="233"
        height="167"
        className="absolute right-0 inline-block rotate-180"
      />

      <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
        <h2 className="font-[Mulish] text-center text-2xl leading-[1.2] font-extrabold">
          Accept Payments with Razorpay Payment Suite
        </h2>
        <div className="w-6 h-1 bg-[#61cea6] mx-auto mt-4 mb-6"></div>

        <div className="w-full min-h-[520px] bg-white flex rounded-md relative p-10 py-12 border">
          <div className="flex flex-col justify-between w-full">
            <h3 className="font-[Mulish] text-[28px] leading-10 font-bold max-w-[500px]">
              Supercharge your business with the all-powerful
              <span className="text-[#2b84ea]">Payment Gateway</span>
            </h3>
            <ul className="space-y-2">
              <li className="font-[Mulish] flex items-center space-x-2">
                <i data-feather="check" class="text-[#61cea6]"></i>
                <span>100+ Payment Methods</span>
              </li>
              <li className="font-[Mulish] flex items-center space-x-2">
                <i data-feather="check" class="text-[#61cea6]"></i>
                <span>Industry Leading Success Rate</span>
              </li>
              <li className="font-[Mulish] flex items-center space-x-2">
                <i data-feather="check" class="text-[#61cea6]"></i>
                <span>Superior Checkout Experience</span>
              </li>
              <li className="font-[Mulish] flex items-center space-x-2">
                <i data-feather="check" class="text-[#61cea6]"></i>
                <span>Easy to Integrate</span>
              </li>
              <li className="font-[Mulish] flex items-center space-x-2">
                <i data-feather="check" class="text-[#61cea6]"></i>
                <span>Instant Settlements from day 1</span>
              </li>
              <li className="font-[Mulish] flex items-center space-x-2">
                <i data-feather="check" class="text-[#61cea6]"></i>
                <span>In-depth Reporting and Insights</span>
              </li>
            </ul>

            <div className="flex flex-row items-center space-x-4">
              <button className="bg-[#2b84ea] w-fit text-white rounded-md font-[Mulish] font-bold hover:bg-[#0b72e7] transition-all duration-200 py-[14px] px-[18px]">
                Sign Up Now
              </button>
              <div className="flex items-center cursor-pointer group">
                <a
                  href="#"
                  className="font-[Mulish] font-bold text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"
                ></i>
              </div>
            </div>
          </div>
          <img
            src="/images/payment-suite.png"
            alt=""
            className="max-w-[500px] absolute right-0 bottom-0"
          />
        </div>

        <div className="w-full grid grid-cols-3 gap-4 mt-10">
          <div className="w-full min-h-[15rem] relative cursor-pointer">
            <img
              src="/images/payment-link-icon.svg"
              alt="Payment link icon"
              className="bg-[#2b84ea] absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
            />

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
              style={{ strokeOpacity: 0.15 }}
            >
              <path
                d="m 0 6 
         a 6 6 0 0 1 6 -6 
         h 250.32501220703125 
         a 16 16 0 0 1 11 5 
         l 77 77 
         a 16 16 0 0 1 5 11 
         v 126 
         a 6 6 0 0 1 -6 6 
         h -337.32501220703125 
         a 6 6 0 0 1 -6 -6 
         z"
                fill="#fff"
              />
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
              <div>
                <h3 className="font-[Mulish] font-bold text-[#162f56] leading-[1.2] text-[1.375rem]">
                  Payment Links
                </h3>
                <p className="font-[Mulish] text-[#818597] mt-6">
                  Share payment link via an email, SMS, messenger, chatbot etc.
                  and get paid immediately
                </p>
              </div>

              <div className="flex items-center cursor-pointer group py-6">
                <a
                  href="#"
                  className="font-[Mulish] font-bold text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"
                >
                  Know More
                </a>
                <i
                  data-feather="chevron-right"
                  className="w-5 h-5 text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"
                ></i>
              </div>
            </div>
          </div>

          <div className="w-full min-h-[15rem] relative cursor-pointer">
            <img
              src="/images/payment-link-icon.svg"
              alt="Payment link icon"
              className="bg-[#2b84ea] absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
            />

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
              style={{ strokeOpacity: 0.15 }}
            >
              <path
                d="m 0 6 
         a 6 6 0 0 1 6 -6 
         h 250.32501220703125 
         a 16 16 0 0 1 11 5 
         l 77 77 
         a 16 16 0 0 1 5 11 
         v 126 
         a 6 6 0 0 1 -6 6 
         h -337.32501220703125 
         a 6 6 0 0 1 -6 -6 
         z"
                fill="#fff"
              />
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
              <div>
                <h3 className="font-[Mulish] font-bold text-[#162f56] leading-[1.2] text-[1.375rem]">
                  Configurable Methods
                </h3>
                <p className="font-[Mulish] text-[#818597] mt-6">
                  Customize and reorder 100+ payment methods in checkout for a
                  personalized UX
                </p>
              </div>

              <div className="flex items-center cursor-pointer group py-6">
                <a
                  href="#"
                  className="font-[Mulish] font-bold text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"
                >
                  Know More
                </a>
                <ChevronRight className="w-5 h-5 text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200" />
              </div>
            </div>
          </div>

          <div className="w-full min-h-[15rem] relative cursor-pointer">
            <img
              src="/images/payment-link-icon.svg"
              alt="Payment link icon"
              className="bg-[#2b84ea] absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
            />

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
              style={{ strokeOpacity: 0.15 }}
            >
              <path
                d="m 0 6 
         a 6 6 0 0 1 6 -6 
         h 250.32501220703125 
         a 16 16 0 0 1 11 5 
         l 77 77 
         a 16 16 0 0 1 5 11 
         v 126 
         a 6 6 0 0 1 -6 6 
         h -337.32501220703125 
         a 6 6 0 0 1 -6 -6 
         z"
                fill="#fff"
              />
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
              <div>
                <h3 className="font-[Mulish] font-bold text-[#162f56] leading-[1.2] text-[1.375rem]">
                  Checkout Timeout
                </h3>
                <p className="font-[Mulish] text-[#818597] mt-6">
                  Automatically expire checkouts after set time to avoid stale
                  sessions
                </p>
              </div>

              <div className="flex items-center cursor-pointer group py-6">
                <a
                  href="#"
                  className="font-[Mulish] font-bold text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"
                >
                  Know More
                </a>
                <ChevronRight className="w-5 h-5 text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200" />
              </div>
            </div>
          </div>

          <div className="w-full min-h-[15rem] relative cursor-pointer">
            <img
              src="/images/payment-link-icon.svg"
              alt="Payment link icon"
              className="bg-[#2b84ea] absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
            />

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
              style={{ strokeOpacity: 0.15 }}
            >
              <path
                d="m 0 6 
         a 6 6 0 0 1 6 -6 
         h 250.32501220703125 
         a 16 16 0 0 1 11 5 
         l 77 77 
         a 16 16 0 0 1 5 11 
         v 126 
         a 6 6 0 0 1 -6 6 
         h -337.32501220703125 
         a 6 6 0 0 1 -6 -6 
         z"
                fill="#fff"
              />
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
              <div>
                <h3 className="font-[Mulish] font-bold text-[#162f56] leading-[1.2] text-[1.375rem]">
                  Downtime Alerts
                </h3>
                <p className="font-[Mulish] text-[#818597] mt-6">
                  Inform customers about payment method downtimes instantly to
                  avoid failure
                </p>
              </div>

              <div className="flex items-center cursor-pointer group py-6">
                <a
                  href="#"
                  className="font-[Mulish] font-bold text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"
                >
                  Know More
                </a>
                <ChevronRight className="w-5 h-5 text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200" />
              </div>
            </div>
          </div>

          <div className="w-full min-h-[15rem] relative cursor-pointer">
            <img
              src="/images/payment-link-icon.svg"
              alt="Payment link icon"
              className="bg-[#2b84ea] absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
            />

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
              style={{ strokeOpacity: 0.15 }}
            >
              <path
                d="m 0 6 
         a 6 6 0 0 1 6 -6 
         h 250.32501220703125 
         a 16 16 0 0 1 11 5 
         l 77 77 
         a 16 16 0 0 1 5 11 
         v 126 
         a 6 6 0 0 1 -6 6 
         h -337.32501220703125 
         a 6 6 0 0 1 -6 -6 
         z"
                fill="#fff"
              />
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
              <div>
                <h3 className="font-[Mulish] font-bold text-[#162f56] leading-[1.2] text-[1.375rem]">
                  Retry Flow
                </h3>
                <p className="font-[Mulish] text-[#818597] mt-6">
                  Intelligent retry suggestions boost success rate and reduce
                  drop-offs
                </p>
              </div>

              <div className="flex items-center cursor-pointer group py-6">
                <a
                  href="#"
                  className="font-[Mulish] font-bold text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"
                >
                  Know More
                </a>
                <ChevronRight className="w-5 h-5 text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200" />
              </div>
            </div>
          </div>

          <div className="w-full min-h-[15rem] relative cursor-pointer">
            <img
              src="/images/payment-link-icon.svg"
              alt="Payment link icon"
              className="bg-[#2b84ea] absolute right-3 top-3 w-12 h-12 rounded-full z-[8] transition-all duration-200"
            />

            <svg
              viewBox="0 0 349.32501220703125 225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
              style={{ strokeOpacity: 0.15 }}
            >
              <path
                d="m 0 6 
         a 6 6 0 0 1 6 -6 
         h 250.32501220703125 
         a 16 16 0 0 1 11 5 
         l 77 77 
         a 16 16 0 0 1 5 11 
         v 126 
         a 6 6 0 0 1 -6 6 
         h -337.32501220703125 
         a 6 6 0 0 1 -6 -6 
         z"
                fill="#fff"
              />
            </svg>

            <div className="z-[100] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
              <div>
                <h3 className="font-[Mulish] font-bold text-[#162f56] leading-[1.2] text-[1.375rem]">
                  Instant Settlements
                </h3>
                <p className="font-[Mulish] text-[#818597] mt-6">
                  Get payouts from day one with Razorpay's instant settlements
                  feature
                </p>
              </div>

              <div className="flex items-center cursor-pointer group py-6">
                <a
                  href="#"
                  className="font-[Mulish] font-bold text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200"
                >
                  Know More
                </a>
                <ChevronRight className="w-5 h-5 text-[#0b72e7] group-hover:text-[#344a6c] transition-all duration-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection1;
