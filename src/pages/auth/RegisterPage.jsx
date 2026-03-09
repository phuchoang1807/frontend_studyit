import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function EyeIcon() {
  return (
    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" aria-hidden="true">
      <path
        d="M10 0.5C5.455 0.5 1.573 3.327 0 6.5C1.573 9.673 5.455 12.5 10 12.5C14.545 12.5 18.427 9.673 20 6.5C18.427 3.327 14.545 0.5 10 0.5ZM10 10.5C7.79 10.5 6 8.71 6 6.5C6 4.29 7.79 2.5 10 2.5C12.21 2.5 14 4.29 14 6.5C14 8.71 12.21 10.5 10 10.5Z"
        fill="#9ca3af"
      />
    </svg>
  );
}

            export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

            const handleRegister = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

          return (
    <div className="bg-white relative self-stretch shrink-0 w-full lg:w-[500px] z-[2] min-h-screen">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] lg:border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-8 lg:pl-[48px] lg:pr-[49px] py-[48px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-full lg:w-[500px]" />

          <div className="max-w-[400px] relative shrink-0 w-full">
            <form onSubmit={handleRegister} className="content-stretch flex flex-col gap-[32px] items-start relative w-full">
              <div className="content-stretch flex flex-col items-start w-full">
                <div className="flex flex-col font-bold justify-center text-[#111418] text-[30px] tracking-[-0.45px]">
                  <p className="leading-[37.5px]">Create Account</p>
                </div>
                <div className="content-stretch flex flex-col items-start pt-[12px]">
                  <div className="flex flex-col font-normal text-[#637588] text-[14px]">
                    <p className="leading-[21px]">Join us today! Fill in your details to get started.</p>
                  </div>
                </div>
              </div>

            <div className="content-stretch flex flex-col gap-[24px] items-start w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                  <p className="font-medium text-[#111418] text-[14px] leading-[21px]">Full Name</p>
                  <div className="bg-white h-[48px] relative rounded-[8px] w-full">
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="John Doe"
                      className="absolute inset-0 w-full h-full px-[17px] py-[14px] rounded-[8px] border border-[#dbe0e6] text-[16px] text-[#111418] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#137fec]"
                    />
                  </div>
                </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                  <p className="font-medium text-[#111418] text-[14px] leading-[21px]">Email Address</p>
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

            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
                  <p className="font-medium text-[#111418] text-[14px] leading-[21px]">Password</p>
                  <div className="bg-white h-[48px] relative rounded-[8px] w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a strong password"
                      className="absolute inset-0 w-full h-full px-[17px] py-[14px] rounded-[8px] border border-[#dbe0e6] text-[16px] text-[#111418] placeholder:text-[#9ca3af] focus:outline-none focus:border-[#137fec]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-[17px] top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center"
                    >
                      <EyeIcon />
                    </button>
                  </div>
                </div>

              <button className="bg-[#137fec] h-[48px] rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full hover:bg-[#1166c7] transition-colors text-white font-bold">
                  Create Account
                </button>
              </div>

              <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
                <div className="flex items-center gap-[16px] w-full">
                  <div className="flex-1 h-[1px] bg-[#e5e7eb]" />
                  <span className="text-[14px] text-[#637588]">or continue with</span>
                  <div className="flex-1 h-[1px] bg-[#e5e7eb]" />
                </div>
                <div className="flex gap-[12px] w-full">
                  <button type="button" className="flex-1 h-[48px] border border-[#dbe0e6] rounded-[8px] flex items-center justify-center hover:bg-[#f9fafb] transition-colors">Google</button>
                  <button type="button" className="flex-1 h-[48px] border border-[#dbe0e6] rounded-[8px] flex items-center justify-center hover:bg-[#f9fafb] transition-colors">GitHub</button>
                </div>
              </div>
            <div className="content-stretch flex gap-[4px] items-start text-[14px] w-full justify-center">
                <p className="text-[#637588] leading-[20px]">Already have an account?</p>
                <Link to="/login" className="font-semibold text-[#137fec] hover:underline leading-[20px]">
                  Sign In
                </Link>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}