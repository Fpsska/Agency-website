export function getRandomCategory(array: any[]): string {
    const randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
};