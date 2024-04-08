// array of object literals with data components depicted below
const books = [
    {
        title: "One Piece, Volume 1: Romance Dawn (One Piece, #1)",
        author: "Oda, Eiichiro",
        rating: 4.48,
        publisher: "VIZ Media LLC",
        format: "Paperback",
        pages: 207,
        publicationYear: 2003,
        originalPublicationYear: 1997,
        imgUrl: "https://m.media-amazon.com/images/I/71y+XnBXm4L._AC_UF1000,1000_QL80_.jpg",
        opinion: 4,
        genres: ["adventure", "fantasy", "action", "manga"]
    },
    {
        title: "Red Rising (Red Rising Saga, #1)",
        author: "Brown, Pierce",
        rating: 4.27,
        publisher: "Del Rey",
        format: "Hardcover",
        pages: 382,
        publicationYear: 2014,
        originalPublicationYear: 2014,
        imgUrl: "https://m.media-amazon.com/images/I/81tZufOGaZL._AC_UF1000,1000_QL80_.jpg",
        opinion: 4.5,
        genres: ["science fiction", "dystopian fiction", "novel"]
    },
    {
        title: "The Bell Jar",
        author: "Plath, Sylvia",
        rating: 4.05,
        publisher: "Harper Perennial Modern Classics",
        format: "Paperback",
        pages: 294,
        publicationYear: 2006,
        originalPublicationYear: 1963,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/81wUVpREPSL._AC_UF350,350_QL50_.jpg",
        opinion: 5,
        genres: ["novel", "autobiography", "psychological fiction"]
    },
    {
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        author: "Zevin, Gabrielle",
        rating: 4.18,
        publisher: "Knopf",
        format: "Hardcover",
        pages: 401,
        publicationYear: 2022,
        originalPublicationYear: 2022,
        dateRead: "4/6/24",
        imgUrl: "https://m.media-amazon.com/images/I/91VcwLdcNHL._AC_UF1000,1000_QL80_.jpg",
        opinion: 1,
        genres: ["coming-of-age", "adventure fiction"]
    },
    {
        title: "The Midnight Library",
        author: "Haig, Matt",
        rating: 4,
        publisher: "Viking",
        format: "Kindle Edition",
        pages: 289,
        publicationYear: 2020,
        originalPublicationYear: 2020,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/71ls-I6A5KL._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["science fiction", "fantasy fiction", "philosophical fiction"]
    },
    {
        title: "A Timeless Story: Man's Search for Meaning by V.E. Frankl's Memoir",
        author: "Frankl, Viktor E.",
        rating: 4.37,
        publisher: "",
        format: "Kindle Edition",
        pages: 0,
        publicationYear: 2021,
        originalPublicationYear: 1959,
        imgUrl: "https://m.media-amazon.com/images/I/61nTspM+BYL._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genre: ["biography", "autobiography", "personal narrative"]
    },
    {
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Reid, Taylor Jenkins",
        rating: 4.42,
        publisher: "Atria Books",
        format: "Hardcover",
        pages: 389,
        publicationYear: 2017,
        originalPublicationYear: 2017,
        dateRead: "3/10/22",
        imgUrl: "https://m.media-amazon.com/images/I/71KcUgYanhL._AC_UF1000,1000_QL80_.jpg",
        opinion: 3,
        genres: ["novel", "romance novel", "historical fiction"]
    },
    {
        title: "Grasshopper Jungle",
        author: "Smith, Andrew",
        rating: 3.63,
        publisher: "Dutton Books",
        format: "Hardcover",
        pages: 388,
        publicationYear: 2014,
        originalPublicationYear: 2014,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/61wUv6fkRPL._AC_UF1000,1000_QL80_.jpg",
        opinion: 3,
        genres: ["humor", "novel", "science fiction"]
    },
    {
        title: "Flipped",
        author: "Van Draanen, Wendelin",
        rating: 3.98,
        publisher: "Knopf",
        format: "Paperback",
        pages: 212,
        publicationYear: 2003,
        originalPublicationYear: 2001,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/51Hzxs85pTL._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["young adult literature", "romance novel"]
    },
    {
        title: "Hatchet (Brian's Saga, #1)",
        author: "Paulsen, Gary",
        rating: 3.78,
        publisher: "Atheneum Books for Young Readers: Richard Jackson Books",
        format: "Hardcover",
        pages: 208,
        publicationYear: 2000,
        originalPublicationYear: 1987,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/81TZunL8kQL._AC_UF1000,1000_QL80_.jpg",
        opinion: 4,
        genres: ["novel", "young adult literature", "adventure fiction"]
    },
    {
        title: "Fahrenheit 451",
        author: "Bradbury, Ray",
        rating: 3.97,
        publisher: "Simon & Schuster",
        format: "Kindle Edition",
        pages: 194,
        publicationYear: 2011,
        originalPublicationYear: 1953,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/61z7RDG3OIL._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["novel", "dystopian fiction", "political fiction"]
    },
    {
        title: "The Giver (The Giver, #1)",
        author: "Lowry, Lois",
        rating: 4.12,
        publisher: "Ember",
        format: "Paperback",
        pages: 208,
        publicationYear: 2006,
        originalPublicationYear: 1993,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/81cJChEQjSL._AC_UF1000,1000_QL80_.jpg",
        opinion: 3.5,
        genres: ["novel", "science fiction", "dystopian fiction"]
    },
    {
        title: "A Darker Shade of Magic (Shades of Magic, #1)",
        author: "Schwab, V.E.",
        rating: 4.06,
        publisher: "Tor",
        format: "Hardcover",
        pages: 400,
        publicationYear: 2015,
        originalPublicationYear: 2015,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/81Zd2d+NMZL._AC_UF1000,1000_QL80_.jpg",
        opinion: 4,
        genres: ["fantasy", "science fiction", "historical fantasy"]
    },
    {
        title: "Of Mice and Men",
        author: "Steinbeck, John",
        rating: 3.88,
        publisher: "Penguin Books",
        format: "Paperback",
        pages: 107,
        publicationYear: 2002,
        originalPublicationYear: 1937,
        dateRead: "3/8/22",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg",
        opinion: 5,
        genres: ["novella", "fiction", "tragedy"]
    },
    {
        title: "1984",
        author: "Orwell, George",
        rating: 4.19,
        publisher: "Houghton Mifflin Harcourt",
        format: "Kindle Edition",
        pages: 298,
        publicationYear: 2013,
        originalPublicationYear: 1949,
        dateRead: "3/8/22",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZOB8G9WhHl2MjHjktqreA5NENS2vsoCJesh8lcjB_w&s",
        opinion: 3,
        genres: ["dystopian fiction", "political fiction", "science fiction"]
    },
    {
        title: "The Great Gatsby",
        author: "Fitzgerald, F. Scott",
        rating: 3.93,
        publisher: "Scribner",
        format: "Paperback",
        pages: 180,
        publicationYear: 1925,
        originalPublicationYear: 1925,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/61OTNorhqVS._AC_UF894,1000_QL80_.jpg",
        opinion: 3,
        genres: ["novel", "tragedy", "literary fiction"]
    },
    {
        title: "Aristotle and Dante Discover the Secrets of the Universe (Aristotle and Dante, #1)",
        author: "Sáenz, Benjamin Alire",
        rating: 4.31,
        publisher: "Simon & Schuster Books for Young Readers",
        format: "Hardcover",
        pages: 390,
        publicationYear: 2012,
        originalPublicationYear: 2012,
        dateRead: "3/11/19",
        imgUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781665955751/aristotle-and-dante-discover-the-secrets-of-the-universe-9781665955751_hr.jpg",
        opinion: 3,
        genres: ["novel", "young adult literature", "Bildungsroman"]
    },
    {
        title: "One of Us Is Lying (One of Us is Lying, #1)",
        author: "McManus, Karen M.",
        rating: 3.94,
        publisher: "Delacorte Press",
        format: "Kindle Edition",
        pages: 360,
        publicationYear: 2017,
        originalPublicationYear: 2017,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/914W0VECGCL._AC_UF1000,1000_QL80_.jpg",
        opinion: 3,
        genres: ["young adult literature", "mystery"]
    },
    {
        title: "They Both Die at the End (They Both Die at the End Series, 1)",
        author: "Silvera, Adam",
        rating: 3.77,
        publisher: "Quill Tree Books",
        format: "Hardcover",
        pages: 389,
        publicationYear: 2017,
        originalPublicationYear: 2017,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/81D-gdnku+L._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["young adult literature", "LGBT literature"]
    },
    {
        title: "We Are the Ants",
        author: "Hutchinson, Shaun David",
        rating: 4.12,
        publisher: "Simon Pulse",
        format: "Hardcover",
        pages: 455,
        publicationYear: 2016,
        originalPublicationYear: 2016,
        dateRead: "3/26/19",
        imgUrl: "https://m.media-amazon.com/images/I/71KJo78F-fL._SL1500_.jpg",
        opinion: 5,
        genres: ["young adult literature", "science fiction"]
    },
    {
        title: "Maybe You Should Talk to Someone",
        author: "Gottlieb, Lori",
        rating: 4.38,
        publisher: "Harper",
        format: "Hardcover",
        pages: 415,
        publicationYear: 2019,
        originalPublicationYear: 2019,
        dateRead: "1/1/22",
        imgUrl: "https://m.media-amazon.com/images/I/71r0hQEoWIL._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["memoir", "autobiography", "biography"]
    },
    {
        title: "The Night Circus",
        author: "Morgenstern, Erin",
        rating: 4.02,
        publisher: "Doubleday",
        format: "Hardcover",
        pages: 506,
        publicationYear: 2011,
        originalPublicationYear: 2011,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/61Pqqc4muHL._AC_UF1000,1000_QL80_.jpg",
        opinion: 1,
        genres: ["novel", "fantasy", "romance"]
    },
    {
        title: "The Hate U Give (The Hate U Give, #1)",
        author: "Thomas, Angie",
        rating: 4.48,
        publisher: "Balzer + Bray",
        format: "Hardcover",
        pages: 454,
        publicationYear: 2017,
        originalPublicationYear: 2017,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/71DZv5+s67L._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["novel", "urban fiction"]
    },
    {
        title: "Lord of the Flies",
        author: "Golding, William",
        rating: 3.69,
        publisher: "Penguin Books",
        format: "Paperback",
        pages: 182,
        publicationYear: 1999,
        originalPublicationYear: 1954,
        dateRead: "1/1/19",
        imgUrl: "https://m.media-amazon.com/images/I/81WUAoL-wFL._AC_UF1000,1000_QL80_.jpg",
        opinion: 4.5,
        genres: ["novel", "allegory", "young adult literature"]
    },
    {
        title: "The Handmaid's Tale (The Handmaid's Tale, #1)",
        author: "Atwood, Margaret",
        rating: 4.14,
        publisher: "Anchor Books",
        format: "Paperback",
        pages: 311,
        publicationYear: 1998,
        originalPublicationYear: 1985,
        dateRead: "1/1/19",
        imgUrl: "https://m.media-amazon.com/images/I/61su39k8NUL._AC_UF1000,1000_QL80_.jpg",
        opinion: 4.5,
        genres: ["novel", "dystopian fiction", "feminist science fiction"]
    },
    {
        title: "The Girl on the Train",
        author: "Hawkins, Paul",
        rating: 3.96,
        publisher: "Riverhead Books",
        format: "Hardcover",
        pages: 336,
        publicationYear: 2015,
        originalPublicationYear: 2015,
        dateRead: "1/1/19",
        imgUrl: "https://m.media-amazon.com/images/I/41t6xrKxxPL._SY445_SX342_.jpg",
        opinion: 5,
        genres: ["novel", "thriller", "mystery"]
    },
    {
        title: "Eleanor & Park",
        author: "Rowell, Rainbow",
        rating: 3.94,
        publisher: "St. Martin's Press",
        format: "Hardcover",
        pages: 328,
        publicationYear: 2013,
        originalPublicationYear: 2012,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/71CY50T1sML._AC_UF1000,1000_QL80_.jpg",
        opinion: 1,
        genres: ["novel", "fiction", "romance"]
    },
    {
        title: "The Hunger Games (The Hunger Games, #1)",
        author: "Collins, Suzanne",
        rating: 4.34,
        publisher: "Scholastic Press",
        format: "Hardcover",
        pages: 374,
        publicationYear: 2008,
        originalPublicationYear: 2008,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/71un2hI4mcL._AC_UF1000,1000_QL80_.jpg",
        opinion: 3,
        genres:["novel", "young adult literature", "dystopian fiction"]
    },
    {
        title: "Every Day (Every Day, #1)",
        author: "Leviathan, David",
        rating: 3.9,
        publisher: "Knopf Books for Young Readers",
        format: "Hardcover",
        pages: 322,
        publicationYear: 2012,
        originalPublicationYear: 2012,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/81f3kki57fL._AC_UF1000,1000_QL80_.jpg",
        opinion: 3,
        genres: ["novel", "young adult literature", "romance novel"]
    },
    {
        title: "Me Before You (Me Before You, #1)",
        author: "Moyes, Jojo",
        rating: 4.26,
        publisher: "Penguin Books",
        format: "Paperback",
        pages: 369,
        publicationYear: 2013,
        originalPublicationYear: 2012,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/61Ax4eSeTDL._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["romance novel", "fiction", "contemporary romance"]
    },
    {
        title: "Chainsaw Man, Vol. 1: Dog and Chainsaw",
        author: "Fujimoto, Tatsuki",
        rating: 4.39,
        publisher: "VIZ Media LLC",
        format: "Kindle Edition",
        pages: 192,
        publicationYear: 2020,
        originalPublicationYear: 2019,
        dateRead: "",
        imgUrl: "https://m.media-amazon.com/images/I/81s8xJUzWGL._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["shonen", "dark fantasy", "manga"]
    },
    {
        title: "Mob Psycho 100 Volume 1",
        author: "ONE",
        rating: 4.22,
        publisher: "Dark Horse Comics",
        format: "Kindle Edition",
        pages: 192,
        publicationYear: 2012,
        originalPublicationYear: 2012,
        dateRead: "",
        imgUrl: "https://m.media-amazon.com/images/I/91nunbvU04L._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["action", "comedy", "supernatural", "manga"]
    },
    {
        title: "Goodnight PunPun Omnibus, Vol. 1 (Goodnight Punpun, Omnibus #1)",
        author: "Asano, Inio",
        rating: 4.27,
        publisher: "VIZ Media LLC",
        format: "Paperback",
        pages: 448,
        publicationYear: 2016,
        originalPublicationYear: 2016,
        dateRead: "",
        imgUrl: "https://m.media-amazon.com/images/I/917IJDfk36L._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["seinen", "drama", "manga"]
    },
    {
        title: "I'm Glad My Mom Died",
        author: "McCurdy, Jennette",
        rating: 4.47,
        publisher: "Simon & Schuster",
        format: "Hardcover",
        pages: 304,
        publicationYear: 2022,
        originalPublicationYear: 2022,
        dateRead: "",
        imgUrl: "https://m.media-amazon.com/images/I/71x3UZ18tmL._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["memoir", "autobiography", "biography"]
    },
    {
        title: "Once Upon a Marigold (Upon a Marigold #1)",
        author: "Ferris, Jean",
        rating: 4.01,
        publisher: "Harcourt, Inc",
        format: "Paperback",
        pages: 271,
        publicationYear: 2004,
        originalPublicationYear: 2002,
        dateRead: "",
        imgUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1429468490i/157055.jpg",
        opinion: 4,
        genres: ["fiction", "humor", "fantasy"]
    },
    {
        title: "Perks of Being a Wallflower",
        author: "Chbosky, Stephen",
        rating: 4.23,
        publisher: "MTV Books/Pocket Books",
        format: "Paperback",
        pages: 213,
        publicationYear: 1999,
        originalPublicationYear: 1999,
        dateRead: "",
        imgUrl: "https://m.media-amazon.com/images/I/81I7vXqjEML._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["Bildungsroman", "young adult literature", "epistolary novel"]
    },
    {
        title: "Sold",
        author: "McCormick, Patricia",
        rating: 4.23,
        publisher: "Little Brown Books for Young Readers",
        format: "Hardcover",
        pages: 213,
        publicationYear: 2006,
        originalPublicationYear: 2006,
        dateRead: "",
        imgUrl: "https://m.media-amazon.com/images/I/61NiFw4L1YL._AC_UF1000,1000_QL80_.jpg",
        opinion: 5,
        genres: ["novel", "fiction"]
    }
];

export default books;

