

export const getPageAnimeArray = (PageArray: []) => {
    const itemsPerRow = 9;
    const rows = [];
    
    for (let i = 0; i < PageArray.length; i += itemsPerRow) {
        const rowItems = PageArray.slice(i, i + itemsPerRow);
        rows.push(rowItems);
    }
    return rows
}