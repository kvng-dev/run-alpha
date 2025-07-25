import { Helmet } from "react-helmet";
import { useMoveBack } from "../hooks/useMoveBack";


function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen bg-gray-100 flex items-center justify-center p-12">
      <Helmet>
      <title>Page Not Found | Run Alpha</title>
      <meta name="robots" content="noindex" />
    </Helmet>

      <div className="bg-white border border-gray-200 rounded-md p-12 flex-1 max-w-4xl text-center font-quicksand">
        <h1 className="mb-8">
          The page you are looking for could not be found 😢
        </h1>
        <button
          onClick={moveBack}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
