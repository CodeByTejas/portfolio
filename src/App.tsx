import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Shield,
  Bot,
} from 'lucide-react';
import Hero3D from './components/Hero3D';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import ExperienceCard from './components/ExperienceCard';
import ExperiencePath from './components/ExperiencePath';

const projects = [
  {
    title: 'RoboRover',
    description:
      'Autonomous security robot with YOLO-based face recognition system.',
    image: 'https://content.instructables.com/FY3/WAQL/KAL2SEFQ/FY3WAQLKAL2SEFQ.jpg?auto=webp&frame=1&width=600&height=1024&fit=bounds&md=MjAyMC0wNS0yNCAxNTozMDoxNC4w',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['Python', 'ROS', 'Computer Vision', 'AI'],
  },
  {
    title: 'Intellipick Robotic Arm',
    description:
      'ROS-Integrated Robotic Arm controller.',
    image: 'https://d3s5r33r268y59.cloudfront.net/16042/products/thumbs/2015-03-02T05:55:53.350Z-img_5828-2_1.jpg.2560x2560_q85.jpg',
    github: 'https://github.com/CodeByTejas/advanceRoboticArm',
    demo: 'https://github.com/CodeByTejas/advanceRoboticArm',
    tags: ['Python', 'ROS', 'Computer Vision', 'AI'],
  },
  {
    title: 'Cold Mail Generator',
    description: 'AI-driven personalized cold email generator using GPT-3.',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshurutech.com%2Fwp-content%2Fuploads%2F2023%2F06%2FLangChain-Components.webp&f=1&nofb=1&ipt=36a8a19d5b880512d230629ecee60cf14c7436535978a0a42342b73ba62d07cb&ipo=images',
    github: 'https://github.com/CodeByTejas/Cold-Email_Generator',
    demo: 'https://github.com/CodeByTejas/Cold-Email_Generator',
    tags: ['React', 'Node.js', 'OpenAI', 'TypeScript'],
  },
  {
    title: 'StegoCrypto',
    description: 'A Django-Based Hybrid Encryption and Steganography System.',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-blog.adafruit.com%2Fuploads%2F2021%2F07%2F1624982993628-4-cryptography-600x299.jpg&f=1&nofb=1&ipt=42c86adf39a017339d1a1d64e6bdf35e5f993b0d9895b67ea039a5a593039600&ipo=images',
    github: 'https://github.com/CodeByTejas/StegoCrypto',
    demo: 'https://github.com/CodeByTejas/StegoCrypto',
    tags: ['Django', 'AES + Triple DES', 'Stegnography', 'Pillow'],
  },
  {
    title: 'Linux Monitoring System',
    description: 'Secure document preparation and UPI payment processing system.',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pUDlBdC3obUileYU4r8W4gHaEK%26pid%3DApi&f=1&ipt=8cd449c1303b67cb447cb1b8a47f0fbc495a8be5b9b0d15347a9925bce0a27fb&ipo=images',
    github: 'https://github.com/CodeByTejas/monitoringSystem',
    demo: 'https://github.com/CodeByTejas/monitoringSystem',
    tags: ['C++', 'Ncurses', 'CMake', 'Security'],
  },
  {
    title: 'Anomaly Detection in Networks Using Machine Learning',
    description: 'Anomaly Detection in Networks Using Machine Learning in cyber attacks trends',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.anyviz.io%2Fwp-content%2Fuploads%2F2022%2F01%2FCloud-Anomaly-Detection.png&f=1&nofb=1&ipt=5b3c0f7f717a26149fe87abbc660cc0f5feef7960f3203fdb9dc53b59e8658b7&ipo=images',
    github: 'https://github.com/CodeByTejas/anomalyDetectionML',
    demo: 'https://github.com/CodeByTejas/anomalyDetectionML',
    tags: ['Python', 'pandas', 'numpy', 'Jupyter Notebook'],
  },
];

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 85 },
  { name: 'ROS', level: 75 },
  { name: 'Cybersecurity', level: 80 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen overflow-hidden pt-16">
        <Hero3D />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl font-bold text-gray-900">
                Hi, I'm <span className="text-indigo-600">Tejas Sanjay Gupta</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
              A Robotics Engineer and Software Developer passionate about creating intuitive, 
              user-friendly applications and impactful systems that merge innovation with technical precision.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#contact"
                  className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
                >
                  Contact Me
                </a>
                <a
                  href="https://drive.google.com/file/d/1ofv75-Re0A7MHdQDm9Vj-X_0yxNIcTei/view?usp=drive_link"
                  className="flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-50"
                >
                  <Download size={20} />
                  Resume
                </a>
              </div>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://github.com/CodeByTejas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/guptatejas22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="guptatejas86@gmail.com"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  <Mail size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-12 md:grid-cols-2"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
              <p className="mt-4 text-lg text-gray-600">
                I'm a passionate engineer with expertise in robotics, software
                development, and cybersecurity. With a strong foundation in both
                hardware and software, I create innovative solutions that bridge the
                gap between these domains.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg">
                <Code size={32} className="text-indigo-600" />
                <h3 className="mt-4 text-lg font-semibold">Development</h3>
                <p className="mt-2 text-center text-gray-600">
                  Full-stack development with modern technologies
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg">
                <Bot size={32} className="text-indigo-600" />
                <h3 className="mt-4 text-lg font-semibold">Robotics</h3>
                <p className="mt-2 text-center text-gray-600">
                  ROS-based autonomous systems
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg">
                <Shield size={32} className="text-indigo-600" />
                <h3 className="mt-4 text-lg font-semibold">Security</h3>
                <p className="mt-2 text-center text-gray-600">
                  Application security and VAPT
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          <div className="mt-12">
            <ExperiencePath />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ExperienceCard
                title="Chief Technical Officer"
                company="IEEE - Ramrao Adik Institute of Technology"
                location="Navi Mumbai-Hybrid"
                period="July 2024 - Present"
                description="Leading technical strategy and innovation initiatives. Managing a team of developers and architects. Implementing cutting-edge solutions for enterprise clients."
                index={0}
              />
              <ExperienceCard
                title="Cybersecurity Intern"
                company="Cybersapiens United LLP"
                location="Mangalore-Remote"
                period="April 2024 - October 2024"
                description="Conducted vulnerability assessments and penetration testing. Developed security protocols and incident response procedures. Implemented security awareness training programs."
                index={1}
              />
              <ExperienceCard
                title="Research WingHead"
                company="IEEE - Ramrao Adik Institute of Technology"
                location="Navi Mumbai-Hybrid"
                period="June 2023 - June 2024"
                description="Led research initiatives in AI and robotics. Published papers on autonomous systems. Mentored junior researchers and coordinated project teams."
                index={2}
              />
              <ExperienceCard
                title="Technical Content Curator"
                company="MyEquation United LLP"
                location="Mumbai-Remote"
                period="Dec 2023 - Feb 2024"
                description="We create high-quality, engaging content on Robotics and AI/ML, including tutorials, guides, and educational resources, to simplify complex concepts and inspire learning. Our mission is to bridge the gap between technology and its audience by delivering accurate, trend-driven insights."
                index={2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <SkillBadge
                key={skill.name}
                name={skill.name}
                level={skill.level}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              I'm always open to new opportunities and collaborations.
            </p>
          </div>
          <form className="mx-auto mt-12 max-w-xl">
            <div className="grid gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-white">
        <p>© 2024 Tejas Sanjay Gupta | Made with ❤️ and React</p>
      </footer>
    </div>
  );
}