export const convertToJSON = (tableRows) => {
	const formattedTableRows = tableRows.map(row => row.cells);
	return JSON.stringify(formattedTableRows, null, 4);
};

export const convertToCSV = (tableRows) => {
	const formattedTableHeaders = Object.keys(tableRows[0].cells).join(",");
	const formattedTableRows = tableRows.map(row => (
		Object.values(row.cells).join(",")
	)).join("\n");

	return [formattedTableHeaders, formattedTableRows].join("\n");
};
