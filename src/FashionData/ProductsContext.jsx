import React, { createContext, useContext } from 'react';
import { Images } from '../Pics/Images';



const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const products = [
        {
            id: 1,
            brand: "Ducati",
            category: "Jackets",
            name: "DC Sport - Windproof jacket",
            gender: "Male",
            price: "₹12,649.75",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.jducati, Images.bjducati],
            description: "Windproof jacket designed for outdoor activities. Features structured shoulders, shaped waist, and long sleeves.",
            details: "Made in Italy, Regular fit, Double-breasted button fastening, Rear central vent.",
            materials: "PR: 100% Wool"
        },
        {
            id: 2,
            brand: "Royal Enfield",
            category: "Jackets",
            name: "STREETWIND ECO 2 RIDING JACKET - NAVY",
            gender: "Male",
            price: "₹6,500",
            imageUrl: [Images.jroyal, Images.bjroyal],
            sizes: ['S', 'M', 'L', 'XL'],
            description: "Eco-friendly riding jacket with breathable mesh and armor pockets. Suitable for warm-weather riding.",
            details: "Lightweight, Armor-ready, Mesh construction.",
            materials: "100% Polyester Mesh, Lining: 100% Nylon"
        },
        {
            id: 3,
            brand: "Indian",
            category: "Jackets",
            name: "Men's Mesh Lightweight 2 Riding Jacket with Removable Liner, Black",
            gender: "Male",
            price: "₹12,615",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.jindian, Images.bjindian],
            description: "Mesh jacket with a removable liner, ideal for versatile weather. Provides a tailored fit and breathability.",
            details: "Removable liner, Breathable mesh, Adjustable fit.",
            materials: "Outer Shell: 100% Nylon Mesh; Liner: 100% Polyester"
        },
        {
            id: 4,
            brand: "Harley-Davidson",
            category: "Jackets",
            name: "Men's Screamin' Eagle Bomber",
            gender: "Male",
            price: "₹20,943",
            imageUrl: [Images.jharley, Images.bjharley],
            sizes: ['S', 'M', 'L', 'XL'],
            description: "Classic bomber jacket with a soft shell exterior and Screamin' Eagle detailing. Great for casual wear.",
            details: "Regular fit, Ribbed cuffs and hem, Full-zip front.",
            materials: "Shell: 100% Nylon; Lining: 100% Polyester"
        },
        {
            id: 5,
            brand: "Ducati",
            category: "Jackets",
            name: "DC Sport - Windproof jacket",
            gender: "Female",
            price: "₹14,766",
            imageUrl: [Images.fjducati, Images.bfjducati],
            sizes: ['S', 'M', 'L', 'XL'],
            description: "Women's windproof jacket with sleek design and ergonomic fit. Suitable for varied weather conditions.",
            details: "Regular fit, Custom lining, Buttoned cuffs.",
            materials: "PR: 100% Wool"
        },
        {
            id: 6,
            brand: "Royal Enfield",
            category: "Jackets",
            name: "STREETWIND ECO-FRIENDLY RIDING JACKET - OFF WHITE",
            gender: "Female",
            price: "₹11,764",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.fjroyal, Images.bfjroyal],
            description: "Off-white eco-friendly riding jacket with breathable mesh. Designed for comfort in warm weather.",
            details: "Eco-friendly, Breathable mesh, Adjustable fit.",
            materials: "100% Polyester"
        },
        {
            id: 7,
            brand: "Indian",
            category: "Jackets",
            name: "Women's Mesh Lightweight 2 Riding Jacket with Removable Liner, Black",
            gender: "Female",
            price: "₹9,185",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.fjindian, Images.bfjindian],
            description: "Lightweight mesh riding jacket with removable liner for versatility in different weather conditions.",
            details: "Breathable, Lightweight, Removable liner.",
            materials: "100% Nylon"
        },
        {
            id: 8,
            brand: "Harley-Davidson",
            category: "Jackets",
            name: "Women's Miss Enthusiast Soft Shell Jacket",
            gender: "Female",
            price: "₹14,235",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.fjharley, Images.bfjharley],
            description: "Soft shell jacket designed for comfort and style. Perfect for casual outings.",
            details: "Soft shell, Adjustable hem, Full-zip front.",
            materials: "Shell: 95% Polyester, 5% Spandex"
        },
        {
            id: 9,
            brand: "Ducati",
            category: "T-Shirts",
            name: "Panigale - T-shirt",
            gender: "Male",
            price: "₹2,519.69",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.tducati,],
            description: "Comfortable Panigale t-shirt with Ducati branding. Ideal for casual wear.",
            details: "Crew neck, Short sleeves, Regular fit.",
            materials: "100% Cotton"
        },
        {
            id: 10,
            brand: "Royal Enfield",
            category: "T-Shirts",
            name: "ROYAL ENFIELD CRUSADER LOGO T-SHIRT - OLIVE",
            gender: "Male",
            price: "₹2,519.69",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.troyal],
            description: "Olive t-shirt with Royal Enfield Crusader logo. Soft and durable fabric.",
            details: "Regular fit, Crew neck, Short sleeves.",
            materials: "100% Cotton"
        },
        {
            id: 11,
            brand: "Indian",
            category: "T-Shirts",
            name: "Men's Spirit Lake T-Shirt, White",
            gender: "Male",
            price: "₹2,099.31",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.tindian],
            description: "Classic Spirit Lake t-shirt with a comfortable fit. Ideal for everyday wear.",
            details: "Regular fit, Crew neck, Short sleeves.",
            materials: "100% Cotton"
        },
        {
            id: 12,
            brand: "Harley-Davidson",
            category: "T-Shirts",
            name: "Men's Bar & Shield Long Sleeve Tee - Black",
            gender: "Male",
            price: "₹3,358.91",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.tharley],
            description: "Long sleeve t-shirt with Harley-Davidson Bar & Shield logo. Perfect for cooler weather.",
            details: "Regular fit, Crew neck, Long sleeves.",
            materials: "100% Cotton"
        },
        {
            id: 13,
            brand: "Ducati",
            category: "T-Shirts",
            name: "Panigale - T-shirt",
            gender: "Female",
            price: "₹2,519.69",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.ftducati],
            description: "Women's Panigale t-shirt with Ducati branding. Stylish and comfortable.",
            details: "Slim fit, Crew neck, Short sleeves.",
            materials: "100% Cotton"
        },
        {
            id: 14,
            brand: "Royal Enfield",
            category: "T-Shirts",
            name: "CLASSIC MELANGE WOMEN'S T-SHIRT-MELANGE GREEN",
            gender: "Female",
            price: "₹2,999",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.ftroyal],
            description: "Melange green t-shirt with Royal Enfield branding. Soft and breathable.",
            details: "Regular fit, Crew neck, Short sleeves.",
            materials: "100% Cotton"
        },
        {
            id: 15,
            brand: "Indian",
            category: "T-Shirts",
            name: "Women's 3/4 Sleeve Raglan Henley T-Shirt, WhiteRed",
            gender: "Female",
            price: "₹3,799",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.ftindian],
            description: "Women's raglan Henley with 3/4 sleeves. Comfortable and casual.",
            details: "3/4 sleeves, Henley neckline, Regular fit.",
            materials: "60% Cotton, 40% Polyester"
        },
        {
            id: 16,
            brand: "Harley-Davidson",
            category: "T-Shirts",
            name: "Women's Illuminate Bar & Shield Tee - Bright White",
            gender: "Female",
            price: "₹3,299",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.ftharley],
            description: "Bright white t-shirt with Harley-Davidson logo. Lightweight and stylish.",
            details: "Regular fit, Crew neck, Short sleeves.",
            materials: "100% Cotton"
        },

        {
            id: 17,
            brand: "Ducati",
            category: "Helmets",
            name: "Full-face helmet-Ducati Corse V6",
            gender: "Unisex",
            price: "₹82,000",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.hducati],
            description: "High-performance full-face helmet with Ducati Corse graphics. Provides excellent protection.",
            details: "Full-face coverage, Advanced ventilation, Comfortable interior padding.",
            materials: "Shell: Fiberglass composite"
        },
        {
            id: 18,
            brand: "Royal Enfield",
            category: "Helmets",
            name: "ROYAL ENFIELD ESCAPADE HELMET WITH CLEAR VISOR - WHITE & RED",
            gender: "Unisex",
            price: "₹5,500",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.hroyal],
            description: "Versatile helmet with clear visor. Ideal for city and highway riding.",
            details: "Clear visor, Lightweight shell, Comfortable fit.",
            materials: "Outer Shell: Polycarbonate"
        },
        {
            id: 19,
            brand: "Indian",
            category: "Helmets",
            name: "Modular Freeway Helmet, Multi",
            gender: "Unisex",
            price: "₹6,500",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.hindian],
            description: "Modular helmet with a colorful design. Suitable for touring and daily use.",
            details: "Modular design, Multi-vent system, Anti-fog visor.",
            materials: "Shell: ABS"
        },
        {
            id: 20,
            brand: "Harley-Davidson",
            category: "Helmets",
            name: "Passage Adventure J10 Modular Helmet",
            gender: "Unisex",
            price: "₹7,500",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.hharley],
            description: "Adventure helmet with a modular design. Perfect for long rides and off-road adventures.",
            details: "Modular flip-up, Integrated sun visor, High-density EPS liner.",
            materials: "Shell: Polycarbonate Composite"
        },

        {
            id: 21,
            brand: "Ducati",
            category: "Gloves",
            name: "Fabric-leather gloves-Sport C4",
            gender: "Unisex",
            price: "₹12,446.45",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.gducati],
            description: "Sport gloves with a blend of fabric and leather for durability and grip.",
            details: "Elasticized wrist, Reinforced knuckles, Touchscreen-compatible fingertips.",
            materials: "Leather and Synthetic blend"
        },
        {
            id: 22,
            brand: "Royal Enfield",
            category: "Gloves",
            name: "ROYAL ENFIELD STALWART GLOVES BLACK & OLIVE",
            gender: "Unisex",
            price: "₹2,990",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.groyal],
            description: "Riding gloves with reinforced padding and grip. Suitable for all-weather riding.",
            details: "Reinforced palm, Breathable, Durable.",
            materials: "Leather and Polyester"
        },
        {
            id: 23,
            brand: "Indian",
            category: "Gloves",
            name: "Leather Retro 2 Riding Gloves, Black",
            gender: "Unisex",
            price: "₹7,079",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.gindian],
            description: "Retro-style leather gloves with enhanced comfort and grip. Ideal for stylish riders.",
            details: "Elastic cuff, Pre-curved fingers, Padded knuckles.",
            materials: "100% Leather"
        },
        {
            id: 24,
            brand: "Harley-Davidson",
            category: "Gloves",
            name: "Gild Waterproof Leather Gloves - Harley Black",
            gender: "Unisex",
            price: "₹8,008.56",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.gharley],
            description: "Waterproof leather gloves for all-weather riding. Classic Harley-Davidson style.",
            details: "Waterproof, Insulated lining, Reinforced palms.",
            materials: "Full-grain leather, Waterproof membrane"
        },

        {
            id: 25,
            brand: "Ducati",
            category: "Shoes",
            name: "Ducati Corse City C2 Boots",
            gender: "Male",
            price: "₹16,818.89",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.sducati],
            description: "Durable riding boots with Ducati branding, designed for city wear.",
            details: "Ankle support, Anti-slip sole, Reinforced toe.",
            materials: "Leather and Rubber"
        },
        {
            id: 26,
            brand: "Royal Enfield",
            category: "Shoes",
            name: "ROYAL ENFIELD CAMO WP RIDING BOOTS",
            gender: "Male",
            price: "₹6,800",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.sroyal],
            description: "Waterproof riding boots with a camo pattern. Provides excellent grip and comfort.",
            details: "Waterproof membrane, Anti-slip sole, Reinforced heel.",
            materials: "Synthetic Leather and Rubber"
        },
        {
            id: 27,
            brand: "Indian",
            category: "Shoes",
            name: "Men's Classic Lace Shoes",
            gender: "Male",
            price: "₹19,433.68",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.sindian],
            description: "Classic lace-up riding shoes designed for durability and style.",
            details: "Padded collar, Anti-slip outsole, Reinforced toe.",
            materials: "Leather upper, Rubber sole"
        },
        {
            id: 28,
            brand: "Harley-Davidson",
            category: "Shoes",
            name: "Men's Bateman Ankle Pro Riding Shoes",
            gender: "Male",
            price: "₹18,241.53",
            sizes: ['S', 'M', 'L', 'XL'],
            imageUrl: [Images.sharley],
            description: "Ankle-high riding shoes with reinforced ankle protection. Suitable for all terrains.",
            details: "Ankle protection, Anti-slip sole, Breathable mesh lining.",
            materials: "Leather and Rubber"
        }

    ];

    return (
        <ProductsContext.Provider value={products} >
            {children}
        </ProductsContext.Provider >
    );
};

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider, useProducts };
