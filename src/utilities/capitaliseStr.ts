export const capitaliseStr = (str: string): string => {
    return str.split(/ /g).map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    }).join(" ");
}