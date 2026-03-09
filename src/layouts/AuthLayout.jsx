import { Outlet } from "react-router-dom";

const codingIllustrationUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCW0c8Lica8XJjUJpQxmzasAS4BJ3EksZpCX022xXa-MrZbMr0rCz3m_eTL1_7uCi-JfMMDDw_eFKh6X4hjl6cTauazy9LOPESPEyMkU2zj2JzKBBu4nUjx-3MrIwe3SWWACM6cDBoOFvANeF1MYcoVaItTUVoZkHvBx_l7noIP5VfNjMLR34P2NOpX1ELo7ONPTv15W6yT-BD3Wr_vIQlDSongu7YwQScjRsKbu8I9FJaGrAwx_UvYsjORtmAALU7R8OkIxqPoXh4";

export default function AuthLayout() {
  return (
     <div
      className="content-stretch flex isolate items-start min-h-screen relative w-full"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%), linear-gradient(90deg, rgb(246, 247, 248) 0%, rgb(246, 247, 248) 100%)",
      }}
    >
      <Outlet />
       <div className="bg-[#f0f7ff] content-stretch hidden lg:flex flex-[1_0_0] items-center justify-center min-h-screen min-w-px overflow-clip relative self-stretch z-[1]">
        <div className="h-[506px] max-w-[448px] relative shrink-0 w-[448px]">
          <div className="absolute content-stretch flex items-start justify-center left-[80px] top-[32px]">
            <div className="absolute flex inset-[-72px] items-center justify-center">
              <div className="flex-none size-[432px]">
                <div className="bg-[rgba(96,165,250,0.2)] blur-[20px] rounded-[9999px] size-full" />
              </div>
            </div>
            <div className="relative shadow-[0px_8px_5px_0px_rgba(0,0,0,0.08),0px_20px_13px_0px_rgba(0,0,0,0.03)] shrink-0 size-[288px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Coding illustration" className="absolute left-0 max-w-none size-full top-0" src={codingIllustrationUrl} />
              </div>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[32px] right-[32px] top-[352px]">
            <div className="flex flex-col font-bold h-[32px] justify-center not-italic relative shrink-0 text-[#1e293b] text-[24px] text-center w-[206.61px]">
              <p className="leading-[32px]">Master Your Craft</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col items-center left-[32px] right-[32px] top-[396px]">
            <div className="flex flex-col font-normal h-[78px] justify-center leading-[26px] not-italic relative shrink-0 text-[#64748b] text-[16px] text-center w-[355.62px]">
              <p className="mb-0">Access thousands of curated documentation,</p>
              <p className="mb-0">connect with fellow developers, and streamline</p>
              <p>your learning journey.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}