// All hardcoded data for PetPooja app
export const APP_DATA = {
  city: "Kharar",
  currency: "INR",
  currencySymbol: "₹",

  cities: [
    "Kharar", "Mohali", "Chandigarh", "Panchkula", "Zirakpur",
    "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda",
    "Delhi", "Noida", "Gurugram", "Mumbai", "Pune", "Bangalore",
    "Hyderabad", "Jaipur", "Lucknow", "Ahmedabad"
  ],

  restaurants: [
    {
      id: 1,
      _id: "rest_1",
      name: "Punjabi Tadka",
      location: "Sector 125, Kharar",
      rating: 4.4,
      total_reviews: 1240,
      delivery_time: "30-40 mins",
      deliveryTime: "30-40 mins",
      distance: "2.1 km",
      cost_for_two: 500,
      priceForTwo: 500,
      cuisine: ["North Indian", "Punjabi"],
      cuisines: ["North Indian", "Punjabi"],
      tags: ["Bestseller", "Pure Taste"],
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=450&fit=crop",
      offers: "₹50 OFF above ₹300",
      menu_categories: [
        {
          category: "Main Course",
          items: [
            {
              item_id: 101, _id: "item_101",
              name: "Butter Chicken",
              price: 340, rating: 4.6,
              image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=300&fit=crop",
              description: "Creamy tomato gravy with tender chicken pieces — शाही बटर चिकन",
              veg: false, isVeg: false, bestseller: true, tags: ["Bestseller"]
            },
            {
              item_id: 102, _id: "item_102",
              name: "Paneer Butter Masala",
              price: 260, rating: 4.5,
              image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=300&fit=crop",
              description: "Soft paneer in rich buttery gravy — मलाईदार पनीर",
              veg: true, isVeg: true, tags: []
            },
            {
              item_id: 106, _id: "item_106",
              name: "Dal Makhani",
              price: 220, rating: 4.4,
              image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=300&h=300&fit=crop",
              description: "Slow-cooked black lentils in creamy tomato sauce — दाल मखनी",
              veg: true, isVeg: true, tags: []
            },
            {
              item_id: 107, _id: "item_107",
              name: "Chicken Curry",
              price: 300, rating: 4.3,
              image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=300&h=300&fit=crop",
              description: "Traditional Punjabi chicken curry with aromatic spices — पंजाबी चिकन करी",
              veg: false, isVeg: false, tags: []
            }
          ]
        },
        {
          category: "Breads",
          items: [
            {
              item_id: 103, _id: "item_103",
              name: "Butter Naan",
              price: 40, rating: 4.3,
              image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop",
              description: "Soft tandoori naan with butter — तंदूरी बटर नान",
              veg: true, isVeg: true, tags: []
            },
            {
              item_id: 108, _id: "item_108",
              name: "Garlic Naan",
              price: 50, rating: 4.2,
              image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=300&fit=crop",
              description: "Naan topped with fresh garlic and butter — लहसुन वाला नान",
              veg: true, isVeg: true, tags: []
            }
          ]
        },
        {
          category: "Starters",
          items: [
            {
              item_id: 109, _id: "item_109",
              name: "Chicken Tandoori",
              price: 320, rating: 4.5,
              image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=300&fit=crop",
              description: "Juicy chicken marinated in tandoori masala — तंदूरी चिकन",
              veg: false, isVeg: false, bestseller: true, tags: ["Bestseller"]
            },
            {
              item_id: 110, _id: "item_110",
              name: "Paneer Tikka",
              price: 260, rating: 4.4,
              image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=300&fit=crop",
              description: "Grilled paneer with bell peppers and spices — पनीर टिक्का",
              veg: true, isVeg: true, tags: []
            }
          ]
        }
      ]
    },

    {
      id: 2,
      _id: "rest_2",
      name: "Pizza Point",
      location: "Landran Road, Kharar",
      rating: 4.2,
      total_reviews: 980,
      delivery_time: "20-30 mins",
      deliveryTime: "20-30 mins",
      distance: "1.5 km",
      cost_for_two: 400,
      priceForTwo: 400,
      cuisine: ["Pizza", "Fast Food"],
      cuisines: ["Pizza", "Fast Food"],
      tags: ["Fast Delivery", "Trending"],
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=450&fit=crop",
      offers: "Free Delivery",
      menu_categories: [
        {
          category: "Pizzas",
          items: [
            {
              item_id: 201, _id: "item_201",
              name: "Farmhouse Pizza",
              price: 299, rating: 4.4,
              image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=300&fit=crop",
              description: "Loaded with fresh veggies and mozzarella — ताज़ा सब्ज़ियों वाला पिज़्ज़ा",
              veg: true, isVeg: true, bestseller: true, tags: ["Bestseller"]
            },
            {
              item_id: 202, _id: "item_202",
              name: "Chicken Cheese Pizza",
              price: 379, rating: 4.5,
              image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop",
              description: "Juicy chicken with extra cheese topping — चिकन चीज़ पिज़्ज़ा",
              veg: false, isVeg: false, tags: []
            },
            {
              item_id: 203, _id: "item_203",
              name: "Margherita Pizza",
              price: 249, rating: 4.3,
              image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=300&fit=crop",
              description: "Classic tomato sauce, mozzarella and basil — मार्गरीटा पिज़्ज़ा",
              veg: true, isVeg: true, tags: []
            }
          ]
        },
        {
          category: "Sides",
          items: [
            {
              item_id: 204, _id: "item_204",
              name: "Garlic Breadsticks",
              price: 99, rating: 4.1,
              image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300&h=300&fit=crop",
              description: "Crispy garlic breadsticks with dipping sauce",
              veg: true, isVeg: true, tags: []
            },
            {
              item_id: 205, _id: "item_205",
              name: "Pasta Arrabbiata",
              price: 199, rating: 4.2,
              image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=300&h=300&fit=crop",
              description: "Spicy pasta in tomato sauce — स्पाइसी पास्ता",
              veg: true, isVeg: true, tags: []
            }
          ]
        }
      ]
    },

    {
      id: 3,
      _id: "rest_3",
      name: "Biryani House",
      location: "Phase 7, Mohali",
      rating: 4.5,
      total_reviews: 2100,
      delivery_time: "35-45 mins",
      deliveryTime: "35-45 mins",
      distance: "3.2 km",
      cost_for_two: 600,
      priceForTwo: 600,
      cuisine: ["Biryani", "Mughlai"],
      cuisines: ["Biryani", "Mughlai"],
      tags: ["Must Try", "Bestseller"],
      image: "https://images.unsplash.com/photo-1563379091339-03246963d974?w=600&h=450&fit=crop",
      offers: "₹100 OFF above ₹500",
      menu_categories: [
        {
          category: "Biryani",
          items: [
            {
              item_id: 301, _id: "item_301",
              name: "Chicken Dum Biryani",
              price: 349, rating: 4.8,
              image: "https://images.unsplash.com/photo-1563379091339-03246963d974?w=300&h=300&fit=crop",
              description: "Slow-cooked dum biryani with aromatic basmati rice — दम बिरयानी",
              veg: false, isVeg: false, bestseller: true, tags: ["Bestseller"]
            },
            {
              item_id: 302, _id: "item_302",
              name: "Veg Dum Biryani",
              price: 249, rating: 4.5,
              image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=300&fit=crop",
              description: "Fragrant vegetable biryani with saffron — वेज बिरयानी",
              veg: true, isVeg: true, tags: []
            },
            {
              item_id: 303, _id: "item_303",
              name: "Mutton Biryani",
              price: 429, rating: 4.7,
              image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=300&h=300&fit=crop",
              description: "Tender mutton pieces with fragrant dum rice — मटन बिरयानी",
              veg: false, isVeg: false, tags: []
            },
            {
              item_id: 304, _id: "item_304",
              name: "Egg Biryani",
              price: 219, rating: 4.3,
              image: "https://images.unsplash.com/photo-1563379091339-03246963d974?w=300&h=300&fit=crop",
              description: "Flavourful biryani with boiled eggs — अंडा बिरयानी",
              veg: false, isVeg: false, tags: []
            }
          ]
        },
        {
          category: "Sides & Raita",
          items: [
            {
              item_id: 305, _id: "item_305",
              name: "Boondi Raita",
              price: 79, rating: 4.2,
              image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop",
              description: "Chilled yogurt with boondi and spices — बूंदी रायता",
              veg: true, isVeg: true, tags: []
            }
          ]
        }
      ]
    },

    {
      id: 4,
      _id: "rest_4",
      name: "Dragon Chinese",
      location: "Sector 65, Mohali",
      rating: 4.1,
      total_reviews: 756,
      delivery_time: "25-35 mins",
      deliveryTime: "25-35 mins",
      distance: "4.0 km",
      cost_for_two: 450,
      priceForTwo: 450,
      cuisine: ["Chinese", "Asian"],
      cuisines: ["Chinese", "Asian"],
      tags: ["Trending", "New"],
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&h=450&fit=crop",
      offers: "Buy 1 Get 1 on Noodles",
      menu_categories: [
        {
          category: "Noodles & Rice",
          items: [
            {
              item_id: 401, _id: "item_401",
              name: "Chicken Hakka Noodles",
              price: 199, rating: 4.3,
              image: "https://images.unsplash.com/photo-1569918980912-5d8c4d017e9b?w=300&h=300&fit=crop",
              description: "Wok-tossed noodles with veggies and chicken — चिकन हक्का नूडल्स",
              veg: false, isVeg: false, bestseller: true, tags: ["Bestseller"]
            },
            {
              item_id: 402, _id: "item_402",
              name: "Veg Fried Rice",
              price: 159, rating: 4.1,
              image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=300&fit=crop",
              description: "Classic wok-fried rice with mixed vegetables — वेज फ्राइड राइस",
              veg: true, isVeg: true, tags: []
            },
            {
              item_id: 403, _id: "item_403",
              name: "Chicken Fried Rice",
              price: 199, rating: 4.2,
              image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=300&fit=crop",
              description: "Classic fried rice with juicy chicken pieces — चिकन फ्राइड राइस",
              veg: false, isVeg: false, tags: []
            }
          ]
        },
        {
          category: "Starters",
          items: [
            {
              item_id: 404, _id: "item_404",
              name: "Veg Spring Rolls",
              price: 139, rating: 4.0,
              image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop",
              description: "Crispy spring rolls with vegetable filling — वेज स्प्रिंग रोल",
              veg: true, isVeg: true, tags: []
            },
            {
              item_id: 405, _id: "item_405",
              name: "Chicken Manchurian",
              price: 229, rating: 4.4,
              image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=300&h=300&fit=crop",
              description: "Crispy chicken in tangy Manchurian sauce — चिकन मंचूरियन",
              veg: false, isVeg: false, bestseller: true, tags: ["Bestseller"]
            },
            {
              item_id: 406, _id: "item_406",
              name: "Paneer Manchurian",
              price: 199, rating: 4.2,
              image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=300&fit=crop",
              description: "Soft paneer in spicy Manchurian gravy — पनीर मंचूरियन",
              veg: true, isVeg: true, tags: []
            }
          ]
        }
      ]
    },

    {
      id: 5,
      _id: "rest_5",
      name: "South Indian Junction",
      location: "Sector 70, Mohali",
      rating: 4.3,
      total_reviews: 1450,
      delivery_time: "20-30 mins",
      deliveryTime: "20-30 mins",
      distance: "2.8 km",
      cost_for_two: 300,
      priceForTwo: 300,
      cuisine: ["South Indian", "Dosa"],
      cuisines: ["South Indian", "Dosa"],
      tags: ["Pure Veg", "Healthy"],
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=450&fit=crop",
      offers: "Free Sambar with every Dosa",
      menu_categories: [
        {
          category: "Dosa",
          items: [
            {
              item_id: 501, _id: "item_501",
              name: "Masala Dosa",
              price: 119, rating: 4.5,
              image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop",
              description: "Crispy dosa with spiced potato filling — मसाला डोसा",
              veg: true, isVeg: true, bestseller: true, tags: ["Bestseller"]
            },
            {
              item_id: 502, _id: "item_502",
              name: "Plain Dosa",
              price: 79, rating: 4.2,
              image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop",
              description: "Thin crispy rice crepe served with sambar — प्लेन डोसा",
              veg: true, isVeg: true, tags: []
            },
            {
              item_id: 503, _id: "item_503",
              name: "Cheese Dosa",
              price: 149, rating: 4.4,
              image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop",
              description: "Loaded dosa with melted cheese — चीज़ डोसा",
              veg: true, isVeg: true, tags: []
            }
          ]
        },
        {
          category: "Idli & Vada",
          items: [
            {
              item_id: 504, _id: "item_504",
              name: "Idli Sambar (4 pcs)",
              price: 89, rating: 4.4,
              image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop",
              description: "Soft steamed idlis with sambar and chutney — इडली सांभर",
              veg: true, isVeg: true, tags: []
            },
            {
              item_id: 505, _id: "item_505",
              name: "Medu Vada",
              price: 69, rating: 4.1,
              image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=300&fit=crop",
              description: "Crispy doughnut-shaped vadas with coconut chutney — मेदू वड़ा",
              veg: true, isVeg: true, tags: []
            }
          ]
        }
      ]
    },

    {
      id: 6,
      _id: "rest_6",
      name: "Burger Bros",
      location: "Airport Road, Kharar",
      rating: 4.0,
      total_reviews: 620,
      delivery_time: "15-25 mins",
      deliveryTime: "15-25 mins",
      distance: "1.1 km",
      cost_for_two: 350,
      priceForTwo: 350,
      cuisine: ["Burgers", "Fast Food"],
      cuisines: ["Burgers", "Fast Food"],
      tags: ["Fast Delivery", "Value for Money"],
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=450&fit=crop",
      offers: "2 Burgers at ₹199",
      menu_categories: [
        {
          category: "Burgers",
          items: [
            {
              item_id: 601, _id: "item_601",
              name: "Aloo Tikki Burger",
              price: 99, rating: 4.1,
              image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop",
              description: "Crispy aloo tikki patty with veggies and sauces — आलू टिक्की बर्गर",
              veg: true, isVeg: true, bestseller: true, tags: ["Bestseller"]
            },
            {
              item_id: 602, _id: "item_602",
              name: "Chicken Crispy Burger",
              price: 149, rating: 4.3,
              image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop",
              description: "Crispy fried chicken with lettuce and mayo — क्रिस्पी चिकन बर्गर",
              veg: false, isVeg: false, tags: []
            },
            {
              item_id: 603, _id: "item_603",
              name: "Double Patty Burger",
              price: 199, rating: 4.4,
              image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300&h=300&fit=crop",
              description: "Double chicken patty with cheese and caramelised onions — डबल पैटी बर्गर",
              veg: false, isVeg: false, tags: []
            }
          ]
        },
        {
          category: "Sides & Drinks",
          items: [
            {
              item_id: 604, _id: "item_604",
              name: "Masala Fries",
              price: 79, rating: 4.0,
              image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=300&h=300&fit=crop",
              description: "Crispy fries tossed with Indian masala — मसाला फ्राइज़",
              veg: true, isVeg: true, tags: []
            },
            {
              item_id: 605, _id: "item_605",
              name: "Cold Coffee",
              price: 89, rating: 4.2,
              image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop",
              description: "Creamy blended iced coffee — कोल्ड कॉफ़ी",
              veg: true, isVeg: true, tags: []
            }
          ]
        }
      ]
    }
  ],

  offers: [
    {
      code: "SAVE50",
      description: "Get ₹50 off on orders above ₹300",
      discount: 50,
      min_order: 300
    },
    {
      code: "FREEDEL",
      description: "Free delivery on your order",
      free_delivery: true
    },
    {
      code: "FIRST100",
      description: "Get ₹100 off on your first order above ₹500",
      discount: 100,
      min_order: 500
    }
  ],

  reviews: [
    {
      user: "Priya Verma",
      restaurant_id: 1,
      rating: 5,
      comment: "Amazing taste, loved the butter chicken! Ekdum ghar jaisa khana 🤤"
    },
    {
      user: "Aman Singh",
      restaurant_id: 2,
      rating: 4,
      comment: "Pizza was good but could be hotter. Overall nice experience!"
    },
    {
      user: "Riya Kapoor",
      restaurant_id: 3,
      rating: 5,
      comment: "Best biryani in Kharar! Pehle bhi order kiya tha, phir order karunga 😍"
    },
    {
      user: "Vikas Sharma",
      restaurant_id: 5,
      rating: 5,
      comment: "South Indian food was superb. Masala dosa was crispy and delicious!"
    }
  ],

  contact: {
    name: "Harsh",
    phone: "8532890618",
    email: "harsh@petpooja.com"
  }
};
