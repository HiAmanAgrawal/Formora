import * as React from "react";

function Audience() {
  return (
    <div className="flex flex-col w-96 min-w-[240px]">
      <div className="flex flex-col max-w-full text-zinc-800 w-[262px]">
        <div className="text-lg font-medium">Audience</div>
        <div className="mt-2 text-sm font-light">
          See how your audience breaks down.
        </div>
      </div>
      <div className="flex flex-col p-4 mt-4 w-full max-w-sm rounded-2xl bg-white bg-opacity-50 shadow-[0px_4px_103px_rgba(50,50,71,0.01)]">
        <div className="flex gap-10 justify-between items-start w-full">
          <div className="text-lg font-medium tracking-wide text-black">
            Overall sentiment distribution
          </div>
          <div className="flex gap-2.5 items-start p-0.5 bg-black bg-opacity-0 w-[46px]">
            <div className="flex min-h-[13px]" />
          </div>
        </div>
        <div className="flex gap-10 mt-2 w-full tracking-wide text-black">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/935f802992ab4a6abf926cb27a4933a8/60bf2ee49c48853628f05d8daf56c6ddd4d794064bfb1310663c0b262497db50?apiKey=935f802992ab4a6abf926cb27a4933a8&"
            alt="Sentiment Distribution"
            className="object-contain shrink-0 self-start aspect-square w-[109px]"
          />
          <div className="flex flex-col justify-between items-start w-[186px]">
            <div className="flex gap-1 items-center max-w-full min-h-[34px] w-[197px]">
              <div className="self-stretch my-auto text-xs font-light w-[137px]">
                Positive responses
              </div>
              <div className="self-stretch my-auto text-xl font-medium w-[79px]">
                61%
              </div>
            </div>
            <div className="flex gap-1 items-center max-w-full min-h-[34px] w-[197px]">
              <div className="self-stretch my-auto text-xs font-light w-[136px]">
                Negative responses
              </div>
              <div className="self-stretch my-auto text-xl font-medium w-[79px]">
                31%
              </div>
            </div>
            <div className="flex gap-1 items-center max-w-full min-h-[34px] w-[197px]">
              <div className="self-stretch my-auto text-xs font-light w-[143px]">
                Neutral responses %
              </div>
              <div className="self-stretch my-auto text-xl font-medium w-[79px]">
                8%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col p-4 mt-4 w-full max-w-sm rounded-2xl bg-white bg-opacity-50 shadow-[0px_4px_103px_rgba(50,50,71,0.01)]">
        <div className="flex gap-10 justify-between items-start w-full">
          <div className="text-lg font-medium tracking-wide text-black">
            Customer Age Distribution
          </div>
          <div className="flex gap-2.5 items-start p-0.5 bg-black bg-opacity-0 w-[46px]">
            <div className="flex min-h-[13px]" />
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/935f802992ab4a6abf926cb27a4933a8/e465db5288760a8f2a1762391b64c2ef85523f764f4664665287d85f16ac60a7?apiKey=935f802992ab4a6abf926cb27a4933a8&"
          alt="Age Distribution"
          className="object-contain mt-2 w-full aspect-[5.1]"
        />
      </div>
    </div>
  );
}

export default Audience;
