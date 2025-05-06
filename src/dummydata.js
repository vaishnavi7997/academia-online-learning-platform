import id1 from "./assets/id1.jpg";
import id2 from "./assets/id2.jpg";
import id3 from "./assets/id3.jpg";

import a1 from "./assets/a1.png";
import a2 from "./assets/a2.png";
import a3 from "./assets/a3.png";
import a4 from "./assets/a4.png";

import course1 from "./assets/icon.jpg"
import course2 from "./assets/icon.jpg"
import course3 from "./assets/icon.jpg"
import course4 from "./assets/icon.jpg"
import course5 from "./assets/icon.jpg"
import course6 from "./assets/icon.jpg"
import course7 from "./assets/icon.jpg"
import course8 from "./assets/icon.jpg"
import course9 from "./assets/icon.jpg"


import teacher1 from "./assets/teacher.jpg"
import teacher2 from "./assets/teacher.jpg"
import teacher3 from "./assets/teacher.jpg"
import teacher4 from "./assets/teacher.jpg"
import teacher5 from "./assets/teacher.jpg"
import teacher6 from "./assets/teacher.jpg"
import teacher7 from "./assets/teacher.jpg"
import teacher8 from "./assets/teacher.jpg"
import teacher9 from "./assets/teacher.jpg"


import js from "./assets/js.png"
import html from "./assets/html.png"
import css from "./assets/css.png"
import react from "./assets/react.png"
import node from "./assets/node.png"
import mongo from "./assets/mongo.png"
import git from "./assets/git.png"
import boot from "./assets/boot.png"
import py from "./assets/py.png"


import team1 from "./assets/team1.png"
import team2 from "./assets/team2.png"
import team3 from "./assets/team3.png"
import team4 from "./assets/team4.png"


import person1 from "./assets/person1.png"
import person2 from "./assets/person2.png"
import person3 from "./assets/person3.png"
import person4 from "./assets/person4.png"
import person5 from "./assets/person5.png"

import blog1 from './assets/img.jpg'
import blog2 from './assets/person5.png'
import blog3 from './assets/team4.png'
import blog4 from './assets/team2.png'


