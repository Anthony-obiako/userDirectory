import User from "./User/User";
import Weak from "@/asset/Weak.jpg";

const UserDetails = [
  {
    id: 1,
    fullName: "John Doe",
    image: Weak,
    city: "Lagos",
    country: "Nigeria",
    email: "john.doe@email.com",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    image: Weak,
    city: "Nairobi",
    country: "Kenya",
    email: "jane.smith@email.com",
  },
  {
    id: 3,
    fullName: "Carlos Ruiz",
    image: Weak,
    city: "Madrid",
    country: "Spain",
    email: "carlos.ruiz@email.com",
  },
  {
    id: 4,
    fullName: "Aisha Khan",
    image: Weak,
    city: "Karachi",
    country: "Pakistan",
    email: "aisha.khan@email.com",
  },
  {
    id: 5,
    fullName: "Emily Chen",
    image: Weak,
    city: "Beijing",
    country: "China",
    email: "emily.chen@email.com",
  },
];

const UserDirectory = () => {
  return (
    <div className="rounded-xl py-4 sm:p-8 flex flex-col items-center w-full max-w-6xl mx-auto gap-2 sm:gap-5">
      <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">User Directory</h1>
      <div className="py-4 w-fit flex flex-col gap-4">
        {UserDetails.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export default UserDirectory;