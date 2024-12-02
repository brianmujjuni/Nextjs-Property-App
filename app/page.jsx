import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1 className="text-gray-500">Home Pade</h1>
      <Link href="/properties">Go To Properties</Link>
    </div>
  );
}
