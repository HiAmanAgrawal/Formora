import * as React from "react";
import FeedbackChannels from "./FeedbackChannels";
import Statistics from "./Statistics";
import Posts from "./Posts";
import Audience from "./Audience";

function MainContent() {
  return (
    <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
      <FeedbackChannels />
      <Statistics />
      <div className="flex flex-wrap gap-6 items-start mt-6 max-md:max-w-full">
        <Posts />
        <Audience />
      </div>
    </div>
  );
}

export default MainContent;
