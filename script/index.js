"use strict";

import generateHeader from "./generateHeader.js";
import generateFooter from "./generateFooter.js";
import generateCatalog from "./generateCatalog.js";
import generateGoodsPage from "./generateGoodsPage.js";
import generateItemPage from "./generateItemPage.js";
import generateCartPage from "./generateCartPage.js";
import { loadData } from "./loadData.js";

generateHeader();
generateCatalog();
generateFooter();
generateGoodsPage();
generateItemPage();
generateCartPage();
loadData();

// "use strict";

// import generateHeader from "./generateHeader.js";
// import generateFooter from "./generateFooter.js";
// import generateCatalog from "./generateCatalog.js";
//  import generatesubCatalog from "./generateSubCatalog.js";
// import { loadData } from "./loadData.js";

// generateHeader();
// generateCatalog();
// generateFooter();
//  generatesubCatalog();
// loadData();
