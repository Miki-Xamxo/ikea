import { getData } from "./getData.js";
import generatesubCatalog from "./generateSubCatalog.js";

export const main = () => {
  const updateSubCatalog = generatesubCatalog();
  const btnBurger = document.querySelector(".btn-burger");
  const catalog = document.querySelector(".catalog");
  const subCatalog = document.querySelector(".subcatalog");
  const subcatalogHeader = document.querySelector(".subcatalog-header");
  const btnReturn = document.querySelector(".btn-return");

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.append(overlay);

  const openMenu = () => {
    catalog.classList.add("open");
    overlay.classList.add("active");
  };

  const closeMenu = () => {
    closeSubMenu();
    catalog.classList.remove("open");
    overlay.classList.remove("active");
  };

  const handlerCatalog = (event) => {
    event.preventDefault();
    const itemList = event.target.closest(".catalog-list__item>a");
    console.log(itemList)
    if (itemList) {
      getData.subCatalog(itemList.textContent, (data) => {
        console.log(data )
        updateSubCatalog(itemList.textContent, data);
        subCatalog.classList.add("subopen");
      });
    }
    if (event.target.closest(".btn-close")) {
      closeMenu();
    }
  };

  const closeSubMenu = () => {
    subCatalog.classList.remove("subopen");
  };

  btnBurger.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeMenu);
  catalog.addEventListener("click", handlerCatalog);
  subCatalog.addEventListener("click", (event) => {
    const btnreturn = event.target.closest(".btn-return");
    if (btnBurger) closeSubMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      closeMenu();
    }
  });
};

// import { getData } from "./getData.js";
// import { generatesubCatalog } from "./generateSubCatalog.js";

// export const main = () => {
//    const updateSubCatalog = generatesubCatalog();
//   const btnBurger = document.querySelector(".btn-burger");
//   const catalog = document.querySelector(".catalog");
//   const btnClose = document.querySelector(".btn-close");
//   const subCatalog = document.querySelector(".subcatalog");
//   const subcatalogHeader = document.querySelector(".subcatalog-header");
//   const btnReturn = document.querySelector(".btn-return");

//   const overlay = document.createElement("div");
//   overlay.classList.add("overlay");
//   document.body.append(overlay);

//   const openMenu = () => {
//     catalog.classList.add("open");
//     overlay.classList.add("active");
//   };

//   const closeMenu = () => {
//     catalog.classList.remove("open");
//     overlay.classList.remove("active");
//     closeSubMenu();
//   };

//   const openSubMenu = (event) => {
//     event.preventDefault();

//     const itemList = event.target.closest(".catalog-list__item");
//     if (itemList) {
//        getData.subCatalog(target.textContetnt, (data) => {
//          updateSubCatalog(target.textContetnt, data);
//         subcatalog.classList.add("subopen");
//        });
//       subcatalogHeader.innerHTML = itemList.innerHTML;
//       subCatalog.classList.add("subopen");
//       updateSubCatalog(itemList.innerHTML, data);
//     }
//   };

//   const closeSubMenu = () => {
//     subCatalog.classList.remove("subopen");
//   };

//   btnBurger.addEventListener("click", openMenu);
//   btnClose.addEventListener("click", closeMenu);
//   overlay.addEventListener("click", closeMenu);
//   catalog.addEventListener("click", openSubMenu);
//   btnReturn.addEventListener("click", closeSubMenu);
//   subCatalog.addEventListener("click", (event) => {
//     const btnreturn = event.target.closest(".btn-return");

//     if (btnBurger) closeSubMenu();
//   });

//   document.addEventListener("keydown", (event) => {
//     if (event.code === "Escape") {
//       closeMenu();
//     }
//   });
// };
