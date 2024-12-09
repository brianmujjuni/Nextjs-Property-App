import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
export default async function PropertyPage({ params }) {
  await connectDB();
  const property = await Property.findById(params.id);
  return (
    <>
      <PropertyHeaderImage image={property?.images[0]} />
    </>
  );
}
