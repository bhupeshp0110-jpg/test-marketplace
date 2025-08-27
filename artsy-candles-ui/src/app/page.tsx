import ProductCard from '@/components/ProductCard';

const products = [
  {
    name: 'Artistic Candle 1',
    price: 29.99,
    imageUrl: 'https://picsum.photos/seed/candle1/400/400',
    description: 'A beautifully crafted artistic candle with a unique design.',
  },
  {
    name: 'Fragrance Candle',
    price: 24.99,
    imageUrl: 'https://picsum.photos/seed/candle2/400/400',
    description: 'A fragrant candle that will fill your room with a pleasant aroma.',
  },
  {
    name: 'Special Edition Candle',
    price: 39.99,
    imageUrl: 'https://picsum.photos/seed/candle3/400/400',
    description: 'A limited edition candle with a special design and fragrance.',
  },
  {
    name: 'Artsy Stuff 1',
    price: 19.99,
    imageUrl: 'https://picsum.photos/seed/art1/400/400',
    description: 'Some other artsy stuff that you might like.',
  },
    {
    name: 'Artistic Candle 2',
    price: 32.99,
    imageUrl: 'https://picsum.photos/seed/candle4/400/400',
    description: 'A beautifully crafted artistic candle with a unique design.',
  },
  {
    name: 'Fragrance Candle 2',
    price: 27.99,
    imageUrl: 'https://picsum.photos/seed/candle5/400/400',
    description: 'A fragrant candle that will fill your room with a pleasant aroma.',
  },
  {
    name: 'Special Edition Candle 2',
    price: 42.99,
    imageUrl: 'https://picsum.photos/seed/candle6/400/400',
    description: 'A limited edition candle with a special design and fragrance.',
  },
  {
    name: 'Artsy Stuff 2',
    price: 22.99,
    imageUrl: 'https://picsum.photos/seed/art2/400/400',
    description: 'Some other artsy stuff that you might like.',
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            index={index}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            description={product.description}
          />
        ))}
      </div>
    </main>
  );
}
