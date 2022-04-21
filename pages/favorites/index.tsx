import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { MainLayout } from "../../components/layouts";
import { FavoritePokemons } from "../../components/pokemon";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  console.log(
    "🚀 ~ file: index.tsx ~ line 9 ~ favoritePokemons",
    favoritePokemons
  );
  return (
    <MainLayout title="Pokemons favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
