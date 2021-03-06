import { getData } from "./getData.js";
import { main } from "./main.js";
import userData from "./userData.js";

const NEW_COUNT_ITEAM = 6;

const generateItemPage = () => {
  const renderCard = ({
    category,
    count,
    id,
    img,
    name,
    description,
    price,
    subcategory,
  }) => {
    const breadcrumbLink = document.querySelectorAll(".breadcrumb__link");
    const goodImages = document.querySelector(".good-images");
    const goodItemNew = document.querySelector(".good-item__new");
    const goodItemHeader = document.querySelector(".good-item__header");
    const goodItemDescription = document.querySelector(
      ".good-item__description"
    );
    const goodItemEmpty = document.querySelector(".good-item__empty");
    const goodItemPriceValue = document.querySelector(
      ".good-item__price-value"
    );
    const btnGood = document.querySelector(".btn-good");
    const btnAddWishList = document.querySelector(".btn-add-wishlist");

    breadcrumbLink[0].textContent = category;
    breadcrumbLink[0].href = `goods.html?cat=${category}`;
    breadcrumbLink[1].textContent = subcategory;
    breadcrumbLink[1].href = `goods.html?cat=${subcategory}`;
    breadcrumbLink[2].textContent = name;

    goodImages.textContent = "";
    goodItemHeader.textContent = name;
    goodItemDescription.textContent = description;
    goodItemPriceValue.textContent = price;
    btnGood.dataset.idd = id;
    btnAddWishList.dataset.idd = id;

    img.forEach((item) => {
      goodImages.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="good-image__item">
              <img
                src="${item}"
                alt="${name} - ${description}"
              />
            </div>
      `
      );
    });
    if (count >= NEW_COUNT_ITEAM) {
      goodItemNew.style.display = "block";
    } else if (!count) {
      goodItemEmpty.style.display = "block";
      btnGood.style.display = "none";
    }

    const chackWishList = () => {
      if (userData.wishList.includes(id)) {
        btnAddWishList.classList.add("contains-wishlist");
      } else {
        btnAddWishList.classList.remove("contains-wishlist");
      }
    };

    btnAddWishList.addEventListener("click", () => {
      userData.wishList = id;
      chackWishList();
    });

    btnGood.addEventListener("click", () => {
      userData.cartList = id;
    });

    chackWishList();
  };

  if (location.hash && location.pathname.includes("card")) {
    getData.item(location.hash.substring(1), renderCard);
  }
};

export default generateItemPage;
