import Link from "next/link";
import { Router, useRouter } from "next/router";

function Header(props) {
  const router = useRouter();
  return (
    <div>
      <div className=" bg-red-900 p-6">
        <navbar>
          <div className="flex justify-between py-3">
            <h1 className="text-white text-4xl font-semibold pl-12"><Link href="/">React Meetups</Link></h1>
            <div className="flex text-gray-300 text-2xl pr-7">
              <h2 className="pr-10" href="/">All Meetups</h2>
              <h2 className="pr-10"> <Link href="/new-meetup">Add Meetup</Link></h2>
            </div>
          </div>
        </navbar>
      </div>
      <main className=" bg-white h-screen">{props.children}</main>
    </div>
  );
}

export default Header;