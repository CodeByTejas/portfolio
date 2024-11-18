import { useState } from 'react';
import { motion } from 'framer-motion';

const techStack = [
  {
    name: 'ROS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Ros_logo.svg'
  },
  {
    name: 'Linux',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg'
  },
  {
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
  },
  {
    name: 'HTML',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
  },
  {
    name: 'CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
  },
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
  },
  {
    name: 'TypeScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
  },
  {
    name: 'Python',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
  },
  {
    name: 'Node.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
  },
  {
    name: 'C++',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'
  },
  {
    name: 'Three.js',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg'
  },
  {
    name: 'Kali Linux',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg'
  }
];

function HexagonLogo({ logo, name }: { logo: string; name: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="hexagon-container">
        <div 
          className={`hexagon ${isHovered ? 'hexagon-hover' : ''}`}
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'white',
            padding: '20px',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            boxShadow: isHovered ? '0 8px 16px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)',
          }}
        >
          <img 
            src={logo} 
            alt={name} 
            className="w-16 h-16 object-contain"
          />
        </div>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap"
          >
            {name}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function TechStackHexagon() {
  return (
    <div className="relative w-full py-12">
      <div className="flex flex-wrap justify-center gap-8 items-center max-w-4xl mx-auto">
        {techStack.map((tech) => (
          <HexagonLogo
            key={tech.name}
            logo={tech.logo}
            name={tech.name}
          />
        ))}
      </div>
    </div>
  );
}
