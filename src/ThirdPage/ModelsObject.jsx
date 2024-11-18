import React from 'react';
import ModelView from '../ThirdPage/ModelView';
import "../App.css";
import { Images } from '../Pics/Images';
import { useParams } from 'react-router-dom';

const ModelsObject = () => {
    const { model2 } = useParams();

    const modelData2 = {
        bug: {
            title1: "MOTOR CARS",
            title2: "THIS IS FOR ETERNITY.",
            title3: "BUGATTI",
            description: "BUGATTI’s ethos of excellence in design and engineering extends far beyond the automotive world.",
            d1: "Bugatti cars are renowned for their exceptional power, luxury, and groundbreaking engineering.",
            d2: "Each model, from the Veyron to the Chiron, combines cutting-edge technology with unparalleled speed, often surpassing 250 mph.",
            d3: "Crafted with meticulous attention to detail, Bugatti delivers an elite driving experience that few brands can match.",
            data: [
                {
                    name: "Tourbillion",
                    link: "/conf/tourbillion",
                    image: Images.tb4,
                    butn: "DISCOVER THE Tourbillion",
                    bunt: "T",
                },
                {
                    name: "W16 Mistral",
                    link: "/conf/mistral",
                    image: Images.bm4,
                    butn: "DISCOVER THE Mistral",
                    bunt: "M",
                },
                {
                    name: "CHIRON PUR SPORT",
                    link: "/conf/pur",
                    image: Images.bp2,
                    butn: "DISCOVER THE CHIRON",
                    bunt: "C",
                },
                {
                    name: "BOLIDE",
                    link: "/conf/bolide",
                    image: Images.bbo4,
                    butn: "DISCOVER THE BOLIDE",
                    bunt: "B",
                }
            ]
        },
        ben: {
            title1: "HYBRID CARS",
            title2: "MOTORSPORT.",
            title3: "BENTLEY",
            description: "Bentley is on an extraordinary journey into the future – a future in which sustainability will be paramount. We have made significant leaps forward, from concept cars featuring electric powertrains to launches of Bentley hybrid vehicles.",
            d1: "Bentley merges British elegance with powerful performance, creating luxury cars that excite.",
            d2: "Each model emphasizes craftsmanship, featuring meticulously designed interiors and advanced technology.",
            d3: "Bentley cars deliver a unique combination of refinement, prestige, and thrilling power.",
            data: [
                {
                    name: "MULLINER",
                    link: "/conf1/mulliner",
                    image: Images.mul4,
                    butn: "DISCOVER THE MULLINER",
                    bunt: "M"
                },
                {
                    name: "BENTAYGA",
                    link: "/conf1/bentayga",
                    image: Images.bentayga,
                    butn: "DISCOVER THE BENTAYGA",
                    bunt: "B"
                },
                {
                    name: "CONTINENTAL GT",
                    link: "/conf1/continental",
                    image: Images.con5,
                    butn: "DISCOVER THE CONTINENTAL",
                    bunt: "C"
                },
                {
                    name: "FLYING SPUR",
                    link: "/conf1/flyingSpur",
                    image: Images.spur4,
                    butn: "DISCOVER THE FLYING SPUR",
                    bunt: "S"
                },
            ],
        },
        fer: {
            title1: "SPORTS CARS",
            title2: "START YOUR ENGINE.",
            title3: "FERRARI",
            description: "Born of the spirit of racing, Ferrari epitomises the power of a lifelong passion and the beauty of limitless human achievement, creating timeless icons for a changing world.",
            d1: "Ferrari represents Italian passion and a rich racing heritage, renowned for high-performance sports cars.",
            d2: "Models like the LaFerrari and SF90 are celebrated for their incredible speed, power, and distinctive designs.",
            d3: "Ferrari cars blend innovation with exclusivity, offering a driving experience that thrills enthusiasts worldwide.",
            data: [
                {
                    name: "12 CILINDRI",
                    link: "/conf1/cilindri",
                    image: Images.cili4,
                    butn: "DISCOVER THE 12 CILINDRI",
                    bunt: "C"
                },
                {
                    name: "296 GTS",
                    link: "/conf1/gts",
                    image: Images.gts2,
                    bunt: "G",
                    butn: "DISCOVER THE 296 GTS"
                },
                {
                    name: "DAYTONA SP3",
                    link: "/conf1/daytona",
                    image: Images.sp3,
                    bunt: "D",
                    butn: "DISCOVER THE DAYTONA SP3"
                },
                {
                    name: "LAFERRARI APERTA",
                    link: "/conf1/laferrari",
                    image: Images.laferrari,
                    bunt: "L",
                    butn: "DISCOVER THE LAFERRARI"
                },
            ],
        },
        rol: {
            title1: "HANDMADE CARS",
            title2: "A HAND-BUILT MASTERPIECE.",
            title3: "ROLLS-ROYCE",
            description: "Inspiring Greatness exists at the very core of Rolls-Royce Motor Cars. It is the guiding force from which our innovation, aspirations, and ongoing legacy unfold. As we continue to extend the limits of possibility, Inspiring Greatness will forever remain our ultimate pursuit.",
            d1: "Rolls-Royce is known for ultimate luxury and refinement, setting the standard in automotive craftsmanship.",
            d2: "Each vehicle is meticulously designed with timeless elegance and advanced technology.",
            d3: "Rolls-Royce cars offer an unmatched blend of sophistication, prestige, and driving serenity.",
            data: [
                {
                    name: "BOAT TAIL",
                    link: "/conf1/boatail",
                    image: Images.boat2,
                    bunt: "B",
                    butn: "DISCOVER THE BOAT TAIL"
                },
                {
                    name: "CULLINAN",
                    link: "/conf1/cullinan",
                    image: Images.cul3,
                    bunt: "C",
                    butn: "DISCOVER THE CULLINAN"
                },
                {
                    name: "PANTHOM",
                    link: "/conf1/phantom",
                    image: Images.pa3,
                    bunt: "P",
                    butn: "DISCOVER THE PANTHOM"
                },
                {
                    name: "BLACK BADGE GHOST",
                    link: "/conf1/ghost",
                    image: Images.bgh2,
                    bunt: "G",
                    butn: "DISCOVER THE GHOST"
                },
            ],
        },
        ind: {
            title1: "MOTORCYCLES",
            title2: "THIS IS FOR PRIDE.",
            title3: "INDIAN",
            description: "Being part of IMR means being part of a dedicated Indian Motorcycle Riding Community that is supported by Indian Motorcycle and authorized Indian Motorcycle dealerships.",
            d1: "Indian Motorcycles, America’s first motorcycle company, is celebrated for its classic styling and durability.",
            d2: "Each bike blends vintage aesthetics with modern engineering, designed for reliability and comfort.",
            d3: "Indian Motorcycles inspire riders with a heritage of strength and an adventurous spirit.",
            data: [
                {
                    name: "Challenger Elite",
                    link: "/conf1/elite",
                    image: Images.ce3,
                    butn: "DISCOVER THE Challenger",
                    bunt: "C",
                },
                {
                    name: "FTR x RSD",
                    link: "/conf1/ftrx",
                    image: Images.ftr3,
                    butn: "DISCOVER THE FTR x RSD",
                    bunt: "F",
                },
                {
                    name: "Chief Bobber Dark Horse",
                    link: "/conf1/chief",
                    image: Images.dar4,
                    butn: "DISCOVER THE Bobber",
                    bunt: "B",
                },
                {
                    name: "Scout Bobber Twenty",
                    link: "/conf1/bobber",
                    image: Images.sco2,
                    butn: "DISCOVER THE Scout",
                    bunt: "S",
                },
            ],
        },
        har: {
            title1: "MOTORCYCLES",
            title2: "BORN TO ROAM.",
            title3: "HARLEY-DAVIDSON",
            description: "The category we've created from the ground up. Go the distance, in style. Discover the wide-open world and freedom for the soul on bikes only Harley-Davidson could build.",
            d1: "Harley-Davidson defines American motorcycling, known for its iconic style and deep, resonant sound.",
            d2: "Each model, from the Sportster to the Touring series, embodies a sense of freedom and individuality.",
            d3: "Harley-Davidson bikes are crafted to deliver a powerful ride and unmatched road presence.",
            data: [
                {
                    name: "X™ 440",
                    link: "/conf1/x440",
                    image: Images.x4403,
                    bunt: "X",
                    butn: "DISCOVER THE X™ 440"
                },
                {
                    name: "Breakout™ 117",
                    link: "/conf1/breakout",
                    image: Images.bo1,
                    bunt: "B",
                    butn: "DISCOVER THE Breakout™"
                },
                {
                    name: "Sportster™ S",
                    link: "/conf1/sportster",
                    image: Images.spo2,
                    bunt: "S",
                    butn: "DISCOVER THE sportster"
                },
                {
                    name: "Road Glide",
                    link: "/conf1/glide",
                    image: Images.gli4,
                    bunt: "R",
                    butn: "DISCOVER THE Road Glide"
                },
            ]
        },
        duc: {
            title1: "MOTORCYCLES",
            title2: "THE LAND OF JOY.",
            title3: "DUCATI",
            description: "Latest facts and feelings from the Land of Joy. Ducati Scrambler is the essence of motorcycling and a world filled with freedom, joy and self-expression.",
            d1: "Ducati motorcycles are celebrated for Italian craftsmanship and high-performance engineering.",
            d2: "Models like the Panigale and Monster combine style, speed, and precision handling for an exhilarating ride.",
            d3: "Ducati delivers an unmatched experience for sport enthusiasts, with innovation and Italian style in every model.",
            data: [
                {
                    name: "Diavel V4",
                    link: "/conf1/diavel1260",
                    image: Images.dia4,
                    bunt: "D",
                    butn: "DISCOVER THE Diavel"
                },
                {
                    name: "Monster Senna",
                    link: "/conf1/monster",
                    image: Images.mon1,
                    bunt: "M",
                    butn: "DISCOVER THE Monster"
                },
                {
                    name: "Panigale V4",
                    link: "/conf1/panigalev4",
                    image: Images.pv4,
                    bunt: "P",
                    butn: "DISCOVER THE Panigale"
                },
                {
                    name: "Scrambler 1100",
                    link: "/conf1/scrambler1100",
                    image: Images.scr4,
                    bunt: "S",
                    butn: "DISCOVER THE Scrambler"
                },
            ]
        },
        roy: {
            title1: "MOTORCYCLES",
            title2: "STAY TRUE & STAY CLASSIC.",
            title3: "ROYAL ENFIELD",
            description: "Royal Enfield has created the mid-size motorcycle segment in India with its unique and distinctive modern classic motorcycles. The oldest motorcycle brand in continuous production, Royal Enfield made its first motorcycle in 1901.",
            d1: "Royal Enfield offers rugged, timeless motorcycles with British heritage and simplicity at their core.",
            d2: "Popular models like the Bullet and Himalayan are known for their durability and adventurous appeal.",
            d3: "Royal Enfield bikes provide a unique blend of classic design and a resilient, easy-going ride.",
            data: [
                {
                    name: "Continental GT 650",
                    link: "/conf1/contgt",
                    image: Images.gtc3,
                    bunt: "C",
                    butn: "DISCOVER THE GT 650"
                },
                {
                    name: "Bullet 350",
                    link: "/conf1/bullet",
                    image: Images.bul5,
                    bunt: "B",
                    butn: "DISCOVER THE Bullet"
                },
                {
                    name: "Scram 411",
                    link: "/conf1/scram",
                    image: Images.sc42,
                    bunt: "S",
                    butn: "DISCOVER THE Scram 411"
                },
                {
                    name: "Himalayan 450",
                    link: "/conf1/himalayan",
                    image: Images.himalayan,
                    bunt: "H",
                    butn: "DISCOVER THE Himalayan"
                },
            ]
        }
    }

    const currentMode = modelData2[model2.toLowerCase()] || modelData2.rock;

    return (
        <ModelView
            title1={currentMode.title1}
            title2={currentMode.title2}
            title3={currentMode.title3}
            description={currentMode.description}
            d1={currentMode.d1}
            d2={currentMode.d2}
            d3={currentMode.d3}
            data={currentMode.data}
            image={currentMode.image}
        />
    );
}

export default ModelsObject;
