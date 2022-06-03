const Choice = (items) => {
	const idx = Math.floor(Math.random() * items.length);
	const choice = items[idx];
	return choice;
};

const Remove = (items, item) => {
	for (let i = 0; i < items.length; i++) {
		if (items[i] === item) {
			// returns new array with selected item removed
			// slices remaining items up to the selected item and after the selected item
			return [...items.slice(0, i), ...items.slice(i + 1)];
		}
	}
	return undefined;
};

export { Choice, Remove };
