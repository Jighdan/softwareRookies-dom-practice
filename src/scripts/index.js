import table from "./tableData";
import element from "./domElements";
import DOM from "./modules/domManagers/index";
import { initializeEvents } from "./globalEvents";

DOM.table.generate(element.table.container, table.data);
initializeEvents();