import React from "react";

const Pagination = ({ offset, limit, setOffset, hasNext }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => setOffset((prev) => Math.max(0, prev - limit))}
        disabled={offset === 0}
        className={`px-4 py-2 rounded-lg ${
          offset === 0 ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        Previous
      </button>

      <button
        onClick={() => setOffset((prev) => prev + limit)}
        disabled={!hasNext}
        className={`px-4 py-2 rounded-lg ${
          hasNext ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500"
        } text-white`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
