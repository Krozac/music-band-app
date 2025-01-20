

export const PhotosList = [
    {
        id: 'Skopje 1991-03-15',
        photos: Array.from({ length: 30 }, (_, i) => require(`../assets/photos/photo1/photo_${String(i + 1)}.png`))
    },
    {
        id: 'Moscow 1961-03-30',
        photos: Array.from({ length: 30 }, (_, i) => require(`../assets/photos/photo2/photo_${String(i + 1)}.png`))
    },
    {
        id: 'Warsaw 2097-03-26',
        photos: Array.from({ length: 33 }, (_, i) => require(`../assets/photos/photo3/photo_${String(i + 1)}.png`))
    },
    {
        id: 'Jakarta 1928-06-09',
        photos: Array.from({ length: 32 }, (_, i) => require(`../assets/photos/photo4/photo_${String(i + 1)}.png`))
    },
    {
        id: 'Muscat 2029-11-17',
        photos: Array.from({ length: 18 }, (_, i) => require(`../assets/photos/photo5/photo_${String(i + 1)}.png`))
    }
];
    