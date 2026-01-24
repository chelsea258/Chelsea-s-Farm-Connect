const farmers = [
    {
        id: 1,
        name: "Mama Adama",
        location: "Gombe State",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4.9,
        reviews: 324,
        bio: "Certified organic farmer for 30 years."
    },
    {
        id: 2,
        name: "Kofi Mensah",
        location: "Eastern Region",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 4.8,
        reviews: 156,
        bio: "Specializing in tubers and root vegetables."
    },
    {
        id: 3,
        name: "Aisha Bello",
        location: "Kano",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 4.7,
        reviews: 89,
        bio: "Fresh daily leafy greens and spices."
    }
];

const products = [
    {
        id: 101,
        name: "Fresh Tomatoes",
        price: "$2.00",
        unit: "kg",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=300",
        farmerId: 1
    },
    {
        id: 102,
        name: "Red Onions",
        price: "$1.50",
        unit: "kg",
        image: "https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?auto=format&fit=crop&q=80&w=300",
        farmerId: 1
    },
    {
        id: 103,
        name: "Sweet Maize",
        price: "$0.80",
        unit: "cob",
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=300",
        farmerId: 2
    },
    {
        id: 104,
        name: "Spinach",
        price: "$1.00",
        unit: "bunch",
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=300",
        farmerId: 3
    }
];

const categories = [
    { name: "Maize", icon: "🌽" },
    { name: "Tomatoes", icon: "🍅" },
    { name: "Greens", icon: "🥬" },
    { name: "Tubers", icon: "🥔" },
    { name: "Fruits", icon: "🥭" }
];