export const homeAbout = [
    {
      id: 1,
      cover: id1,
      title: "Expert Instructors",
      desc: "Our certified educators bring years of experience and subject expertise to help students succeed academically and professionally.",
    },
    {
      id: 2,
      cover: id2,
      title: "Interactive Learning",
      desc: "We offer interactive and engaging learning experiences through quizzes, live sessions, and hands-on projects.",
    },
    {
      id: 3,
      cover: id3,
      title: "Flexible Schedule",
      desc: "Access high-quality courses at your own pace with flexible learning schedules designed to suit busy lifestyles.",
    },
  ]
  

  export const awrapper = [
    {
      id: 1,
      cover: a1,
      title: "1000+",
      desc: "Students",
    },
    {
      id: 2,
      cover: a2,
      title: "587",
      desc: "Courses",
    },
    {
      id: 3,
      cover: a3,
      title: "24/7",
      desc: "Support",
    },
    {
        id: 4,
        cover: a4,
        title: "1,000",
        desc: "Schedules",
      }
  ]


  export const coursesCard = [
    {
      id: 1,
      cover: course1,
      courseName: "Front-End Web Development",
      courseTeacher: [
        {
          dcover: teacher1,
          name: "Aman Verma",
          totalTime: "18h 45m lecture",
        },
      ],
      priceAll: "₹3999",
      pricePer: "₹399/month",
    },
    {
      id: 2,
      cover: course2,
      courseName: "UI/UX Design Masterclass",
      courseTeacher: [
        {
          dcover: teacher2,
          name: "Sneha Roy",
          totalTime: "12h lecture",
        },
      ],
      priceAll: "₹3499",
      pricePer: "₹349/month",
    },
    {
      id: 3,
      cover: course3,
      courseName: "Python Programming Essentials",
      courseTeacher: [
        {
          dcover: teacher3,
          name: "Ravi Shankar",
          totalTime: "20h 30m lecture",
        },
      ],
      priceAll: "₹4499",
      pricePer: "₹429/month",
    },
    {
      id: 4,
      cover: course4,
      courseName: "Digital Marketing Bootcamp",
      courseTeacher: [
        {
          dcover: teacher4,
          name: "Nikita Sharma",
          totalTime: "15h lecture",
        },
      ],
      priceAll: "₹3799",
      pricePer: "₹359/month",
    },
    {
      id: 5,
      cover: course5,
      courseName: "Data Structures & Algorithms",
      courseTeacher: [
        {
          dcover: teacher5,
          name: "Yash Mehta",
          totalTime: "25h lecture",
        },
      ],
      priceAll: "₹4999",
      pricePer: "₹499/month",
    },
    {
      id: 6,
      cover: course6,
      courseName: "React.js for Beginners",
      courseTeacher: [
        {
          dcover: teacher6,
          name: "Pooja Singh",
          totalTime: "13h 10m lecture",
        },
      ],
      priceAll: "₹2999",
      pricePer: "₹279/month",
    },
    {
      id: 7,
      cover: course7,
      courseName: "Full-Stack Web Development",
      courseTeacher: [
        {
          dcover: teacher7,
          name: "Vikram Chauhan",
          totalTime: "32h lecture",
        },
      ],
      priceAll: "₹5999",
      pricePer: "₹599/month",
    },
    {
      id: 8,
      cover: course8,
      courseName: "Adobe Photoshop & Illustrator",
      courseTeacher: [
        {
          dcover: teacher8,
          name: "Neha Patel",
          totalTime: "10h 45m lecture",
        },
      ],
      priceAll: "₹2899",
      pricePer: "₹249/month",
    },
    {
      id: 9,
      cover: course9,
      courseName: "Machine Learning with Python",
      courseTeacher: [
        {
          dcover: teacher9,
          name: "Aarav Mishra",
          totalTime: "28h lecture",
        },
      ],
      priceAll: "₹6999",
      pricePer: "₹649/month",
    },
  ];


  export const online = [
    {
      cover: js,
      hoverCover: js,
      courseName: "Modern JavaScript",
      course: "JavaScript for Beginners to Advanced",
    },
    {
      cover: html,
      hoverCover: html,
      courseName: "HTML Mastery",
      course: "HTML5 Essentials and Projects",
    },
    {
      cover: css,
      hoverCover:css ,
      courseName: "CSS Complete Guide",
      course: "From Basics to Flexbox & Grid",
    },
    {
      cover: react,
      hoverCover: react,
      courseName: "React.js Bootcamp",
      course: "Build Dynamic Frontends with React",
    },
    {
      cover: node,
      hoverCover:node,
      courseName: "Node.js & Express",
      course: "Backend Development with REST APIs",
    },
    {
      cover: mongo,
      hoverCover:mongo ,
      courseName: "MongoDB Crash Course",
      course: "NoSQL Database Fundamentals",
    },
    {
      cover:git ,
      hoverCover: git,
      courseName: "Version Control with Git",
      course: "Git & GitHub for Developers",
    },
    {
      cover: boot,
      hoverCover: boot,
      courseName: "Bootstrap 5 UI Design",
      course: "Responsive Layouts with Bootstrap",
    },
    {
      cover: py,
      hoverCover: py,
      courseName: "Python for Everyone",
      course: "Python Basics to OOP",
    },
  ]
  

  export const team = [
    {
      cover: team1,
      name: "Dr. Anjali Rao",
      position: "Founder & Head Instructor",
      bio: "10+ years of experience in computer science education and ed-tech innovation."
    },
    {
      cover: team2,
      name: "Mr. Rajesh Kumar",
      position: "Senior Frontend Trainer",
      bio: "Expert in HTML, CSS, React, and UI/UX with 7 years of teaching experience."
    },
    {
      cover: team3,
      name: "Ms. Priya Mehta",
      position: "Data Science Mentor",
      bio: "Specializes in Python, ML, and AI with a strong academic and industry background."
    },
    {
      cover: team4,
      name: "Mr. Karan Desai",
      position: "Backend Developer & Instructor",
      bio: "Teaches Node.js, Express, and MongoDB. Loves building scalable applications."
    },
  ]

  
