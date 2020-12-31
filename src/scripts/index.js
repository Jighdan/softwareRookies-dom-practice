import table from "./tableData";
import element from "./domElements";
import DOM from "./modules/domManagers/index";
import { initializeEvents } from "./eventListeners";

DOM.table.generate(element.tableContainer, table.data);
initializeEvents();
