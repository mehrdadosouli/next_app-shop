
async function ProductsDashboard() {
    const response=await fetch("http://localhost:3000/api/products")
    .then(res=>res.json())
    .then(data=>data)
    
    console.log(response);
    
  return (
   <div className="w-full mt-10">
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th>Score</th>
            <th>Product Name</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {response.map((item) => (
            <tr key={item.id}>
              <td className="border px-2 py-1">{item.rating.rate}</td>
              <td className="border px-2 py-1">
                {item.title.length > 10 ? item.title.slice(0, 10) + "..." : item.title}
              </td>
              <td className="border px-2 py-1">{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsDashboard;
