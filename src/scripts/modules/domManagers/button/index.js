export const toggleButtonDisabled = (targetButton) => {
	const disabledStyleClass = "button-disabled";

	// Removes the targetButton class
	targetButton.classList.contains(disabledStyleClass)
		? targetButton.classList.remove(disabledStyleClass)
		: targetButton.classList.add(disabledStyleClass)

	// Toggles the disabled property of targetButton
	targetButton.disabled = !targetButton.disabled;
};
