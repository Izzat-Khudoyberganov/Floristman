import flowers from "../../img/flowers.png";
import airBallons from "../../img/airBallons.png";
import sweet from "../../img/sweets.png";
import fruits from "../../img/fruits.png";
import flower from "../../img/flower.png";
import gif from "../../img/gif.png";
import ballons from "../../img/ballons.png";
import complect from "../../img/complect.png";

const categoryData = [
    {
        id: 0,
        image: flowers,
        text: "Цветы",
        link: "/category/flowers",
    },
    {
        id: 1,
        image: airBallons,
        text: "Воздушные шарики",
        link: "/category/balloons",
    },
    {
        id: 2,
        image: sweet,
        text: "Сладости",
        link: "/category/sweets",
    },
    {
        id: 3,
        image: fruits,
        text: "Фруктовые корзины",
        link: "/category/fruits",
    },
    {
        id: 4,
        image: flower,
        text: "Комнатные растения",
        link: "/category/plants",
    },
    {
        id: 5,
        image: gif,
        text: "Подарки",
        link: "/category/gifts",
    },
    {
        id: 6,
        image: ballons,
        text: "Услуги",
        link: "/category/services",
    },
    {
        id: 7,
        image: complect,
        text: "Аксессуары",
        link: "/category/accessories",
    },
];

export { categoryData };
