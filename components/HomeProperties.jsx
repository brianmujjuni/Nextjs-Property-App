import properties from "@/properties.json";
import PropertyCard from "./PropertyCard";
import Link from "next/link";
export default function HomeProperties() {
  const recentProperties = properties.slice(0, 3);
  return (
    <>
      <section className="px-4 py-4">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h2 className="text-3xl font-bold text-blue-500 mb-5 text-center">
            Recent Properties
          </h2>
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProperties.map((property) => (
                <PropertyCard property={property} key={property._id} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-6 px-6">
        <Link href="/properties" className="block bg-black text-white text-center py-4 px-6 rounded-xl">
          View All Properties
        </Link>
      </section>
    </>
  );
}