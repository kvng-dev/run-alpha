import { useMoveBack } from "../hooks/useMoveBack";
import SEO from "../components/SEO";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <>
      <SEO
        title="Page Not Found | RunAlpha"
        description="The page you're looking for doesn't exist. Return to RunAlpha's homepage to explore our investment management services."
        noIndex={true}
      />
      <main className="flex h-screen items-center justify-center bg-gray-100 p-12">

        <div className="font-quicksand max-w-4xl flex-1 rounded-md border border-gray-200 bg-white p-12 text-center">
          <h1 className="mb-8">
            The page you are looking for could not be found 😢
          </h1>
          <button
            onClick={moveBack}
            className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            &larr; Go back
          </button>
        </div>
      </main>
    </>
  );
}

export default NotFound;
