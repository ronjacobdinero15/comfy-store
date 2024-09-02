import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="container mx-auto flex h-dvh flex-col items-center justify-center">
      <h1>Something went wrong😭</h1>
      <div className="text-center font-semibold text-red-500">
        {error.data || error.message}
      </div>
      <button className="flex gap-2 text-blue-500" onClick={() => navigate(-1)}>
        <span>&larr;</span>
        <span className="underline">Go back</span>
      </button>
    </div>
  );
}

export default Error;
