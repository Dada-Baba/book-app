document.addEventListener("DOMContentLoaded", function() {
  // Simulated data for blog posts
  const blogPosts = [
      {
          title: "Book Review:",
          author: "Bookworm Heaven",
          date: "May 10, 2024",
          content: "Fantasy: \n" +
              "- *The Name of the Wind by Patrick Rothfuss:* A captivating tale of magic and mystery, following the life of a legendary figure, Kvothe, as he recounts his adventures from his humble beginnings to becoming a renowned wizard.\n" +
              "- *Mistborn: The Final Empire by Brandon Sanderson:* In a world where the dark lord has won, a ragtag group of rebels with magical abilities seeks to overthrow his oppressive reign. Full of intrigue, twists, and a unique magic system.\n" +
              "- *The Priory of the Orange Tree by Samantha Shannon:* A sweeping epic fantasy featuring dragons, queens, and ancient prophecies, where the fate of kingdoms hangs in the balance.",
      },
      {
          title: "Book Review:",
          author: "Bookworm Heaven",
          date: "May 10, 2024",
          content: "Science Fiction: \n" +
              "- *Dune by Frank Herbert:* Set in a distant future where noble families vie for control over the desert planet Arrakis, home to the most valuable substance in the universe. A masterpiece of world-building and political intrigue.\n" +
              "- *Neuromancer by William Gibson:* A seminal cyberpunk novel following a washed-up computer hacker hired for one last job that leads him into a labyrinthine conspiracy involving powerful artificial intelligences.\n" +
              "- *The Martian by Andy Weir:* A gripping survival story of an astronaut stranded on Mars, relying on his ingenuity and humor to overcome seemingly insurmountable odds.",
      },
      {
          title: "Book Review:",
          author: "Bookworm Heaven",
          date: "May 10, 2024",
          content: "Mystery/Thriller: \n" +
              "- *Gone Girl by Gillian Flynn:* A dark and twisted tale of a marriage gone wrong, where nothing is as it seems. With unpredictable twists and unreliable narrators, it keeps readers on the edge of their seats.\n" +
              "- *The Girl with the Dragon Tattoo by Stieg Larsson:* A gripping thriller following journalist Mikael Blomkvist and hacker Lisbeth Salander as they investigate a decades-old disappearance, uncovering dark secrets along the way.\n" +
              "- *Big Little Lies by Liane Moriarty:* Set in a wealthy Australian suburb, this novel explores the lives of three women whose seemingly perfect lives unravel in the aftermath of a school trivia night.",
      },
      {
          title: "Book Review:",
          author: "Bookworm Heaven",
          date: "May 10, 2024",
          content: "Romance: \n" +
              "- *Pride and Prejudice by Jane Austen:* A timeless classic following the tumultuous relationship between Elizabeth Bennet and Mr. Darcy, filled with wit, humor, and social commentary.\n" +
              "- *Outlander by Diana Gabaldon:* A sweeping historical romance that blends elements of time travel, adventure, and passion, as nurse Claire Randall finds herself transported from 1945 to 18th-century Scotland.\n" +
              "- *The Notebook by Nicholas Sparks:* A heartwarming love story of Noah and Allie, whose romance transcends social barriers and spans decades, showcasing the enduring power of true love.",
      },
      
        {
  "title": "Book Review:",
  "author": "Bookworm Heaven",
  "date": "May 10, 2024", 
  "content": "Young Adult:  \n" +
    "- *Ace of Spades by Faridah Àbíké-Íyímídé:* A gripping thriller set in an elite private school, where two students find themselves targeted by an anonymous bully known as Aces. Àbíké-Íyímídé deftly explores themes of privilege, identity, and power dynamics, creating a compelling narrative that keeps readers guessing until the very end. With its fast-paced plot and complex characters, this novel is a must-read for fans of YA suspense.\n" +
    "- *A Court of Silver Flames by Sarah J. Maas:* Dive back into the lush and dangerous world of the fae with A Court of Silver Flames, the latest installment in Sarah J. Maas's bestselling series. This novel follows Nesta Archeron as she grapples with the aftermath of war and her own inner demons. As she navigates politics, romance, and dark magic, Nesta must confront her past and embrace her own power. Maas delivers another addictive story filled with romance, intrigue, and epic battles.\n" +
    "- *One Last Stop by Casey McQuiston:* One Last Stop is a heartwarming and hilarious romantic comedy with a magical twist. When August moves to New York City, she doesn't expect to fall for Jane, a mysterious girl trapped in a time loop on the subway. As August and Jane navigate love, friendship, and the complexities of family, they discover that sometimes the most unexpected connections are the ones that change our lives forever. McQuiston's witty dialogue."
},

      {
        title: "Book Review:",
          author: "Bookworm Heaven",
          date: "May 10, 2024", 
          content: "Historical Fiction: \n" +
              "- *The Nightingale by Kristin Hannah:* Set in Nazi-occupied France, this novel follows two sisters who embark on separate paths of resistance during World War II, facing incredible challenges and sacrifices.\n" +
              "- *The Book Thief by Markus Zusak:* Narrated by Death, this poignant story follows a young girl named Liesel as she discovers the power of words and storytelling amidst the horrors of Nazi Germany.\n" +
              "- *All the Light We Cannot See by Anthony Doerr:* A beautifully written novel that intertwines the lives of a blind French girl and a German soldier during World War II, showcasing the resilience of the human spirit in the face of adversity."
      },  
      
  {
    "title": "Book Review:",
    "author": "Bookworm Heaven",
    "date": "May 10, 2024",
    "content": "Non-Fiction: \n" +
               "- *Empire of Pain: The Secret History of the Sackler Dynasty by Patrick Radden Keefe:* Keefe's meticulously researched and compellingly written book delves into the controversial history of the Sackler family, known for their role in the opioid crisis. With a narrative that reads like a gripping thriller, Keefe exposes the dark secrets behind one of the wealthiest and most influential families in the pharmaceutical industry.\n" +
               "- *The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race by Walter Isaacson:* Isaacson's biography offers a fascinating look into the life and work of Jennifer Doudna, the Nobel Prize-winning scientist who co-discovered CRISPR gene editing technology. Through engaging storytelling and meticulous research, Isaacson explores the ethical dilemmas and revolutionary potential of genetic engineering.\n" +
               "- *The Anthropocene Reviewed by John Green:* In this unique blend of memoir and cultural critique, Green reflects on various aspects of human existence, from Canadian geese to Taco Bell sauce packets, with his signature wit and insight. Each essay is a poignant meditation on the human condition, offering readers a fresh perspective on the world around them."
  },
      {
        "title": "Book Review:",
    "author": "Bookworm Heaven",
    "date": "May 10, 2024",
    "content": "Biography: \n" +
               "- *The Boy, the Mole, the Fox and the Horse by Charlie Mackesy:* Mackesy's illustrated masterpiece is not just a book, but a work of art that touches the soul. Through the endearing characters of the boy, the mole, the fox, and the horse, Mackesy imparts timeless wisdom about love, friendship, and the beauty of life. This enchanting tale is a reminder of the power of kindness and empathy in a world often filled with chaos and uncertainty.\n" +
               "- *Untamed by Glennon Doyle:* In this candid and empowering memoir, Doyle shares her journey of self-discovery and liberation from societal expectations. With raw honesty and vulnerability, Doyle encourages readers to embrace their true selves, challenge convention, and live authentically. Untamed is a powerful manifesto for women seeking to break free from the cages of perfectionism and societal norms.\n" +
               "- *Between Two Kingdoms: A Memoir of a Life Interrupted by Suleika Jaouad."
      },
  {
    title: "Top Must-Read Books of 2024 Fantasy",
    author: "Bookworm Haven",
    date: "May 5, 2024",
    content: "Fantasy: \n" +
      "- The Crown of Ages by Sarah J. Maas\n" +
      "- The Dragon's Shadow by Patrick Rothfuss\n" +
      "- The Last Wish by Andrzej Sapkowski\n" +
      "- The Shadow of What Was Lost by James Islington\n" +
      "- The Bone Shard Daughter by Andrea Stewart"
  },
  {
    title: "Top Must-Read Books of 2024 Science Fiction",
    author: "Bookworm Haven",
    date: "May 5, 2024",
    content: "Science Fiction: \n" +
      "- Project Hail Mary by Andy Weir\n" +
      "- A Psalm for the Wild-Built by Becky Chambers\n" +
      "- The Light of the Midnight Stars by Rena Rossner\n" +
      "- The Galaxy, and the Ground Within by Becky Chambers\n" +
      "- The Apollo Murders by Chris Hadfield"
  },
  {
    title: "Top Must-Read Books of 2024 Mystery/Thriller",
    author: "Bookworm Haven",
    date: "May 5, 2024",
    content: "Mystery/Thriller: \n" +
      "- The Maidens by Alex Michaelides\n" +
      "- The Other Black Girl by Zakiya Dalila Harris\n" +
      "- Blacktop Wasteland by S.A. Cosby\n" +
      "- Razorblade Tears by S.A. Cosby\n" +
      "- The Plot by Jean Hanff Korelitz"
  },
  {
    title: "Top Must-Read Books of 2024 Romance",
    author: "Bookworm Haven",
    date: "May 5, 2024",
    content: "Romance: \n" +
      "- People We Meet on Vacation by Emily Henry\n" +
      "- The Love Hypothesis by Ali Hazelwood\n" +
      "- It Happened One Summer by Tessa Bailey\n" +
      "- The Soulmate Equation by Christina Lauren\n" +
      "- A Lot Like Adiós by Alexis Daria"
  },
  {
    title: "Top Must-Read Books of 2024 Historical Fiction",
    author: "Bookworm Haven",
    date: "May 5, 2024",
    content: "Historical Fiction: \n" +
      "- The Four Winds by Kristin Hannah\n" +
      "- The Personal Librarian by Marie Benedict and Victoria Christopher Murray\n" +
      "- The Rose Code by Kate Quinn\n" +
      "- The Paris Architect by Charles Belfoure\n" +
      "- The Gilded Ones by Namina Forna"
  },
  {
    title: "Top Must-Read Books of 2024 Horror",
    author: "Bookworm Haven",
    date: "May 5, 2024",
    content: "Horror: \n" +
      "- Mexican Gothic by Silvia Moreno-Garcia\n" +
      "- The Only Good Indians by Stephen Graham Jones\n" +
      "- The Southern Book Club's Guide to Slaying Vampires by Grady Hendrix\n" +
      "- The Final Girl Support Group by Grady Hendrix\n" +
      "- The Whisper Man by Alex North"
  },
  {
    title: "Top Must-Read Books of 2024 Young Adult",
    author: "Bookworm Haven",
    date: "May 5, 2024",
    content: "Young Adult: \n" +
      "- Ace of Spades by Faridah Àbíké-Íyímídé\n" +
      "- A Court of Silver Flames by Sarah J. Maas\n" +
      "- One Last Stop by Casey McQuiston\n" +
      "- The Gilded Wolves by Roshani Chokshi\n" +
      "- The Project by Courtney Summers"
  },
  {
    title: "Top Must-Read Books of 2024 Non-Fiction",
    author: "Bookworm Haven",
    date: "May 5, 2024",
    content: "Non-Fiction: \n" +
      "- Empire of Pain: The Secret History of the Sackler Dynasty by Patrick Radden Keefe\n" +
      "- The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race by Walter Isaacson\n" +
      "- The Anthropocene Reviewed by John Green\n" +
      "- Crying in H Mart: A Memoir by Michelle Zauner\n" +
      "- Empireland: How Imperialism Has Shaped Modern Britain by Sathnam Sanghera"
  },
  {
    title: "Top Must-Read Books of 2024 Biography",
    author: "Bookworm Haven",
    date: "May 5, 2024",
    content: "Biography: \n" +
      "- The Boy, the Mole, the Fox and the Horse by Charlie Mackesy\n" +
      "- Untamed by Glennon Doyle\n" +
      "- Between Two Kingdoms: A Memoir of a Life Interrupted by Suleika Jaouad\n" +
      "- Broken (in the best possible way) by Jenny Lawson\n" +
      "- The Beauty of Living Twice by Sharon Stone"
  }
];


  const blogSection = document.querySelector(".blog-posts");

  // Function to render blog posts
  function renderBlogPosts() {
    blogSection.innerHTML = "";
    blogPosts.forEach(post => {
      const postElement = document.createElement("article");
      postElement.classList.add("blog-post");
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>By:</strong> ${post.author}</p>
        <p><strong>Date:</strong> ${post.date}</p>
        <p>${post.content}</p>
      `;
      blogSection.appendChild(postElement);
    });
  }

  // Initial rendering of blog posts
  renderBlogPosts();
});
