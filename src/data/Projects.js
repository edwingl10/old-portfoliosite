import placeholderImg from '../img/placeholder.jpg';

const Projects = [
  {
    id: 1,
    name: 'DreamScholars',
    overview:
      'A web application that facilitates discoverability of scholarships for students.',
    description: `Dreamscholars allows users to browse scholarships and filter results by various attributes such as major, award amount, grade, state and school. Aside from adding and sharing scholarships, the site also supports English and Spanish translations. The team is contantly working on and planning to implement more features in the near future.
      
    I wear various hats while working on Dreamscholars. I primarily work on the UI and implementing the designs and functionality to the site such as the scholarship form, filtering scholarhips, etc. I have also worked on the backend functionality that allows interaction between components and the database such as saving and fetching scholarhips as well as adding security rules. Lastly, I validate the functionality of components by incorporating unit tests using Jest and React Testing Library. Apart from coding I conduct code reviews for other teammates.
      `,
    type: 'web',
    link: 'https://dreamscholars.org/',
    mainImg: placeholderImg,
  },
  {
    id: 2,
    name: 'Nedflix',
    overview:
      'A web application for exploring, discovering nad listing movies and shows.',
    description: `Nedflix allows users to browse, search, watch trailers and add movies to their favorites list. The site utilizes user authentication, lazy loading and infinite scrolling to enhance the user experience. Additionally, the site makes API calls to fetch the data, ensuring that the site content is dynamic and reflects the latest trends in media.`,
    type: 'web',
    link: 'https://nedflix-2c9c4.web.app/',
    mainImg: placeholderImg,
  },
  {
    id: 3,
    name: 'Cleaning Site',
    overview:
      'A website highlighting the services of a small housekeeping company.',
    description:
      'A simple site to showcase the services and locations for a small company. The site is written using HTML, CSS and Javascript and utilizes simple animations to captivate users. The site increased company exposure and profit by more than 50% through SEO techniques and UX principles.',
    type: 'web',
    link: 'https://casamagda-b1768.web.app/',
    mainImg: placeholderImg,
  },
  {
    id: 4,
    name: 'Mobile Platformer',
    overview:
      'An endless action mobile platformer game available on the Google play store.',
    description: `TRAPD is an action platformer where the goal of the game is to survive as long as you can while dodging obstacles, cannons and lasers. The game offers several different characters, each with different supers. Players can collect coins that allow them to buy these characters and upgrade their abilities.
      
      TRAPD became the second game I worked on and as such, I had little experience in the indie game development world. Since this was a solo project, I designed the UI, backend, game logic, sprite creation animations and everything else that makes up this wonderful game. After a month and a half of development and research, it finally made it on the Play store. I invite you to play it and let me know what you think of it! `,
    type: 'game',
    link: 'https://play.google.com/store/apps/details?id=com.Edlo.Trapd&hl=en_US&gl=US',
    mainImg: placeholderImg,
  },
  {
    id: 5,
    name: 'Pacific Marine App',
    overview:
      'An interactive game aimed at educating vistors of the Pacific Marine Mammal Center.',
    description: `This game was created to showcase and educate users the rehabilitation work the Pacific Marine Mammal Center does. It exhibits the story of 4 sea-lions and walks through their rehab process. At the end of the rehab, it shows a video of the real-life sea lion that was rescued and released.
      
      I worked on this as my capstone project with 4 other team members. I worked on the UI, designs, backend and animations as well as oversaw the progress of other team members. 
      `,
    type: 'game',
    link: 'https://github.com/edwingl10/Pacific-Marine-App',
    mainImg: placeholderImg,
  },
  {
    id: 6,
    name: 'Game Companion app',
    overview: 'A companion application to a board game I created.',
    description:
      'Party bash supports up to 4 players and is a companion app to a board game I created based on the Playstation game, Pacman Fever, which consists of players moving along a game board, trying to reach the finish line first. Each square contains an event such as winning/losing coins, buying actions, winning prizes, challenging and stealing coins from others. The app does calculations such as, rolling dice, keeping track of turns, managing coins and reflecting changes based on the events that users landed on.',
    type: 'game',
    link: 'https://github.com/edwingl10/PartyBashCompanion',
    mainImg: placeholderImg,
  },
  {
    id: 7,
    name: 'Search Engine',
    overview:
      'A search engine of the web pages for the Information & Computer Sciences from UCI.',
    description:
      'Search-ED is a search engine for navigating web pages from the Informations & Computer Sciences department from UCI. It utilizes term frequency, inverse document frequency and weighte tags for page scoring. I created an inverted index using Python, MongoDB for storing and TKinter for the GUI. I also parsed the corpus of the entire ICS web pages from UCI Utilizing the BeautifulSoup library.',
    type: 'other',
    link: 'https://github.com/edwingl10/Search-ED',
    mainImg: placeholderImg,
  },
  {
    id: 8,
    name: 'Fault Localization',
    overview:
      'A program that finds which lines of code are most likely to break unit tests.',
    description:
      'This program implements the Trantula approach for fault localization. It contain over 4 thousands XML files with code coverage analysis. It uses that data for the formula and writes the suspiciousness score of each line to a CSV file.',
    type: 'other',
    link: 'https://github.com/edwingl10/fault-localization',
    mainImg: placeholderImg,
  },
  {
    id: 9,
    name: 'Operating System GUI',
    overview:
      'A simple operating system that simulates users writing to disks and printing files.',
    description:
      'This program is written in Java and uses parallelism and threads for reading, writing and printing files. It also shows a GUI using JavaFX to demonstrates the state of a dynamic number of disks, printers, and users. Through the GUI, we can see the content of each disk, whether a printer is idle or occupied, and if users are reading, writing or requesting to print.',
    type: 'other',
    link: 'https://github.com/edwingl10/OSGui',
    mainImg: placeholderImg,
  },
  {
    id: 10,
    name: 'Weather App',
    overview:
      'A website to search and view weather information from various locations.',
    description:
      'Info weather fetches the information from the OpenWeather API and displays the information in a minamalistic way.',
    type: 'web',
    link: 'https://github.com/edwingl10/infoweather',
    mainImg: placeholderImg,
  },
];

export default Projects;
