export const capitalizeString = (string) => {
	return string.replace(/\w\S*/g, (word) => {
		return word.replace(/^\w/, (character) => character.toUpperCase());
	});
};