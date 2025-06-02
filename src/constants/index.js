import {
  web,
  javascript,
  html,
  css,
  git,
  springBoot,
  
  stripe,
  ecom,
  hplus,
  java,
  github,
  mysql,
  jira,
  reactjs,
  bitbucket,
  sourcetree,
  kodnest,
  hh,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume"
  }
];

const services = [
  {
    title: "Java FullStack Developer",
    icon: web,
  },
  
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springBoot,
  },
  {
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Bitbucket",
    icon: bitbucket,
  },
  {
    name: "SourceTree",
    icon: sourcetree,
  }
];

const experiences = [
  {
    title: "Java FullStack Developer Intern",
    company_name: "KodNest Technologies, Bangalore",
    icon: kodnest,
    iconBg: "#383E56",
    date: "June 2024 - Jan 2025",
    points:[
  "Built a full-stack e-commerce website for small businesses using React.js and Spring Boot.",
  "Created separate interfaces for admin and customers with easy-to-use features.",
  "Developed REST APIs to connect the frontend with the backend smoothly.",
  "Used JWT for secure login and Razorpay for online payments.",
  "Admin can manage users, products, orders, and view reports.",
  "Customers can browse products, manage accounts, use a shopping cart, and track orders.",
  "Used MySQL for database and Docker to run the application in containers.",
  "Focused on clean code, security, and building a scalable system."
],
  },
  {
    title: "Java Developer Intern",
    company_name: "HulkHire Tech, Hyderabad",
    icon: hh,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Apr 2024",
    points: [
  "Built a core payment system for an e-commerce client using Java, Spring Boot, and Microservices.",
  "Integrated Stripe API for payment processing, status tracking, and notifications.",
  "Created REST APIs for payment processing and built a full payment status lifecycle system.",
  "Used Spring JDBC with MySQL to manage database operations.",
  "Handled payment errors using Spring Exception Handling and custom error codes.",
  "Used Factory and Builder design patterns to keep code clean and modular.",
  "Tested and debugged Stripe notifications to ensure 100% payment reliability.",
  "Worked in an Agile team and followed best coding practices.",
  "Received STAR Performer of the Month award for delivering tasks on time and supporting the team."
],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Stripe Payment Integration",
    description:
        "I integrated the Stripe payment gateway into a web application to allow users to make secure payments using credit and debit cards. I built backend APIs to handle payment creation and confirmation, and set up webhook listeners to update payment status in real time. The integration uses Stripe’s tokenization to protect sensitive payment information, providing users with a smooth and safe checkout experience. This project helped me gain practical skills in working with payment APIs and secure transaction processing.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "Stripe API",
        color: "orange-text-gradient",
      },
      {
        name: "Microservices Architecture",
        color: "pink-text-gradient",
      },
      
      {
        name: "RESTful APIs",
        color: "blue-text-gradient",
      },
      {
        name: "Agile",
        color: "orange-text-gradient",
      },
      {
        name: "Unit Testing",
        color: "pink-text-gradient",
      },
    ],
    image: stripe,
    visit_link: "https://github.com/smansoor481/Stripe-Payment-Integration",
  },
  {
    name: "Salesavy E-commerce Application",
    description:
      "I developed a full-stack e-commerce platform called Sales Savvy for small and medium businesses. It includes an admin panel to manage users, products, and orders, and a customer interface for browsing products, managing accounts, and tracking orders. I integrated Razorpay payment gateway with JWT authentication to ensure secure payments. I built backend APIs to connect the React frontend with the Spring Boot backend and used MySQL for data storage. This project helped me learn how to build scalable, secure, and user-friendly web applications.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "Razorpay",
        color: "orange-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "orange-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },

    ],
    image: ecom,
    visit_link: "https://github.com/smansoor481/Sales_Savvy_Ecommerce_Website",
  },
  {
    name: "H+ Sports Portal Application",
    description:
      "I built H+ Sports, a Java web application using the Spring MVC framework, following the MVC design pattern. I developed controllers, handled form validations, and configured view resolvers to render dynamic content. The app includes features like localization, global error handling, and interceptors to manage request flow. I also implemented UI theming and built RESTful APIs to support modern integrations. This project enhanced my backend development skills and gave me a strong grasp of Spring’s web capabilities.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
      {
        name: "Postman",
        color: "orange-text-gradient",
      },
      {
        name: "Spring MVC",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "JSP",
        color: "green-text-gradient",
      },
     
    ],
    image: hplus,
    visit_link: "https://github.com/smansoor481/Hplus_Sports_Portal_Application",
  },
];

export { services, technologies, experiences, projects };
