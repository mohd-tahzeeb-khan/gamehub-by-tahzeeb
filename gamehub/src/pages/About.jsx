import { useState } from 'react';
import { Gamepad2, Menu, X, ChevronDown, ChevronUp, Users, Trophy, Clock, Globe } from 'lucide-react';

// Company Statistics
const stats = [
  { 
    icon: <Users className="h-8 w-8 text-purple-500" />,
    value: "1.2M+",
    label: "Active Players"
  },
  { 
    icon: <Trophy className="h-8 w-8 text-purple-500" />,
    value: "50+",
    label: "Gaming Awards"
  },
  { 
    icon: <Clock className="h-8 w-8 text-purple-500" />,
    value: "8",
    label: "Years in Industry"
  },
  { 
    icon: <Globe className="h-8 w-8 text-purple-500" />,
    value: "120+",
    label: "Countries"
  }
];

// Team Members
const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/api/placeholder/300/300",
    bio: "Alex founded GameVerse in 2017 with a vision to create immersive gaming experiences that bring people together."
  },
  {
    name: "Sarah Chen",
    role: "Creative Director",
    image: "/api/placeholder/300/300",
    bio: "With 12+ years in game design, Sarah leads our creative team to develop visually stunning and engaging games."
  },
  {
    name: "Marcus Williams",
    role: "Lead Developer",
    image: "/api/placeholder/300/300",
    bio: "Marcus oversees all technical aspects of game development, ensuring smooth performance across all platforms."
  },
  {
    name: "Priya Patel",
    role: "Community Manager",
    image: "/api/placeholder/300/300",
    bio: "Priya builds and nurtures our player community, organizing events and gathering valuable feedback."
  }
];

// FAQ Items
const faqItems = [
  {
    question: "What makes GameVerse different from other gaming platforms?",
    answer: "GameVerse focuses on creating highly social gaming experiences with cross-platform compatibility. We prioritize community feedback in our development process and offer unique features like our custom game engine that allows for seamless transitions between different game worlds."
  },
  {
    question: "Do I need to pay to play games on GameVerse?",
    answer: "GameVerse offers both free-to-play titles and premium games. Our free games include optional in-game purchases, while premium titles are available for a one-time purchase with no hidden costs. We also offer a GameVerse Pro subscription that provides access to all premium games for a monthly fee."
  },
  {
    question: "How often do you release new games?",
    answer: "We typically release 2-3 major game titles per year, with regular updates and expansions for existing games throughout the year. Our development roadmap is shared publicly, and we welcome community input on future releases."
  },
  {
    question: "How can I report bugs or suggest new features?",
    answer: "We have a dedicated player feedback portal accessible from your account dashboard. You can submit bug reports, feature requests, and general feedback. Our community managers review all submissions and work closely with our development team to address issues and implement popular suggestions."
  },
  {
    question: "Do you offer career opportunities in game development?",
    answer: "Yes! We're always looking for talented individuals to join our team. Check our Careers page for current openings or send your portfolio to careers@gameverse.com for consideration."
  }
];

// FAQ Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[100%] sm:max-w-3xl mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4">
            <button 
              className="flex items-center justify-between w-full p-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{item.question}</span>
              {activeIndex === index ? 
                <ChevronUp className="h-5 w-5 text-purple-500" /> : 
                <ChevronDown className="h-5 w-5 text-purple-500" />
              }
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-gray-700 rounded-b-lg mt-px">
                <p className="text-gray-300">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// About Page Component
export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About GameVerse</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creating immersive gaming experiences that bring players together since 2017.
          </p>
        </div>
        
        {/* Our Story Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img src="/api/placeholder/600/400" alt="GameVerse Office" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-purple-900 bg-opacity-20"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-300 mb-4">
                GameVerse was founded in 2017 by a team of passionate gamers who saw the need for more engaging and community-focused gaming experiences. Starting with a small team of just five developers, we've grown into a global company with over 100 talented individuals across development, design, and community management.
              </p>
              <p className="text-gray-300 mb-4">
                Our mission is to create immersive gaming worlds that not only entertain but bring people together. We believe in the power of gaming to forge friendships, spark creativity, and provide meaningful experiences.
              </p>
              <p className="text-gray-300">
                Today, GameVerse hosts a growing portfolio of games across various genres, all designed with our core values of quality, community, and innovation in mind.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mb-16 py-12 bg-gray-800 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Our Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-900 mb-4 mx-auto">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Community First</h3>
              <p className="text-gray-300 text-center">
                We prioritize building strong communities around our games, listening to player feedback, and fostering positive environments.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-900 mb-4 mx-auto">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Innovation</h3>
              <p className="text-gray-300 text-center">
                We constantly push boundaries, experiment with new technologies, and strive to create unique gaming experiences.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-900 mb-4 mx-auto">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Quality</h3>
              <p className="text-gray-300 text-center">
                We are committed to delivering polished, well-crafted games with attention to detail in every aspect.
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <FAQ />
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-800 to-blue-700 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-6 max-w-3xl mx-auto">Be part of the GameVerse community and help us shape the future of gaming. Connect with other players, participate in events, and provide feedback on upcoming features.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-800 py-2 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors">Join Discord</button>
            <button className="bg-transparent border border-white text-white py-2 px-6 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors">Follow Us</button>
          </div>
        </div>
      </main>
      
        </div>
  );
}