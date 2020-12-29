import { addRow, addColumn } from "./dataManager";

const buttonNewRow = document.getElementById("buttonNewRow");
const buttonNewColumn = document.getElementById("buttonNewColumn");

const addRowEvent = () => {
	console.log("Row Added");
};// Adding available headers

const addColumnEvent = () =>{
	console.log("Column added");
};

export const initializeButtons = () => {
	buttonNewRow.addEventListener("click", addRowEvent);
	buttonNewColumn.addEventListener("click", addColumnEvent);
};