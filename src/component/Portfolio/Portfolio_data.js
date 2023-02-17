import mobileMarket from './../img/mobile-market.png'
import learnEngineering from './../img/learn-engineering.png'
import learningTime from './../img/learning-time.png'
import alphaAcademy from './../img/alpha-academy.jpg'
import helloHotel from './../img/hello-hotel.jpg'
import photoGallery from './../img/photo-gallery.jpg'
import newsToday from './../img/news-today.jpg'
import burgerBuilder from './../img/burger-builder.jpg'
import doctorPortal from './../img/doctor-portal.jpg'

const Portfolio_data = [
  {
    id: 1,
    category: "Full Stack Project",
    totalLike: "600",
    title: "Mobile Market",
    subTitle: "Mobile phone buying and selling Website",
    image: mobileMarket,
    desc_one: "Users can login in 3 ways and can maintain a dashboard.",
    desc_two: "Admin can control others and Buyer can add, delete and advertise phones.",
    desc_three: "User information of buyers and sellers can be manipulated through MongoDB",
    desc_four: "Above all its a MERN Stack Project"
  },
  {
    id: 2,
    category: "Full Stack Project",
    totalLike: "750",
    title: "Eagle Engineering",
    subTitle: "Engineering service related website",
    image: learnEngineering,
    desc_one: "Admin can add Service that store in MongoDB.",
    desc_two: " User Information can be controlled with firebase and MongoDB.",
    desc_three: "Users can put a realistic review and can add, delete, and edit these reviews.",
    desc_four: "Above all its a MERN Stack Project"
  },
  {
    id: 3,
    category: "Full Stack Project",
    totalLike: "630",
    title: "Learning Time",
    subTitle: "e-learning Website",
    image: learningTime,
    desc_one: "This is skill development site",
    desc_two: "User Can test quizzes and see mark",
    desc_three: "Result of quizzes can be shown in Chart and Graph",
    desc_four: "Above all its a MERN Stack Project"
  },
  {
    id: 4,
    category: "Full Stack Project",
    totalLike: "360",
    title: "Alpha Academy",
    subTitle: "e-learning and course selling Website",
    image: alphaAcademy,
    desc_one: "Users can see course details and purchase them only after login.",
    desc_two: "There added 2 types of login systems and save User Information with firebase",
    desc_three: "Students can learn and test their skills through MCQ system.",
    desc_four: "Above all its a MERN Stack Project"
  },
  {
    id: 5,
    category: "Full Stack Project",
    totalLike: "280",
    title: "Hello Hotel",
    subTitle: "Hotel room booking website",
    image: helloHotel,
    desc_one: "A simple hotel booking app",
    desc_two: "User can book a hotel for a particular date",
    desc_three: "User can see hotel book info in dashboard",
    desc_four: "This is a MERN Stack Project"
  },
  {
    id: 6,
    category: "Full Stack Project",
    totalLike: "690",
    title: "Photo Gallery App",
    subTitle: "Photo Gallery website",
    image: photoGallery,
    desc_one: "A simple photo gallery app",
    desc_two: "Various kinds of category added",
    desc_three: "User can comment on photo",
    desc_four: "This is a MERN Stack Project"
  },
  {
    id: 7,
    category: "Full Stack Project",
    totalLike: "430",
    title: "Burger Builder",
    subTitle: "Burger building and ordering website",
    image: burgerBuilder,
    desc_one: "A simple burger builder project",
    desc_two: "User can build burger",
    desc_three: "User can order his builded burger",
    desc_four: "This is a Full Stack project"
  },
  {
    id: 8,
    category: "Front End Project",
    totalLike: "780",
    title: "News Today",
    subTitle: "Online news and blog website",
    image: newsToday,
    desc_one: "This is a news portal and blog site",
    desc_two: "Pure JavaScript used for data fetching",
    desc_three: "Various kinds of news can be shown by category",
    desc_four: "Bootstrap is used for front end design"
  },
  {
    id: 9,
    category: "Full Stack Project",
    totalLike: "780",
    title: "Doctor Portal",
    subTitle: "Website for dentists information appointment",
    image: doctorPortal,
    desc_one: "User can book a particular date for appointment with doctor",
    desc_two: "Doctor can see the booking information from his Admin Dashboard",
    desc_three: "Information of Doctor can be seen on this site",
    desc_four: "User can pay their service fee with Stripe"
  },
]
export default Portfolio_data
