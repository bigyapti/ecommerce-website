import { useGetUserCartsQuery } from "src/providers/redux/api/fakeStoreApi";
import { useParams } from "react-router-dom";

const Cart = () => {
  const { id } = useParams<{ id: string }>();
  const { data: carts, error, isLoading } = useGetUserCartsQuery(id);
  if (isLoading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4">Error: {error.toString()}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">User Carts</h1>
      {carts?.length === 0 ? (
        <p className="text-center">No carts found for this user.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {carts?.map((cart: any) => (
            <div
              key={cart.id}
              className="bg-white rounded-lg overflow-hidden shadow-md p-4"
            >
              <h2 className="text-xl font-semibold mb-2">Cart ID: {cart.id}</h2>
              <p className="text-gray-600 mb-2">User ID: {cart.userId}</p>
              <p className="text-gray-600 mb-2">
                Date: {new Date(cart.date).toLocaleDateString()}
              </p>
              <h3 className="text-lg font-semibold mb-2">Products:</h3>
              <ul className="list-disc pl-5">
                {cart.products.map((product: any, index: number) => (
                  <li key={index}>
                    <p className="text-gray-600">
                      Product ID: {product.productId}, Quantity:{" "}
                      {product.quantity},{product.productId},{product.quantity}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
