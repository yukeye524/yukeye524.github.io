const logotext = "Keye Yu";
const meta = {
  title: "Keye Yu",
  description: "I'm Keye Yu",
};

const introdata = {
  title: "Keye Yu",
  //   animated: {
  //     first: "[]",
  //     second: "[]",
  //   },
  //   description:
  //     "In the past, I was a Research Assistant at the KAIST Interaction Lab (KIXLAB) developing a Generative Agent for Programming Education. My research interests are at the intersection of Human-AI Interaction and applied Machine Learning.",
  //   description_two:
  //     "  I am currently a first year Computer Science (MS) student at Stanford and I did my undergrad at Cornell studying Information Science. I have received grants and scholarships for my research like the Robert S Ann Morley Research Grant and the Gwanjeong Scholarship for my Master's Studies.",
  //   your_img_url: "",
};

const dataabout = {
  title: "Research Interests",
  aboutme:
    "My research interests lie at the intersection of user research and emerging technologies, with a particular passion for accessibility and the design of AI agents. Currently, my work focuses on embedded AI, specifically exploring the bodily representation of large language models.",
};
const worktimeline = [
  {
    jobtitle: "University of Washington, Seattle, US",
    where: "MS Human-Centered Design and Engineering",
    date: "Sep 2025 - Present",
  },
  {
    jobtitle: "University College London, UK",
    where: "BSc Psychology",
    date: "Sep 2021 - July 2024",
  },
];

const skills = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "Djano",
    value: 85,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "React",
    value: 60,
  },
  {
    name: "Jquery",
    value: 85,
  },
];

const services = [
  // {
  //   title: "SDG AI Lab - Software Engineer",
  //   period: "March 2023 - May 2023",
  //   description:
  //     "Development of the Digital Technologies Radar : a Frontier Technology Radar for Disaster Risk Reduction (FTR4DRR), which allows for the systematic tracking and understanding of frontier technologies as they are developed. https://github.com/SDG-AI-Lab/Digital_Technologies_Radar",
  // },
];

const awards = [
  // {
  //   title: "Gwanjeong Educational Foundation Scholarship - Masters Degree",
  //   period: "Sep 2023 - June 2025",
  // },
  // {
  //   title:
  //     "ACM/IEEE Human Robot Interaction (HRI 2023) - Best Student Paper Award",
  //   period: "March 2022",
  // },
  // {
  //   title: "Robert S Ann Morley Research Grant - Cornell University",
  //   period: " December 2021 ",
  // },
];

const workexperience = [
  {
    title: "Product Manager Intern, Aixuexi Tech., Beijing, CN",
    period: "04/2025 - 08/2025",
    description: "Led end-to-end design for the 'Dynamic Blackboard' feature by conducting mixed-method research with 17 teachers to identify core pain points and inform a data-driven roadmap. I created wireframes and user flows, facilitated workshops, and collaborated with developers in Agile sprints to negotiate trade-offs. The final product was launched in over 6,000 live classes, successfully cutting teacher prep time by 25% and doubling new-teacher satisfaction."
  },
  {
    title: "Product Designer Volunteer, Rexivor, Remote",
    period: "09/2025 - present",
    description: "As a volunteer Product Designer at Rexivor, I defined the UX strategy by conducting stakeholder interviews and competitive analysis to identify intent-matching as a key differentiator. I then delivered rapid prototypes for core platform features, including onboarding and expert matching, and iterated based on internal testing. To ensure scalability and accessibility, I collaborated with PMs and developers to build a responsive, WCAG-compliant UI kit using atomic design principles."
  },
  {
    title: "UX/UI Designer Volunteer, SmartMate, Remote",
    period: "09/2025 - present",
    description: "As a volunteer UX/UI Designer for an assistive communication platform, I conducted competitive analysis and user research to identify market gaps and MVP-stage pain points, which informed the product roadmap I co-led with the CEO. I then designed a comprehensive visual system, including color, typography, and iconography, while ensuring all UI patterns were accessible, inclusive, and met cross-platform standards."
  },
  {
    title: "Branding Designer, Diaper Stork, Remote/Seattle, US",
    period: "09/2025 - present",
    description: "I led foundational research using competitive analysis and Jobs-To-Be-Done to frame the direction for an omni-channel UX strategy. I co-built a comprehensive, WCAG-accessible brand and modular design system, which achieved a 92% approval rate in early tests. My contributions included creating atomic components, prototyping flows in Figma for developer handoff, and facilitating weekly workshops to drive collaborative decision-making among stakeholders.",
  },
  {
    title: "Product Designer Intern, LemonBox, Shanghai, CN",
    period: "06/2024 - 08/2024",
    description: " I redesigned the LemonBox WeChat rewards store, which boosted page views and redemptions by 3x within one month. My data-driven process included competitive analysis, A/B testing, and persona mapping, with iterations guided by performance analytics. I delivered a complete visual revamp with mobile-first responsive flows, ensuring the final design met cross-platform and accessibility standards."
  },
  // {
  //   title: "[Motional] Robotics Research Engineer",
  //   period: "Sep 2022 - Dec 2022",
  //   description:
  //     "Research on identification of Autonomous Vehicle Lane Change key parameters and metrics in dynamic road environments interacting with other agents. Published and first authored 2 papers to ACM/IEEE HRI 2023",
  // },
  // {
  //   title: "[Harvard Berkman Klein Center] Software Engineer",
  //   period: "May 2023 - August 2023",
  //   description:
  //     "Developed Software for dynamic text annotation and page navigation on H2O, an open-casebook platform (React, Django). Conducted Research on Digital Reading Interaction Software and published paper to ACM/IEEE CHI 2023",
  // },
  // {
  //   title: "[Cochl. AI] Software Engineer",
  //   period: "Nov 2020 - Feb 2021 ",
  //   description:
  //     "Integrated non-verbal sound recognition AI into Mercedes Benz User Interface. Full-stack development using React, Javascript, SocketIO, Docker. Developed and demonstrated a working prototype of Emotional Sound Recognition within Benz Cars to the Mercedes Benz Team - Presentation at Benz conference in Germany",
  // },
];

