import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import useBook from "@/hooks/useBook";

const Watch = () => {
  const router = useRouter();
  const { bookId } = router.query;

  const { data } = useBook(bookId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <ArrowLeftIcon
          onClick={() => router.push("/")}
          className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Reading:</span> {data?.title}
        </p>
      </nav>
      <object
        data={data?.fileUrl}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Alternative text - include a link{" "}
          <a href={data?.fileUrl}>to the PDF!</a>
        </p>
      </object>
    </div>
  );
};

export default Watch;
