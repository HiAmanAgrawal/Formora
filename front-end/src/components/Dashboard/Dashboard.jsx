import * as React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";


function Dashboard() {
  return (
    <div className="overflow-hidden px-8 pt-8 bg-slate-100 rounded-[48px] max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;
