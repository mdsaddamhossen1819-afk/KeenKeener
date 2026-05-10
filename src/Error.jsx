

const error = ({message="somethings went wrong"}) => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-50">
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-red-200">
        <h1 className="text-2xl font-bold text-red-600 mb-2">Error 😢</h1>
        <p className="text-gray-700">{message}</p>

        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Reload Page
        </button>
      </div>
    </div>
    );
};

export default error;