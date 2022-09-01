import React from "react";
import "../css/output.css";

const Features = () => {
  const features = [
    {
      number: 1,
      title: "Track company-wide progress",
      paragraph:
        " See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      number: 2,
      title: "Advanced built-in reports",
      paragraph:
        " Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      number: 3,
      title: "Everything you need in one place",
      paragraph:
        " Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  return (
    <div className="container flex  flex-col px-4 mb-10 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
          What's different about Manage?
        </h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="flex flex-col space-y-8  md:w-1/2">
        {features.map((item, index) => {
          return (
            <div
              className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
              key={index}
            >
              <div className="rounded-full bg-orange-100 md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-orange-600">
                    0{item.number}
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  {item.title}
                </h3>
                <p>{item.paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
