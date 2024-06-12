import React from 'react'

const AmountRate = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div className="p-4">
      <h2 className="text-3xl ">Amount Rates</h2>


      <div className="bg-white shadow-lg p-4 border mt-5">
       
          <button className='bg-blue-500 w-full text-white py-2'>Titli Sorat</button>
        <div className="border  mt-5"></div>
        <h2 className="text-2xl font-bold mt-5">Titli Sorat</h2>



        <form className="mt-4 " onSubmit={handleSubmit} >
         

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Amount Rate
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
               Current Rate
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
              Game Mode
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
                Game Rate
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
     </div>
  )
}

export default AmountRate