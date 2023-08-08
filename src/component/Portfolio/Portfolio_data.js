import mobileMarket from './../img/mobile-market.png'
import learnEngineering from './../img/learn-engineering.png'
import learningTime from './../img/learning-time.png'
import alphaAcademy from './../img/alpha-academy.jpg'
import helloHotel from './../img/hello-hotel.jpg'
import photoGallery from './../img/photo-gallery.jpg'
import bookTown from './../img/bookTown.png'
import quantumByte from './../img/quantum-byte.png'
import doctorPortal from './../img/doctor-portal.jpg'

const Portfolio_data = [
  {
    id: 1,
    category: "Full Stack Project",
    totalLike: "660",
    title: "Quantum Byte",
    subTitle: "Website for showing tech product and PC building",
    image: quantumByte,
    live_server: 'https://quantum-byte.vercel.app/',
    client: 'https://github.com/hasanulhasan/quantum-byte',
    server: 'https://github.com/hasanulhasan/quantum-byte-backend',
    desc_one: " User can see products, product details and related products with featured category.",
    desc_two: "Auth user can build a complete PC with available components in site",
    desc_three: "Admin can Add product, Delete and Edit product information.",
    desc_four: "This fully responsive site has Search and Sort filter in Category field",
    stacks: ["Next JS", "Material UI", "Redux Toolkit", "RTK Query", "Firebase", "React JS", "TypeScript", "Express JS", "MongoDB", "Mongoose"]
  },
  {
    id: 2,
    category: "Full Stack Project",
    totalLike: "750",
    title: "The BookTown",
    subTitle: "Book selling and service-related website",
    image: bookTown,
    live_server: 'https://the-booktown-f5ca6.web.app/',
    client: 'https://github.com/hasanulhasan/the-booktown',
    server: 'https://github.com/hasanulhasan/the-booktown-backend',
    desc_one: " User can see book list and book details with filtering and sorting by price, date etc.",
    desc_two: "Auth user can make Review, Add book to wishlist and make CRUD operation here.",
    desc_three: "Admin can Add book, Delete and Edit book information.",
    desc_four: "This fully responsive site may be a mini e-commerce site",
    stacks: ["TypeScript", "Redux Toolkit", "RTK Query", "Radix UI", "Tailwind CSS", "React JS","React Router", "Firebase", "Node JS", "Express JS", "MongoDB", "Express JS"]
  },
  {
    id: 3,
    category: "Full Stack Project",
    totalLike: "600",
    title: "Mobile Market",
    subTitle: "Mobile phone buying and selling Website",
    image: mobileMarket,
    live_server: 'https://mobile-market-78c1a.web.app/',
    client: 'https://github.com/hasanulhasan/mobile-market',
    server: 'https://github.com/hasanulhasan/mobile-market-server',
    desc_one: "Users can login in 3 ways and can maintain a dashboard.",
    desc_two: "Admin can control others and Buyer can add, delete and advertise phones.",
    desc_three: "User information of buyers and sellers can be manipulated through MongoDB",
    desc_four: "Above all its a MERN Stack Project",
    stacks: ["Tailwind CSS", "Daisy UI", "Mamba UI", "React JS", "Firebase", "Node JS", "Express JS", "MongoDB"]
  },
  {
    id: 4,
    category: "Full Stack Project",
    totalLike: "750",
    title: "Eagle Engineering",
    subTitle: "Engineering service related website",
    image: learnEngineering,
    live_server: 'https://eagle-engineering.web.app/',
    client: 'https://github.com/hasanulhasan/eagle-engineering',
    server: 'https://github.com/hasanulhasan/eagle-engineering-server',
    desc_one: "Admin can add Service that store in MongoDB.",
    desc_two: " User Information can be controlled with firebase and MongoDB.",
    desc_three: "Users can put a realistic review and can add, delete, and edit these reviews.",
    desc_four: "Above all its a MERN Stack Project",
    stacks: ["Tailwind CSS", "Daisy UI", "Mamba UI", "React JS", "Firebase", "Node JS", "Express JS", "MongoDB"]
  },
  {
    id: 5,
    category: "Front End Project",
    totalLike: "630",
    title: "Learning Time",
    subTitle: "e-learning Website",
    image: learningTime,
    live_server: 'https://monumental-stroopwafel-c88b88.netlify.app/',
    client: 'https://github.com/hasanulhasan/learning-time',
    server: 'https://github.com/hasanulhasan/learning-time',
    desc_one: "This is mainly a skill development site",
    desc_two: "User Can test quizzes and see mark",
    desc_three: "Result of quizzes can be shown in Chart and Graph",
    desc_four: "This a frontend project builds on Tailwind CSS",
    stacks: ["Tailwind CSS", "CSS", "JavaScript", "React JS", "Rest API", "Recharts"]
  },
  {
    id: 6,
    category: "Full Stack Project",
    totalLike: "360",
    title: "Alpha Academy",
    subTitle: "e-learning and course selling Website",
    image: alphaAcademy,
    live_server: 'https://alpha-academy-simple.web.app/',
    client: 'https://github.com/hasanulhasan/alpha-academy',
    server: 'https://github.com/hasanulhasan/alpha-academy-server',
    desc_one: "Users can see course details and purchase them only after login.",
    desc_two: "There added 2 types of login systems and save User Information with firebase",
    desc_three: "Students can learn and test their skills through MCQ system.",
    desc_four: "Above all its a MERN Stack Project",
    stacks: ["Bootstrap", "React JS", "React-dom", "Firebase", "Node JS", "Express JS", "MongoDB"]
  },
  {
    id: 7,
    category: "Full Stack Project",
    totalLike: "280",
    title: "Hello Hotel",
    subTitle: "Hotel room booking website",
    image: helloHotel,
    live_server: 'https://hello-hotel-4173d.web.app/',
    client: 'https://github.com/hasanulhasan/hello-hotel',
    server: 'https://github.com/hasanulhasan/hello-hotel-server',
    desc_one: "A simple hotel booking app",
    desc_two: "User can book a hotel for a particular date",
    desc_three: "User can see hotel book info in dashboard",
    desc_four: "This is a MERN Stack Project",
    stacks: ["Tailwind CSS", "React", "React-dom", "Tanstack-Query", "Firebase", "MongoDB", "NodeJS", "Express JS"]
  },
  {
    id: 8,
    category: "Full Stack Project",
    totalLike: "690",
    title: "Photo Gallery App",
    subTitle: "Photo Gallery website",
    image: photoGallery,
    live_server: 'https://photo-gallery-app-d9ec9.web.app/',
    client: 'https://github.com/hasanulhasan/photo-gallery-app',
    server: 'https://github.com/hasanulhasan/photo-gallery-app-server',
    desc_one: "A simple photo gallery app",
    desc_two: "Various kinds of category added",
    desc_three: "User can comment on photo",
    desc_four: "This is a MERN Stack Project",
    stacks: ["Flowbite", "React", "React-dom", "Tanstack-Query", "Firebase", "MongoDB", "NodeJS", "Express JS"]
  },
  {
    id: 9,
    category: "Full Stack Project",
    totalLike: "780",
    title: "Doctor Portal",
    subTitle: "Website for dentists information appointment",
    image: doctorPortal,
    live_server: '',
    client: '',
    server: '',
    desc_one: "User can book a particular date for appointment with doctor",
    desc_two: "Doctor can see the booking information from his Admin Dashboard",
    desc_three: "Information of Doctor can be seen on this site",
    desc_four: "User can pay their service fee with Stripe",
    stacks: ["Tailwind CSS", "Daisy UI", "TanStack Query", "React JS", "Firebase", "Node JS", "Express JS", "MongoDB"]
  },
]
export default Portfolio_data
