// // Define arrays of authors, genres, and books
// const authors = [
//     { name: "Stephen King", genres: ["Horror", "Thriller"], books: ["It", "The Shining", "Pet Sematary"] },
//     { name: "J.K. Rowling", genres: ["Fantasy", "Young Adult"], books: ["Harry Potter and the Philosopher's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban"] },
//     { name: "George R.R. Martin", genres: ["Fantasy", "Adventure"], books: ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords"] },
//     { name: "Agatha Christie", genres: ["Mystery", "Detective"], books: ["Murder on the Orient Express", "And Then There Were None", "The Murder of Roger Ackroyd"] },
//     { name: "Haruki Murakami", genres: ["Fiction", "Magical Realism"], books: ["Norwegian Wood", "Kafka on the Shore", "1Q84"] },
//     // Add more authors with their genres and books here...
// ];

// // Function to generate a random index within a range
// function getRandomIndex(max) {
//     return Math.floor(Math.random() * max);
// }

// // Generate 100 boxes with actual authors, genres, and books
// const boxes = [];
// for (let i = 0; i < 100; i++) {
//     const randomAuthor = authors[getRandomIndex(authors.length)];
//     const randomGenre = randomAuthor.genres[getRandomIndex(randomAuthor.genres.length)];
//     const randomBooks = [];
//     while (randomBooks.length < 3) {
//         const randomBook = randomAuthor.books[getRandomIndex(randomAuthor.books.length)];
//         if (!randomBooks.includes(randomBook)) {
//             randomBooks.push(randomBook);
//         }
//     }
//     const box = {
//         author: randomAuthor.name,
//         genre: randomGenre,
//         books: randomBooks
//     };
//     boxes.push(box);
// }

// console.log(boxes);
const authors = [
    { name: "Stephen King", genres: ["Horror", "Thriller"], books: ["It", "The Shining", "Pet Sematary"] },
    { name: "J.K. Rowling", genres: ["Fantasy", "Young Adult"], books: ["Harry Potter and the Philosopher's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban"] },
    { name: "George R.R. Martin", genres: ["Fantasy", "Adventure"], books: ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords"] },
    { name: "Agatha Christie", genres: ["Mystery", "Detective"], books: ["Murder on the Orient Express", "And Then There Were None", "The Murder of Roger Ackroyd"] },
    { name: "Haruki Murakami", genres: ["Fiction", "Magical Realism"], books: ["Norwegian Wood", "Kafka on the Shore", "1Q84"] },
    { name: "Nicholas Sparks", genres: ["Romance"], books: ["The Notebook", "A Walk to Remember", "Dear John"] },
    { name: "Nora Roberts", genres: ["Romance"], books: ["Vision in White", "The Witness", "Irish Thoroughbred"] },
    { name: "Danielle Steel", genres: ["Romance"], books: ["The Gift", "The Promise", "The Ghost"] },
    { name: "Jane Austen", genres: ["Romance"], books: ["Pride and Prejudice", "Sense and Sensibility", "Emma"] },
    { name: "Lisa Kleypas", genres: ["Romance"], books: ["Devil in Winter", "Dreaming of You", "Again the Magic"] },
    { name: "Jodi Picoult", genres: ["Fiction"], books: ["My Sister's Keeper", "The Pact", "Small Great Things"] },
    { name: "John Green", genres: ["Fiction"], books: ["The Fault in Our Stars", "Looking for Alaska", "Paper Towns"] },
    { name: "Celeste Ng", genres: ["Fiction"], books: ["Little Fires Everywhere", "Everything I Never Told You", "The Other Woman"] },
    { name: "Chimamanda Ngozi Adichie", genres: ["Fiction"], books: ["Americanah", "Half of a Yellow Sun", "Purple Hibiscus"] },
    { name: "Jhumpa Lahiri", genres: ["Fiction"], books: ["The Namesake", "Interpreter of Maladies", "Unaccustomed Earth"] },
    { name: "Malala Yousafzai", genres: ["Biography"], books: ["I Am Malala: The Story of the Girl Who Stood Up for Education and Was Shot by the Taliban", "We Are Displaced: My Journey and Stories from Refugee Girls Around the World", "Malala: My Story of Standing Up for Girls' Rights"] },
    { name: "Michelle Obama", genres: ["Biography"], books: ["Becoming", "American Grown: The Story of the White House Kitchen Garden and Gardens Across America", "Becoming: A Guided Journal for Discovering Your Voice"] },
    { name: "Tara Westover", genres: ["Biography"], books: ["Educated: A Memoir", "Educated: An International Bestseller", "Educated: A Detailed Summary About This Book Of Tara Westover"] },
    { name: "Elon Musk", genres: ["Biography"], books: ["Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future", "Elon Musk: How the Billionaire CEO of SpaceX and Tesla is Shaping our Future", "Elon Musk: The Unauthorized Autobiography"] },
    { name: "Oprah Winfrey", genres: ["Biography"], books: ["What I Know For Sure", "The Wisdom of Sundays: Life-Changing Insights from Super Soul Conversations", "The Path Made Clear: Discovering Your Life's Direction and Purpose"] },
    { name: "Tony Robbins", genres: ["Motivational"], books: ["Awaken the Giant Within: How to Take Immediate Control of Your Mental, Emotional, Physical and Financial Destiny!", "Unshakeable: Your Financial Freedom Playbook", "Money: Master the Game: 7 Simple Steps to Financial Freedom"] },
    { name: "Brene Brown", genres: ["Motivational"], books: ["The Gifts of Imperfection: Let Go of Who You Think You're Supposed to Be and Embrace Who You Are", "Daring Greatly: How the Courage to Be Vulnerable Transforms the Way We Live, Love, Parent, and Lead", "Rising Strong: How the Ability to Reset Transforms the Way We Live, Love, Parent, and Lead"] },
    { name: "Dale Carnegie", genres: ["Motivational"], books: ["How to Win Friends and Influence People", "The Quick and Easy Way to Effective Speaking", "How to Stop Worrying and Start Living"] },
    { name: "Robin Sharma", genres: ["Motivational"], books: ["The Monk Who Sold His Ferrari: A Fable About Fulfilling Your Dreams & Reaching Your Destiny", "The 5 AM Club: Own Your Morning. Elevate Your Life.", "Leadership Wisdom from the Monk Who Sold His Ferrari: The 8 Rituals of Visionary Leaders"] },
    { name: "Stephen Covey", genres: ["Motivational"], books: ["The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change", "First Things First", "The 8th Habit: From Effectiveness to Greatness"] },
];

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

const booksContainer = document.getElementById('books-container');

for (let i = 0; i < 100; i++) {
    const randomAuthor = authors[getRandomIndex(authors.length)];
    const randomGenre = randomAuthor.genres[getRandomIndex(randomAuthor.genres.length)];
    const randomBooks = [];
    while (randomBooks.length < 3) {
        const randomBook = randomAuthor.books[getRandomIndex(randomAuthor.books.length)];
        if (!randomBooks.includes(randomBook)) {
            randomBooks.push(randomBook);
        }
    }
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
        <h2>${randomAuthor.name}</h2>
        <p><strong>Genre:</strong> ${randomGenre}</p>
        <p><strong>Books:</strong></p>
        <ul>
            <li>${randomBooks[0]}</li>
            <li>${randomBooks[1]}</li>
            <li>${randomBooks[2]}</li>
        </ul>
    `;
    booksContainer.appendChild(bookElement);
}
