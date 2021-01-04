import table from "./tableData";
import DOM from "./DOM";
import { initializeEvents } from "./globalEvents";

// What a mess. Can we see to split code as components instead of hierarchy?

DOM.generate.table.initialize(DOM.element.table.container, table.data);
initializeEvents();