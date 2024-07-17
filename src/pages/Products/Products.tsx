import { useGetProductsQuery } from "src/providers/redux/api/fakeStoreApi";
import Card from "../../components/Product/Card";
import Button from "../../components/common/Button";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  type Product = {
    id: number;
    image: string;
    title: string;
    price: string;
    description: string;
    category: string;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: Product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
          >
            <Button>Add to Cart</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
