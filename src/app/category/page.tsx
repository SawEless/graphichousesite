// src/app/category/page.tsx

interface Service {
  category: string;
  [key: string]: any; // This allows other properties
}

export default function CategoryPage() {
  // Type your services array
  const services: Service[] = []; // Make sure this gets your actual data
  
  const categories: { [key: string]: Service[] } = {};
  
  services.forEach(service => {
    const cat = service.category || 'Uncategorized';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(service);
  });
  
  // Rest of your component...
  return (
    <div>
      <h1>Categories Page</h1>
      {Object.keys(categories).length === 0 ? (
        <p>No categories found. Please add some services with categories.</p>
      ) : (
        <div>
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h2>{category}</h2>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item.name || item.title || `Service ${index + 1}`}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}