import Image, { StaticImageData } from "next/image";

type UserProps = {
  fullName: string;
  image: string | StaticImageData;
  city: string;
  country: string;
  email: string;
};

const User = ({ fullName, image, city, country, email }: UserProps) => (
  <div className="border-b py-2 w-full justify-items-center sm:flex sm:gap-5 items-center">
    <Image
      src={image}
      alt={fullName}
      width={150}
      height={150}
      className="rounded-sm mb-2 sm:w-[200px]"
    />
    <div className="px-4">
      <h2 className="font-bold text-md sm:text-xl">{fullName}</h2>
      <p>{`${city}, ${country}`}</p>
      <p>{email}</p>
    </div>
  </div>
);

export default User;
