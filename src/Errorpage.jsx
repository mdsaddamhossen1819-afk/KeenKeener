
import { Link, useRouteError } from 'react-router';

const Errorpage = () => {
    const error = useRouteError();
      return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">

      <h1 className="text-6xl font-bold text-red-500">
        {error.status}
      </h1>

      <p className="text-2xl font-semibold mt-4">
        {error.statusText}
      </p>

      <p className="mt-2 text-gray-600">
        {error.data || "Something went wrong!"}
      </p>

      <Link to="/">
        <button className="mt-6 px-5 py-2 bg-blue-500 text-white rounded-lg">
          Go Back Home
        </button>
      </Link>

    </div>
    );
};

export default Errorpage;