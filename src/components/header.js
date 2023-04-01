import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // search for a book
  const searchBook = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    if (search) {
      // go to search page
      window.location.href = `/search?term=${search}`;
    }
  };

  return (
    <>
      <div className="flex w-full p-3 space-x-4 lg:px-6 bg-background">
        <div className="relative w-1/12">
          <Link href="/">
            <Image
              src="/images/bukumu_logo.png"
              alt="BukuMu Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>
        <form className="flex w-10/12" onSubmit={searchBook}>
          <input
            className="w-full px-4 py-2 bg-gray-200 border-none hover:bg-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
            name="search"
          />
        </form>
        <div className="flex items-center justify-center w-1/12">
          <div
            className="flex justify-center w-6 h-6 bg-white rounded-full hover:ring-gray-300 hover:ring-8"
            // style={{
            //   "background-image":
            //     "url(data:image/png;base64," +
            //     data?.userDetails?.profileImage +
            //     ")",
            //   "background-size": "cover",
            //   "background-position": "center",
            // }}
          >
            <Link href="/profile">
              <Image
                src="/images/user.png"
                alt="User"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
