import axios from "axios";
import React, { useCallback, useMemo } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

interface FavoriteButtonProps {
  bookId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ bookId }) => {
  const { mutate: mutateFavorites } = useFavorites();

  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(bookId);
  }, [currentUser, bookId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { bookId } });
    } else {
      response = await axios.post("/api/favorite", { bookId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    });
    mutateFavorites();
  }, [bookId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? CheckIcon : PlusIcon;

  return (
    <div
      onClick={toggleFavorites}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  );
};

export default FavoriteButton;
