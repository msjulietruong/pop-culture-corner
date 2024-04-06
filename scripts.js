/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

// array of object literals with data inside of them is depicted below
const books = [
    {
        id: 1237398,
        title: "One Piece, Volume 1: Romance Dawn (One Piece, #1)",
        author: "Eiichiro Oda",
        rating: 4.48,
        publisher: "VIZ Media LLC",
        format: "Paperback",
        pages: 207,
        publicationYear: 2003,
        originalPublicationYear: 1997,
        imgUrl: "https://m.media-amazon.com/images/I/71y+XnBXm4L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 15839976,
        title: "Red Rising (Red Rising Saga, #1)",
        author: "Pierce Brown",
        rating: 4.27,
        publisher: "Del Rey",
        format: "Hardcover",
        pages: 382,
        publicationYear: 2014,
        originalPublicationYear: 2014,
        imgUrl: "https://m.media-amazon.com/images/I/81tZufOGaZL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 6514,
        title: "The Bell Jar",
        author: "Sylvia Plath",
        rating: 4.05,
        publisher: "Harper Perennial Modern Classics",
        format: "Paperback",
        pages: 294,
        publicationYear: 2006,
        originalPublicationYear: 1963,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/81wUVpREPSL._AC_UF350,350_QL50_.jpg"
    },
    {
        id: 58784475,
        title: "Tomorrow, and Tomorrow, and Tomorrow",
        author: "Gabrielle Zevin",
        rating: 4.18,
        publisher: "Knopf",
        format: "Hardcover",
        pages: 401,
        publicationYear: 2022,
        originalPublicationYear: 2022,
        dateRead: "4/6/24",
        imgUrl: "https://m.media-amazon.com/images/I/91VcwLdcNHL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 53568397,
        title: "The Midnight Library",
        author: "Matt Haig",
        rating: 4,
        publisher: "Viking",
        format: "Kindle Edition",
        pages: 289,
        publicationYear: 2020,
        originalPublicationYear: 2020,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/71ls-I6A5KL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 58655861,
        title: "A Timeless Story: Man's Search for Meaning by V.E.Frankl's Memoir",
        author: "Viktor E. Frankl",
        rating: 4.37,
        publisher: "",
        format: "Kindle Edition",
        pages: 0,
        publicationYear: 2021,
        originalPublicationYear: 1959,
        imgUrl: "https://m.media-amazon.com/images/I/61nTspM+BYL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 32620332,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        rating: 4.42,
        publisher: "Atria Books",
        format: "Hardcover",
        pages: 389,
        publicationYear: 2017,
        originalPublicationYear: 2017,
        dateRead: "3/10/22",
        imgUrl: "https://m.media-amazon.com/images/I/71KcUgYanhL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 84981,
        title: "Tuck Everlasting",
        author: "Natalie Babbitt",
        rating: 3.9,
        publisher: "Farrar, Straus and Giroux (BYR)",
        format: "Paperback",
        pages: 148,
        publicationYear: 1985,
        originalPublicationYear: 1975,
        dateRead: "3/9/22",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/1d/TuckEverlasting.jpg"
    },
    {
        id: 133518,
        title: "The Things They Carried",
        author: "Tim O'Brien",
        rating: 4.14,
        publisher: "Broadway",
        format: "Paperback",
        pages: 246,
        publicationYear: 1998,
        originalPublicationYear: 1990,
        dateRead: "3/9/22",
        imgUrl: "https://m.media-amazon.com/images/I/71boO2LKbCL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 40940121,
        title: "Bridge to Terabithia",
        author: "Katherine Paterson",
        rating: 4.05,
        publisher: "HarperCollins",
        format: "Kindle Edition",
        pages: 190,
        publicationYear: 2009,
        originalPublicationYear: 1977,
        dateRead: "3/9/22",
        imgUrl: "https://m.media-amazon.com/images/I/811n3tkxhPL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 18079719,
        title: "Grasshopper Jungle",
        author: "Andrew  Smith",
        rating: 3.63,
        publisher: "Dutton Books",
        format: "Hardcover",
        pages: 388,
        publicationYear: 2014,
        originalPublicationYear: 2014,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/61wUv6fkRPL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 331920,
        title: "Flipped",
        author: "Wendelin Van Draanen",
        rating: 3.98,
        publisher: "Knopf",
        format: "Paperback",
        pages: 212,
        publicationYear: 2003,
        originalPublicationYear: 2001,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/51Hzxs85pTL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 233818,
        title: "Island of the Blue Dolphins",
        author: "Scott O'Dell",
        rating: 3.87,
        publisher: "Yearling",
        format: "Paperback",
        pages: 184,
        publicationYear: 1971,
        originalPublicationYear: 1960,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/81gSvYPU0xL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 50,
        title: "Hatchet (Brian's Saga, #1)",
        author: "Gary Paulsen",
        rating: 3.78,
        publisher: "Atheneum Books for Young Readers: Richard Jackson Books",
        format: "Hardcover",
        pages: 208,
        publicationYear: 2000,
        originalPublicationYear: 1987,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/81TZunL8kQL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 13079982,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        rating: 3.97,
        publisher: "Simon & Schuster",
        format: "Kindle Edition",
        pages: 194,
        publicationYear: 2011,
        originalPublicationYear: 1953,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/61z7RDG3OIL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 3636,
        title: "The Giver (The Giver, #1)",
        author: "Lois Lowry",
        rating: 4.12,
        publisher: "Ember",
        format: "Paperback",
        pages: 208,
        publicationYear: 2006,
        originalPublicationYear: 1993,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/81cJChEQjSL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 22055262,
        title: "A Darker Shade of Magic (Shades of Magic, #1)",
        author: "V.E.  Schwab",
        rating: 4.06,
        publisher: "Tor",
        format: "Hardcover",
        pages: 400,
        publicationYear: 2015,
        originalPublicationYear: 2015,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/81Zd2d+NMZL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 890,
        title: "Of Mice and Men",
        author: "John Steinbeck",
        rating: 3.88,
        publisher: "Penguin Books",
        format: "Paperback",
        pages: 107,
        publicationYear: 2002,
        originalPublicationYear: 1937,
        dateRead: "3/8/22",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg"
    },
    {
        id: 40961427,
        title: "1984",
        author: "George Orwell",
        rating: 4.19,
        publisher: "Houghton Mifflin Harcourt",
        format: "Kindle Edition",
        pages: 298,
        publicationYear: 2013,
        originalPublicationYear: 1949,
        dateRead: "3/8/22",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZOB8G9WhHl2MjHjktqreA5NENS2vsoCJesh8lcjB_w&s"
    },
    {
        id: 4671,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        rating: 3.93,
        publisher: "Scribner",
        format: "Paperback",
        pages: 180,
        publicationYear: 1925,
        originalPublicationYear: 1925,
        dateRead: "3/8/22",
        imgUrl: "https://m.media-amazon.com/images/I/61OTNorhqVS._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 12000020,
        title: "Aristotle and Dante Discover the Secrets of the Universe (Aristotle and Dante, #1)",
        author: "Benjamin Alire S√°enz",
        rating: 4.31,
        publisher: "Simon & Schuster Books for Young Readers",
        format: "Hardcover",
        pages: 390,
        publicationYear: 2012,
        originalPublicationYear: 2012,
        dateRead: "3/11/19",
        imgUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781665955751/aristotle-and-dante-discover-the-secrets-of-the-universe-9781665955751_hr.jpg"
    },
    {
        id: 32571395,
        title: "One of Us Is Lying (One of Us is Lying, #1)",
        author: "Karen M. McManus",
        rating: 3.94,
        publisher: "Delacorte Press",
        format: "Kindle Edition",
        pages: 360,
        publicationYear: 2017,
        originalPublicationYear: 2017,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/914W0VECGCL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 33385229,
        title: "They Both Die at the End (They Both Die at the End Series, 1)",
        author: "Adam Silvera",
        rating: 3.77,
        publisher: "Quill Tree Books",
        format: "Hardcover",
        pages: 389,
        publicationYear: 2017,
        originalPublicationYear: 2017,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/81D-gdnku+L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 23677341,
        title: "We Are the Ants",
        author: "Shaun David Hutchinson",
        rating: 4.12,
        publisher: "Simon Pulse",
        format: "Hardcover",
        pages: 455,
        publicationYear: 2016,
        originalPublicationYear: 2016,
        dateRead: "3/26/19",
        imgUrl: "https://shaundavidhutchinson.com/wp-content/uploads/2019/11/We-Are-the-Ants-683x1024.jpg"
    },
    {
        id: 37570546,
        title: "Maybe You Should Talk to Someone",
        author: "Lori Gottlieb",
        rating: 4.38,
        publisher: "Harper",
        format: "Hardcover",
        pages: 415,
        publicationYear: 2019,
        originalPublicationYear: 2019,
        dateRead: "1/1/22",
        imgUrl: "https://m.media-amazon.com/images/I/71r0hQEoWIL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 9361589,
        title: "The Night Circus",
        author: "Erin Morgenstern",
        rating: 4.02,
        publisher: "Doubleday",
        format: "Hardcover",
        pages: 506,
        publicationYear: 2011,
        originalPublicationYear: 2011,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/61Pqqc4muHL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 11337018,
        title: "The Night Circus",
        author: "Erin Morgenstern",
        rating: 4.02,
        publisher: "Anchor",
        format: "ebook",
        pages: 387,
        publicationYear: 2011,
        originalPublicationYear: 2011,
        dateRead: "4/17/19",
        imgUrl: "https://m.media-amazon.com/images/I/61Pqqc4muHL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 32075671,
        title: "The Hate U Give (The Hate U Give, #1)",
        author: "Angie Thomas",
        rating: 4.48,
        publisher: "Balzer + Bray",
        format: "Hardcover",
        pages: 454,
        publicationYear: 2017,
        originalPublicationYear: 2017,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/71DZv5+s67L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 929,
        title: "Memoirs of a Geisha",
        author: "Arthur Golden",
        rating: 4.15,
        publisher: "Vintage Books USA",
        format: "Mass Market Paperback",
        pages: 503,
        publicationYear: 2005,
        originalPublicationYear: 1997,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/61zpjN+tjVL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 7624,
        title: "Lord of the Flies",
        author: "William Golding",
        rating: 3.69,
        publisher: "Penguin Books",
        format: "Paperback",
        pages: 182,
        publicationYear: 1999,
        originalPublicationYear: 1954,
        dateRead: "1/1/19",
        imgUrl: "https://m.media-amazon.com/images/I/81WUAoL-wFL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 38447,
        title: "The Handmaid's Tale (The Handmaid's Tale, #1)",
        author: "Margaret Atwood",
        rating: 4.14,
        publisher: "Anchor Books",
        format: "Paperback",
        pages: 311,
        publicationYear: 1998,
        originalPublicationYear: 1985,
        dateRead: "1/1/19",
        imgUrl: "https://m.media-amazon.com/images/I/61su39k8NUL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 22557272,
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        rating: 3.96,
        publisher: "Riverhead Books",
        format: "Hardcover",
        pages: 336,
        publicationYear: 2015,
        originalPublicationYear: 2015,
        dateRead: "1/1/19",
        imgUrl: "https://m.media-amazon.com/images/I/41t6xrKxxPL._SY445_SX342_.jpg"
    },
    {
        id: 7735333,
        title: "Matched (Matched, #1)",
        author: "Ally Condie",
        rating: 3.63,
        publisher: "Dutton Books for Young Readers",
        format: "Hardcover",
        pages: 369,
        publicationYear: 2010,
        originalPublicationYear: 2010,
        dateRead: "3/11/19",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Matched.jpg/220px-Matched.jpg"
    },
    {
        id: 15745753,
        title: "Eleanor & Park",
        author: "Rainbow Rowell",
        rating: 3.94,
        publisher: "St. Martin's Press",
        format: "Hardcover",
        pages: 328,
        publicationYear: 2013,
        originalPublicationYear: 2012,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/71CY50T1sML._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 13335037,
        title: "Divergent (Divergent, #1)",
        author: "Veronica Roth",
        rating: 4.14,
        publisher: "Katherine Tegen Books",
        format: "Paperback",
        pages: 487,
        publicationYear: 2012,
        originalPublicationYear: 2011,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/91oNu+R7EUL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 2767052,
        title: "The Hunger Games (The Hunger Games, #1)",
        author: "Suzanne Collins",
        rating: 4.34,
        publisher: "Scholastic Press",
        format: "Hardcover",
        pages: 374,
        publicationYear: 2008,
        originalPublicationYear: 2008,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/71un2hI4mcL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 41865,
        title: "Twilight (The Twilight Saga, #1)",
        author: "Stephenie Meyer",
        rating: 3.65,
        publisher: "Little, Brown and Company",
        format: "Paperback",
        pages: 498,
        publicationYear: 2006,
        originalPublicationYear: 2005,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/615ZIxEDozL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 13262783,
        title: "Every Day (Every Day, #1)",
        author: "David Levithan",
        rating: 3.9,
        publisher: "Knopf Books for Young Readers",
        format: "Hardcover",
        pages: 322,
        publicationYear: 2012,
        originalPublicationYear: 2012,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/81f3kki57fL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 16085481,
        title: "Crazy Rich Asians (Crazy Rich Asians, #1)",
        author: "Kevin Kwan",
        rating: 3.9,
        publisher: "Doubleday",
        format: "Hardcover",
        pages: 403,
        publicationYear: 2013,
        originalPublicationYear: 2013,
        dateRead: "1/1/19",
        imgUrl: "https://m.media-amazon.com/images/I/71qzZ9tf+AL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 17347634,
        title: "Me Before You (Me Before You, #1)",
        author: "Jojo Moyes",
        rating: 4.26,
        publisher: "Penguin Books",
        format: "Paperback",
        pages: 369,
        publicationYear: 2013,
        originalPublicationYear: 2012,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/61Ax4eSeTDL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 6442769,
        title: "Paper Towns",
        author: "John Green",
        rating: 3.71,
        publisher: "Speak",
        format: "Paperback",
        pages: 305,
        publicationYear: 2009,
        originalPublicationYear: 2008,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/81WBJQUEFsL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 398635,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        rating: 4.29,
        publisher: "Grand Central Publishing",
        format: "Paperback",
        pages: 324,
        publicationYear: 2006,
        originalPublicationYear: 1960,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 5129,
        title: "Harry Potter and the Deathly Hallows (Harry Potter, #7)",
        author: "J.K. Rowling",
        rating: 4.63,
        publisher: "Scholastic Inc.",
        format: "Hardcover",
        pages: 759,
        publicationYear: 2007,
        originalPublicationYear: 2007,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 2429135,
        title: "Harry Potter and the Half-Blood Prince (Harry Potter, #6)",
        author: "J.K. Rowling",
        rating: 4.57,
        publisher: "Scholastic",
        format: "Hardcover",
        pages: 652,
        publicationYear: 2005,
        originalPublicationYear: 2005,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/61sXBXmAWML._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 28187,
        title: "Harry Potter and the Order of the Phoenix (Harry Potter, #5)",
        author: "J.K. Rowling",
        rating: 4.57,
        publisher: "Arthur A. Levine Books",
        format: "Hardcover",
        pages: 870,
        publicationYear: 2003,
        originalPublicationYear: 2003,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/51190vnHUhL._AC_.jpg"
    },
    {
        id: 3625,
        title: "Harry Potter and the Goblet of Fire (Harry Potter, #4)",
        author: "J.K. Rowling",
        rating: 4.57,
        publisher: "Scholastic Inc.",
        format: "Hardcover",
        pages: 734,
        publicationYear: 2000,
        originalPublicationYear: 2000,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/71ykU-RQ0nL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 2,
        title: "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
        author: "J.K. Rowling",
        rating: 4.48,
        publisher: "Scholastic Inc.",
        format: "Paperback",
        pages: 309,
        publicationYear: 1999,
        originalPublicationYear: 1997,
        dateRead: "3/11/19",
        imgUrl: "https://m.media-amazon.com/images/I/71-++hbbERL._AC_UF894,1000_QL80_.jpg"
    }
];
/*
// Function to display books on the webpage
function displayBooks() {
    const bookContainer = document.getElementById("book-container");

    // Loop through each book object in the array
    books.forEach((book) => {

        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const titleElement = document.createElement("h2");
        titleElement.textContent = book.title;

        const authorElement = document.createElement("p");
        authorElement.textContent = "Author: " + book.author;

        const ratingElement = document.createElement("p");
        ratingElement.textContent = "Rating: " + book.rating;

        const publisherElement = document.createElement("p");
        publisherElement.textContent = "Publisher: " + book.publisher;

        const formatElement = document.createElement("p");
        formatElement.textContent = "Format: " + book.format;

        const pagesElement = document.createElement("p");
        pagesElement.textContent = "Pages: " + book.pages;

        // Append elements to the book card
        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(ratingElement);
        bookCard.appendChild(publisherElement);
        bookCard.appendChild(formatElement);
        bookCard.appendChild(pagesElement);

        // Append book card to the container
        bookContainer.appendChild(bookCard);
    });
}

// Call the displayBooks function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", displayBooks);
*/

/*
const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
*/

// This function adds cards the page to display the data in the array of objects (books!)
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < books.length; i++) { //iterates through books array
        const book = books[i];
        const bookImage = document.createElement("img");
        bookImage.src = book.url;
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, book, bookImage); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newBook, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newBook;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newBook + " Cover";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newBook, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
