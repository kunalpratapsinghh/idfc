"use client";
import Link from "next/link";
import SafeImage from "./SafeImage";

type ErrorProps = {
  /**
   * Optional base test id. We derive:
   * - `${testId}-wrapper`
   * - `${testId}-title`
   * - `${testId}-subtitle`
   * - `${testId}-description`
   * - `${testId}-image`
   * - `${testId}-cta`
   */
  testId?: string;
};

export const Error = ({ testId }: ErrorProps) => {
  const wrapperTestId = testId ? `${testId}-wrapper` : undefined;
  const titleTestId = testId ? `${testId}-title` : undefined;
  const subtitleTestId = testId ? `${testId}-subtitle` : undefined;
  const descriptionTestId = testId ? `${testId}-description` : undefined;
  const imageTestId = testId ? `${testId}-image` : undefined;
  const ctaTestId = testId ? `${testId}-cta` : undefined;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 text-gray-800 pt-8"
      data-testid={wrapperTestId}
    >
      <h1
        className="text-xl md:text-xl font-bold mb-4 text-center"
        data-testid={titleTestId}
      >
        500 Internal Error
      </h1>
      <h2
        className="text-2xl md:text-3xl font-bold mb-4 text-center"
        data-testid={subtitleTestId}
      >
        Whoops! That page doesn’t exist.
      </h2>
      <p
        className="text-gray-600 text-center mb-8 max-w-md"
        data-testid={descriptionTestId}
      >
        You may have clicked the wrong link or mistyped the address.
      </p>

      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mb-8 justify-center flex">
        <SafeImage
          src="/images/500.svg"
          alt="500 Error"
          height={217}
          width={399}
          data-testid={imageTestId}
        />
      </div>

      <Link href="/">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow-md transition duration-300"
          data-testid={ctaTestId}
        >
          Go to Homepage
        </button>
      </Link>
    </div>
  );
};
export default Error;
