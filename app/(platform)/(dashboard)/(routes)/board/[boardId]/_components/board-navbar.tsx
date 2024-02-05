import { Board } from "@prisma/client";

import { BoardTitleForm } from "./board-title-form";
import { BoardOptions } from "./board-options";

interface BoardNavbarProps {
  data: Board;
};

export const BoardNavbar = async ({
  data
}: BoardNavbarProps) => {
  return (
    <div className="w-full h-14 z-[40] bg-black fixed top-20 flex items-center px-6 gap-x-4 text-black">
      <BoardTitleForm data={data} />
      <BoardOptions id={data.id} />
    </div>
  );
};
