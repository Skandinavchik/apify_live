
const getMinimumPrices = (data) => {
    const unique = data.reduce((acc, curr) => {
        const existingItem = acc.find(item => item.offId === curr.offId);

        if (!existingItem) {
            acc.push(curr);
        } else {
            if (existingItem.price > curr.price) {
                existingItem.price = curr.price;
            }
        }

        return acc;
    }, []);

    return unique;
};