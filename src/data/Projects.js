import placeholderImg from '../img/placeholder.jpg';

const Projects = [
  {
    id: 1,
    name: 'DreamScholars',
    overview:
      'A web application that facilitates discoverability of scholarships for students.',
    description:
      'Dreamscholars is a web application for exploring, searching, adding, sharing and filtering scholarships by various attributes such as major, award amount, grade, state and school. The team is constantly working on and planning to implement more enticing features in the near future.',
    description2:
      'I primarily work on the UI and implementing the designs and functionality to the site such as data validation, filtering scholarhips, language translation etc. I have also worked on the backend functionality that allows interaction between components and the database such as saving and fetching scholarhips and adding database security rules. Lastly, I validate the functionality of components by incorporating unit tests using Jest and React Testing Library. Apart from coding I also conduct code reviews for other teammates.',
    type: 'web',
    link: 'https://dreamscholars.org/',
    mainImg: placeholderImg,
  },
  {
    id: 2,
    name: 'Nedflix',
    overview:
      'A web application for exploring, discovering nad listing movies and shows.',
    description:
      'Nedflix allows users to browse, search and watch trailers. Users can discover movies and shows by most trending, top rated and other popular categories. To easily track their favorites, users can also add/remove movies and shows to their personal list.',
    description2:
      'To ensure the site content is dynamic and reflects the latests trends in media, the site fetches the data from themoviedb API. User authentication, Lazy loading and infinite scrolling was added to enhance the user experience.',
    type: 'web',
    link: 'https://nedflix-2c9c4.web.app/',
    mainImg: placeholderImg,
  },
  {
    id: 3,
    name: 'Casa Magda',
    overview:
      'A website highlighting the services of a small housekeeping company.',
    description:
      'Casa Magda is a one-page site to showcase the services for a small cleaning company. Furthermore, the site highlights the company history, reasons to work with them, locations, and a contact form.',
    description2:
      'The site is written using HTML, CSS, Javascript and JQuery. Utilizing CSS animations, SEO techniques and UX principles, the website increased visibility and profits by over 50%.',
    type: 'web',
    link: 'https://casamagda-b1768.web.app/',
    mainImg: placeholderImg,
  },
  {
    id: 4,
    name: 'TRAPD',
    overview:
      'An endless action mobile platformer game available on the Google play store.',
    description:
      'TRAPD is an action platformer where the goal of the game is to survive as long as possible while dodging obstacles, cannons and lasers. The game offers various playable characters, each with different supers to aid them in game. By collecting coins, players can upgrade their abilities and purchase new characters.',
    description2: '',
    type: 'game',
    link: 'https://play.google.com/store/apps/details?id=com.Edlo.Trapd&hl=en_US&gl=US',
    mainImg: placeholderImg,
  },
  {
    id: 5,
    name: 'Pacific Marine App',
    overview:
      'An interactive game aimed at educating vistors of the Pacific Marine Mammal Center.',
    description: '',
    description2: '',
    type: 'game',
    link: 'https://github.com/edwingl10/Pacific-Marine-App',
    mainImg: placeholderImg,
  },
  {
    id: 6,
    name: 'Game Companion app',
    overview: 'A companion application to a board game I created.',
    description: '',
    description2: '',
    type: 'game',
    link: 'https://github.com/edwingl10/PartyBashCompanion',
    mainImg: placeholderImg,
  },
  {
    id: 7,
    name: 'Search Engine',
    overview:
      'A search engine of the web pages for the Information & Computer Sciences from UCI.',
    description: '',
    description2: '',
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
      'This program implements the Tarantula approach to perform fault localization and locate which lines of code are most suspect of breaking the unit-tests from an open-source project on Github.',
    description2:
      'This program contains over 4 thousand XML files with code coverage analysis. For this algorithm, we look at the test cases that cover each line in the program and compare the ratio of succeeding and failing test cases. The higher the ratio of failing tests cases compared to successful ones, the higher the suspiciousness of that line. Suspiciousness is a number between 0 and 1, where a higher number means a higher change that the line caused a test to fail.',
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
      'This program mimics a simple OS system by managing reading, writing and printing requests by users. A GUI is used to display the requests of users, statuses of the disks and printers and the contents of the directory manager.',
    description2:
      'The program supports a dynamic number of users, printers and disks and uses parallelism and threads to execute commands from user files. When the save command is executed, a disk resource is requested, and the file contents are written to the disk until the end command is found. The end command also stores the disk number, starting sector and file length. A new entry is then created in the directory, and the disk resource is released. Lastly, the print command looks up the file name in the directory manager, gets a free printer, and prints the data to an external file.',
    type: 'other',
    link: 'https://github.com/edwingl10/OSGui',
    mainImg: placeholderImg,
  },
  {
    id: 10,
    name: 'Info Weather',
    overview:
      'A website to search and view weather information from various locations.',
    description:
      'Info Weather is a simple website that displays the current weather and forecast of any location.',
    description2:
      'Info Weather is written with React and fetches the information from the OpenWeather API and displays the information in a minimalistic way. In addition, the site determines the appropriate icons based on the weather.',
    type: 'web',
    link: 'https://github.com/edwingl10/infoweather',
    mainImg: placeholderImg,
  },
];

export default Projects;
