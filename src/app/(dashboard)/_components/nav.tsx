import React from "react";
import NavButton from "./navButton";

export type dataType = {
  id: number;
  icon: string;
};
export default function Nav() {
  const data: dataType[] = [
    { id: 0, icon: "mingcute:search-line" },
    { id: 1, icon: "mi:notification" },
    { id: 2, icon: "material-symbols:logout-rounded" },
  ];
  return (
    <div className="bg-primary min-h-[73px] w-full px-[112px] flex flex-row items-center justify-between">
      <p className="capitalize font-[700] text-background text-[20px] leading-6">
        PLACEHOLDER
      </p>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row items-center gap-1">
          {data?.map((values) => {
            return <NavButton icon={values?.icon} />;
          })}
        </div>
        <div className="flex flex-row items-center justify-center w-10 h-10 bg-background rounded-full"></div>
      </div>
    </div>
  );
}
