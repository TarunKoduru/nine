import React from 'react';
import { useParams } from 'react-router-dom';
import Automobiles from '../SecondPage/Automobiles';
import { Images } from '../Pics/Images';



const Autobjects = () => {
    const { model3 } = useParams();
    const modelData3 = {
        cars: {
            title: "It’s not the miles on the road,",
            description: "but the memories we make.",
            image: Images.car,
            tscname: "Drive with your brands",
            head: "Explore Our Exclusive Car Collection",
            aboutpic: Images.shortcar,
            Aname: "CARS",
            des1: "Explore our range of luxury and performance cars, crafted for elegance and engineered for speed.",
            des2: "From sports cars to premium sedans, our vehicles offer superior handling, comfort, and a thrill with every drive.",
            des3: "Redefine your journey on the road.",
            cbclass: "ctite",
            data: [
                { name: "BUGGATI", link: "/place/bug", image: Images.tb1, btnwhite: "blue", color: "white", butn: "DISCOVER THE BUGGATI", bunt: "B" },
                { name: "BENTLEY", link: "/place/ben", image: Images.mul4, btnwhite: "orange", color: "white", butn: "DISCOVER THE BENTLEY", bunt: "B" },
                { name: "FERRARI", link: "/place/fer", image: Images.ds33, btnwhite: "silver", color: "white", butn: "DISCOVER THE FERRARI", bunt: "F" },
                { name: "ROLLS-ROYCE", link: "/place/rol", image: Images.boat4, btnwhite: "blue", color: "white", butn: "DISCOVER THE ROLLS-ROYCE", bunt: "RR" },
            ],
        },
        bikes: {
            title: "Riding a motorcycle is not just a hobby,",
            description: "It's a way of life.",
            image: Images.bike,
            aboutpic: Images.shortbike,
            tscname: "Race with your brands",
            head: "Discover the Road Ahead with Our Bikes",
            Aname: "BIKES",
            cbclass: "btite",
            des1: "From cruisers to sports bikes, we bring you the perfect blend of power and precision. ",
            des2: "Whether it's the city streets or open highways, our bikes are designed to bring power and style to every ride.",
            des3: "Ride with confidence and style. ",
            data: [
                { name: "INDIAN", link: "/place/ind", image: Images.indian, btnwhite: "blue", color: "white", butn: "DISCOVER THE INDIAN", bunt: "I" },
                { name: "DUCATI", link: "/place/duc", image: Images.pv4, btnwhite: "yellow", color: "white", butn: "DISCOVER THE DUCATI", bunt: "D" },
                { name: "Royal Enfield", link: "/place/roy", image: Images.royal, btnwhite: "bw", color: "white", butn: "DISCOVER THE ROYAL", bunt: "R" },
                { name: "HARLEY-DAVIDSON", link: "/place/har", image: Images.harley, btnwhite: "brown", color: "white", butn: "DISCOVER THE HARLEY", bunt: "H" },

            ]
        }
    };
    const currentMode = modelData3[model3.toLowerCase()] || modelData3.cars;

    return (

        <Automobiles
            title={currentMode.title}
            description={currentMode.description}
            data={currentMode.data}
            image={currentMode.image}
            aboutpic={currentMode.aboutpic}
            cbclass={currentMode.cbclass}
            Aname={currentMode.Aname}
            tscname={currentMode.tscname}
            head={currentMode.head}
            des1={currentMode.des1}
            des2={currentMode.des2}
            des3={currentMode.des3}
        />
    )
}

export default Autobjects;