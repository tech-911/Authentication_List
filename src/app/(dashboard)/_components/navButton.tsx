"use client";

import React from "react";
import { Icon } from "@iconify/react";

export default function NavButton({ icon }: { icon: string }) {
  return (
    <div className="flex flex-row items-center justify-center w-10 h-10 rounded-[6px] bg-[#5B94FE] cursor-pointer hover:bg-[#ffffff08]">
      <Icon
        icon={icon ? icon : "lucide:square"}
        className="text-[20px] text-background"
      />
    </div>
  );
}
