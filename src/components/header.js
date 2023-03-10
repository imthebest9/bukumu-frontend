import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex w-full h-12 m-3 space-x-4 lg:mx-6">
        <div>
          <Image
            src="/bukumu_logo.png"
            alt="BukuMu Logo"
            width={120}
            height={20}
            priority
          />
        </div>
        <div className="flex grow">
          <input className=" grow" />
        </div>
        <div
          className="flex w-8 h-8 bg-white rounded-full"
          // style={{
          //   "background-image":
          //     "url(data:image/png;base64," +
          //     data?.userDetails?.profileImage +
          //     ")",
          //   "background-size": "cover",
          //   "background-position": "center",
          // }}
        ></div>
      </div>
    </>
  );
}
