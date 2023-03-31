function choices(items) {
    //items should be an arry of foods
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

function remove(items, item) {
    const index = items.findIndex((element) => element === item);
    if (index !== -1) {
        return items.splice(index, 1);
    }
    return undefined;
}

export { choices, remove }