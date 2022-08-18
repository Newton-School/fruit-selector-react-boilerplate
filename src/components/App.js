import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import "../styles/App.css";

const App = () => {
  const fruitData = [
    {
      name: "Mango",
      src: "https://images.hindustantimes.com/img/2021/06/25/1600x900/9a156550-c367-11eb-9d53-2d5cae187b44_1624624374058.jpg",
    },
    {
      name: "Apple",
      src: "https://w7.pngwing.com/pngs/319/218/png-transparent-sliced-apple-with-leaf-apple-juice-green-purxe9e-apple-natural-foods-food-green-apple.png",
    },
    {
      name: "Orange",
      src: "https://w7.pngwing.com/pngs/1001/506/png-transparent-slices-of-oranges-orange-juice-flavor-fruit-nutritious-orange-natural-foods-food-orange.png",
    },
    {
      name: "Dragonfruit",
      src: "https://w7.pngwing.com/pngs/233/1020/png-transparent-dragon-fruit-ice-cream-juice-dried-fruit-pitaya-plants-food-photography-cooking.png",
    },
    {
      name: "Guava",
      src: "https://www.pngfind.com/pngs/m/505-5057002_guava-png-common-guava-transparent-png.png",
    },
    {
      name: "Papaya",
      src: "https://e7.pngegg.com/pngimages/685/75/png-clipart-papaya-papaya-beauty-food.png",
    },
    {
      name: "Pineapple",
      src: "https://w7.pngwing.com/pngs/238/575/png-transparent-pineapple-juice-smoothie-cocktail-pineapple-juice-juice-dried-fruit-food-fruit.png",
    },
    {
      name: "Cherry",
      src: "https://toppng.com/uploads/preview/cherry-png-picture-cheri-fruits-11563271567esgx1jgdzd.png",
    },
    {
      name: "Strawberry",
      src: "https://w7.pngwing.com/pngs/102/28/png-transparent-strawberry-juice-fruit-smoothie-strawberry-fruit-natural-foods-frutti-di-bosco-food-thumbnail.png",
    },
    {
      name: "Kiwi",
      src: "https://e7.pngegg.com/pngimages/924/918/png-clipart-kiwifruit-juice-smoothie-food-kiwi-juice-natural-foods-food.png",
    },
  ];

  return <div id="main"></div>;
};

export default App;