const researchexperience = [
  {
    title: "Embodied LLM and Bodily Representation, Tsinghua University, Remote",
    period: "Sep 2025 – present",
    description:
      "As the lead on an adaptive reading system project, I architected and implemented a browser-based Tampermonkey userscript that leverages MediaPipe Face Mesh for real-time facial landmark detection. This system dynamically adapts font size and color contrast by precisely calculating the user's viewing distance. I executed a comprehensive user study with 24 middle-aged adults to evaluate the system's impact on reading speed, comprehension, and comfort. Following the study, I performed qualitative thematic analysis on interviews, which uncovered key usability insights, such as the trade-off between the cognitive load of adaptations and performance gains. I also spearheaded the writing of the research paper submitted to a top-tier HCI conference, contributing significantly to the literature review, system design, and discussion sections.",
  },
  {
    title: "Adaptive Reading System Research, Tsinghua University, Beijing, CN",
    period: "Apr 2025 – Aug 2025",
    description:
      "For a CHI 2026 conference submission, I led an end-to-end, mixed-methods research study with 24 middle-aged users to evaluate adaptive font and contrast features. I performed rigorous statistical analysis (MANOVA) on performance data and thematic analysis on qualitative interviews, uncovering a key performance-preference paradox. Based on these findings, I delivered actionable UX recommendations that bridged the gap between users' subjective preferences and their objective performance.",
  },
  {
    title: "Companion Robots for Chinese Retirees ",
    period: "June 2023 – Jan 2024",
    description:
      "I investigated the challenges of companion robot adoption by conducting a literature review and leading focus group discussions with 18 Chinese retirees. I performed thematic analysis on the qualitative data, synthesizing findings into 10 key themes to understand user perceptions and ideal functionalities. This research formed the basis of a paper I co-authored for the CSCW 2025 conference.",
  },
  {
    title:
      "VR Gestures for People With Spinal Muscular Atrophy (SMA)",
    period: "Jul 2024 – Dec 2024",
    description:
      "I identified research gaps through a literature review and contributed to the user-centered design process by recruiting participants and conducting interviews. I also assisted in developing a taxonomy for VR gestures, analyzed user-defined gesture data, and helped edit the final manuscript for its submission to the CHI 2024 conference.",
  },

  {
    title: "A EEG-based Political Psychology Research: Neural Response Patterns to Political Texts",
    period: "Jan 2023 – May 2023",
    description:
      "I supported the experimental workflow by assisting with experiment setup, operating the EEG equipment, and using MATLAB for data extraction and analysis. I also contributed to refining the study by providing participant feedback to improve the overall methodology.",
  },

  {
    title: "Doomscrolling: A Human Decision-making Research",
    period: "Oct 2022 – Aug 2023",
    description:
      "I investigated the characteristics of doomscrolling by reviewing literature to design behavioral testing frameworks. I then analyzed data from 191 participants using R, employing Principal Component Analysis (PCA) to identify underlying psychopathological patterns.",
  },
];

