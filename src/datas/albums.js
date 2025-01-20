const alimages = Array.from({ length: 35 }, (_, i) => require(`../assets/cover/album_${String(i)}.png`));

function getRandomYear() {
    return Math.floor(Math.random() * (2025 - 1970 + 1)) + 1970;
}

function getRandomType() {
    const types = ['studio', 'compil', 'live'];
    return types[Math.floor(Math.random() * types.length)];
}

export const AlbumList = alimages.map((cover, index) => ({
    id: `al${index + 1}`,
    name: `Album ${index + 1}`,
    date: getRandomYear(),
    cover: cover,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: getRandomType()
}));
