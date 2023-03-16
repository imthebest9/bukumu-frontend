import Head from "next/head";
import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";

export default function Books() {
  return (
    <>
      <div className="flex flex-col min-h-screen min-w-screen bg-background ">
        <Header />
        <div className="flex flex-col w-full h-full max-w-screen-xl px-6 mx-auto align-center">
          <div className="gap-6 space-y-8 columns-3">
            <Link href="/books/1">
              <div className="cursor-pointer">
                <div className="mb-3">
                  <img
                    src="/images/Teluk-Intan_Map_English.jpg"
                    alt="teluk intan"
                    fill="true"
                    className="object-contain h-full rounded-3xl hover:drop-shadow-2xl"
                  />
                </div>
                <h6>Teluk Inta12312n</h6>
                <c4>by: Author Name</c4>
              </div>
            </Link>
            <div>
              <img
                src="/images/Perakpost.jpg"
                alt="teluk intan"
                fill="true"
                className="object-contain w-full"
              />
            </div>
            <div>
              <img
                src="/images/Teluk-Intan_Map_English.jpg"
                alt="teluk intan"
                fill="true"
                className="object-contain h-full"
              />
            </div>
            <div>
              <img
                src="/images/Teluk-Intan_Map_English.jpg"
                alt="teluk intan"
                fill="true"
                className="object-contain h-full"
              />
            </div>
            <div>
              <img
                src="/images/Teluk-Intan_Map_English.jpg"
                alt="teluk intan"
                fill="true"
                className="object-contain h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
