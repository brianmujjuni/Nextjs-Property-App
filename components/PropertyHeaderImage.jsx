import Image from "next/image";

export default function PropertyHeaderImage({ image }) {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            className="object-cover h-[400px] w-full"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}