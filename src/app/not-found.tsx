import "@/styles/globals.css";
import { SafeImage } from "../components/atoms";

const Error = () => {
  return (
    <div className="pt-16 pb-10 md:pt-[196px] flex flex-col items-center justify-start min-h-screen px-4 text-gray-800 bg-nav-bar max-h-full overflow-hidden">
      <h1 className="text-xl md:text-xl font-bold mb-4 text-center">
        404 - Page Not Found
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Whoops! That page doesn’t exist.
      </h2>

      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mb-8 justify-center flex">
        <SafeImage
          src="/images/500.svg"
          alt="500 Error"
          height={299}
          width={299}
        />
      </div>

      <a href={process.env.NEXT_PUBLIC_BASE_PATH || "/"} className="mt-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow-md transition duration-300">
          Go to Homepage
        </button>
      </a>
    </div>
  );
};

export default Error;
