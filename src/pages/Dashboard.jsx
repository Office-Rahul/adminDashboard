const Card = ({ title, value, color }) => (

  <div className="mx-auto container w-full">
    <div className={`shadow-md rounded-lg p-6 ${color}`}>
      <p className="text-2xl text-white">{value}</p>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
  </div>
);


const Dashboard = () => {
  const data = [
    { title: "Total Users", value: 1, color: "bg-green-600" },
    { title: "Today Bets", value: "0.00", color: "bg-yellow-400" },
    { title: "Today Winning", value: 0, color: "bg-red-500" },
    { title: "Admins", value: 1, color: "bg-green-600" },
    { title: "Distributors", value: 0, color: "bg-yellow-400" },
    { title: "Pay Commission", value: "0.00", color: "bg-red-500" },
  ];

  const dataTable = [
    { srNo: 1, userId: "001001", name: "demo", wallet: 2280.0 },
  ];
  return (
    <div className="">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="  p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {data.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              value={item.value}
              color={item.color}
            />
          ))}
        </div>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>

      <div className="flex justify-between items-center mt-2">
        <div>User List</div>
        <div className="flex gap-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Manual Result
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            + Add User
          </button>
        </div>
      </div>

      <table className="min-w-full bg-white shadow-md rounded-lg mt-4">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Sr. No.</th>
            <th className="py-3 px-6 text-left">User ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Wallet</th>
          </tr>
        </thead>
        <tbody className="text-gray-600  ">
          {dataTable.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {item.srNo}
              </td>
              <td className="py-3 px-6 text-left">{item.userId}</td>
              <td className="py-3 px-6 text-left">{item.name}</td>
              <td className="py-3 px-6 text-left">{item.wallet.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
