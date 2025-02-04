import * as React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col justify-between p-4 w-full tracking-wide whitespace-nowrap rounded-2xl bg-white bg-opacity-50 min-h-[960px] shadow-[0px_4px_103px_rgba(50,50,71,0.01)] max-md:mt-10">
        <div className="flex flex-col w-full">
          <div className="self-start py-2 pr-2 pl-2 text-2xl font-semibold text-indigo-900">
            Formora
          </div>
          <div className="flex flex-col mt-12 w-full text-lg text-slate-700 max-md:mt-10">
            <div className="flex gap-2 py-2 pr-2 pl-2 w-full font-medium rounded-md min-h-[39px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/935f802992ab4a6abf926cb27a4933a8/b223faabe3a22c437c18779cb184baf58e4ad50ca7e085be1c0fba10b29e68b5?apiKey=935f802992ab4a6abf926cb27a4933a8&"
                alt="Dashboard"
                className="object-contain shrink-0 my-auto w-6 aspect-[0.96]"
              />
              <div className="flex-1 shrink basis-0">Dashboard</div>
            </div>
            <div className="flex gap-2 px-2 py-2 mt-2.5 w-full font-semibold rounded-md min-h-[39px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/935f802992ab4a6abf926cb27a4933a8/130fa8e3485c2d71e55b0f5adfd4edfabbba18b8343adedb79336fe78f89a2a1?apiKey=935f802992ab4a6abf926cb27a4933a8&"
                alt="Analytics"
                className="object-contain shrink-0 my-auto w-6 aspect-[0.96]"
              />
              <div className="flex-1 shrink basis-0">Analytics</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full text-lg font-medium max-w-[192px] mt-[702px] text-slate-700 max-md:mt-10">
          <div className="flex gap-2 py-2 pr-2 pl-2 w-full rounded-md min-h-[39px]">
            <div className="flex-1 shrink basis-0">Logout</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/935f802992ab4a6abf926cb27a4933a8/fc609e0712df1781336278ecbb1d590d1de41b41d71235348001128f26000098?apiKey=935f802992ab4a6abf926cb27a4933a8&"
              alt="Logout"
              className="object-contain shrink-0 my-auto aspect-square w-[25px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
