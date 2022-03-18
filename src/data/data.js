export const productsItems = [
  {
    id: 1,
    nombre: "Mouse Kolke Dragon KMG-100",
    precio: 560,
    section: "Mouse",
    foto: "/img/m1.jpg",
  },
  {
    id: 2,
    nombre: "Mouse Razer DeathAdder",
    precio: 3999,
    section: "Mouse",
    foto: "/img/m2.jpg",
  },
  {
    id: 3,
    nombre: "Mouse Redragon Griffin M607",
    precio: 1599,
    section: "Mouse",
    foto: "/img/m3.jpg",
  },
  {
    id: 4,
    nombre: "Mouse Noga Stormer ST-002",
    precio: 549,
    section: "Mouse",
    foto: "/img/m4.jpg",
  },
  {
    id: 5,
    nombre: "Teclado Redragon Dragonborn K630",
    precio: 4882,
    section: "Teclado",
    foto: "/img/t1.jpg",
  },
  {
    id: 6,
    nombre: "Teclado Nisuta NSKBGZ61",
    precio: 6499,
    section: "Teclado",
    foto: "/img/t2.jpg",
  },
  {
    id: 7,
    nombre: "Teclado Noganet Ganon",
    precio: 3699,
    section: "Teclado",
    foto: "/img/t3.jpg",
  },
  {
    id: 8,
    nombre: "Teclado HyperX Alloy Origins",
    precio: 10890,
    section: "Teclado",
    foto: "/img/t4.jpg",
  },
  {
    id: 9,
    nombre: "Auriculares Onikuma K5",
    precio: 2007,
    section: "Auriculares",
    foto: "/img/a1.jpg",
  },
  {
    id: 10,
    nombre: "Auriculares HyperX Cloud Flight",
    precio: 12899,
    section: "Auriculares",
    foto: "/img/a2.jpg",
  },
  {
    id: 11,
    nombre: "Auriculares Redragon Zeus",
    precio: 7749,
    section: "Auriculares",
    foto: "/img/a3.jpg",
  },
  {
    id: 12,
    nombre: "Auriculares Logitech G733",
    precio: 7350,
    section: "Auriculares",
    foto: "/img/a4.jpg",
  },
];

export const ProdRed = productsItems.reduce((res, prod) => {
  if (!res[prod.section]) {
    res[prod.section] = [];
  }
  res[prod.section] = [...res[prod.section], prod];

  return res;
}, {});
