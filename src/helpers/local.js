function storeOrders(order) {
    const o = this.getOrders("READLIST");
    const p = o.find((checkorder) => checkorder.title === order.title);
    if (p === undefined) {
        o.push(order);
    }
    localStorage.setItem("READLIST", JSON.stringify(o));
}

function deleteOrders(order) {
    const o = this.getOrders("READLIST");
    const q = o.filter((checkorder) => checkorder.title !== order.title);
    if (q) {
        localStorage.setItem("READLIST", JSON.stringify(q));
    }
}

function getOrders(items) {
    const checkOrderLocal = localStorage.getItem(items);
    if (checkOrderLocal !== null) {
        return JSON.parse(checkOrderLocal);
    } else {
        return [];
    }
}

export default {
    getOrders,
    storeOrders,
    deleteOrders,
};