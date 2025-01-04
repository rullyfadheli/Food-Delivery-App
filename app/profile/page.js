import Image from "next/image";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

async function signOut() {
  "use server";
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  redirect("/login");
}

function Profile() {
  return (
    <div className="md:justify-center md:flex bg-[#A9411D] font-inter">
      <div className="font-inter h-screen w-full max-w-3xl bg-[#EBE5DD] p-2">
        <div className="bg-primary rounded-xl w-full h-30 flex p-2 text-secondary">
          <div className="w-[25%] flex justify-center items-center pr-1 mr-2">
            <div className="bg-secondary rounded-full">
              <Image src="/Logo.png" width={60} height={600} />
            </div>
          </div>
          <div className="w-[60%] h-content">
            <h1>Hello, Rully</h1>
            <p className="text-[10px] text-orangeText">
              Do you want to edit your profile?
            </p>
          </div>
        </div>
        <div className="mt-4 flex-col items-center text-center">
          <h1 className="font-bold text-center">About you</h1>
          <div className="rounded-xl border-2 border-primary h-content w-full md:max-w-[60%] inline-block">
            <ul className="flex px-4 my-2">
              <li className="w-full max-w-[25%]">Name</li>
              <li className="w-full">Rully Fadheli</li>
              <li className="mr-0 text-orangeText">
                <Button text="edit" />
              </li>
            </ul>
            <ul className="flex px-4 my-2">
              <li className="w-full max-w-[25%]">Birth Date</li>
              <li className="w-full">21-06-2002</li>
              <li className="mr-0 text-orangeText">
                <Button text="edit" />
              </li>
            </ul>
            <ul className="flex px-4 my-2">
              <li className="w-full max-w-[25%]">Gender</li>
              <li className="w-full">Male</li>
              <li className="mr-0 text-orangeText">
                <Button text="edit" />
              </li>
            </ul>
            <ul className="flex px-4 my-2">
              <li className="w-full max-w-[25%]">Email</li>
              <li className="w-full">rullyfadheli@gmail.com</li>
              <li className="mr-0 text-orangeText">
                <Button text="edit" />
              </li>
            </ul>
            <ul className="flex px-4 my-2">
              <li className="w-full max-w-[25%]">Phone</li>
              <li className="w-full">082269453572</li>
              <li className="mr-0 text-orangeText">
                <Button text="edit" />
              </li>
            </ul>
          </div>
          <div className="w-full text-center pt-20">
            <form action={signOut}>
              <button
                className="bg-primary font-inter rounded-3xl py-2 w-32"
                type="submit"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>

        <Navbar adjustPosition="right-[0.5px] md:right-[-8.5px] lg:left-[509px]" />
      </div>
    </div>
  );
}

export default Profile;
