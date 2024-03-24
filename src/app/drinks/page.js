import React from "react";
const url = "https://jsonplaceholder.typicode.com/users";
const DrinksPage = async () => {
  const respons = await fetch(url);
  const data = await respons.json();
  console.log(data);
  return (
    <div>
      <h1 className="text-7xl">DrinksPage</h1>
    </div>
  );
};

export default DrinksPage;
