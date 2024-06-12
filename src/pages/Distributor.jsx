const Distributor = () => {
  const dataTable = [
    { srNo: 1, userId: "001001", name: "demo", wallet: 2280.0 },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Add Distributors</h2>

      <div className="bg-white shadow-lg p-4 border mt-2 ">
        <form className=" " onSubmit={handleSubmit}>
          <div className="flex justify-between items-center">
            <h2 className=" font-light mb-4">Add Distributors</h2>
            <button className="border border-blue-500 text-blue-500 py-1 px-4 rounded ">
              {" "}
              Back
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="email"
                placeholder="admin@gmail.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="•••••"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="idLimit"
              >
                ID Limit
              </label>
              <input
                id="idLimit"
                type="text"
                placeholder="Enter ID Limit"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="commission"
              >
                Commission
              </label>
              <input
                id="commission"
                type="text"
                placeholder="Enter Commission"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* 
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button> */}

      

      {/* <div className="bg-white flex items-center justify-center  p-4">
            <div className="overflow-x-auto w-full"> */}
      <div className="bg-white shadow-lg p-4 border mt-2 ">
      <div className="flex justify-between items-center mt-5">
        <h2 className=" font-light mb-4">Distributors</h2>
        <button className="border border-blue-500 text-blue-500 py-1 px-4 rounded ">
          {" "}
          Back
        </button>
      </div>
        <table className="table-auto min-w-full divide-y divide-gray-200 ">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium  uppercase tracking-wider"
              >
                Sr. No
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium  uppercase tracking-wider"
              >
                User ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium  uppercase tracking-wider"
              >
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium  uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium  uppercase tracking-wider"
              >
                Wallet
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-gray-50 text-left text-xs font-medium  uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                No Distributors Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    //     </div>
    // </div>
  );
};

export default Distributor;
