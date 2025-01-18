

export const PhotosList = [
    {
        id: 'Les costumes de scene',
        photos: Array.from({ length: 17 }, (_, i) => require(`../assets/photos/costumes/photos_${String(i + 1)}.jpeg`))
    },
    {
        id: 'Photos de la Tournée des 40 ans Ludres (54) 13 mai 2011',
        photos: Array.from({ length: 75 }, (_, i) => require(`../assets/photos/ludres2011/photos_${String(i + 1)}.jpg`))
    },
    {
        id: 'Tri Yann à Attert (Belgique), le 28 mars 2009',
        photos: Array.from({ length: 26 }, (_, i) => require(`../assets/photos/attert2009/photos_${String(i + 1)}.jpg`))
    },
    {
        id: 'Tri Yann à Ludres (54), le 27 mars 2009',
        photos: Array.from({ length: 20 }, (_, i) => require(`../assets/photos/ludres2009/photos_${String(i + 1)}.jpg`))
    },
    {
        id: 'Tri Yann à l\'Olympia le 29 janvier 2008',
        photos: Array.from({ length: 42 }, (_, i) => require(`../assets/photos/olympia2008/photos_${String(i + 1)}.jpg`))
    }
];
    