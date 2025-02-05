import * as React from "react";

function StatCard({ statistic }) {
  return (
    <div className="flex overflow-hidden flex-col justify-between items-start p-4 w-96 rounded-2xl bg-white bg-opacity-50 min-w-[240px] shadow-[0px_4px_103px_rgba(50,50,71,0.01)]">
      <div className="flex gap-4 justify-center items-center self-stretch w-full rounded-lg bg-slate-100 bg-opacity-20 max-w-[342px]">
        <div className="flex-1 shrink gap-2.5 self-stretch py-1 my-auto text-xs font-medium tracking-wide border-b border-zinc-800 text-zinc-800">
          {statistic.trend}
        </div>
        <div className="flex-1 shrink gap-2.5 self-stretch py-1 pr-1 pl-1 my-auto text-xs tracking-wide whitespace-nowrap text-zinc-800">
          {statistic.metric}
        </div>
      </div>
      <div className="flex flex-col mt-6 max-w-full w-[239px]">
        <div className="text-7xl font-bold tracking-wide text-zinc-800 max-md:text-4xl">
          {statistic.value}
        </div>
        <div className="flex gap-1 items-center self-start mt-2.5 text-base font-semibold tracking-wide text-green-400">
          <div className="self-stretch my-auto">{statistic.change}</div>
          <img
            loading="lazy"
            src={statistic.changeIcon}
            alt="Change Icon"
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.92] w-[11px]"
          />
        </div>
      </div>
      <div className="flex flex-col items-end px-10 mt-6 w-80 max-w-full tracking-wide text-center max-md:px-5">
        <div className="flex z-10 flex-col px-3 pt-0.5 pb-4 -mt-2.5 bg-indigo-50 rounded-lg">
          <div className="text-xs text-blue-950 text-opacity-50">
            {statistic.date}
          </div>
          <div className="self-start text-base font-semibold text-blue-950">
            {statistic.dayValue}
          </div>
        </div>
        <img
          loading="lazy"
          src={statistic.graph}
          alt="Graph"
          className="object-contain mr-7 aspect-[0.83] w-[5px] max-md:mr-2.5"
        />
        <img
          loading="lazy"
          src={statistic.highlightIcon}
          alt="Highlight Icon"
          className="object-contain z-10 mr-6 -mb-4 w-2.5 aspect-[0.1] max-md:mr-2.5 max-md:mb-2.5"
        />
      </div>
    </div>
  );
}

export default StatCard;
