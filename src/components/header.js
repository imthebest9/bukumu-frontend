import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex w-full h-12 m-3 space-x-4 lg:mx-6">
        <div className="relative w-1/12">
          <Image
            src="/images/bukumu_logo.png"
            alt="BukuMu Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex w-10/12">
          <input className="w-full" />
        </div>
        <div className="flex items-center justify-center w-1/12">
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
      </div>
    </>
  );
}
