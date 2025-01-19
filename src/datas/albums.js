
let alimages = Array.from({ length: 35 }, (_, i) => require(`../assets/cover/album_${String(i)}.png`))

export const AlbumList = [
    {
        id: 'tri-yan-an-naoned',
        name: 'Tri Yann an Naoned',
        date: 1972,
        cover: alimages[0],
        description: 'Tri Yann an Naoned est le premier album du groupe, une véritable déclaration d’amour à la culture bretonne, riche en chants traditionnels et arrangements innovants.',
        type:'studio'
    },
    {
        id: 'dix-ans-dix-filles',
        name: 'Dix ans, dix filles',
        date: 1973,
        cover: alimages[1],
        description: '',
        type:'studio'
    },
    {
        id: 'suite-gallaise',
        name: 'Suite gallaise',
        date: 1974,
        cover: alimages[2],
        description: 'Suite gallaise est un album marquant qui mélange des compositions traditionnelles et contemporaines, mettant en valeur la richesse de la musique bretonne.',
        type:'studio'
    },
    {
        id: 'la-decouverte-ou-lignorance',
        name: 'La Découverte ou l’Ignorance',
        date: 1976,
        cover: alimages[3],
        description: "La Découverte ou l’Ignorance est un chef-d'œuvre qui illustre la profondeur de l’histoire bretonne à travers des mélodies puissantes et des paroles évocatrices.",
        type:'studio'
    },
    {
        id: 'urba',
        name: 'Urba',
        date: 1978,
        cover: alimages[4],
        description: "",
        type:'studio'
    },
    {
        id: 'an-heol-a-zo-glaz',
        name: 'An Heol a zo Glaz',
        date: 1981,
        cover: alimages[5],
        description: 'An Heol a zo Glaz est un album qui célèbre la nature et la culture bretonne, avec des compositions originales et des harmonies vocales captivantes.',
        type:'studio'
    },
    {
        id: 'cafe-du-bon-coin',
        name: 'Café du bon coin',
        date: 1983,
        cover: alimages[6],
        description: '',
        type:'studio'
    },
    {
        id: 'le-vaisseau-de-pierre',
        name: 'Le Vaisseau de pierre',
        date: 1988,
        cover: alimages[7],
        description: 'Le Vaisseau de pierre est un album emblématique qui fusionne musique traditionnelle et influences modernes, capturant l’essence de la légende bretonne.',
        type:'studio'
    },
    {
        id: 'belle-et-rebelle',
        name: 'Belle et rebelle',
        date: 1990,
        cover: alimages[8],
        description: '',
        type:'studio'
    },
    {
        id: 'portraits',
        name: 'Portraits',
        date: 1995,
        cover: alimages[9],
        description: '',
        type:'studio'
    },
    {
        id: 'la-veillee-du-troisieme-millenaire',
        name: 'La Veillée du troisième millénaire',
        date: 1998,
        cover: alimages[10],
        description: 'La Veillée du troisième millénaire est une réflexion musicale sur les traditions et l’avenir, avec des morceaux qui invitent à la méditation et à la célébration.',
        type:'studio'
    },
    {
        id: 'le-pelegrin',
        name: 'Le Pélégrin',
        date: 2001,
        cover: alimages[11],
        description: 'Le Pélégrin explore des thèmes spirituels et introspectifs, tout en restant fidèle aux racines celtiques du groupe.',
        type:'studio'
    },  
    {
        id: 'marines',
        name: 'Marines',
        date: 2003,
        cover: alimages[12],
        description: '',
        type:'studio'
    }, 
    {
        id: 'abysses',
        name: 'Abysses',
        date: 2007,
        cover: alimages[13],
        description: '',
        type:'studio'
    },  
    {
        id: 'rummadou',
        name: 'Rummadoù',
        date: 2011,
        cover: alimages[14],
        description: '',
        type:'studio'
    },  
    {
        id: 'la-belle-enchantee',
        name: 'La Belle enchantée',
        date: 2016,
        cover: alimages[15],
        description: '',
        type:'studio'
    },    
    {
        id: 'anniverscene',
        name: 'Anniverscène',
        date: 1985,
        cover: alimages[16],
        description: '',
        type:'live'
    },  
    {
        id: 'tri-yann-en-concert',
        name: 'Tri Yann en concert',
        date: 1996,
        cover: alimages[17],
        description: '',
        type:'live'
    },    
    {
        id: 'la-tradition-symphonique',
        name: 'La Tradition symphonique',
        date: 1998,
        cover: alimages[18],
        description: '',
        type:'live'
    },    
    {
        id: 'trente-ans-au-zenith',
        name: '30 ans au Zénith',
        date: 2001,
        cover: alimages[19],
        description: '',
        type:'live'
    },    
    {
        id: 'la-tradition-symphonique-deux',
        name: 'La Tradition symphonique 2',
        date: 2004,
        cover: alimages[20],
        description: '',
        type:'live'
    },    
    {
        id: 'le-concert-des-quarante-ans',
        name: 'Le concert des 40 ans',
        date: 2012,
        cover: alimages[21],
        description: '',
        type:'live'
    },    
    {
        id: 'cinquante-ans-de-scene',
        name: '50 ans de scène',
        date: 2019,
        cover: alimages[22],
        description: '',
        type:'live'
    },    
    {
        id: 'les-filles-des-forges',
        name: 'Les Filles des forges',
        date: 1976,
        cover: alimages[23],
        description: '',
        type:'compil'
    },    
    {
        id: 'si-mort-a-mors',
        name: 'Si mort a mors',
        date: 1981,
        cover: alimages[24],
        description: '',
        type:'compil'
    },
    {
        id: 'master-serie-vol-un',
        name: 'Master Serie Volume 1',
        date: 1986,
        cover: alimages[25],
        description: '',
        type:'compil'
    },
    {
        id: 'inventaire',
        name: 'Inventaire 1970-1993',
        date: 1994,
        cover: alimages[26],
        description: '',
        type:'compil'
    },
    {
        id: 'inventaire-vol-deux',
        name: 'Inventaire Volume 2',
        date: 1995,
        cover: alimages[27],
        description: '',
        type:'compil'
    },
    {
        id: 'ar-gwellan-gant',
        name: 'Ar Gwellañ gant Tri Yann - Le Meilleur de Tri Yann',
        date: 1996,
        cover: alimages[28],
        description: '',
        type:'compil'
    },
    {
        id: 'trilogie',
        name: 'Trilogie',
        date: 1998,
        cover: alimages[29],
        description: '',
        type:'compil'
    },
    {
        id: 'lessentiel-en-concert',
        name: 'L\'essentiel en concert',
        date: 1999,
        cover: alimages[30],
        description: '',
        type:'compil'
    },
    {
        id: 'cd-story',
        name: 'CD Story - Best of',
        date: 2000,
        cover: alimages[31],
        description: '',
        type:'compil'
    },
    {
        id: 'la-musique-a-une-histoire',
        name: 'La musique a une histoire. Anthologie Tri Yann',
        date: 2003,
        cover: alimages[32],
        description: '',
        type:'compil'
    },
    {
        id: 'best-of',
        name: 'Tri Yann - Best of (1972-1990)',
        date: 2007,
        cover: alimages[33],
        description: '',
        type:'compil'
    },
    {
        id: 'morceaux-de-choix',
        name: 'Morceaux de Choix',
        date: 2007,
        cover: alimages[34],
        description: '',
        type:'compil'
    }

];
