import * as React from "react";

function Posts() {
  return (
    <div className="flex flex-col w-96 min-w-[240px]">
      <div className="flex flex-col w-full text-zinc-800">
        <div className="text-lg font-medium">Posts</div>
        <div className="mt-2 text-sm font-light">
          Overview of your published and scheduled posts
        </div>
      </div>
      <div className="flex flex-col py-4 pl-4 mt-4 w-full max-w-sm rounded-2xl bg-white bg-opacity-50 shadow-[0px_4px_103px_rgba(50,50,71,0.01)]">
        <div className="flex gap-4 justify-center items-center max-w-full rounded-lg bg-slate-100 bg-opacity-20 w-[342px]">
          <div className="flex-1 shrink gap-2.5 self-stretch p-1 my-auto text-xs font-medium tracking-wide border-b border-zinc-800 text-zinc-800">
            Latest posts
          </div>
          <div className="flex-1 shrink gap-2.5 self-stretch p-1 my-auto text-xs tracking-wide text-zinc-800">
            Scheduled posts
          </div>
          <div className="flex gap-2.5 items-start self-stretch p-0.5 my-auto bg-black bg-opacity-0 w-[46px]">
            <div className="flex min-h-[13px]" />
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6 w-full tracking-wide text-zinc-800">
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[345px]">
            <div className="text-lg font-medium">
              Summer Collection Review Rating
            </div>
            <div className="text-xs font-light">
              Love the designs but sizing needs improvement
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6 tracking-wide text-zinc-800">
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[360px]">
            <div className="text-lg font-medium">
              Premium Denim Feedback Rating
            </div>
            <div className="text-sm font-light">
              {" "}
              <br />
              Perfect fit but delivery took longer...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
