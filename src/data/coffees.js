import { nanoid } from "nanoid";


const coffees = [ 
    {
        id: nanoid(),
        name: "Etiopia Gedeb Wele Jego",
        weight: 250,
        price: 55,
        imgURL: "https://nieczapla.pl/wp-content/uploads/2022/05/01_Nieczapla-Etiopia-Gedeb-Wele-Jego-Filtr-v60-400x400.jpg",
        isNew: true,

    },
    {
        id: nanoid(),
        name: "Kostaryka Finca Calle Liles",
        weight: 250,
        price: 50,
        imgURL: null,
        isNew: false,
    },
    {
        id: nanoid(),
        name: "Etiopia Guji Hambela",
        weight: 250,
        price: 53,
        imgURL: null,
        isNew: false,
    },
    {
        id: nanoid(),
        name: "Brazylia Sitio Uniao",
        weight: 250,
        price: 42,
        imgURL: null,
        isNew: false,
    },
 ];

export default coffees;