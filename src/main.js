import Table from "./components/Table/index";
import Modal from "./components/Modal";
import Form from "./components/Form";
import ButtonNewColumn from "./components/Button/ButtonNewColumn";
import ButtonNewRow from "./components/Button/ButtonNewRow";

const instanceOfTable = new Table();
const instanceOfModal = new Modal();
const instanceOfForm = new Form();
const instanceOfButtonNewColumn = new ButtonNewColumn();
const instanceOfButtonNewRow = new ButtonNewRow();

instanceOfTable.render();
instanceOfModal.render();
instanceOfForm.render();
instanceOfButtonNewColumn.render();
instanceOfButtonNewRow.render();
