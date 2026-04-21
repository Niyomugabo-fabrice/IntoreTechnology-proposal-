export function Products() {
  const products = [
    {
      name: 'MacBook Pro 2019',
      price: '450,000 RWF',
      category: 'Laptop',
      image: 'https://images.unsplash.com/photo-1636083513967-800c0ba9371b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc3NjgwNjY4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Dell XPS 13',
      price: '380,000 RWF',
      category: 'Laptop',
      image: 'https://images.unsplash.com/photo-1635896383799-06e1e0accda0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsYXB0b3AlMjBjb21wdXRlciUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc3NjgwNjY4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'HP Pavilion',
      price: '320,000 RWF',
      category: 'Laptop',
      image: 'https://images.unsplash.com/photo-1729496293008-0794382070c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsYXB0b3AlMjBjb21wdXRlciUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc3NjgwNjY4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Lenovo ThinkPad',
      price: '290,000 RWF',
      category: 'Laptop',
      image: 'https://images.unsplash.com/photo-1587318684001-b29074817e81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxsYXB0b3AlMjBjb21wdXRlciUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc3NjgwNjY4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'iPhone 12 Pro',
      price: '480,000 RWF',
      category: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1662221356784-14b60d842253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsYXB0b3AlMjBjb21wdXRlciUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc3NjgwNjY4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Samsung Galaxy S21',
      price: '420,000 RWF',
      category: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1648737963059-59ec8e2d50c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsYXB0b3AlMjBjb21wdXRlciUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc3NjgwNjY4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'iPhone 11',
      price: '380,000 RWF',
      category: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxsYXB0b3AlMjBjb21wdXRlciUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc3NjgwNjY4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Google Pixel 6',
      price: '350,000 RWF',
      category: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1560165143-fa7e2d9e594c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsYXB0b3AlMjBjb21wdXRlciUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc3NjgwNjY4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'iPad Air 2020',
      price: '390,000 RWF',
      category: 'Tablet',
      image: 'https://images.unsplash.com/photo-1631031509251-62a73758f9d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxsYXB0b3AlMjBjb21wdXRlciUyMGVsZWN0cm9uaWNzfGVufDF8fHx8MTc3NjgwNjY4OXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Samsung Tab S7',
      price: '340,000 RWF',
      category: 'Tablet',
      image: 'https://images.unsplash.com/photo-1680370834492-4e683c0d14c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bGFwdG9wJTIwY29tcHV0ZXIlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NzY4MDY2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'AirPods Pro',
      price: '150,000 RWF',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1597380162318-ac49db1dbcf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMXx8bGFwdG9wJTIwY29tcHV0ZXIlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NzY4MDY2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Sony WH-1000XM4',
      price: '180,000 RWF',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1721332154191-ba5f1534266e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMnx8bGFwdG9wJTIwY29tcHV0ZXIlMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NzY4MDY2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <span className="text-xs text-gray-500 uppercase">{product.category}</span>
                <h3 className="font-bold mt-1 mb-2">{product.name}</h3>
                <p className="text-blue-600 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
