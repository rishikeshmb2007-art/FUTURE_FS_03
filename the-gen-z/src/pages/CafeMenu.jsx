import React from 'react';
import FoodCard from '../components/FoodCard';

const CafeMenu = () => {
  // Premium Cafe & Snack Items
  const cafeItems = [
    {
      id: 1,
      name: "Blue Lagoon Mocktail",
      description: "Refreshing citrus and curacao blend topped with crushed ice and mint. A Gen-Z favorite.",
      price: 149,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Classic Cappuccino",
      description: "Rich espresso layered with tightly frothed milk and topped with latte art.",
      price: 129,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Cheesy Loaded Fries",
      description: "Crinkle-cut fries drowned in liquid cheddar cheese, jalapeños, and secret herbs.",
      price: 189,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1518013431119-2ce69d3243ca?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Hazelnut Frappuccino",
      description: "Blended iced coffee with premium hazelnut syrup, topped with whipped cream.",
      price: 219,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1660126938994-6b9df237caee?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Spicy Chicken Tenders",
      description: "Golden fried, extra crispy chicken strips served with a garlic mayo dip.",
      price: 229,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Brownie Sizzler",
      description: "Warm walnut brownie served on a sizzling hot plate with vanilla ice cream and melted chocolate.",
      price: 249,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Matcha Boba Tea",
      description: "Authentic Japanese matcha blended with milk and chewy brown sugar tapioca pearls.",
      price: 199,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1558855567-1a341e30a57e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "BBQ Chicken Pizza (8\")",
      description: "Thin crust pizza topped with smoky BBQ chicken, caramelized onions, and mozzarella.",
      price: 299,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 9,
      name: "Club Sandwich",
      description: "Triple-layered toasted bread with grilled chicken, fried egg, lettuce, and cheese.",
      price: 210,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 10,
      name: "Strawberry Cheesecake",
      description: "Classic New York style cheesecake slice drizzled with fresh strawberry compote.",
      price: 220,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 11,
      name: "Nachos Supreme",
      description: "Crispy tortilla chips loaded with salsa, sour cream, black beans, and melted cheese.",
      price: 179,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 12,
      name: "Iced Peach Tea",
      description: "Freshly brewed cold tea infused with sweet peach syrup and lemon slices.",
      price: 119,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-darkbg pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">THE <span className="text-cafe-glow">CAFE</span></h1>
          <p className="text-gray-400">Chill vibes, aesthetic drinks, and midnight snacks.</p>
        </div>

        {/* CSS Grid for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cafeItems.map((item) => (
            <FoodCard 
              key={item.id}
              theme="cafe"
              name={item.name}
              description={item.description}
              price={item.price}
              isVeg={item.isVeg}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CafeMenu;