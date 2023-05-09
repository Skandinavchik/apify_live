
let uniqueItems = [];

const isInArray = (arr, el) => {
    return arr.findIndex((item) => {
        if (item.offerId === el.offerId) {
            if (+item.price.slice(1) > +el.price.slice(1)) {
                return true;
            }
        } else return false;
    });
};

const getUniqueItems = (arr) => {
    arr.forEach(item => {
        if (isInArray(uniqueItems, item) === -1) {
            uniqueItems.push(item);
        } else {
            uniqueItems.splice(isInArray(uniqueItems, item), 1, item);
        }
    });
};