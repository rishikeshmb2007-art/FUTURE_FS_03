import React from 'react';
import FoodCard from '../components/FoodCard';

const HotelMenu = () => {
  // 15 Premium Menu Items for the "Hotel" Section
  const hotelItems = [
    {
      id: 1,
      name: "Peri Peri Chicken Burger",
      description: "Crispy fried chicken patty tossed in fiery peri-peri sauce, topped with melted cheese.",
      price: 249,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Tandoori Paneer Tikka",
      description: "Soft paneer cubes marinated in authentic spices and grilled to perfection in a tandoor.",
      price: 199,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Mutton Biryani",
      description: "Aromatic seeraga samba rice cooked with tender mutton pieces and secret Gen-Z spices.",
      price: 349,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Chicken Chettinad",
      description: "Classic fiery South Indian chicken curry made with freshly roasted spices and coconut.",
      price: 279,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Butter Garlic Naan",
      description: "Soft, fluffy Indian flatbread topped with minced garlic and generous melted butter.",
      price: 65,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Mutton Chukka",
      description: "Dry roasted tender mutton chunks cooked with shallots, curry leaves, and black pepper.",
      price: 329,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 7,
      name: "Paneer Butter Masala",
      description: "Rich and creamy tomato gravy with soft paneer cubes, finished with fresh cream.",
      price: 229,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 8,
      name: "Prawn Ghee Roast",
      description: "Juicy prawns roasted in pure desi ghee with a spicy, tangy Mangalorean masala.",
      price: 389,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 9,
      name: "Schezwan Chicken Fried Rice",
      description: "Wok-tossed basmati rice with chicken, veggies, and our in-house spicy Schezwan sauce.",
      price: 219,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 10,
      name: "Kizhi Parotta",
      description: "Flaky parottas wrapped in a banana leaf with spicy meat gravy and slow-cooked.",
      price: 189,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 11,
      name: "Dragon Chicken",
      description: "Crispy chicken strips tossed in a sweet and spicy dark soy sauce with cashews.",
      price: 259,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 12,
      name: "Mushroom Pepper Fry",
      description: "Fresh button mushrooms sautéed with crushed black pepper, onions, and fennel seeds.",
      price: 189,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 13,
      name: "Apollo Fish",
      description: "Spicy, tangy, and extremely flavorful bite-sized boneless fish fry.",
      price: 319,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 14,
      name: "Dal Makhani",
      description: "Whole black lentils slow-cooked overnight with butter and cream for a velvety texture.",
      price: 179,
      isVeg: true,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 15,
      name: "GEN-Z Special Platter",
      description: "A massive mixed platter featuring our best kebabs, tikka, and wings. Perfect for sharing!",
      price: 799,
      isVeg: false,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-darkbg pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">HOTEL <span className="text-hotel-glow">MENU</span></h1>
          <p className="text-gray-400">Experience the fire and spice of our signature heavy meals.</p>
        </div>

        {/* CSS Grid for the Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotelItems.map((item) => (
            <FoodCard 
              key={item.id}
              id={item.id}
              theme="hotel"
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

export default HotelMenu;