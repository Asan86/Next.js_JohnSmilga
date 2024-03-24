import Link from "next/link";

function HomePage() {
  console.log("server component");
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js Tutorial</h1>
      <Link href="/client" className="btn btn-circle">
        get started
      </Link>
    </div>
  );
}

export default HomePage;