export const testimonial = [
  {
    id: 1,
    name: "Aarav Sharma",
    post: "Computer Science Student",
    cover: person1,
    desc: "This platform transformed my learning experience! The courses are easy to understand and the instructors are very helpful.",
  },
  {
    id: 2,
    name: "Sneha Patel",
    post: "Web Development Intern",
    cover: person2,
    desc: "Thanks to this site, I gained real-world skills and landed my first internship. Highly recommended for beginners.",
  },
  {
    id: 3,
    name: "Ravi Kumar",
    post: "BSc Graduate",
    cover: person3,
    desc: "The well-structured content and practical projects helped me build confidence and improve my resume.",
  },
  {
    id: 4,
    name: "Anjali Mehta",
    post: "Frontend Developer Trainee",
    cover: person4,
    desc: "I loved the interactive lessons and the supportive community. It’s the perfect place to grow as a developer.",
  },
  {
    id: 5,
    name: "Kunal Joshi",
    post: "MERN Stack Learner",
    cover: person5,
    desc: "The full-stack course was exactly what I needed. Great value, engaging content, and awesome mentors!",
  },
];

export const price = [
  {
    id: 1,
    name: "Free Plan",
    price: "0",
    desc: "Access to limited course content, community support, and basic learning tools. Perfect for beginners exploring the platform.",
  },
  {
    id: 2,
    name: "Basic Plan",
    price: "19",
    desc: "Includes all Free Plan features plus access to quizzes, certificates, and beginner-level projects.",
  },
  {
    id: 3,
    name: "Pro Plan",
    price: "49",
    desc: "Includes Basic Plan features plus advanced courses, mentor support, downloadable materials, and live webinars.",
  },
  {
    id: 4,
    name: "Premium Plan",
    price: "99",
    desc: "Full access to all features including career counseling, 1-on-1 mentoring, job assistance, and project reviews.",
  },
]


export const Faq = [
  {
    id: 1,
    title: "What types of courses are available?",
    desc: "We offer a wide range of courses including Web Development, Data Science, Machine Learning, UI/UX Design, and more.",
  },
  {
    id: 2,
    title: "Do I get a certificate after completing a course?",
    desc: "Yes, all our courses come with a certificate of completion which you can add to your resume or LinkedIn profile.",
  },
  {
    id: 3,
    title: "Are the courses beginner-friendly?",
    desc: "Absolutely! We have beginner to advanced level courses. You can start learning without any prior experience.",
  },
  {
    id: 4,
    title: "Can I access the courses after enrollment?",
    desc: "Yes, once you enroll in a course, you get lifetime access to its content, including future updates.",
  },
  {
    id: 5,
    title: "Is there any job support or placement assistance?",
    desc: "Yes, our Premium Plan includes job assistance, resume review, and interview preparation to help you land a job.",
  },
];



export const blog = [
  {
    id: 1,
    cover: blog1,
    type: "Admin",
    date: "April 10, 2025",
    com: "12 Comments",
    title: "5 Tips to Stay Focused While Learning Online",
    desc: "Discover effective techniques to avoid distractions and maximize productivity during your online learning journey.",
  },
  {
    id: 2,
    cover: blog2,
    type: "Instructor",
    date: "April 17, 2025",
    com: "8 Comments",
    title: "How to Choose the Right Programming Course",
    desc: "Learn how to pick the best course that matches your career goals, current skill level, and learning style.",
  },
  {
    id: 3,
    cover: blog3,
    type: "Admin",
    date: "May 2, 2025",
    com: "15 Comments",
    title: "Top 10 Resources to Learn JavaScript in 2025",
    desc: "From YouTube channels to full-stack bootcamps, here are the best resources to master JavaScript.",
  },
  {
    id: 4,
    cover: blog4,
    type: "Student",
    date: "May 5, 2025",
    com: "5 Comments",
    title: "My Experience Building a Portfolio as a Beginner",
    desc: "One student's honest journey of building their first developer portfolio with no prior experience.",
  },
]