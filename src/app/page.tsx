import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/about" className="text-2xl">
        About Page
      </Link>
    </div>
  );
}

export default Home;
