import * as React from "react";

function FeedbackChannels() {
  return (
    <>
      <div className="flex flex-col mt-2.5 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-2 px-6 max-w-full text-sm rounded-lg bg-white bg-opacity-10 min-h-[56px] text-zinc-800 w-[239px] max-md:px-5">
          <div className="gap-1 self-stretch px-2 py-1 h-full rounded-md w-[191px]">
            All Feedback Channels
          </div>
        </div>
        <div className="flex flex-wrap gap-10 mt-6 w-full text-sm tracking-wide max-w-[792px] min-h-[80px] text-zinc-800 max-md:max-w-full">
          <div className="flex gap-2 justify-center items-start px-4 pt-4 pb-7 h-full rounded-2xl bg-white bg-opacity-50 min-w-[240px] shadow-[0px_4px_103px_rgba(50,50,71,0.01)] w-[261px]">
            <div className="min-h-[72px] w-[108px]">
              Total form submissions
              <span className="font-bold"> 15,086 </span>
            </div>
            <div className="flex shrink-0 w-6 h-6 bg-black bg-opacity-0" />
          </div>
          <div className="flex gap-2 justify-center items-start p-4 h-full rounded-2xl bg-white bg-opacity-50 min-w-[240px] shadow-[0px_4px_103px_rgba(50,50,71,0.01)] w-[280px]">
            <div className="flex flex-col w-[198px]">
              <div className="py-1 w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                Average completion time <br />
                <br />
                <span className="font-extrabold">4.2 minutes</span>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedbackChannels;
