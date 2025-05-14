const questionSets = {
    Coding: {
        easy: [
            { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "None"], answer: "Hyper Text Markup Language", topic: "Web Basics" },
            { q: "Which tag is used for a paragraph?", options: ["<p>", "<para>", "<div>", "<text>"], answer: "<p>", topic: "HTML" },
            { q: "What is the purpose of CSS?", options: ["Structure", "Styling", "Scripting", "Storage"], answer: "Styling", topic: "CSS" },
            { q: "Which element is used for headings?", options: ["<p>", "<h1>", "<div>", "<span>"], answer: "<h1>", topic: "HTML" },
            { q: "What does DOCTYPE mean?", options: ["Document Type", "Data Object Type", "Dynamic Object Type", "None"], answer: "Document Type", topic: "HTML" },
            { q: "Which is a valid HTML attribute?", options: ["class", "style", "id", "all"], answer: "all", topic: "HTML" },
            { q: "What is used to link CSS to HTML?", options: ["<script>", "<link>", "<style>", "<css>"], answer: "<link>", topic: "CSS" },
            { q: "Which tag is self-closing?", options: ["<div>", "<img>", "<p>", "<span>"], answer: "<img>", topic: "HTML" },
            { q: "What is the default text color in CSS?", options: ["black", "white", "blue", "red"], answer: "black", topic: "CSS" },
            { q: "Which is a block-level element?", options: ["<span>", "<div>", "<a>", "<img>"], answer: "<div>", topic: "HTML" }
        ],
        medium: [
            { q: "What is a function in JavaScript?", options: ["A variable", "A block of code", "A loop", "A string"], answer: "A block of code", topic: "JS Basics" },
            { q: "Which method adds an element to an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()", topic: "Arrays" },
            { q: "What does 'let' declare in JavaScript?", options: ["Constant", "Variable", "Function", "Object"], answer: "Variable", topic: "JS Basics" },
            { q: "Which operator checks equality?", options: ["=", "==", "===", "!="], answer: "===", topic: "JS Operators" },
            { q: "What is a callback function?", options: ["A loop", "A passed function", "A return value", "An error"], answer: "A passed function", topic: "JS Advanced" },
            { q: "Which method removes the last array element?", options: ["push()", "pop()", "shift()", "splice()"], answer: "pop()", topic: "Arrays" },
            { q: "What is the purpose of 'this' in JS?", options: ["Loop", "Context", "Variable", "Function"], answer: "Context", topic: "JS Basics" },
            { q: "Which is a truthy value?", options: ["0", "null", "undefined", "1"], answer: "1", topic: "JS Logic" },
            { q: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Simple Object Node", "Just Simple Object Notation", "None"], answer: "JavaScript Object Notation", topic: "JS Data" },
            { q: "Which method sorts an array?", options: ["sort()", "order()", "arrange()", "filter()"], answer: "sort()", topic: "Arrays" }
        ],
        hard: [
            { q: "What is the time complexity of Merge Sort?", options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"], answer: "O(n log n)", topic: "Algorithms" },
            { q: "What is a closure in JavaScript?", options: ["A loop", "A function with preserved data", "A variable", "An object"], answer: "A function with preserved data", topic: "Advanced JS" },
            { q: "What is the time complexity of Quick Sort?", options: ["O(n)", "O(n²)", "O(n log n)", "O(log n)"], answer: "O(n log n)", topic: "Algorithms" },
            { q: "What does 'async' do in JS?", options: ["Syncs data", "Handles async operations", "Loops data", "None"], answer: "Handles async operations", topic: "JS Async" },
            { q: "What is a promise in JavaScript?", options: ["A loop", "A future value", "A variable", "A function"], answer: "A future value", topic: "JS Async" },
            { q: "Which sorting algorithm is stable?", options: ["Quick Sort", "Merge Sort", "Heap Sort", "None"], answer: "Merge Sort", topic: "Algorithms" },
            { q: "What is prototypal inheritance?", options: ["Class-based", "Object-based", "Function-based", "None"], answer: "Object-based", topic: "JS OOP" },
            { q: "What does 'map' do to an array?", options: ["Filters", "Transforms", "Sorts", "Removes"], answer: "Transforms", topic: "Array Methods" },
            { q: "What is a REST API?", options: ["A database", "A web service", "A loop", "A variable"], answer: "A web service", topic: "JS Web" },
            { q: "What is the Big O of binary search?", options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"], answer: "O(log n)", topic: "Algorithms" }
        ]
    },
    History: {
        easy: [
            { q: "Who was the first President of the United States?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], answer: "George Washington", topic: "US History" },
            { q: "In which year did World War II end?", options: ["1943", "1945", "1947", "1949"], answer: "1945", topic: "World History" },
            { q: "Who discovered America?", options: ["Christopher Columbus", "Amerigo Vespucci", "Leif Erikson", "Marco Polo"], answer: "Christopher Columbus", topic: "Exploration" },
            { q: "What year was the Declaration of Independence signed?", options: ["1774", "1776", "1778", "1780"], answer: "1776", topic: "US History" },
            { q: "Which war was fought between 1861 and 1865?", options: ["World War I", "Civil War", "Revolutionary War", "World War II"], answer: "Civil War", topic: "US History" },
            { q: "Who was the Egyptian queen known for her beauty?", options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"], answer: "Cleopatra", topic: "Ancient History" },
            { q: "What empire fell in 1453?", options: ["Roman", "Byzantine", "Ottoman", "Persian"], answer: "Byzantine", topic: "World History" },
            { q: "Who painted the Mona Lisa?", options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"], answer: "Leonardo da Vinci", topic: "Renaissance" },
            { q: "In what century did the Renaissance begin?", options: ["13th", "14th", "15th", "16th"], answer: "14th", topic: "World History" },
            { q: "Which country gifted the Statue of Liberty?", options: ["Britain", "France", "Spain", "Italy"], answer: "France", topic: "US History" }
        ],
        medium: [
            { q: "What event started World War I?", options: ["Assassination of Archduke Franz Ferdinand", "Treaty of Versailles", "Russian Revolution", "Pearl Harbor"], answer: "Assassination of Archduke Franz Ferdinand", topic: "World History" },
            { q: "Who was the leader of Nazi Germany?", options: ["Joseph Stalin", "Adolf Hitler", "Benito Mussolini", "Winston Churchill"], answer: "Adolf Hitler", topic: "WWII" },
            { q: "What was the main cause of the American Revolution?", options: ["Taxes", "Religion", "Land", "Trade"], answer: "Taxes", topic: "US History" },
            { q: "Which battle ended the Revolutionary War?", options: ["Yorktown", "Gettysburg", "Antietam", "Bunker Hill"], answer: "Yorktown", topic: "US History" },
            { q: "Who was the first Emperor of Rome?", options: ["Julius Caesar", "Augustus", "Nero", "Trajan"], answer: "Augustus", topic: "Ancient History" },
            { q: "What year did the Berlin Wall fall?", options: ["1987", "1989", "1991", "1993"], answer: "1989", topic: "Cold War" },
            { q: "Which empire built the Great Wall of China?", options: ["Qin", "Han", "Tang", "Ming"], answer: "Qin", topic: "Asian History" },
            { q: "Who was the leader during the French Revolution?", options: ["Louis XIV", "Napoleon", "Robespierre", "Louis XVI"], answer: "Robespierre", topic: "European History" },
            { q: "What was the main goal of the Crusades?", options: ["Trade", "Religion", "Land", "Gold"], answer: "Religion", topic: "Medieval History" },
            { q: "Which country was unified in 1871?", options: ["Italy", "Germany", "France", "Spain"], answer: "Germany", topic: "European History" }
        ],
        hard: [
            { q: "What was the main cause of the French Revolution?", options: ["Economic inequality", "Religious conflict", "Foreign invasion", "Technological advancement"], answer: "Economic inequality", topic: "European History" },
            { q: "Which treaty ended the American Revolutionary War?", options: ["Treaty of Paris 1783", "Treaty of Versailles", "Treaty of Ghent", "Treaty of Tordesillas"], answer: "Treaty of Paris 1783", topic: "US History" },
            { q: "Who was the architect of the Taj Mahal?", options: ["Shah Jahan", "Ustad Ahmad Lahori", "Mumtaz Mahal", "Aurangzeb"], answer: "Ustad Ahmad Lahori", topic: "Asian History" },
            { q: "What ended the Hundred Years' War?", options: ["Battle of Agincourt", "Treaty of Troyes", "Battle of Castillon", "Peace of Westphalia"], answer: "Battle of Castillon", topic: "European History" },
            { q: "Which civilization built Machu Picchu?", options: ["Maya", "Inca", "Aztec", "Olmec"], answer: "Inca", topic: "South American History" },
            { q: "What was the significance of the Magna Carta?", options: ["Limited monarchy", "Established democracy", "Ended feudalism", "Started war"], answer: "Limited monarchy", topic: "Medieval History" },
            { q: "Who was the first female pharaoh of Egypt?", options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"], answer: "Hatshepsut", topic: "Ancient History" },
            { q: "What event marked the start of the Renaissance?", options: ["Fall of Rome", "Invention of printing press", "Black Death", "Crusades"], answer: "Invention of printing press", topic: "World History" },
            { q: "Which empire was defeated at the Battle of Waterloo?", options: ["French", "British", "Prussian", "Russian"], answer: "French", topic: "European History" },
            { q: "What was the primary language of the Roman Empire?", options: ["Greek", "Latin", "Etruscan", "Aramaic"], answer: "Latin", topic: "Ancient History" }
        ]
    },
    Math: {
        easy: Array(10).fill().map((_, i) => ({
            q: `What is ${i + 1} + ${i + 2}?`,
            options: [(i+1)+(i+2)-1, (i+1)+(i+2), (i+1)+(i+2)+1, (i+1)+(i+2)+2],
            answer: ((i+1)+(i+2)).toString(),
            topic: "Arithmetic"
        })),
        medium: Array(10).fill().map((_, i) => ({
            q: `Solve for x: 2x = ${i * 2}?`,
            options: [(i*2)/2-1, (i*2)/2, (i*2)/2+1, (i*2)/2+2],
            answer: ((i*2)/2).toString(),
            topic: "Algebra"
        })),
        hard: Array(10).fill().map((_, i) => ({
            q: `What is the derivative of x^${i+2}?`,
            options: [`${i+1}x^${i+1}`, `${i+2}x^${i+1}`, `${i}x^${i-1}`, `${i+2}x^${i+2}`],
            answer: `${(i+2)}x^${i+1}`,
            topic: "Calculus"
        }))
    },
    Literature: {
        easy: [
            { q: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], answer: "William Shakespeare", topic: "Drama" },
            { q: "What is the main character in 'The Hobbit'?", options: ["Frodo", "Bilbo Baggins", "Gandalf", "Sam"], answer: "Bilbo Baggins", topic: "Fantasy" },
            { q: "Which book begins with 'Call me Ishmael'?", options: ["Moby-Dick", "Treasure Island", "The Odyssey", "1984"], answer: "Moby-Dick", topic: "Novels" },
            { q: "Who wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "George Eliot"], answer: "Jane Austen", topic: "Romance" },
            { q: "What is the name of Harry Potter's school?", options: ["Hogwarts", "Durmstrang", "Beauxbatons", "Ilvermorny"], answer: "Hogwarts", topic: "Fantasy" },
            { q: "Who wrote 'The Cat in the Hat'?", options: ["Dr. Seuss", "Roald Dahl", "J.K. Rowling", "C.S. Lewis"], answer: "Dr. Seuss", topic: "Children’s" },
            { q: "What animal is 'Charlotte’s Web' about?", options: ["Dog", "Pig", "Cat", "Horse"], answer: "Pig", topic: "Children’s" },
            { q: "Who wrote 'The Great Gatsby'?", options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"], answer: "F. Scott Fitzgerald", topic: "Novels" },
            { q: "What is the first book in 'The Chronicles of Narnia'?", options: ["The Lion, the Witch and the Wardrobe", "Prince Caspian", "The Magician’s Nephew", "The Voyage of the Dawn Treader"], answer: "The Lion, the Witch and the Wardrobe", topic: "Fantasy" },
            { q: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "Toni Morrison", "Maya Angelou", "J.D. Salinger"], answer: "Harper Lee", topic: "Novels" }
        ],
        medium: [
            { q: "What is the name of the island in 'Lord of the Flies'?", options: ["Coral Island", "No name", "Treasure Island", "Piggy Island"], answer: "No name", topic: "Novels" },
            { q: "Who is the author of '1984'?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"], answer: "George Orwell", topic: "Dystopia" },
            { q: "What is the main theme of 'The Catcher in the Rye'?", options: ["Love", "Coming of age", "War", "Adventure"], answer: "Coming of age", topic: "Novels" },
            { q: "Who wrote 'Wuthering Heights'?", options: ["Emily Brontë", "Charlotte Brontë", "Anne Brontë", "Jane Austen"], answer: "Emily Brontë", topic: "Romance" },
            { q: "What is the name of the ship in 'Treasure Island'?", options: ["Hispaniola", "Black Pearl", "Jolly Roger", "Santa Maria"], answer: "Hispaniola", topic: "Adventure" },
            { q: "Who wrote 'The Odyssey'?", options: ["Homer", "Virgil", "Sophocles", "Euripides"], answer: "Homer", topic: "Epics" },
            { q: "What is the pen name of Samuel Clemens?", options: ["Mark Twain", "George Eliot", "Lewis Carroll", "Dr. Seuss"], answer: "Mark Twain", topic: "Authors" },
            { q: "Which Shakespeare play features Iago?", options: ["Othello", "Hamlet", "Macbeth", "King Lear"], answer: "Othello", topic: "Drama" },
            { q: "Who wrote 'Animal Farm'?", options: ["George Orwell", "Aldous Huxley", "John Steinbeck", "Kurt Vonnegut"], answer: "George Orwell", topic: "Allegory" },
            { q: "What is the setting of 'The Scarlet Letter'?", options: ["Puritan Massachusetts", "Victorian England", "Revolutionary France", "Medieval Spain"], answer: "Puritan Massachusetts", topic: "Novels" }
        ],
        hard: [
            { q: "Who wrote 'Don Quixote'?", options: ["Miguel de Cervantes", "Gabriel García Márquez", "Jorge Luis Borges", "Federico García Lorca"], answer: "Miguel de Cervantes", topic: "Novels" },
            { q: "What is the longest novel in English literature?", options: ["Clarissa", "War and Peace", "Middlemarch", "Ulysses"], answer: "Clarissa", topic: "Novels" },
            { q: "Who wrote 'The Divine Comedy'?", options: ["Dante Alighieri", "Geoffrey Chaucer", "Petrarch", "Boccaccio"], answer: "Dante Alighieri", topic: "Epics" },
            { q: "What is the main theme of 'Heart of Darkness'?", options: ["Colonialism", "Love", "Friendship", "Adventure"], answer: "Colonialism", topic: "Novels" },
            { q: "Who wrote 'Ulysses'?", options: ["James Joyce", "Virginia Woolf", "T.S. Eliot", "Ezra Pound"], answer: "James Joyce", topic: "Modernism" },
            { q: "What is the name of the protagonist in 'Crime and Punishment'?", options: ["Raskolnikov", "Ivanov", "Dmitri", "Alyosha"], answer: "Raskolnikov", topic: "Novels" },
            { q: "Who wrote 'The Canterbury Tales'?", options: ["Geoffrey Chaucer", "William Langland", "John Gower", "Chrétien de Troyes"], answer: "Geoffrey Chaucer", topic: "Poetry" },
            { q: "What is the setting of 'One Hundred Years of Solitude'?", options: ["Macondo", "Bogotá", "Madrid", "Havana"], answer: "Macondo", topic: "Magical Realism" },
            { q: "Who wrote 'Paradise Lost'?", options: ["John Milton", "John Donne", "Andrew Marvell", "George Herbert"], answer: "John Milton", topic: "Epics" },
            { q: "What is the primary literary device in 'Moby-Dick'?", options: ["Symbolism", "Irony", "Satire", "Allegory"], answer: "Symbolism", topic: "Novels" }
        ]
    },
    Physics: {
        easy: [
            { q: "What is the unit of force?", options: ["Newton", "Joule", "Watt", "Volt"], answer: "Newton", topic: "Mechanics" },
            { q: "What force keeps us on the ground?", options: ["Friction", "Gravity", "Magnetism", "Tension"], answer: "Gravity", topic: "Mechanics" },
            { q: "What is the speed of light in a vacuum?", options: ["300,000 km/s", "3,000 km/s", "30,000 km/s", "300 km/s"], answer: "300,000 km/s", topic: "Optics" },
            { q: "What is the formula for work?", options: ["F = ma", "W = Fd", "E = mc²", "P = IV"], answer: "W = Fd", topic: "Mechanics" },
            { q: "What is energy measured in?", options: ["Joules", "Newtons", "Watts", "Amperes"], answer: "Joules", topic: "Energy" },
            { q: "What causes objects to fall?", options: ["Magnetism", "Gravity", "Electricity", "Friction"], answer: "Gravity", topic: "Mechanics" },
            { q: "What is the unit of power?", options: ["Watt", "Joule", "Newton", "Volt"], answer: "Watt", topic: "Energy" },
            { q: "What type of energy does a moving car have?", options: ["Potential", "Kinetic", "Thermal", "Chemical"], answer: "Kinetic", topic: "Energy" },
            { q: "What is the acceleration due to gravity on Earth?", options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9 m/s²"], answer: "9.8 m/s²", topic: "Mechanics" },
            { q: "What color has the shortest wavelength?", options: ["Red", "Blue", "Green", "Yellow"], answer: "Blue", topic: "Optics" }
        ],
        medium: [
            { q: "What is Newton’s First Law?", options: ["F = ma", "Inertia", "Action-Reaction", "Gravity"], answer: "Inertia", topic: "Mechanics" },
            { q: "What is the formula for kinetic energy?", options: ["KE = ½mv²", "PE = mgh", "E = mc²", "P = Fv"], answer: "KE = ½mv²", topic: "Energy" },
            { q: "What is the unit of electric current?", options: ["Ampere", "Volt", "Ohm", "Watt"], answer: "Ampere", topic: "Electricity" },
            { qात: "What is the resistance formula?", options: ["R = V/I", "P = IV", "V = IR", "E = Pt"], answer: "R = V/I", topic: "Electricity" },
            { q: "What is the speed of sound in air?", options: ["343 m/s", "300 m/s", "400 m/s", "500 m/s"], answer: "343 m/s", topic: "Waves" },
            { q: "What law relates force, mass, and acceleration?", options: ["1st Law", "2nd Law", "3rd Law", "Universal Gravitation"], answer: "2nd Law", topic: "Mechanics" },
            { q: "What is the unit of frequency?", options: ["Hertz", "Watt", "Joule", "Newton"], answer: "Hertz", topic: "Waves" },
            { q: "What type of wave is light?", options: ["Longitudinal", "Transverse", "Mechanical", "Sound"], answer: "Transverse", topic: "Optics" },
            { q: "What is the potential energy formula?", options: ["PE = mgh", "KE = ½mv²", "E = mc²", "P = Fv"], answer: "PE = mgh", topic: "Energy" },
            { q: "What is Ohm’s Law?", options: ["V = IR", "P = IV", "R = V/I", "E = Pt"], answer: "V = IR", topic: "Electricity" }
        ],
        hard: [
            { q: "What is the equation for Einstein’s mass-energy equivalence?", options: ["E = mc²", "F = ma", "KE = ½mv²", "P = IV"], answer: "E = mc²", topic: "Relativity" },
            { q: "What is Planck’s constant?", options: ["6.626 × 10⁻³⁴ Js", "3.00 × 10⁸ m/s", "9.8 m/s²", "1.6 × 10⁻¹⁹ C"], answer: "6.626 × 10⁻³⁴ Js", topic: "Quantum" },
            { q: "What principle explains lift in an airplane?", options: ["Bernoulli’s", "Archimedes’", "Newton’s 3rd", "Pascal’s"], answer: "Bernoulli’s", topic: "Fluids" },
            { q: "What is the Heisenberg Uncertainty Principle about?", options: ["Position and momentum", "Energy and time", "Speed and direction", "Mass and velocity"], answer: "Position and momentum", topic: "Quantum" },
            { q: "What is the formula for gravitational force?", options: ["F = G(m₁m₂/r²)", "F = ma", "E = mc²", "P = Fv"], answer: "F = G(m₁m₂/r²)", topic: "Gravitation" },
            { q: "What is the primary source of Earth’s magnetic field?", options: ["Core motion", "Solar wind", "Rotation", "Atmosphere"], answer: "Core motion", topic: "Magnetism" },
            { q: "What is the wavelength formula?", options: ["λ = v/f", "v = fλ", "f = v/λ", "E = hf"], answer: "λ = v/f", topic: "Waves" },
            { q: "What is the unit of magnetic flux?", options: ["Weber", "Tesla", "Henry", "Farad"], answer: "Weber", topic: "Magnetism" },
            { q: "What is the relativistic time dilation formula?", options: ["t = t₀/√(1-v²/c²)", "E = mc²", "F = ma", "λ = h/p"], answer: "t = t₀/√(1-v²/c²)", topic: "Relativity" },
            { q: "What particle mediates electromagnetic force?", options: ["Photon", "Electron", "Neutron", "Proton"], answer: "Photon", topic: "Particle Physics" }
        ]
    },
    Chemistry: {
        easy: [
            { q: "What is the chemical symbol for water?", options: ["H₂O", "CO₂", "O₂", "H₂"], answer: "H₂O", topic: "Compounds" },
            { q: "What element is 'Fe'?", options: ["Iron", "Gold", "Silver", "Copper"], answer: "Iron", topic: "Elements" },
            { q: "How many elements are in the periodic table?", options: ["118", "100", "92", "150"], answer: "118", topic: "Periodic Table" },
            { q: "What gas do humans breathe?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], answer: "Oxygen", topic: "Gases" },
            { q: "What is the pH of pure water?", options: ["7", "5", "9", "3"], answer: "7", topic: "Acids and Bases" },
            { q: "What element is 'Au'?", options: ["Gold", "Silver", "Aluminum", "Argon"], answer: "Gold", topic: "Elements" },
            { q: "What is table salt’s chemical name?", options: ["Sodium Chloride", "Potassium Chloride", "Calcium Carbonate", "Magnesium Sulfate"], answer: "Sodium Chloride", topic: "Compounds" },
            { q: "What gas is most abundant in Earth’s atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], answer: "Nitrogen", topic: "Gases" },
            { q: "What is the atomic number of hydrogen?", options: ["1", "2", "3", "4"], answer: "1", topic: "Elements" },
            { q: "What type of bond involves sharing electrons?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], answer: "Covalent", topic: "Bonding" }
        ],
        medium: [
            { q: "What is the chemical formula for carbon dioxide?", options: ["CO₂", "CO", "C₂O", "C₂O₂"], answer: "CO₂", topic: "Compounds" },
            { q: "What gas is produced in photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Oxygen", topic: "Biochemistry" },
            { q: "What is the atomic number of carbon?", options: ["6", "8", "12", "14"], answer: "6", topic: "Elements" },
            { q: "What type of reaction releases energy?", options: ["Endothermic", "Exothermic", "Neutral", "Reversible"], answer: "Exothermic", topic: "Reactions" },
            { q: "What is the molar mass of water (H₂O)?", options: ["18 g/mol", "16 g/mol", "20 g/mol", "22 g/mol"], answer: "18 g/mol", topic: "Stoichiometry" },
            { q: "What element has the symbol 'Na'?", options: ["Sodium", "Nitrogen", "Nickel", "Neon"], answer: "Sodium", topic: "Elements" },
            { q: "What is the strongest type of chemical bond?", options: ["Ionic", "Covalent", "Hydrogen", "Van der Waals"], answer: "Covalent", topic: "Bonding" },
            { q: "What gas is used in balloons to make them float?", options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"], answer: "Helium", topic: "Gases" },
            { q: "What is the pH range of an acid?", options: ["0-6", "7-14", "7", "8-14"], answer: "0-6", topic: "Acids and Bases" },
            { q: "What element is a noble gas with atomic number 10?", options: ["Neon", "Argon", "Helium", "Krypton"], answer: "Neon", topic: "Periodic Table" }
        ],
        hard: [
            { q: "What is Avogadro’s number?", options: ["6.022 × 10²³", "3.14 × 10⁸", "9.8 × 10²", "1.6 × 10⁻¹⁹"], answer: "6.022 × 10²³", topic: "Stoichiometry" },
            { q: "What gas, discovered on the sun before Earth, is second most abundant in the universe?", options: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"], answer: "Helium", topic: "Elements" },
            { q: "What is the oxidation state of oxygen in H₂O₂?", options: ["-1", "-2", "0", "+1"], answer: "-1", topic: "Redox" },
            { q: "What type of reaction is CH₄ + 2O₂ → CO₂ + 2H₂O?", options: ["Combustion", "Synthesis", "Decomposition", "Displacement"], answer: "Combustion", topic: "Reactions" },
            { q: "What is the catalyst in the Haber process?", options: ["Iron", "Platinum", "Nickel", "Copper"], answer: "Iron", topic: "Industrial Chemistry" },
            { q: "What is the primary source of Earth’s oxygen?", options: ["Photosynthesis", "Volcanoes", "Ocean evaporation", "Chemical reactions"], answer: "Photosynthesis", topic: "Biochemistry" },
            { q: "What is the hybridization of carbon in methane (CH₄)?", options: ["sp³", "sp²", "sp", "dsp³"], answer: "sp³", topic: "Bonding" },
            { q: "What law states that equal volumes of gases contain equal numbers of molecules?", options: ["Avogadro’s", "Boyle’s", "Charles’s", "Dalton’s"], answer: "Avogadro’s", topic: "Gas Laws" },
            { q: "What is the primary component of natural gas?", options: ["Methane", "Ethane", "Propane", "Butane"], answer: "Methane", topic: "Organic Chemistry" },
            { q: "What element has the highest electronegativity?", options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"], answer: "Fluorine", topic: "Periodic Table" }
        ]
    },
    Biology: {
        easy: [
            { q: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi"], answer: "Mitochondria", topic: "Cell Biology" },
            { q: "What gas do plants produce during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Oxygen", topic: "Photosynthesis" },
            { q: "What is the basic unit of life?", options: ["Cell", "Atom", "Molecule", "Organ"], answer: "Cell", topic: "Cell Biology" },
            { q: "What organ pumps blood in the human body?", options: ["Heart", "Lungs", "Brain", "Liver"], answer: "Heart", topic: "Anatomy" },
            { q: "What is DNA’s full name?", options: ["Deoxyribonucleic Acid", "Dioxyribonucleic Acid", "Deoxyribose Nucleic Acid", "Dynamic Nucleic Acid"], answer: "Deoxyribonucleic Acid", topic: "Genetics" },
            { q: "What do plants use to make food?", options: ["Sunlight", "Soil", "Water", "Air"], answer: "Sunlight", topic: "Photosynthesis" },
            { q: "What is the largest organ in the human body?", options: ["Skin", "Liver", "Brain", "Heart"], answer: "Skin", topic: "Anatomy" },
            { q: "What type of animal is a frog?", options: ["Mammal", "Reptile", "Amphibian", "Bird"], answer: "Amphibian", topic: "Zoology" },
            { q: "What is the process of cell division called?", options: ["Mitosis", "Photosynthesis", "Respiration", "Diffusion"], answer: "Mitosis", topic: "Cell Biology" },
            { q: "What carries oxygen in the blood?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], answer: "Red blood cells", topic: "Physiology" }
        ],
        medium: [
            { q: "What molecule carries genetic information?", options: ["DNA", "RNA", "Protein", "Lipid"], answer: "DNA", topic: "Genetics" },
            { q: "What is the primary source of energy for Earth’s climate?", options: ["Sun", "Moon", "Earth’s core", "Wind"], answer: "Sun", topic: "Ecology" },
            { q: "What is the largest bone in the human body?", options: ["Femur", "Skull", "Spine", "Humerus"], answer: "Femur", topic: "Anatomy" },
            { q: "What process converts sugar into energy?", options: ["Photosynthesis", "Respiration", "Fermentation", "Osmosis"], answer: "Respiration", topic: "Physiology" },
            { q: "What is the scientific name for humans?", options: ["Homo sapiens", "Homo erectus", "Homo habilis", "Homo neanderthalensis"], answer: "Homo sapiens", topic: "Taxonomy" },
            { q: "What organelle contains chlorophyll?", options: ["Chloroplast", "Mitochondria", "Nucleus", "Ribosome"], answer: "Chloroplast", topic: "Cell Biology" },
            { q: "What type of blood vessel carries blood away from the heart?", options: ["Artery", "Vein", "Capillary", "Venule"], answer: "Artery", topic: "Physiology" },
            { q: "What is the study of heredity called?", options: ["Genetics", "Ecology", "Evolution", "Physiology"], answer: "Genetics", topic: "Genetics" },
            { q: "What gas do animals exhale?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"], answer: "Carbon Dioxide", topic: "Physiology" },
            { q: "What is the primary function of the lungs?", options: ["Digestion", "Breathing", "Circulation", "Excretion"], answer: "Breathing", topic: "Anatomy" }
        ],
        hard: [
            { q: "What is the primary source of genetic variation?", options: ["Mutation", "Migration", "Selection", "Drift"], answer: "Mutation", topic: "Genetics" },
            { q: "What molecule is the main component of cell membranes?", options: ["Phospholipid", "Protein", "Carbohydrate", "Cholesterol"], answer: "Phospholipid", topic: "Cell Biology" },
            { q: "What is the end product of glycolysis?", options: ["Pyruvate", "Glucose", "ATP", "Lactate"], answer: "Pyruvate", topic: "Biochemistry" },
            { q: "What hormone regulates blood sugar?", options: ["Insulin", "Adrenaline", "Testosterone", "Estrogen"], answer: "Insulin", topic: "Physiology" },
            { q: "What is the largest ecosystem on Earth?", options: ["Ocean", "Forest", "Desert", "Grassland"], answer: "Ocean", topic: "Ecology" },
            { q: "What process describes evolution by natural selection?", options: ["Survival of the fittest", "Genetic drift", "Gene flow", "Mutation"], answer: "Survival of the fittest", topic: "Evolution" },
            { q: "What is the primary pigment in photosynthesis?", options: ["Chlorophyll", "Carotene", "Xanthophyll", "Phycocyanin"], answer: "Chlorophyll", topic: "Photosynthesis" },
            { q: "What organelle is responsible for protein synthesis?", options: ["Ribosome", "Nucleus", "Mitochondria", "Golgi"], answer: "Ribosome", topic: "Cell Biology" },
            { q: "What is the function of the endoplasmic reticulum?", options: ["Protein transport", "Energy production", "DNA storage", "Cell division"], answer: "Protein transport", topic: "Cell Biology" },
            { q: "What is the term for an organism’s role in its ecosystem?", options: ["Niche", "Habitat", "Population", "Community"], answer: "Niche", topic: "Ecology" }
        ]
    },
    Art: {
        easy: [
            { q: "Who painted the Mona Lisa?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], answer: "Leonardo da Vinci", topic: "Renaissance" },
            { q: "What is the primary color used in Picasso’s 'Blue Period'?", options: ["Blue", "Red", "Yellow", "Green"], answer: "Blue", topic: "Modern Art" },
            { q: "What art movement is known for its use of bold colors and shapes?", options: ["Cubism", "Impressionism", "Surrealism", "Realism"], answer: "Cubism", topic: "Modern Art" },
            { q: "Who sculpted David?", options: ["Michelangelo", "Donatello", "Bernini", "Rodin"], answer: "Michelangelo", topic: "Renaissance" },
            { q: "What is the famous painting of a starry night by Van Gogh called?", options: ["The Starry Night", "Starry Sky", "Night Stars", "Starry Dream"], answer: "The Starry Night", topic: "Post-Impressionism" },
            { q: "What material is commonly used in sculpture?", options: ["Marble", "Paper", "Glass", "Wood"], answer: "Marble", topic: "Sculpture" },
            { q: "What art style focuses on light and everyday life?", options: ["Impressionism", "Baroque", "Renaissance", "Abstract"], answer: "Impressionism", topic: "Impressionism" },
            { q: "Who painted 'The Last Supper'?", options: ["Leonardo da Vinci", "Raphael", "Titian", "Caravaggio"], answer: "Leonardo da Vinci", topic: "Renaissance" },
            { q: "What is the term for a painting done on wet plaster?", options: ["Fresco", "Oil", "Watercolor", "Acrylic"], answer: "Fresco", topic: "Techniques" },
            { q: "What color is made by mixing red and blue?", options: ["Purple", "Green", "Orange", "Yellow"], answer: "Purple", topic: "Color Theory" }
        ],
        medium: [
            { q: "Who is known for the painting 'Guernica'?", options: ["Pablo Picasso", "Salvador Dalí", "Joan Miró", "Diego Rivera"], answer: "Pablo Picasso", topic: "Modern Art" },
            { q: "What art movement did Salvador Dalí belong to?", options: ["Surrealism", "Cubism", "Dadaism", "Fauvism"], answer: "Surrealism", topic: "Surrealism" },
            { q: "What is the name of the famous ceiling painted by Michelangelo?", options: ["Sistine Chapel", "Last Judgment", "Vatican Ceiling", "Chapel of Heaven"], answer: "Sistine Chapel", topic: "Renaissance" },
            { q: "What technique uses small dots of color?", options: ["Pointillism", "Impressionism", "Expressionism", "Realism"], answer: "Pointillism", topic: "Post-Impressionism" },
            { q: "Who painted 'The Scream'?", options: ["Edvard Munch", "Vincent van Gogh", "Claude Monet", "Paul Gauguin"], answer: "Edvard Munch", topic: "Expressionism" },
            { q: "What is the primary subject of Baroque art?", options: ["Religion", "Nature", "Abstract", "Portraits"], answer: "Religion", topic: "Baroque" },
            { q: "What artist is known for cutting off part of his ear?", options: ["Vincent van Gogh", "Paul Gauguin", "Henri Matisse", "Claude Monet"], answer: "Vincent van Gogh", topic: "Post-Impressionism" },
            { q: "What is the term for a sculpture that stands alone?", options: ["Freestanding", "Relief", "Bas-relief", "Installation"], answer: "Freestanding", topic: "Sculpture" },
            { q: "Who painted 'Water Lilies'?", options: ["Claude Monet", "Pierre-Auguste Renoir", "Mary Cassatt", "Edgar Degas"], answer: "Claude Monet", topic: "Impressionism" },
            { q: "What art movement rejected traditional beauty?", options: ["Dadaism", "Renaissance", "Romanticism", "Realism"], answer: "Dadaism", topic: "Modern Art" }
        ],
        hard: [
            { q: "Who created the 'Campbell’s Soup Cans' artwork?", options: ["Andy Warhol", "Roy Lichtenstein", "Jackson Pollock", "Mark Rothko"], answer: "Andy Warhol", topic: "Pop Art" },
            { q: "What is the name of the technique using dripping paint, popularized by Jackson Pollock?", options: ["Action Painting", "Pointillism", "Fresco", "Sfumato"], answer: "Action Painting", topic: "Abstract Expressionism" },
            { q: "What Renaissance artist is known for the 'School of Athens'?", options: ["Raphael", "Leonardo da Vinci", "Michelangelo", "Titian"], answer: "Raphael", topic: "Renaissance" },
            { q: "What is the primary focus of Futurism?", options: ["Speed and technology", "Nature", "Religion", "Human emotion"], answer: "Speed and technology", topic: "Modern Art" },
            { q: "Who sculpted 'The Thinker'?", options: ["Auguste Rodin", "Gian Lorenzo Bernini", "Henry Moore", "Constantin Brâncuși"], answer: "Auguste Rodin", topic: "Sculpture" },
            { q: "What art movement is characterized by dream-like scenes?", options: ["Surrealism", "Impressionism", "Cubism", "Fauvism"], answer: "Surrealism", topic: "Surrealism" },
            { q: "What is the term for shading technique used by Leonardo da Vinci?", options: ["Sfumato", "Chiaroscuro", "Hatching", "Stippling"], answer: "Sfumato", topic: "Techniques" },
            { q: "Who painted 'Les Demoiselles d’Avignon'?", options: ["Pablo Picasso", "Henri Matisse", "Georges Braque", "Fernand Léger"], answer: "Pablo Picasso", topic: "Cubism" },
            { q: "What is the primary medium of the Lascaux cave paintings?", options: ["Natural pigments", "Oil", "Acrylic", "Watercolor"], answer: "Natural pigments", topic: "Prehistoric Art" },
            { q: "What artist is associated with the 'Fauvism' movement?", options: ["Henri Matisse", "Paul Cézanne", "Vincent van Gogh", "Claude Monet"], answer: "Henri Matisse", topic: "Fauvism" }
        ]
    },
    Geography: {
        easy: [
            { q: "What is the largest continent?", options: ["Asia", "Africa", "Europe", "Australia"], answer: "Asia", topic: "Continents" },
            { q: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris", topic: "Capitals" },
            { q: "What ocean is the largest?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: "Pacific", topic: "Oceans" },
            { q: "What is the longest river in the world?", options: ["Nile", "Amazon", "Mississippi", "Yangtze"], answer: "Nile", topic: "Rivers" },
            { q: "What continent is known as Down Under?", options: ["Australia", "Africa", "South America", "Antarctica"], answer: "Australia", topic: "Continents" },
            { q: "What is the capital of Brazil?", options: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"], answer: "Brasília", topic: "Capitals" },
            { q: "What mountain range includes Everest?", options: ["Himalayas", "Andes", "Rockies", "Alps"], answer: "Himalayas", topic: "Mountains" },
            { q: "What is the smallest continent by land area?", options: ["Australia", "Europe", "Antarctica", "South America"], answer: "Australia", topic: "Continents" },
            { q: "What country has the most deserts?", options: ["Australia", "Egypt", "Saudi Arabia", "Antarctica"], answer: "Antarctica", topic: "Deserts" },
            { q: "What is the capital of Japan?", options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"], answer: "Tokyo", topic: "Capitals" }
        ],
        medium: [
            { q: "What river runs through Egypt?", options: ["Nile", "Amazon", "Danube", "Ganges"], answer: "Nile", topic: "Rivers" },
            { q: "What is the highest mountain in the world?", options: ["Everest", "K2", "Kangchenjunga", "Lhotse"], answer: "Everest", topic: "Mountains" },
            { q: "What country has the longest coastline?", options: ["Canada", "Australia", "Russia", "United States"], answer: "Canada", topic: "Geography" },
            { q: "What desert covers much of northern Africa?", options: ["Sahara", "Gobi", "Kalahari", "Atacama"], answer: "Sahara", topic: "Deserts" },
            { q: "What is the capital of India?", options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "New Delhi", topic: "Capitals" },
            { q: "What sea separates Europe and Africa?", options: ["Mediterranean", "Red Sea", "Black Sea", "Caspian Sea"], answer: "Mediterranean", topic: "Seas" },
            { q: "What country is home to the Amazon Rainforest?", options: ["Brazil", "Peru", "Colombia", "Venezuela"], answer: "Brazil", topic: "Geography" },
            { q: "What is the largest lake in Africa?", options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"], answer: "Lake Victoria", topic: "Lakes" },
            { q: "What country has the most volcanoes?", options: ["Indonesia", "Japan", "United States", "Italy"], answer: "Indonesia", topic: "Geography" },
            { q: "What is the capital of Russia?", options: ["Moscow", "St. Petersburg", "Kiev", "Vladivostok"], answer: "Moscow", topic: "Capitals" }
        ],
        hard: [
            { q: "What is the deepest point in the ocean?", options: ["Mariana Trench", "Puerto Rico Trench", "Tonga Trench", "Java Trench"], answer: "Mariana Trench", topic: "Oceans" },
            { q: "What country has the most islands?", options: ["Sweden", "Indonesia", "Philippines", "Norway"], answer: "Sweden", topic: "Geography" },
            { q: "What is the longest mountain range on Earth?", options: ["Andes", "Himalayas", "Rockies", "Mid-Atlantic Ridge"], answer: "Mid-Atlantic Ridge", topic: "Mountains" },
            { q: "What desert is the driest in the world?", options: ["Atacama", "Sahara", "Gobi", "Antarctic"], answer: "Atacama", topic: "Deserts" },
            { q: "What river forms part of the border between the US and Mexico?", options: ["Rio Grande", "Mississippi", "Colorado", "Columbia"], answer: "Rio Grande", topic: "Rivers" },
            { q: "What is the capital of Iceland?", options: ["Reykjavik", "Oslo", "Helsinki", "Stockholm"], answer: "Reykjavik", topic: "Capitals" },
            { q: "What country has the highest average elevation?", options: ["Nepal", "Bhutan", "Tibet", "Switzerland"], answer: "Bhutan", topic: "Geography" },
            { q: "What is the largest island in the Mediterranean?", options: ["Sicily", "Crete", "Sardinia", "Cyprus"], answer: "Sicily", topic: "Islands" },
            { q: "What strait separates Europe and Asia in Istanbul?", options: ["Bosporus", "Dardanelles", "Gibraltar", "Messina"], answer: "Bosporus", topic: "Geography" },
            { q: "What is the smallest country by land area?", options: ["Vatican City", "Monaco", "Nauru", "San Marino"], answer: "Vatican City", topic: "Countries" }
        ]
    }
};

