import React from 'react';
import Labfashion from '../FashionData/Labfashion';
import { Images } from '../Pics/Images';



const Subfashion = () => {
    const modelData = {
        jackets: {
            products: [
                { id: 1, brand: "Ducati", category: "Jackets", name: "DC Sport - Windproof jacket", gender: "Male", price: "₹12,649.75", imageUrl: Images.jducati },
                { id: 2, brand: "Royal Enfield", category: "Jackets", name: "STREETWIND ECO 2 RIDING JACKET - NAVY", gender: "Male", price: "₹6,500", imageUrl: Images.jroyal },
                { id: 3, brand: "Indian", category: "Jackets", name: "Men's Mesh Lightweight 2 Riding Jacket with Removable Liner, Black", gender: "Male", price: "₹12,615", imageUrl: Images.jindian },
                { id: 4, brand: "Harley-Davidson", category: "Jackets", name: "Men's Screamin' Eagle Bomber", gender: "Male", price: "₹20,943", imageUrl: Images.jharley },
                { id: 5, brand: "Ducati", category: "Jackets", name: "DC Sport - Windproof jacket", gender: "Female", price: "₹14,766", imageUrl: Images.fjducati },
                { id: 6, brand: "Royal Enfield", category: "Jackets", name: "STREETWIND ECO-FRIENDLY RIDING JACKET - OFF WHITE", gender: "Female", price: "₹11,764", imageUrl: Images.fjroyal },
                { id: 7, brand: "Indian", category: "Jackets", name: "Women's Mesh Lightweight 2 Riding Jacket with Removable Liner, Black", gender: "Female", price: "₹9,185", imageUrl: Images.fjindian },
                { id: 8, brand: "Harley-Davidson", category: "Jackets", name: "Women's Miss Enthusiast Soft Shell Jacket", gender: "Female", price: "₹14,235", imageUrl: Images.fjharley }
            ]
        },
        tshirts: {
            products: [
                { id: 9, brand: "Ducati", category: "T-Shirts", name: "Panigale - T-shirt", gender: "Male", price: "₹2,519.69", imageUrl: Images.tducati },
                { id: 10, brand: "Royal Enfield", category: "T-Shirts", name: "ROYAL ENFIELD CRUSADER LOGO T-SHIRT - OLIVE", gender: "Male", price: "₹2,519.69", imageUrl: Images.troyal },
                { id: 11, brand: "Indian", category: "T-Shirts", name: "Men's Spirit Lake T-Shirt, White", gender: "Male", price: " ₹2,099.31", imageUrl: Images.tindian },
                { id: 12, brand: "Harley-Davidson", category: "T-Shirts", name: "Men's Bar & Shield Long Sleeve Tee - Black", gender: "Male", price: "₹3,358.91", imageUrl: Images.tharley },
                { id: 13, brand: "Ducati", category: "T-Shirts", name: "Panigale - T-shirt", gender: "Female", price: "₹2,519.69", imageUrl: Images.ftducati },
                { id: 14, brand: "Royal Enfield", category: "T-Shirts", name: "CLASSIC MELANGE WOMEN'S T-SHIRT-MELANGE GREEN", gender: "Female", price: "₹2,999", imageUrl: Images.ftroyal },
                { id: 15, brand: "Indian", category: "T-Shirts", name: "Women's 34 Sleeve Raglan Henley T-Shirt, WhiteRed", gender: "Female", price: "₹3,799", imageUrl: Images.ftindian },
                { id: 16, brand: "Harley-Davidson", category: "T-Shirts", name: "Women's Illuminate Bar & Shield Tee - Bright White", gender: "Female", price: "₹3,299", imageUrl: Images.ftharley }
            ]
        },
        helmets: {
            fname: "Helmets",
            products: [
                { id: 17, brand: "Ducati", category: "Helmets", name: "Full-face helmet-Ducati Corse V6", gender: "Unisex", price: "₹82,000", imageUrl: Images.hducati },
                { id: 18, brand: "Royal Enfield", category: "Helmets", name: "ROYAL ENFIELD ESCAPADE HELMET WITH CLEAR VISOR - WHITE & RED", gender: "Unisex", price: "₹5,500", imageUrl: Images.hroyal },
                { id: 19, brand: "Indian", category: "Helmets", name: "Modular Freeway Helmet, Multi", gender: "Unisex", price: " ₹6,500", imageUrl: Images.hindian },
                { id: 20, brand: "Harley-Davidson", category: "Helmets", name: "Passage Adventure J10 Modular Helmet", gender: "Unisex", price: "₹₹7,500", imageUrl: Images.hharley },
            ]
        },
        gloves: {
            products: [
                { id: 21, brand: "Ducati", category: "Gloves", name: "Fabric-leather gloves-Sport C4", gender: "Unisex", price: "₹12,446.45", imageUrl: Images.gducati },
                { id: 22, brand: "Royal Enfield", category: "Gloves", name: "ROYAL ENFIELD STALWART GLOVES BLACK & OLIVE", gender: "Unisex", price: "₹2,990", imageUrl: Images.gindian },
                { id: 23, brand: "Indian", category: "Gloves", name: "Leather Retro 2 Riding Gloves, Black", gender: "Unisex", price: "₹7,079", imageUrl: Images.groyal },
                { id: 24, brand: "Harley-Davidson", category: "Gloves", name: " Gild Waterproof Leather Gloves - Harley Black", gender: "Unisex", price: "₹8,008.56", imageUrl: Images.gharley }
            ]
        },
        shoes: {
            products: [
                { id: 25, brand: "Ducati", category: "Shoes", name: "Ducati Corse City C2 Boots", gender: "Male", price: "₹16,818.89", imageUrl: Images.sducati },
                { id: 26, brand: "Royal Enfield", category: "Shoes", name: "ROYAL ENFIELD CAMO WP RIDING BOOTS", gender: "Male", price: "₹6,800", imageUrl: Images.sindian },
                { id: 27, brand: "Indian", category: "Shoes", name: "Men's Classic Lace Shoes ", gender: "Male", price: "₹19,433.68", imageUrl: Images.sroyal },
                { id: 28, brand: "Harley-Davidson", category: "Shoes", name: "Men's Bateman Ankle Pro Riding Shoes", gender: "Male", price: "₹18,241.53", imageUrl: Images.sharley }
            ]
        },
    };

    const allProducts = [
        ...modelData.jackets.products,
        ...modelData.tshirts.products,
        ...modelData.helmets.products,
        ...modelData.gloves.products,
        ...modelData.shoes.products,
    ];


    return (
        <div>
            <Labfashion
                products={allProducts}
            />
        </div>
    );
};

export default Subfashion;
