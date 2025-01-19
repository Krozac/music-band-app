

export const PhotosList = [
    {
        id: 'Les costumes de scene',
        photos: Array.from({ length: 30 }, (_, i) => require(`../assets/photos/costumes/photo_${String(i + 1)}.png`))
    },
    {
        id: 'Photos de la Tournée des 40 ans Ludres (54) 13 mai 2011',
        photos: Array.from({ length: 32 }, (_, i) => require(`../assets/photos/ludres2011/photo_${String(i + 1)}.png`))
    },
    {
        id: 'Tri Yann à Attert (Belgique), le 28 mars 2009',
        photos: Array.from({ length: 30 }, (_, i) => require(`../assets/photos/attert2009/photo_${String(i + 1)}.png`))
    },
    {
        id: 'Tri Yann à Ludres (54), le 27 mars 2009',
        photos: Array.from({ length: 33 }, (_, i) => require(`../assets/photos/ludres2009/photo_${String(i + 1)}.png`))
    },
    {
        id: 'Tri Yann à l\'Olympia le 29 janvier 2008',
        photos: Array.from({ length: 18 }, (_, i) => require(`../assets/photos/olympia2008/photo_${String(i + 1)}.png`))
    }
];
    