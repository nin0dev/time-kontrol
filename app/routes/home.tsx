import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TimeKontrol" },
    { name: "description", content: "Welcome to TimeKontrol!" },
  ];
}

export default function Home() {
  return (
    <main>
      <div className="text-center mt-8 space-y-4">
        <h1 className="text-4xl font-extrabold text-indigo-400">TimeKontrol</h1>
        <h3 className="text-xl">A simple app to help you stay focused and track your work sessions.</h3>
        <Link to="/timer" className="bg-black text-white text-md font-medium text-center p-2 rounded-lg">Get Started</Link>
      </div>
    </main>
  )
}
