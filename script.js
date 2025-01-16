const bookList = [
    { 
        id: 1, 
        title: 'All the Light We Cannot See', 
        category: 'historic-fiction', 
        image: 'images/book1.jpg',
        author: 'Anthony Doerr',
        description: 'Set during World War II, this Pulitzer Prize-winning novel follows the lives of a blind French girl and a German boy whose paths collide in occupied France as they navigate the devastation and hope of wartime.',
        price: 'Rs.640',
        reviews: ['A beautifully written masterpiece.', 'Captivating and heart-wrenching.']
    },
    { 
        id: 2, 
        title: 'Pachinko', 
        category: 'historic-fiction', 
        image: 'images/book2.jpg',
        author: 'Min Jin Lee',
        description: 'Spanning generations, "Pachinko" tells the story of a Korean family living in Japan, exploring themes of identity, discrimination, and resilience against the backdrop of the 20th century.',
        price: 'Rs.690',
        reviews: ['Epic and deeply moving.', 'A profound saga of love and sacrifice.']
    },
    { 
        id: 3, 
        title: 'The Nightingale', 
        category: 'historic-fiction', 
        image: 'images/book3.jpg',
        author: 'Kristin Hannah',
        description: 'Set in occupied France during World War II, this novel follows two sisters, each with their own courage and strength, as they resist the Nazi occupation and find themselves transformed by the war.',
        price: 'Rs.890',
        reviews: ['Heartbreaking and inspiring.', 'An unforgettable tale of bravery.']
    },
    {
        id: 4,
        title: 'The Book Thief',
        category: 'historic-fiction',
        image: 'images/book4.jpg',
        author: 'Markus Zusak',
        description: 'Narrated by Death, "The Book Thief" tells the story of Liesel Meminger, a young girl in Nazi Germany who finds solace and courage through stolen books and learns the power of words in a time of darkness.',
        price: 'Rs.550',
        reviews: ['Powerful and poetic.', 'A must-read for all ages.']
    },
    {
        id: 5,
        title: 'The Four Winds',
        category: 'historic-fiction',
        image: 'images/book5.jpg',
        author: 'Kristin Hannah',
        description: 'Set during the Great Depression in Texas, "The Four Winds" follows a woman named Elsa as she faces hardship and drought, striving to protect her family and find hope amidst economic devastation.',
        price: 'Rs.590',
        reviews: ['Gripping and emotional.', 'Hannah delivers another masterpiece.']
    },
    {
        id: 6,
        title: 'Homegoing',
        category: 'historic-fiction',
        image: 'images/book6.jpg',
        author: 'Yaa Gyasi',
        description: 'Spanning three hundred years and multiple generations, "Homegoing" traces the descendants of two half-sisters in Ghana and their divergent paths through slavery, colonialism, and the legacy of trauma.',
        price: 'Rs.700',
        reviews: ['An incredible debut.', 'Gyasi\'s storytelling is breathtaking.']
    },
    {
        id: 7,
        title: 'Chinua Achebe',
        category: 'historic-fiction',
        image: 'images/book7.jpg',
        author: 'Chinua Achebe',
        description: 'A collection of novels including "Things Fall Apart," "No Longer at Ease," and "Arrow of God," which chronicle the impact of colonialism and traditional African culture in Nigeria, through the eyes of various protagonists.',
        price: 'Rs.690',
        reviews: ['Insightful and thought-provoking.', 'Achebe\'s works are essential reading.']
    },
    {
        id: 8,
        title: 'Outlander',
        category: 'historic-fiction',
        image: 'images/book8.jpg',
        author: 'Diana Gabaldon',
        description: 'Claire Randall, a former World War II combat nurse, is transported back in time to 18th-century Scotland where she becomes entangled in Jacobite rebellions, romance, and political intrigue.',
        price: 'Rs.540',
        reviews: ['Addictive and thrilling.', 'Gabaldon crafts a mesmerizing tale.']
    },
    {
        id: 9,
        title: 'The Kite Runner',
        category: 'historic-fiction',
        image: 'images/book9.jpg',
        author: 'Khaled Hosseini',
        description: 'Set against the backdrop of tumultuous events in Afghanistan, "The Kite Runner" follows Amir, a young boy from Kabul, and his journey of redemption and forgiveness amidst betrayal and redemption.',
        price: 'Rs.710',
        reviews: ['Emotionally resonant.', 'Hosseini\'s storytelling is powerful.']
    },
    {
        id: 10,
        title: 'Sparrow',
        category: 'historic-fiction',
        image: 'images/book10.jpg',
        author: 'James Hynes',
        description: 'In this alternate history novel, a linguist discovers a mysterious journal that reveals a forgotten episode of American espionage during World War II, leading him into a web of conspiracy and danger.',
        price: 'Rs.600',
        reviews: ['Intriguing and suspenseful.', 'Hynes blends history and mystery seamlessly.']
    },
    {
        id: 11,
        title: 'The Final Empire',
        category: 'fantasy',
        image: 'images/book11.jpg',
        author: 'Brandon Sanderson',
        description: 'In a world where the immortal Lord Ruler reigns with absolute power, a group of rebels seeks to overthrow his tyrannical rule using forbidden magic.',
        price: 'Rs.640',
        reviews: ['Absolutely captivating!', 'Sanderson\'s best work yet.']
    },
    {
        id: 12,
        title: 'The Magician Guild',
        category: 'fantasy',
        image: 'images/book12.jpg',
        author: 'Trudi Canavan',
        description: 'Follow the journey of a young woman discovering her magical abilities in a world divided by class and power.',
        price: 'Rs.550',
        reviews: ['A captivating tale!', 'Highly recommended.']
    },
    {
        id: 13,
        title: 'The Name of the Wind',
        category: 'fantasy',
        image: 'images/book13.jpg',
        author: 'Patrick Rothfuss',
        description: 'Join Kvothe, a magically gifted young man, as he recounts his life and adventures in a world of mystery and danger.',
        price: 'Rs.680',
        reviews: ['Absolutely brilliant!', 'Couldn\'t put it down.']
    },
    {
        id: 14,
        title: 'Mistborn: The Final Empire',
        category: 'fantasy',
        image: 'images/book14.jpg',
        author: 'Brandon Sanderson',
        description: 'Explore a world where the oppressed seek to overthrow a tyrant using the power of Allomancy, a magic of metals.',
        price: 'Rs.620',
        reviews: ['Incredible world-building!', 'Action-packed and thrilling.']
    },
    {
        id: 15,
        title: 'The Hobbit',
        category: 'fantasy',
        image: 'images/book15.jpg',
        author: 'J.R.R. Tolkien',
        description: 'Join Bilbo Baggins on an unexpected journey full of adventures and encounters with dwarves, dragons, and more.',
        price: 'Rs.500',
        reviews: ['A timeless classic.', 'Perfect for all ages.']
    },
    {
        id: 16,
        title: 'American Gods',
        category: 'fantasy',
        image: 'images/book16.jpg',
        author: 'Neil Gaiman',
        description: 'Discover a modern world where ancient gods struggle to survive as new deities gain power, blending myth and reality.',
        price: 'Rs.600',
        reviews: ['Hauntingly beautiful.', 'Gaiman at his best.']
    },
    {
        id: 17,
        title: 'Harry Potter and the Philosopher\'s Stone',
        category: 'fantasy',
        image: 'images/book17.jpg',
        author: 'J.K. Rowling',
        description: 'Experience the magical beginnings of Harry Potter\'s journey at Hogwarts School of Witchcraft and Wizardry.',
        price: 'Rs.550',
        reviews: ['Magical and enchanting!', 'A must-read for fantasy lovers.']
    },
    {
        id: 18,
        title: 'The Lies of Locke Lamora',
        category: 'fantasy',
        image: 'images/book18.jpg',
        author: 'Scott Lynch',
        description: 'Follow the exploits of Locke Lamora, a skilled thief, in a city where intricate plots and dangerous adversaries abound.',
        price: 'Rs.590',
        reviews: ['Masterfully written.', 'Thrilling and witty.']
    },
    {
        id: 19,
        title: 'Good Omens',
        category: 'fantasy',
        image: 'images/book19.jpg',
        author: 'Neil Gaiman, Terry Pratchett',
        description: 'Witness an unlikely duo—angel and demon—as they team up to prevent the apocalypse, filled with humor and wit.',
        price: 'Rs.630',
        reviews: ['Hilariously clever.', 'A delightfully unique story.']
    },
    {
        id: 20,
        title: 'The Way of Kings',
        category: 'fantasy',
        image: 'images/book20.jpg',
        author: 'Brandon Sanderson',
        description: 'Enter the world of Roshar where powerful knights battle ancient enemies amidst political intrigue and stormy skies.',
        price: 'Rs.670',
        reviews: ['Epic and sprawling.', 'Sanderson does it again!']
    },    
    {
        id: 21,
        title: 'Dune',
        category: 'science-fiction',
        image: 'images/book21.jpg',
        author: 'Frank Herbert',
        description: 'Explore a desert planet where noble houses vie for control of the most valuable substance in the universe, spice melange.',
        price: 'Rs.620',
        reviews: ['A masterpiece of science fiction.', 'Rich and immersive world-building.']
    },
    {
        id: 22,
        title: 'Neuromancer',
        category: 'science-fiction',
        image: 'images/book22.jpg',
        author: 'William Gibson',
        description: 'Follow Case, a washed-up computer hacker, as he navigates a cyberpunk world of corporate intrigue and artificial intelligence.',
        price: 'Rs.580',
        reviews: ['Defines cyberpunk.', 'Influential and visionary.']
    },
    {
        id: 23,
        title: 'Foundation',
        category: 'science-fiction',
        image: 'images/book23.jpg',
        author: 'Isaac Asimov',
        description: 'Witness the fall of a galactic empire and the efforts of a mathematician to preserve knowledge and guide humanity\'s future.',
        price: 'Rs.600',
        reviews: ['Timeless classic.', 'Thought-provoking and epic.']
    },
    {
        id: 24,
        title: 'Snow Crash',
        category: 'science-fiction',
        image: 'images/book24.jpg',
        author: 'Neal Stephenson',
        description: 'Enter a near-future America where a computer virus threatens both the virtual and real worlds, and a hacker races to stop it.',
        price: 'Rs.590',
        reviews: ['Mind-bending.', 'Fast-paced and exhilarating.']
    },
    {
        id: 25,
        title: 'The Left Hand of Darkness',
        category: 'science-fiction',
        image: 'images/book25.jpg',
        author: 'Ursula K. Le Guin',
        description: 'Journey to a planet where the inhabitants can change gender, and witness the complexities of human relationships and politics.',
        price: 'Rs.630',
        reviews: ['Groundbreaking.', 'Profound and moving.']
    },
    {
        id: 26,
        title: 'Hyperion',
        category: 'science-fiction',
        image: 'images/book26.jpg',
        author: 'Dan Simmons',
        description: 'Embark on a pilgrimage with seven travelers who share their stories, revealing a universe on the brink of cataclysmic change.',
        price: 'Rs.650',
        reviews: ['Epic in scope.', 'Gripping and unforgettable.']
    },
    {
        id: 27,
        title: 'The Expanse: Leviathan Wakes',
        category: 'science-fiction',
        image: 'images/book27.jpg',
        author: 'James S.A. Corey',
        description: 'Witness the discovery of a mysterious alien substance and the political tensions that threaten to engulf humanity in a solar system-wide conflict.',
        price: 'Rs.660',
        reviews: ['Riveting space opera.', 'Compelling characters and plot.']
    },
    {
        id: 28,
        title: 'Altered Carbon',
        category: 'science-fiction',
        image: 'images/book28.jpg',
        author: 'Richard K. Morgan',
        description: 'In a future where consciousness can be transferred between bodies, an ex-soldier is hired to investigate a wealthy man\'s suspicious death.',
        price: 'Rs.640',
        reviews: ['Dark and gritty.', 'A thrilling noir tale.']
    },
    {
        id: 29,
        title: 'Ender\'s Game',
        category: 'science-fiction',
        image: 'images/book29.jpg',
        author: 'Orson Scott Card',
        description: 'Follow Ender Wiggin, a gifted child recruited into Earth\'s elite military training program, as he prepares to face an alien threat.',
        price: 'Rs.570',
        reviews: ['A classic of military science fiction.', 'Thought-provoking and intense.']
    },
    {
        id: 30,
        title: 'The Three-Body Problem',
        category: 'science-fiction',
        image: 'images/book30.jpg',
        author: 'Liu Cixin',
        description: 'Encounter a mind-bending first contact scenario as humanity grapples with the implications of contact with an advanced alien civilization.',
        price: 'Rs.680',
        reviews: ['Mind-expanding.', 'A must-read for sci-fi fans.']
    },
    {
        id: 31,
        title: 'It',
        category: 'horror',
        image: 'images/book31.jpg',
        author: 'Stephen King',
        description: 'Follow the terrifying tale of Pennywise the Clown, who awakens every 27 years to prey on the children of Derry, Maine.',
        price: 'Rs.580',
        reviews: ['Horror masterpiece!', 'Keeps you up at night.']
    },
    {
        id: 32,
        title: 'The Shining',
        category: 'horror',
        image: 'images/book32.jpg',
        author: 'Stephen King',
        description: 'Experience the chilling isolation of the Overlook Hotel as Jack Torrance descends into madness, influenced by dark forces.',
        price: 'Rs.570',
        reviews: ['Unsettling and brilliant.', 'A classic horror novel.']
    },
    {
        id: 33,
        title: 'Bird Box',
        category: 'horror',
        image: 'images/book33.jpg',
        author: 'Josh Malerman',
        description: 'Survive in a world where seeing deadly creatures drives people to madness and violence, forcing survivors to live blindfolded.',
        price: 'Rs.590',
        reviews: ['Terrifyingly suspenseful!', 'Couldn\'t put it down.']
    },
    {
        id: 34,
        title: 'Dracula',
        category: 'horror',
        image: 'images/book34.jpg',
        author: 'Bram Stoker',
        description: 'Enter the world of the infamous Count Dracula as he seeks to spread his vampiric influence across London, pursued by Van Helsing.',
        price: 'Rs.550',
        reviews: ['A gothic masterpiece.', 'Captivating and eerie.']
    },
    {
        id: 35,
        title: 'Pet Sematary',
        category: 'horror',
        image: 'images/book35.jpg',
        author: 'Stephen King',
        description: 'Discover the horrifying consequences of burying loved ones in a cursed burial ground that brings the dead back to life, but not as they were.',
        price: 'Rs.560',
        reviews: ['Disturbingly brilliant.', 'King at his darkest.']
    },
    {
        id: 36,
        title: 'House of Leaves',
        category: 'horror',
        image: 'images/book36.jpg',
        author: 'Mark Z. Danielewski',
        description: 'Dive into a labyrinthine tale of a family haunted by a strange house that defies the laws of physics, with a terrifying darkness lurking within.',
        price: 'Rs.600',
        reviews: ['Mind-bending horror.', 'Unique and unsettling.']
    },
    {
        id: 37,
        title: 'The Haunting of Hill House',
        category: 'horror',
        image: 'images/book37.jpg',
        author: 'Shirley Jackson',
        description: 'Experience the chilling atmosphere of Hill House as a group of individuals confronts its malevolent supernatural presence, revealing their own fears.',
        price: 'Rs.540',
        reviews: ['Elegantly terrifying.', 'A classic ghost story.']
    },
    {
        id: 38,
        title: 'The Girl with All the Gifts',
        category: 'horror',
        image: 'images/book38.jpg',
        author: 'M.R. Carey',
        description: 'Witness a post-apocalyptic world where a fungal infection turns humans into mindless zombies, except for one girl who holds the key to humanity\'s survival.',
        price: 'Rs.580',
        reviews: ['Gripping and emotional.', 'A fresh take on the zombie genre.']
    },
    {
        id: 39,
        title: 'Frankenstein',
        category: 'horror',
        image: 'images/book39.jpg',
        author: 'Mary Shelley',
        description: 'Explore the tragic tale of Victor Frankenstein and his creation, a grotesque monster rejected by society, leading to devastating consequences.',
        price: 'Rs.530',
        reviews: ['A timeless classic.', 'Provocative and haunting.']
    },
    {
        id: 40,
        title: 'The Exorcist',
        category: 'horror',
        image: 'images/book40.jpg',
        author: 'William Peter Blatty',
        description: 'Witness the battle between good and evil as a young girl is possessed by a malevolent entity, leading to a desperate fight for her soul.',
        price: 'Rs.570',
        reviews: ['Terrifying and intense.', 'A landmark in horror literature.']
    },
    {
        id: 41,
        title: 'The Girl with the Dragon Tattoo',
        category: 'mystery',
        image: 'images/book41.jpg',
        author: 'Stieg Larsson',
        description: 'Investigate the disappearance of Harriet Vanger with journalist Mikael Blomkvist and unconventional hacker Lisbeth Salander in a chilling mystery.',
        price: 'Rs.590',
        reviews: ['Intensely gripping.', 'A modern classic.']
    },
    {
        id: 42,
        title: 'Gone Girl',
        category: 'mystery',
        image: 'images/book42.jpg',
        author: 'Gillian Flynn',
        description: 'Dive into a twisted tale of marriage, deception, and suspense as Nick Dunne becomes the prime suspect in his wife Amy\'s disappearance.',
        price: 'Rs.600',
        reviews: ['Mind-bending.', 'Keeps you guessing until the end.']
    },
    {
        id: 43,
        title: 'The Da Vinci Code',
        category: 'mystery',
        image: 'images/book43.jpg',
        author: 'Dan Brown',
        description: 'Join symbologist Robert Langdon as he deciphers cryptic clues and unravels a conspiracy that could shake the foundations of history.',
        price: 'Rs.580',
        reviews: ['Riveting!', 'A thrill ride of secrets and puzzles.']
    },
    {
        id: 44,
        title: 'Big Little Lies',
        category: 'mystery',
        image: 'images/book44.jpg',
        author: 'Liane Moriarty',
        description: 'Explore the lives of three women in a tranquil seaside town, where secrets and lies culminate in a shocking murder mystery.',
        price: 'Rs.570',
        reviews: ['Compulsively readable.', 'Brilliantly plotted.']
    },
    {
        id: 45,
        title: 'The Silent Patient',
        category: 'mystery',
        image: 'images/book45.jpg',
        author: 'Alex Michaelides',
        description: 'Uncover the truth behind Alicia Berenson\'s silence after she allegedly murdered her husband, in a psychological thriller that twists and turns.',
        price: 'Rs.610',
        reviews: ['Gripping and intense.', 'Unputdownable.']
    },
    {
        id: 46,
        title: 'The Girl on the Train',
        category: 'mystery',
        image: 'images/book46.jpg',
        author: 'Paula Hawkins',
        description: 'Witness a troubled woman\'s obsession with a couple she views from the train, leading her into a web of deception and danger.',
        price: 'Rs.590',
        reviews: ['Addictive reading.', 'Keeps you guessing until the last page.']
    },
    {
        id: 47,
        title: 'Sharp Objects',
        category: 'mystery',
        image: 'images/book47.jpg',
        author: 'Gillian Flynn',
        description: 'Investigate a journalist\'s return to her hometown to cover the murders of two young girls, unearthing dark secrets that threaten her sanity.',
        price: 'Rs.580',
        reviews: ['Dark and compelling.', 'Flynn at her best.']
    },
    {
        id: 48,
        title: 'The Cuckoo\'s Calling',
        category: 'mystery',
        image: 'images/book48.jpg',
        author: 'Robert Galbraith (J.K. Rowling)',
        description: 'Follow private detective Cormoran Strike and his assistant Robin Ellacott as they investigate the mysterious death of a supermodel in London.',
        price: 'Rs.600',
        reviews: ['Engrossing detective work.', 'A thrilling start to a series.']
    },
    {
        id: 49,
        title: 'In the Woods',
        category: 'mystery',
        image: 'images/book49.jpg',
        author: 'Tana French',
        description: 'Delve into detective Rob Ryan\'s haunting past while investigating a chilling murder in an Irish town, where every clue hits close to home.',
        price: 'Rs.570',
        reviews: ['Atmospheric and haunting.', 'Keeps you guessing.']
    },
    {
        id: 50,
        title: 'The Silent Corner',
        category: 'mystery',
        image: 'images/book50.jpg',
        author: 'Dean Koontz',
        description: 'Join FBI agent Jane Hawk as she uncovers a series of inexplicable deaths linked to a powerful and secretive group, risking everything to uncover the truth.',
        price: 'Rs.620',
        reviews: ['Thrilling and suspenseful.', 'Koontz delivers yet again.']
    },
    {
        id: 51,
        title: 'Pride and Prejudice',
        category: 'romance-novel',
        image: 'images/book51.jpg',
        author: 'Jane Austen',
        description: 'Follow the spirited Elizabeth Bennet as she navigates love and social class in early 19th-century England, encountering the enigmatic Mr. Darcy along the way.',
        price: 'Rs.520',
        reviews: ['Timeless classic.', 'Austen\'s wit shines through.']
    },
    {
        id: 52,
        title: 'Outlander',
        category: 'romance-novel',
        image: 'images/book52.jpg',
        author: 'Diana Gabaldon',
        description: 'Travel through time with Claire Randall, a World War II nurse, as she finds love and adventure in 18th-century Scotland, torn between two vastly different men.',
        price: 'Rs.590',
        reviews: ['Epic romance.', 'Compelling storytelling.']
    },
    {
        id: 53,
        title: 'The Notebook',
        category: 'romance-novel',
        image: 'images/book53.jpg',
        author: 'Nicholas Sparks',
        description: 'Experience the enduring love story of Noah and Allie, spanning decades and challenges, as they navigate the complexities of life and relationships.',
        price: 'Rs.550',
        reviews: ['Heartwarming.', 'Touches the soul.']
    },
    {
        id: 54,
        title: 'Me Before You',
        category: 'romance-novel',
        image: 'images/book54.jpg',
        author: 'Jojo Moyes',
        description: 'Witness the unlikely love story between Louisa Clark, a quirky young woman, and Will Traynor, a paralyzed man, as they teach each other about life, love, and choices.',
        price: 'Rs.600',
        reviews: ['Emotionally gripping.', 'Powerful and thought-provoking.']
    },
    {
        id: 55,
        title: 'The Fault in Our Stars',
        category: 'romance-novel',
        image: 'images/book55.jpg',
        author: 'John Green',
        description: 'Join Hazel Grace Lancaster and Augustus Waters as they navigate the complexities of young love amidst the challenges of living with cancer, discovering the power of hope and resilience.',
        price: 'Rs.530',
        reviews: ['Heartbreakingly beautiful.', 'Touches the soul deeply.']
    },
    {
        id: 56,
        title: 'The Time Traveler\'s Wife',
        category: 'romance-novel',
        image: 'images/book56.jpg',
        author: 'Audrey Niffenegger',
        description: 'Delve into the unconventional love story of Henry DeTamble, a time traveler, and Clare Abshire, his wife who patiently waits for his unpredictable appearances across time.',
        price: 'Rs.570',
        reviews: ['Intriguing and heartfelt.', 'A unique blend of romance and sci-fi.']
    },
    {
        id: 57,
        title: 'The Bridges of Madison County',
        category: 'romance-novel',
        image: 'images/book57.jpg',
        author: 'Robert James Waller',
        description: 'Experience a brief yet intense affair between Francesca Johnson, an Italian-American housewife, and Robert Kincaid, a National Geographic photographer, that transforms their lives forever.',
        price: 'Rs.540',
        reviews: ['Deeply moving.', 'Captivating narrative.']
    },
    {
        id: 58,
        title: 'The Rosie Project',
        category: 'romance-novel',
        image: 'images/book58.jpg',
        author: 'Graeme Simsion',
        description: 'Follow Don Tillman, a brilliant but socially awkward geneticist, as he embarks on a quest to find the perfect partner, leading to unexpected discoveries about love and compatibility.',
        price: 'Rs.510',
        reviews: ['Hilarious and heartwarming.', 'A refreshing take on romance.']
    },
    {
        id: 59,
        title: 'Eleanor & Park',
        category: 'romance-novel',
        image: 'images/book59.jpg',
        author: 'Rainbow Rowell',
        description: 'Witness the unlikely romance between Eleanor, a misfit with a troubled past, and Park, a half-Korean boy with a love for comics, as they navigate the complexities of teenage love and family dynamics.',
        price: 'Rs.580',
        reviews: ['Heartfelt and authentic.', 'A love story for the ages.']
    },
    {
        id: 60,
        title: 'The Princess Bride',
        category: 'romance-novel',
        image: 'images/book60.jpg',
        author: 'William Goldman',
        description: 'Embark on a swashbuckling adventure and a timeless romance between Buttercup and Westley, filled with pirates, giants, and true love that withstands trials and tribulations.',
        price: 'Rs.560',
        reviews: ['Quirky and enchanting.', 'A classic tale of true love.']
    },
    {
        id: 61,
        title: 'Gone Girl',
        category: 'thriller',
        image: 'images/book61.jpg',
        author: 'Gillian Flynn',
        description: 'Follow the mysterious disappearance of Amy Dunne and the ensuing media frenzy and police investigation, revealing dark secrets and unexpected twists.',
        price: 'Rs.580',
        reviews: ['Mind-bending!', 'Keeps you guessing until the end.']
    },
    {
        id: 62,
        title: 'The Girl with the Dragon Tattoo',
        category: 'thriller',
        image: 'images/book62.jpg',
        author: 'Stieg Larsson',
        description: 'Join investigative journalist Mikael Blomkvist and troubled hacker Lisbeth Salander as they unravel a decades-old mystery involving powerful individuals and corruption.',
        price: 'Rs.570',
        reviews: ['Intense and gripping.', 'A modern masterpiece.']
    },
    {
        id: 63,
        title: 'The Silent Patient',
        category: 'thriller',
        image: 'images/book63.jpg',
        author: 'Alex Michaelides',
        description: 'Meet Alicia Berenson, a famous painter who murdered her husband and then never spoke another word. Enter Theo Faber, a criminal psychotherapist, determined to unravel the truth.',
        price: 'Rs.610',
        reviews: ['Twisty and unpredictable.', 'A page-turner from start to finish.']
    },
    {
        id: 64,
        title: 'The Girl on the Train',
        category: 'thriller',
        image: 'images/book64.jpg',
        author: 'Paula Hawkins',
        description: 'Follow Rachel, an alcoholic divorcee, who becomes entangled in a missing persons investigation while struggling with her own demons and unreliable memories.',
        price: 'Rs.590',
        reviews: ['Addictive read.', 'Keeps you on the edge of your seat.']
    },
    {
        id: 65,
        title: 'Sharp Objects',
        category: 'thriller',
        image: 'images/book65.jpg',
        author: 'Gillian Flynn',
        description: 'Journalist Camille Preaker returns to her hometown to cover a series of brutal murders while confronting her own troubled past and dysfunctional family secrets.',
        price: 'Rs.600',
        reviews: ['Dark and haunting.', 'Flynn\'s best psychological thriller.']
    },
    {
        id: 66,
        title: 'The Da Vinci Code',
        category: 'thriller',
        image: 'images/book66.jpg',
        author: 'Dan Brown',
        description: 'Professor Robert Langdon is drawn into a dangerous quest involving secret societies, ancient mysteries, and a conspiracy that could change the course of history.',
        price: 'Rs.620',
        reviews: ['Riveting adventure.', 'A thrilling puzzle to solve.']
    },
    {
        id: 67,
        title: 'Before I Go to Sleep',
        category: 'thriller',
        image: 'images/book67.jpg',
        author: 'S.J. Watson',
        description: 'Christine Lucas wakes up every day with no memory of her past due to a mysterious accident. As she pieces together her life, she discovers shocking truths that threaten her sanity and safety.',
        price: 'Rs.580',
        reviews: ['Gripping and suspenseful.', 'A chilling psychological thriller.']
    },
    {
        id: 68,
        title: 'The Couple Next Door',
        category: 'thriller',
        image: 'images/book68.jpg',
        author: 'Shari Lapena',
        description: 'Anne and Marco Conti\'s life unravels after their baby goes missing during a dinner party next door, revealing secrets, betrayals, and a race against time to find their child.',
        price: 'Rs.590',
        reviews: ['Twists and turns.', 'Keeps you guessing until the end.']
    },
    {
        id: 69,
        title: 'Big Little Lies',
        category: 'thriller',
        image: 'images/book69.jpg',
        author: 'Liane Moriarty',
        description: 'In a tranquil seaside town, three women with seemingly perfect lives unravel dark secrets and face unexpected consequences after a tragic event during a school trivia night.',
        price: 'Rs.600',
        reviews: ['Compulsively readable.', 'A brilliant blend of humor and suspense.']
    },
    {
        id: 70,
        title: 'The Girl Before',
        category: 'thriller',
        image: 'images/book70.jpg',
        author: 'JP Delaney',
        description: 'Emma and Jane move into a minimalist house with strict rules designed by an enigmatic architect. As they discover disturbing similarities between their lives, they uncover a haunting truth.',
        price: 'Rs.610',
        reviews: ['Creepy and atmospheric.', 'A chilling psychological thriller.']
    },
    {
        id: 71,
        title: 'The Da Vinci Code',
        category: 'action-adventure',
        image: 'images/book71.jpg',
        author: 'Dan Brown',
        description: 'Follow Robert Langdon, a Harvard symbologist, as he unravels cryptic clues and ancient secrets in a race against time.',
        price: 'Rs.560',
        reviews: ['Riveting!', 'Keeps you on the edge of your seat.']
    },
    {
        id: 72,
        title: 'Jurassic Park',
        category: 'action-adventure',
        image: 'images/book72.jpg',
        author: 'Michael Crichton',
        description: 'Embark on a thrilling adventure to a remote island where dinosaurs roam freely, created through genetic engineering.',
        price: 'Rs.580',
        reviews: ['Dinosaurs come to life!', 'Suspenseful and exhilarating.']
    },
    {
        id: 73,
        title: 'The Bourne Identity',
        category: 'action-adventure',
        image: 'images/book73.jpg',
        author: 'Robert Ludlum',
        description: 'Join Jason Bourne, a man with amnesia and exceptional skills, as he tries to uncover his identity while evading deadly assassins.',
        price: 'Rs.570',
        reviews: ['Intense and gripping!', 'A classic thriller.']
    },
    {
        id: 74,
        title: 'Treasure Island',
        category: 'action-adventure',
        image: 'images/book74.jpg',
        author: 'Robert Louis Stevenson',
        description: 'Set sail for adventure with young Jim Hawkins as he discovers a map to buried treasure and faces pirates led by the infamous Long John Silver.',
        price: 'Rs.540',
        reviews: ['Timeless adventure.', 'Perfect for all ages.']
    },
    {
        id: 75,
        title: 'The Hunt for Red October',
        category: 'action-adventure',
        image: 'images/book75.jpg',
        author: 'Tom Clancy',
        description: 'Experience high-stakes espionage aboard a technologically advanced Soviet submarine as a rogue captain threatens global security.',
        price: 'Rs.590',
        reviews: ['Thrilling submarine thriller!', 'Clancy at his best.']
    },
    {
        id: 76,
        title: 'The Maze Runner',
        category: 'action-adventure',
        image: 'images/book76.jpg',
        author: 'James Dashner',
        description: 'Enter the deadly maze where a group of young survivors must navigate its traps and secrets to find a way out and uncover their past.',
        price: 'Rs.550',
        reviews: ['Heart-pounding!', 'A gripping dystopian adventure.']
    },
    {
        id: 77,
        title: 'Die Hard: Based on the Novel "Nothing Lasts Forever"',
        category: 'action-adventure',
        image: 'images/book77.jpg',
        author: 'Roderick Thorp',
        description: 'Join NYPD detective John McClane as he battles terrorists who have taken hostages in a Los Angeles skyscraper during a Christmas party.',
        price: 'Rs.600',
        reviews: ['Iconic action!', 'A must-read for action fans.']
    },
    {
        id: 78,
        title: 'The Revenant',
        category: 'action-adventure',
        image: 'images/book78.jpg',
        author: 'Michael Punke',
        description: 'Survive the wilderness with Hugh Glass, a fur trapper left for dead after a bear attack, as he seeks revenge against those who abandoned him.',
        price: 'Rs.620',
        reviews: ['Raw and powerful!', 'Gripping tale of survival.']
    },
    {
        id: 79,
        title: 'Point of Impact',
        category: 'action-adventure',
        image: 'images/book79.jpg',
        author: 'Stephen Hunter',
        description: 'Join Bob Lee Swagger, a skilled marksman and Vietnam veteran, as he is drawn into a conspiracy involving political assassination.',
        price: 'Rs.580',
        reviews: ['High-octane action!', 'Keeps you guessing until the end.']
    },
    {
        id: 80,
        title: 'The Lost World',
        category: 'action-adventure',
        image: 'images/book80.jpg',
        author: 'Michael Crichton',
        description: 'Return to the mysterious island where dinosaurs roam in this thrilling sequel to Jurassic Park, filled with danger and discovery.',
        price: 'Rs.570',
        reviews: ['Exciting continuation!', 'Crichton\'s imagination shines.']
    },
    {
        id: 81,
        title: 'Interpreter of Maladies',
        category: 'short-story',
        image: 'images/book81.jpg',
        author: 'Jhumpa Lahiri',
        description: 'Explore the lives of Indian immigrants and their struggles with identity, relationships, and cultural conflicts in these poignant short stories.',
        price: 'Rs.480',
        reviews: ['Beautifully written.', 'Touches the heart deeply.']
    },
    {
        id: 82,
        title: 'Tenth of December',
        category: 'short-story',
        image: 'images/book82.jpg',
        author: 'George Saunders',
        description: 'Step into a world where absurdity and empathy collide, offering profound insights into human nature through these inventive and thought-provoking tales.',
        price: 'Rs.520',
        reviews: ['Mind-bending stories.', 'Saunders at his finest.']
    },
    {
        id: 83,
        title: 'The Lottery and Other Stories',
        category: 'short-story',
        image: 'images/book83.jpg',
        author: 'Shirley Jackson',
        description: 'Experience the eerie and unsettling tales that delve into the darker aspects of human behavior and society, leaving a lasting impact on readers.',
        price: 'Rs.450',
        reviews: ['Hauntingly brilliant.', 'Classic stories that resonate.']
    },
    {
        id: 84,
        title: 'Dubliners',
        category: 'short-story',
        image: 'images/book84.jpg',
        author: 'James Joyce',
        description: 'Delve into the lives of Dublin\'s residents, capturing their joys, sorrows, and struggles with vivid realism and profound insight in these timeless stories.',
        price: 'Rs.490',
        reviews: ['Masterpiece of realism.', 'Joyce\'s literary genius shines.']
    },
    {
        id: 85,
        title: 'The Things They Carried',
        category: 'short-story',
        image: 'images/book85.jpg',
        author: 'Tim O\'Brien',
        description: 'Follow a group of soldiers in the Vietnam War through a collection of interconnected stories that blur the line between fiction and reality, exploring the burdens they carry.',
        price: 'Rs.510',
        reviews: ['Powerful and moving.', 'A must-read for understanding war.']
    },
    {
        id: 86,
        title: 'A Good Man Is Hard to Find and Other Stories',
        category: 'short-story',
        image: 'images/book86.jpg',
        author: 'Flannery O\'Connor',
        description: 'Encounter the sharp wit and dark humor in these Southern Gothic tales, where ordinary characters face extraordinary events that challenge their beliefs and morals.',
        price: 'Rs.470',
        reviews: ['Unforgettable stories.', 'O\'Connor\'s prose is brilliant.']
    },
    {
        id: 87,
        title: 'Victory Lap',
        category: 'short-story',
        image: 'images/book87.jpg',
        author: 'George Saunders',
        description: 'Navigate through the intricacies of human relationships and unexpected circumstances in this collection of stories that blend humor, heartache, and hope.',
        price: 'Rs.500',
        reviews: ['Gripping narratives.', 'Saunders\'s stories resonate deeply.']
    },
    {
        id: 88,
        title: 'The Illustrated Man',
        category: 'short-story',
        image: 'images/book88.jpg',
        author: 'Ray Bradbury',
        description: 'Embark on a journey through time and space with a man whose tattoos come alive, each telling a unique and thought-provoking story that explores the human condition.',
        price: 'Rs.530',
        reviews: ['A masterpiece of sci-fi storytelling.', 'Bradbury\'s imagination knows no bounds.']
    },
    {
        id: 89,
        title: 'Men Without Women',
        category: 'short-story',
        image: 'images/book89.jpg',
        author: 'Haruki Murakami',
        description: 'Delve into the lives of men who find themselves alone, exploring themes of loneliness, love, and loss in Murakami\'s signature style of magical realism and introspection.',
        price: 'Rs.480',
        reviews: ['Murakami at his best.', 'Each story is a gem.']
    },
    {
        id: 90,
        title: 'Nine Stories',
        category: 'short-story',
        image: 'images/book90.jpg',
        author: 'J.D. Salinger',
        description: 'Immerse yourself in a collection of nine poignant and insightful stories that explore themes of youth, innocence, and the complexities of human relationships.',
        price: 'Rs.460',
        reviews: ['Timeless classics.', 'Salinger\'s prose is unmatched.']
    },
    {
        id: 91,
        title: 'Harry Potter and the Philosopher\'s Stone',
        category: 'childrens-literature',
        image: 'images/book91.jpg',
        author: 'J.K. Rowling',
        description: 'Experience the magical beginnings of Harry Potter\'s journey at Hogwarts School of Witchcraft and Wizardry.',
        price: 'Rs.550',
        reviews: ['Magical and enchanting!', 'A must-read for children and adults alike.']
    },
    {
        id: 92,
        title: 'Matilda',
        category: 'childrens-literature',
        image: 'images/book92.jpg',
        author: 'Roald Dahl',
        description: 'Follow Matilda, a gifted young girl with telekinetic powers, as she navigates life with her less-than-supportive family and a tyrannical headmistress.',
        price: 'Rs.480',
        reviews: ['Wonderfully imaginative.', 'Dahl at his finest.']
    },
    {
        id: 93,
        title: 'The Lion, the Witch and the Wardrobe',
        category: 'childrens-literature',
        image: 'images/book93.jpg',
        author: 'C.S. Lewis',
        description: 'Discover the magical land of Narnia through the eyes of four siblings who stumble upon an enchanted wardrobe and find themselves embroiled in a battle between good and evil.',
        price: 'Rs.520',
        reviews: ['Timeless classic.', 'A captivating adventure.']
    },
    {
        id: 94,
        title: 'Charlotte\'s Web',
        category: 'childrens-literature',
        image: 'images/book94.jpg',
        author: 'E.B. White',
        description: 'Join Wilbur the pig and Charlotte the spider as they form an unlikely friendship and embark on a heartwarming journey to save Wilbur from becoming dinner.',
        price: 'Rs.450',
        reviews: ['Touching and beautifully written.', 'A book for all ages.']
    },
    {
        id: 95,
        title: 'Where the Wild Things Are',
        category: 'childrens-literature',
        image: 'images/book95.jpg',
        author: 'Maurice Sendak',
        description: 'Join Max as he sails to the land of the Wild Things, where he becomes their king and learns valuable lessons about love, acceptance, and the wildness within.',
        price: 'Rs.410',
        reviews: ['A classic tale of imagination.', 'Sendak\'s masterpiece.']
    },
    {
        id: 96,
        title: 'The Gruffalo',
        category: 'childrens-literature',
        image: 'images/book96.jpg',
        author: 'Julia Donaldson',
        description: 'Follow a clever mouse as he invents a terrifying creature called the Gruffalo to scare off predators, only to meet the real Gruffalo in the deep, dark wood.',
        price: 'Rs.420',
        reviews: ['Delightfully charming!', 'Perfect for bedtime reading.']
    },
    {
        id: 97,
        title: 'Winnie-the-Pooh',
        category: 'childrens-literature',
        image: 'images/book97.jpg',
        author: 'A.A. Milne',
        description: 'Join Winnie-the-Pooh, Piglet, Eeyore, and friends as they embark on adventures in the Hundred Acre Wood, teaching valuable lessons along the way.',
        price: 'Rs.490',
        reviews: ['Endearing and timeless.', 'A childhood favorite.']
    },
    {
        id: 98,
        title: 'Green Eggs and Ham',
        category: 'childrens-literature',
        image: 'images/book98.jpg',
        author: 'Dr. Seuss',
        description: 'Embark on a hilarious culinary adventure with Sam-I-Am as he tries to convince a reluctant friend to try green eggs and ham, teaching about open-mindedness and trying new things.',
        price: 'Rs.430',
        reviews: ['Silly and delightful.', 'A must-read for young readers.']
    },
    {
        id: 99,
        title: 'The Tale of Peter Rabbit',
        category: 'childrens-literature',
        image: 'images/book99.jpg',
        author: 'Beatrix Potter',
        description: 'Follow mischievous Peter Rabbit as he sneaks into Mr. McGregor\'s garden, encountering danger and learning valuable lessons about responsibility and consequences.',
        price: 'Rs.460',
        reviews: ['Charming and classic.', 'Potter\'s timeless tale.']
    },
    {
        id: 100,
        title: 'The Very Hungry Caterpillar',
        category: 'childrens-literature',
        image: 'images/book100.jpg',
        author: 'Eric Carle',
        description: 'Follow the journey of a hungry caterpillar as he eats his way through various foods before transforming into a beautiful butterfly, teaching counting and the life cycle.',
        price: 'Rs.400',
        reviews: ['Simple and delightful.', 'A favorite for generations.']
    }
];