const dataportfolio = [
  {
    img: "newResearch",
    title:
      "Balancing Automation and Agency: How Middle-Aged Adults Experience Dynamic Adaptations During Digital Reading",
    authors: [
      { name: "Keye Yu*", bold: true },
      { name: "Yuzhuo Jia*", bold: false },
      { name: "Chen Zheng", bold: false },
    ],
    conference: "Submit to CHI 26",
    // notes: "Submit to CHI 26",
  },
    {
    img: "cognitive",
    title:
      "Model and Adaptive Calibration of Users’ Trust under Cognitive Load in Automated Vehicle Takeovers",
    authors: [
      { name: "Shixuan Li", bold: false },
      { name: "ZHIMING LIU", bold: false },
      { name: "Keye Yu", bold: true },
      { name: "Licong Liu", bold: false },
      { name: "Shuning Zhang", bold: false },
      { name: "Yu Tian", bold: false },
      { name: "Xin Yi", bold: false },
      { name: "Changhua Jiang", bold: false },
      { name: "Hewu Li", bold: false },
    ],
    conference: "Submit to CHI 26",
    // notes: "Submit to CHI 26",
  },
  {
    img: "bibm1",
    title:
      "Challenges in Adopting Companion Robots: An Exploratory Study of Robotic Companionship Conducted with Chinese Retirees",
    authors: [
      { name: "Mengyang Wang", bold: false },
      { name: "Keye Yu", bold: true },
      { name: "Yukai Zhang", bold: false },
      { name: "Mingming Fan", bold: false },
    ],
    conference:
      "ACM Conference on Computer-Supported Cooperative Work and Social Computing (CSCW2025)",
    doi: "https://doi.org/10.1145/3710943",
  },
  {
    img: "yolo5",
    title:
      "Designing Gaze-Assisted Upper-Body Gesture Interaction with and for People with Spinal Muscular Atrophy in VR",
    authors: [
      { name: "Jingze Tian*", bold: false },
      { name: "Yingna Wang*", bold: false },
      { name: "Keye Yu", bold: true },
      { name: "Liyi Xu", bold: false },
      { name: "Junan Xie", bold: false },
      { name: "Franklin Mingzhe Li", bold: false },
      { name: "Yafeng Niu", bold: false },
      { name: "Mingming Fan", bold: false },
    ],
    conference:
      "2024 CHI Conference on Human Factors in Computing Systems",
    doi: "https://arxiv.org/abs/2403.16107",
  },
];

const projectportfolio = [
  {
    img: "paper",
    title: "Face-to-Face Plus",
    description:
      "A digital module designed to standardize and elevate teacher performance within the 'Face-to-Face Plus' program. It provides a structured environment for lesson rehearsal and offers scalable feedback, shifting the focus from simple content delivery to improving a teacher's practical skills and confidence.",
    //website: "",
  },
  {
    img: "interview",
    title: "Investa - Confidence Investing",
    description:
      "I designed a gamified, emotionally intelligent fintech app for beginner investors — balancing AI-powered tutoring, social features, and bite-sized learning to reduce fear and build financial confidence.",
    //website: "",
  },

  {
    img: "dcd",
    title: "Diaper Stork Branding",
    description:
      " I led the creation of the full brand identity system, from the initial concept through to its cross-channel implementation. My role involved coordinating design collaboration, enforcing WCAG accessibility standards, and driving the adoption of a modular design system across all product and marketing touchpoints. This data-informed process was validated by a 92% approval rate in early user testing, confirming our design direction and motivating continued iteration.",
    //website: "",
  },
];

const contactConfig = {
  YOUR_EMAIL: "keyeyu25@uw.edu",
  YOUR_FONE: "-",
  description: "- ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  //github: "https://github.com/nohairblingbling",
  //   facebook: "https://facebook.com",
  //scholar: "https://scholar.google.com/citations?user=POepUzkAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/keyeyu",
  instagram: "https://www.instagram.com/yukeeii_?igsh=MTR4aXduejZtbWt6OA%3D%3D&utm_source=qr",
};
export {
  meta,
  dataabout,
  dataportfolio,
  researchexperience,
  workexperience,
  worktimeline,
  services,
  introdata,
  contactConfig,
  socialprofils,
  projectportfolio,
  logotext,
  awards,
};
