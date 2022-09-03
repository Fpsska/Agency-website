export function filter(array: any[], category: string): any[] {
    switch (category) {
        case 'all':
            return array;
        case category:
            return array.filter((item: any) => item.category.toLocaleLowerCase() === category);
        default:
            return array;
    }
};