import { getData } from "./getData.js";

const cartList = [
  {
    id: "idd045",
    count: 1,
  },
  {
    id: "idd035",
    count: 2,
  },
  {
    id: "idd025",
    count: 3,
  },
];

export const loadData = () => {};

//getData.catalog((data) => console.log(data));
//getData.subCatalog("Декор", (data) => console.log(data));

// import { getData } from "./getData.js";

// const wishlist = ["idd095", "idd097", "idd098", "idd099"];

// const cartlist = [
//   {
//     id: "idd006",
//     count: 3,
//   },
//   {
//     id: "idd007",
//     count: 2,
//   },
//   {
//     id: "idd008",
//     count: 1,
//   },
// ];

// export const loadData = () => {
//   if (location.search) {
//     const search = decodeURI(location.search);
//     const prop = search.split("=")[0].substring(1);
//     const value = search.split("=")[1];

//     if (prop === "s") {
//       getData.search(value, (data) => console.log(data));
//     } else if (prop === "wishlist") {
//       getData.wishlist(wishlist, (data) => console.log(data));
//     } else {
//       getData.category(prop, value, (data) => console.log(data));
//     }
//   }
//   if (location.hash) {
//     getData.item(location.hash.substring(1), (data) => console.log(data));
//   }
//   if (location.pathname.includes("cart")) {
//     getData.cart(cartlist, (data) => console.log(data));
//   }

// getData.catalog((data) => console.log(data));
//getData.subCatalog("Декор", (data) => console.log(data));
//};