document.addEventListener('DOMContentLoaded', function() {
    function loadBooks(category) {
        const bookListElement = document.getElementById('book-list');
        if (bookListElement) {
            bookListElement.innerHTML = '';
        
            const filteredBooks = category === 'all' ? bookList : bookList.filter(book => book.category === category);
        
            filteredBooks.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.className = 'book-item';
                bookItem.innerHTML = `
                    <img src="${book.image}" alt="${book.title}">
                    <h4><a href="book-detail.html?id=${book.id}">${book.title}</a></h4>
                `;
                bookListElement.appendChild(bookItem);
            });
        }
    }

    // Check if the back button exists and add event listener
    const backButton = document.querySelector('.back a');
    if (backButton) {
        backButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default behavior of anchor tag
            history.back(); // Go back to previous page
        });
    }

    const categoryDropdown = document.getElementById('category-dropdown');
    if (categoryDropdown) {
        categoryDropdown.addEventListener('change', function() {
            loadBooks(this.value);
        });
        loadBooks('all'); // Load all books initially
    }

    // Code to load book details on book-detail.html
    if (window.location.pathname.includes('book-detail.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const bookId = urlParams.get('id');
        const book = bookList.find(b => b.id == bookId);

        if (book) {
            document.getElementById('book-image').src = book.image;
            document.getElementById('book-title').textContent = book.title;
            document.getElementById('book-author').textContent = `Author: ${book.author}`;
            document.getElementById('book-description').textContent = book.description;
            document.getElementById('book-price').textContent = `Price: ${book.price}`;
            
            const reviewsContainer = document.getElementById('book-reviews');
            reviewsContainer.innerHTML = '<h4>Reviews:</h4>';
            book.reviews.forEach(review => {
                const reviewElement = document.createElement('p');
                reviewElement.textContent = review;
                reviewsContainer.appendChild(reviewElement);
            });
        }
    }
});
