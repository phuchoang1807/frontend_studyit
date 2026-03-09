import { Link } from "react-router-dom";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-white relative self-stretch shrink-0 w-full lg:w-[500px] z-[2] min-h-screen">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] lg:border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-8 lg:pl-[48px] lg:pr-[49px] py-[48px] relative size-full">
          
          <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-full lg:w-[500px]" />

          <div className="max-w-[400px] relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start relative w-full">
              
              <div className="content-stretch flex flex-col items-start w-full">
                <div className="flex flex-col font-bold justify-center text-[#111418] text-[30px] tracking-[-0.45px]">
                  <p className="leading-[37.5px]">Forgot Password?</p>
                </div>

                <div className="content-stretch flex flex-col items-start pt-[12px]">
                  <div className="flex flex-col font-normal text-[#637588] text-[14px]">
                    <p className="leading-[21px]">
                      No worries! Enter your email and we&apos;ll send you a reset link.
                    </p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                  <p className="font-medium text-[#111418] text-[14px] leading-[21px]">
                    Email Address
                  </p>

                  {/* Sửa ở đây: thêm relative */}
                  <div className="bg-white h-[48px] relative rounded-[8px] w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="user@example.com"
                      className="absolute inset-0 w-full h-full px-[17px] py-[14px] rounded-[8px] border border-[#dbe0e6] text-[16px] text-[#111418] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#137fec]"
                    />
                  </div>

                </div>

                <button className="bg-[#137fec] h-[48px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full hover:bg-[#1166c7] transition-colors text-white font-bold">
                  Send reset link
                </button>
              </div>

              <div className="content-stretch flex gap-[4px] items-start text-[14px] w-full justify-center">
                <p className="text-[#637588] leading-[20px]">
                  Remember your password?
                </p>

                <Link
                  to="/login"
                  className="font-semibold text-[#137fec] hover:underline leading-[20px]"
                >
                  Back to Sign In
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}