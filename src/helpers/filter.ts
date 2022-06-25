export function filter(array: any[], category: string) {
    switch (category) {
        case 'all':
            return array;
        case 'design':
            return array.filter((item: any) => item.category.toLocaleLowerCase() === 'design');
        case 'branding':
            return array.filter((item: any) => item.category.toLocaleLowerCase() === 'branding');
        case 'illustration':
            return array.filter((item: any) => item.category.toLocaleLowerCase() === 'illustration');
        case 'motion':
            return array.filter((item: any) => item.category.toLocaleLowerCase() === 'motion');
        default:
            return array;
    }
};