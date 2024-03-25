import { resolve } from "path";
import React from "react";
const url = "https://jsonplaceholder.typicode.com/users";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const respons = await fetch(url);
  const data = await respons.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();
  console.log(data);
  return (
    <div>
      <h1 className="text-7xl">DrinksPage</h1>
    </div>
  );
};

export default DrinksPage;
