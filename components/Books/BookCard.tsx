import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/solid";

import { BookInterface } from "@/types";
import FavoriteButton from "@/components/FavoriteButton";
import useInfoModalStore from "@/hooks/useInfoModalStore";

interface BookCardProps {
  data: BookInterface;
}

const BookCard: React.FC<BookCardProps> = ({ data, view }) => {
  const router = useRouter();
  const { openModal } = useInfoModalStore();

  const redirectToWatch = useCallback(
    () => router.push(`/watch/${data.id}`),
    [router, data.id]
  );

  return (
    <div className="group bg-zinc-900 col-span relative h-[30vw]">
      <img
        onClick={redirectToWatch}
        src={data.thumbnailUrl}
        alt="Book"
        draggable={false}
        loading="lazy"
        className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
		group-hover:opacity-30
        delay-300
        w-full
        h-[30vw]
      "
      />
      {/* 
        sm:group-hover:opacity-0 */}
      <div
        className="
        opacity-0
        absolute
        top-20
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
      "
      >
        <div
          className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-md
          "
        >
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={redirectToWatch}
              title="Read"
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <PlayIcon className="text-black w-4 lg:w-6" />
            </div>
            <FavoriteButton bookId={data.id} />
            <div
              onClick={() => openModal(data?.id)}
              title="Preview book"
              className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
            >
              <ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
            </div>
          </div>
          <div className="text-green-400 font-semibold mt-4">
            Year <span className="text-white">{data?.year.toString()}</span>
          </div>
          <div className="flex flex-row mt-2 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">
              Pages: {data?.pages.toString()}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-2 text-[8px] text-white lg:text-sm">
            <p>{data.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
