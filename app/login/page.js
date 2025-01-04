import { login } from "../login/action";
import Link from "next/link";

export default function SignIn() {
  return (
    <div
      className="bg-primary
     flex flex-col justify-center items-center h-screen"
    >
      <div className="font-inter bg-secondary border-2 border-solid border-primary rounded-md h-64 p-6 flex-col justify-center items-center">
        <form className="flex flex-col my-2">
          <div className="my-2">
            <label htmlFor="email" className="mr-10">
              Email
            </label>
            <input className="rounded-md" type="email" name="email" required />
          </div>
          <div className="my-2">
            <label htmlFor="password" className="mr-2">
              Password
            </label>
            <input
              className="rounded-md"
              type="password"
              name="password"
              required
            />
          </div>
          <button
            formAction={login}
            type="submit"
            className="h-full max-h-20 w-20 bg-primary ml-28 my-4 rounded-md"
          >
            Login
          </button>
          <p>You don't have an account?</p>
          <Link href={"/register"}>
            <button className="text-sm text-primary">Register here</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
