import * as React from "react";
import StatCard from "./StatCard";
import statData from "./statData";

function Statistics() {
  return (
    <div className="flex flex-col mt-6 w-full max-w-[792px] max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-end w-full max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] text-zinc-800 w-[545px] max-md:max-w-full">
          <div className="text-lg font-medium max-md:max-w-full">
            Statistics
          </div>
          <div className="text-sm font-light max-md:max-w-full">
            See how customer feedback trends are evolving across product lines
          </div>
        </div>
        <div className="flex items-center text-sm font-semibold tracking-wide text-gray-600">
          <div className="self-stretch my-auto w-[85px]">This month</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/935f802992ab4a6abf926cb27a4933a8/0f57d25c55f6e831ebbcfcd91d8c7b0335a04e64a04129ead4e6d48c9feb0f52?apiKey=935f802992ab4a6abf926cb27a4933a8&"
            alt="This month"
            className="object-contain shrink-0 self-stretch my-auto w-2 aspect-[1.6]"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mt-6 min-h-[328px] max-md:max-w-full">
        {statData.map((stat, index) => (
          <StatCard key={index} statistic={stat} />
        ))}
      </div>
    </div>
  );
}

export default Statistics;
