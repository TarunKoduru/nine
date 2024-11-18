import React from 'react';
import { useParams } from 'react-router-dom';
import Oneforall from '../Detaildata/Oneforall';
import '../App.css';
import { Images } from '../Pics/Images';


const Configure = () => {
    const { model } = useParams();

    const modelData = {
        bolide: {
            videoSrc: Images.bolide,
            title: "BOLIDE",
            description: "Lightweight, extreme and uncompromising. The BOLIDE is BUGATTI's track-only hypercar built around the iconic W16 engine.",
            price: "₹36 Crore",
            specifications: [
                { label: "Power Output", value: "1,600 hp" },
                { label: "Maximum speed", value: "500 KM/H (310 mph)" },
                { label: "Engine", value: "8.0-liter W16 quad-turbocharged" },
                { label: "Length", value: "4,750 mm" },
                { label: "Width", value: "2,040 mm" },
                { label: "Height", value: "1,100 mm" },
                { label: "Wheelbase", value: "2,750 mm" },
                { label: "0 - 100 KM/H (62 mph)", value: "2.2 s" },
                { label: "Torque", value: "1,600 Nm" }
            ],
            galleryData: [
                { image: Images.bbo1 },
                { image: Images.bbo2 },
                { image: Images.bbo3 },
                { image: Images.bbo4 },
                { image: Images.bbo5 },
            ],
        },
        mistral: {
            videoSrc: Images.mistral,
            title: "W16 MISTRAL",
            description: "The final road-going model with the iconic W16 engine.",
            price: "₹40.44 Crore",
            specifications: [
                { label: "Power Output", value: "1,600 hp" },
                { label: "Maximum speed", value: "400 KM/H (248 mph)" },
                { label: "Engine", value: "8.0-liter W16 quad-turbocharged" },
                { label: "Length", value: "4,750 mm" },
                { label: "Width", value: "2,000 mm" },
                { label: "Height", value: "1,200 mm" },
                { label: "Wheelbase", value: "2,750 mm" },
                { label: "0 - 100 KM/H (62 mph)", value: "2.5 s" },
                { label: "Torque", value: "1,600 Nm" },
            ],
            galleryData: [
                { image: Images.bm1 },
                { image: Images.bm2 },
                { image: Images.bm3 },
                { image: Images.bm4 },
                { image: Images.bm5 },
            ],
        },
        tourbillion: {
            videoSrc: Images.tourbillion,
            title: "TOUR BILLION",
            description: "Conceived from a blank canvas, the TOURBILLON converges the immediate torque and flexibility of electric motors with the spine-tingling emotion of a naturally aspirated V16 engine.",
            price: "₹34.8 Crore",
            specifications: [
                { label: "Power Output", value: "1,800 hp" },
                { label: "Maximum speed", value: "390 KM/H (236 mph)" },
                { label: "Engine", value: "8.0-liter W16 quad-turbocharged" },
                { label: "Length", value: "4,671 mm" },
                { label: "Width", value: "2,051 mm" },
                { label: "Height", value: "1,189 mm" },
                { label: "Wheelbase", value: "2,740 mm" },
                { label: "0 - 100 KM/H (62 mph)", value: "2.0 s" },
                { label: "Torque", value: "900 Nm" },
            ],
            galleryData: [
                { image: Images.tb1 },
                { image: Images.tb2 },
                { image: Images.tb3 },
                { image: Images.tb4 },
                { image: Images.tb5 },
            ],
        },
        pur: {
            videoSrc: Images.chiron,
            title: "CHIRON PUR SPORT",
            description: "Its sharp, uncompromising character makes the CHIRON PUR SPORT.",
            price: "₹24.44 Crore",
            specifications: [
                { label: "Power Output", value: "1,600 hp" },
                { label: "Maximum speed", value: "490 KM/H (304 mph)" },
                { label: "Engine", value: "8.0-liter W16 quad-turbocharged" },
                { label: "Length", value: "4,544 mm" },
                { label: "Width", value: "2,038 mm" },
                { label: "Height", value: "1,212 mm" },
                { label: "Wheelbase", value: "2,711 mm" },
                { label: "0 - 100 KM/H (62 mph)", value: "2.4 s" },
                { label: "Torque", value: "1,180 Nm" },
            ],
            galleryData: [
                { image: Images.bp1 },
                { image: Images.bp2 },
                { image: Images.bp3 },
                { image: Images.bp4 },
                { image: Images.bp5 },
            ],
        },

    };

    const currentModel = modelData[model.toLowerCase()] || modelData.bolide;

    return (
        <Oneforall
            videoSrc={currentModel.videoSrc}
            title={currentModel.title}
            description={currentModel.description}
            price={currentModel.price}
            specifications={currentModel.specifications}
            galleryData={currentModel.galleryData}
        />
    );
};

export default Configure;
