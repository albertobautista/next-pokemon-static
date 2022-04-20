import { NextPage } from "next";
import React from "react";
import { MainLayout } from "../../components/layouts";

const FavoritesPage: NextPage = () => {
  return (
    <MainLayout title="Pokemons favoritos">
      <h1>Pokemons favoritos</h1>
    </MainLayout>
  );
};

export default FavoritesPage;
