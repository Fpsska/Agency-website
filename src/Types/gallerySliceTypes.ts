export interface galleryCardsTypes {
    id: string,
    category: string,
    text: string,
    image?: string,
    isActive: boolean
}

export interface galleryNavTemplateTypes extends galleryCardsTypes {
}