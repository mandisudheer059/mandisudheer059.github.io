import React, { useState, useEffect } from 'react';
// EmailJS import is no longer needed if you're not sending emails directly from here
// import emailjs from '@emailjs/browser';

// Main App Component
const App = () => {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State for toast notifications (e.g., "Copied to clipboard!")
    const [toastMessage, setToastMessage] = useState('');

    // State for contact form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    // State for form submission status
    const [formStatus, setFormStatus] = useState('idle'); // 'idle', 'sending', 'sent', 'error'
    const [formMessage, setFormMessage] = useState('');

    // Typed text for Hero section
    const [typedHeadline, setTypedHeadline] = useState('');
    const fullHeadline = 'Senior Software Engineer | Python & Full Stack Development'; // Updated for new resume
    const typingSpeed = 50; // milliseconds per character
    const deletingSpeed = 30; // milliseconds per character
    const delayBeforeTyping = 1000; // milliseconds
    const delayBeforeDeleting = 2000; // milliseconds

    useEffect(() => {
        let currentText = '';
        let index = 0;
        let isDeleting = false;
        let timeout;

        const handleTyping = () => {
            if (!isDeleting) {
                currentText = fullHeadline.substring(0, index + 1);
                setTypedHeadline(currentText);
                index++;

                if (currentText === fullHeadline) {
                    isDeleting = true;
                    timeout = setTimeout(handleTyping, delayBeforeDeleting);
                } else {
                    timeout = setTimeout(handleTyping, typingSpeed);
                }
            } else {
                currentText = fullHeadline.substring(0, index - 1);
                setTypedHeadline(currentText);
                index--;

                if (currentText === '') {
                    isDeleting = false;
                    timeout = setTimeout(handleTyping, delayBeforeTyping);
                } else {
                    timeout = setTimeout(handleTyping, deletingSpeed);
                }
            }
        };

        timeout = setTimeout(handleTyping, delayBeforeTyping);
        return () => clearTimeout(timeout);
    }, []); // Empty dependency array means this effect runs once on mount

    // Resume Data - parsed from the provided resume
    const resumeData = {
        name: 'SUDHEER MANDI',
        headline: 'Senior Software Engineer | Python & Full Stack Development', // Updated based on new resume
        contact: {
            address: 'Andhra Pradesh, IN 524101', // Updated from resume
            phone: '7702231798',
            email: 'mandisudheer059@gmail.com',
            linkedin: 'https://linkedin.com/in/sudheer-reddy-mandi-875225322', // Updated from resume
            github: 'https://github.com/mandisudheer059', // Placeholder, please update
        },
        summary: [
            '4+ Years of experience in Python development with a strong foundation in web technologies and frameworks.',
            'Proficient in designing and developing RESTful APIs, working with databases, and implementing front-end technologies.',
            'Extensive experience in using PEP8 coding conventions and installing Python libraries via pip.',
            'Skilled in Django ORM, interfacing with third-party APIs, and employing Django Signals and Middleware.',
            'Proven ability to optimize code and improve performance using Elasticsearch and multithreading.',
            'Experienced in CI/CD pipeline builds with GitHub.'
        ],
        skills: {
            languages: ['Python', 'JavaScript', 'SQL', 'C', 'C++'],
            frameworks: ['Django', 'Flask', 'FastAPI', 'Pandas'],
            databases: ['MySQL', 'PostgreSQL', 'SQLAlchemy ORM'],
            webTechnologies: ['HTML', 'CSS', 'jQuery', 'Bootstrap', 'Webpack Loader', 'RESTful APIs'],
            devOpsCloud: ['Git', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS (SQS/SNS, Lambda)', 'Private SG Cloud'],
            toolsLibraries: ['Elasticsearch', 'Multithreading', 'ORM', 'PEP8', 'pip', 'Django Signals', 'Django Middleware', 'Guardian library', 'SendGrid', 'ChatGPT'],
            developmentAreas: ['Python Development', 'Web Technologies', 'Full Stack Development']
        },
        experience: [
            {
                title: 'Senior Software Engineer (Dataviz Project)', // More specific title
                company: 'Euclid Innovations',
                duration: 'November 2024 - Current',
                technologies: 'Python, FastAPI, REST, PostgreSQL, SQLAlchemy ORM, Docker, Kubernetes, Git, GitHub Actions, Private SG Cloud',
                details: [
                    'Designed and developed RESTful APIs using FastAPI and PostgreSQL with SQLAlchemy ORM for efficient data management.',
                    'Implemented CI/CD pipelines with Git, ensuring seamless deployment to private cloud servers.',
                    'Conducted code reviews and peer programming to maintain high-quality standards.'
                ]
            },
            {
                title: 'Associate IT Consultant (SIS Project)', // More specific title
                company: 'ITC Infotech',
                duration: 'November 2021 - November 2024',
                technologies: 'Python, Django, REST, AWS, ChatGPT, Elasticsearch, SQL, HTML, JavaScript, SQS/SNS, AWS Lambda',
                details: [
                    'Developed and maintained micro-apps for various student services using Django REST Framework.',
                    'Integrated individual apps through AWS SQS for seamless data processing.',
                    'Implemented CAS server login for enhanced security in Django admin.',
                    'Applied object-level permissions using Guardian library.',
                    'Enhanced message processing efficiency by implementing Python multithreading.',
                    'Led the development of a custom library (sis-common) for dynamic views/serializers and common SQS logic.',
                    'Achieved significant performance improvements and code optimization using Elasticsearch.',
                    'Wrote comprehensive unit and integration tests to ensure end-to-end system reliability.'
                ]
            },
            {
                title: 'Associate IT Consultant', // Retained previous general title for clarity based on tasks
                company: 'ITC Infotech',
                duration: 'October 2020 - August 2021',
                technologies: 'Python, Django, REST, SQL, Flask, SendGrid, Webpack Loader', // Combined from previous entry + current tasks
                details: [
                    'Contributed to the development of the presentation layer and business logic for transaction processing.',
                    'Implemented new loan creation, document verification, and approval processes.',
                    'Automated email communications using SendGrid.',
                    'Enhanced static file management with Webpack loader.',
                    'Participated in daily stand-up meetings, addressing issues and facilitating smooth sprint progress.',
                    'Developed backend functionality using Python and implemented business rules via Django.'
                ]
            }
        ],
        education: [
            {
                degree: 'B.Tech. in Electronics & Communication Engineering (ECE)',
                institution: 'Narayana Engineering College, Adhara Pradesh',
                year: '2019-01', // Updated from resume
                percentage: '67.80%'
            },
            {
                degree: 'Diploma in Engineering',
                institution: 'Adhara Pradesh', // Corrected from resume
                year: '2014-01', // Updated from resume
                percentage: '79.80%'
            },
            {
                degree: 'SSC',
                institution: 'Z.P.H High School, Andhra Pradesh',
                year: '2011-01', // Updated from resume
                percentage: '80%'
            }
        ],
        awards: [
            'Recognized for consistent performance with a "Pat on the Back" award.'
        ],
        // The path to your profile image, assuming it's in the 'public' directory
        profileImage: 'my_profile_photo.jpg'
    };

    // Function to handle form input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission - now just shows success message
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('sending'); // Show sending state temporarily
        setFormMessage('');

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormStatus('error');
            setFormMessage('Please fill in all fields.');
            setTimeout(() => setFormMessage(''), 5000); // Clear message after 5 seconds
            return;
        }

        // Simulate successful submission
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate a brief delay

        setFormStatus('sent');
        setFormMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form

        setTimeout(() => {
            setFormMessage(''); // Clear success message after 5 seconds
            setFormStatus('idle'); // Reset status
        }, 5000);
    };

    // Function to copy text to clipboard and show a toast message
    const copyToClipboard = (text, message) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                setToastMessage(message);
                setTimeout(() => setToastMessage(''), 3000); // Hide toast after 3 seconds
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                // Fallback for older browsers or non-secure contexts
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed"; // Avoid scrolling to bottom
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                    setToastMessage(message);
                    setTimeout(() => setToastMessage(''), 3000);
                } catch (err) {
                    console.error('Fallback: Oops, unable to copy', err);
                }
                document.body.removeChild(textArea);
            });
        } else {
            // Fallback for older browsers or non-secure contexts
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed"; // Avoid scrolling to bottom
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                setToastMessage(message);
                setTimeout(() => setToastMessage(''), 3000);
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }
            document.body.removeChild(textArea);
        }
    };

    // Toast message component
    const Toast = ({ message }) => (
        <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg transition-opacity duration-300 ${message ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {message}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-inter flex flex-col relative overflow-hidden">
            {/* Background glowing elements (simplified for Tailwind) */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-teal-500 to-lime-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-pink-500 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

            {/* Navbar */}
            <nav className="bg-gray-800 p-4 shadow-xl sticky top-0 z-50 bg-opacity-90 backdrop-filter backdrop-blur-lg border-b border-gray-700">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#home" className="text-3xl font-extrabold text-teal-400 hover:text-teal-300 transition-colors duration-300 tracking-wider">
                        {resumeData.name.split(' ')[0]} <span className="text-white">{resumeData.name.split(' ')[1]}</span>
                    </a>
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-100 focus:outline-none p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 z-50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex space-x-8">
                        <a href="#home" className="text-gray-300 text-lg font-medium relative hover:text-teal-400 transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 after:rounded-full hover:after:w-full hover:after:left-0">Home</a>
                        <a href="#about" className="text-gray-300 text-lg font-medium relative hover:text-teal-400 transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 after:rounded-full hover:after:w-full hover:after:left-0">About</a>
                        <a href="#skills" className="text-gray-300 text-lg font-medium relative hover:text-teal-400 transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 after:rounded-full hover:after:w-full hover:after:left-0">Skills</a>
                        <a href="#experience" className="text-gray-300 text-lg font-medium relative hover:text-teal-400 transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 after:rounded-full hover:after:w-full hover:after:left-0">Experience</a>
                        <a href="#projects" className="text-gray-300 text-lg font-medium relative hover:text-teal-400 transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 after:rounded-full hover:after:w-full hover:after:left-0">Projects</a>
                        <a href="#education" className="text-gray-300 text-lg font-medium relative hover:text-teal-400 transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 after:rounded-full hover:after:w-full hover:after:left-0">Education</a>
                        <a href="#contact" className="text-gray-300 text-lg font-medium relative hover:text-teal-400 transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-teal-400 after:transition-all after:duration-300 after:rounded-full hover:after:w-full hover:after:left-0">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-95 z-40 flex flex-col items-center justify-center animate-slide-in-right">
                    <button className="absolute top-4 right-4 text-gray-100 p-2 rounded-md hover:bg-gray-700" onClick={() => setIsMenuOpen(false)} aria-label="Close navigation menu">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
                    </button>
                    <div className="flex flex-col space-y-6 text-center">
                        <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-300 text-2xl font-medium py-3 hover:text-teal-400 transition-colors duration-300">Home</a>
                        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-300 text-2xl font-medium py-3 hover:text-teal-400 transition-colors duration-300">About</a>
                        <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-gray-300 text-2xl font-medium py-3 hover:text-teal-400 transition-colors duration-300">Skills</a>
                        <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-gray-300 text-2xl font-medium py-3 hover:text-teal-400 transition-colors duration-300">Experience</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-300 text-2xl font-medium py-3 hover:text-teal-400 transition-colors duration-300">Projects</a>
                        <a href="#education" onClick={() => setIsMenuOpen(false)} className="text-gray-300 text-2xl font-medium py-3 hover:text-teal-400 transition-colors duration-300">Education</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 text-2xl font-medium py-3 hover:text-teal-400 transition-colors duration-300">Contact</a>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <section id="home" className="relative flex flex-col items-center justify-center h-screen bg-gray-900 bg-cover bg-center bg-fixed animate-fade-in-scale">
                <div className="absolute inset-0 z-0 opacity-10">
                    {/* Animated grid background */}
                    <div className="absolute inset-0 bg-[size:100px_100px] bg-grid-pattern opacity-10"></div>
                </div>
                <div className="relative z-10 text-center p-6 md:p-8 rounded-lg max-w-4xl backdrop-blur-sm bg-gray-800 bg-opacity-70 border border-teal-500 shadow-2xl animate-fade-in-up">
                    <img
                        src={resumeData.profileImage}
                        alt="Your Profile"
                        className="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover mx-auto mb-6 border-4 border-teal-400 shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-teal-glow"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x300/4F46E5/FFFFFF?text=P'; }}
                    />
                    <h1 className="text-4xl md:text-6xl font-extrabold text-teal-400 leading-tight mb-4 drop-shadow-lg animate-pulse-light">
                        Hi, I'm <span className="text-white">{resumeData.name.split(' ')[0]}</span> {resumeData.name.split(' ')[1]}
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-300 font-medium mb-6 drop-shadow-md min-h-[3rem] typing-effect">
                        {typedHeadline}
                    </p>
                    <div className="flex justify-center space-x-4 md:space-x-6 mt-8">
                        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-teal-500 to-blue-600 shadow-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                            LinkedIn
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                        <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 border border-teal-500 text-base font-medium rounded-full text-teal-300 bg-gray-800 hover:bg-teal-500 hover:text-white shadow-lg hover:shadow-teal-glow-sm transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                            GitHub
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.867-.013-1.7Z"/></svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="container mx-auto p-4 py-16 md:p-8 md:py-24 animate-fade-in-section">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-12 relative pb-4 tracking-wide">
                    About Me
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                </h2>
                <div className="bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700 transform-gpu transition-transform duration-300 hover:scale-[1.005]">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 font-light">
                        {(resumeData.summary && resumeData.summary[0]) || 'Loading summary...'}
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-gray-400 text-base md:text-lg">
                        {(resumeData.summary || []).slice(1).map((point, index) => (
                            <li key={index} className="pl-2 flex items-start">
                                <svg className="w-5 h-5 mt-1 mr-2 flex-shrink-0 text-teal-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="container mx-auto p-4 py-16 md:p-8 md:py-24 animate-fade-in-section">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-12 relative pb-4 tracking-wide">
                    Skills
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {Object.entries(resumeData.skills || {}).map(([category, skills]) => (
                        <div key={category} className="bg-gray-800 p-7 rounded-xl shadow-xl transition-all duration-300 group relative overflow-hidden border border-gray-700 hover:border-teal-500 hover:shadow-teal-glow-md transform hover:scale-105">
                            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div> {/* Subtle overlay */}
                            <h3 className="text-2xl font-semibold text-teal-400 mb-5 capitalize tracking-wide">
                                {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h3>
                            <ul className="space-y-3 text-gray-300 text-base">
                                {(skills || []).map((skill, index) => (
                                    <li key={index} className="flex items-center">
                                        <svg className="w-5 h-5 mr-3 flex-shrink-0 text-lime-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="container mx-auto p-4 py-16 md:p-8 md:py-24 animate-fade-in-section">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-12 relative pb-4 tracking-wide">
                    Work Experience
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                </h2>
                <div className="relative border-l-4 border-teal-500 pl-6 md:pl-10">
                    {(resumeData.experience || []).map((job, index) => (
                        <div key={index} className="mb-12 last:mb-0 relative group">
                            <div className="absolute w-5 h-5 bg-teal-400 rounded-full -left-2.5 top-0 transform -translate-x-1/2 z-10 animate-pulse-marker"></div> {/* Animated marker */}
                            <div className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transition-all duration-300 transform group-hover:translate-x-3 group-hover:shadow-teal-glow-lg">
                                <h3 className="text-2xl font-bold text-teal-300 mb-1">{job.title}</h3>
                                <p className="text-gray-200 text-xl mb-1">{job.company}</p>
                                <p className="text-gray-400 text-sm mb-3 font-mono">{job.duration}</p>
                                <p className="text-gray-400 text-sm italic mb-4 font-light">Technologies: <span className="font-medium text-lime-300">{job.technologies}</span></p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300 text-base">
                                    {(job.details || []).map((detail, idx) => (
                                        <li key={idx} className="pl-2">{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="container mx-auto p-4 py-16 md:p-8 md:py-24 animate-fade-in-section">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-12 relative pb-4 tracking-wide">
                    My Projects
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(resumeData.projects || []).map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 group hover:shadow-2xl hover:-translate-y-3 relative border border-gray-700 hover:border-teal-500">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1e293b/FFFFFF?text=Image+Unavailable'; }}
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-teal-300 mb-3">{project.name}</h3>
                                <p className="text-gray-400 text-sm mb-4">Technologies: <span className="font-medium text-lime-300">{(project.technologies || []).join(', ')}</span></p>
                                <p className="text-gray-300 mb-5 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gradient-to-r from-teal-600 to-blue-700 shadow-md hover:from-teal-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 active:scale-95">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.867-.013-1.7Z"/></svg>
                                            GitHub
                                        </a>
                                    )}
                                    {project.demo && project.demo !== '#' && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2 border border-teal-500 text-sm font-medium rounded-full text-teal-300 bg-gray-800 hover:bg-teal-500 hover:text-white shadow-md hover:shadow-teal-glow-sm transition-all duration-300 transform hover:scale-105 active:scale-95">
                                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 005.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 01-2.828 0z" clipRule="evenodd"></path></svg>
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="container mx-auto p-4 py-16 md:p-8 md:py-24 animate-fade-in-section">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-12 relative pb-4 tracking-wide">
                    Education
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {(resumeData.education || []).map((edu, index) => (
                        <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transition-all duration-300 transform hover:translate-y-[-8px] hover:shadow-teal-glow-md">
                            <h3 className="text-2xl font-bold text-teal-300 mb-2">{edu.degree}</h3>
                            <p className="text-gray-200 text-xl mb-1">{edu.institution}</p>
                            <p className="text-gray-400 text-sm">Graduation: <span className="font-medium text-lime-300">{edu.year}</span></p>
                            <p className="text-gray-400 text-sm">Percentage: <span className="font-medium text-lime-300">{edu.percentage}</span></p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Awards Section */}
            <section id="awards" className="container mx-auto p-4 py-16 md:p-8 md:py-24 animate-fade-in-section">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-12 relative pb-4 tracking-wide">
                    Awards & Recognition
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                </h2>
                <div className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 transform-gpu transition-transform duration-300 hover:scale-[1.005]">
                    <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg">
                        {(resumeData.awards || []).map((award, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 mt-1 mr-2 flex-shrink-0 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span>{award}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="container mx-auto p-4 py-16 md:p-8 md:py-24 animate-fade-in-section">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-12 relative pb-4 tracking-wide">
                    Get in Touch
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                </h2>
                <div className="bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700 text-center transform-gpu transition-transform duration-300 hover:scale-[1.005]">
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                        I'm always open to new opportunities and collaborations. Feel free to reach out!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                        <button
                            onClick={() => copyToClipboard(resumeData.contact.email, 'Email copied!')}
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-teal-500 to-blue-600 shadow-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            Email Me
                        </button>
                        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 border border-teal-500 text-base font-medium rounded-full text-teal-300 bg-gray-800 hover:bg-teal-500 hover:text-white shadow-lg hover:shadow-teal-glow-sm transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            Connect on LinkedIn
                        </a>
                        {/* New Phone Number Button */}
                        <a href={`tel:${resumeData.contact.phone}`} className="inline-flex items-center justify-center px-8 py-3 border border-purple-500 text-base font-medium rounded-full text-purple-300 bg-gray-800 hover:bg-purple-500 hover:text-white shadow-lg hover:shadow-purple-glow-sm transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M17.414 2.586A2 2 0 0016 2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-1.414-1.414zM10 12a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            Call Me
                        </a>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-6 bg-gray-700 rounded-lg shadow-inner border border-gray-600">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-300 text-lg font-medium mb-2 text-left">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-300 text-lg font-medium mb-2 text-left">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-gray-300 text-lg font-medium mb-2 text-left">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-4 py-3 rounded-md bg-gray-800 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 resize-y"
                                placeholder="Your message here..."
                                required
                            ></textarea>
                        </div>
                        {formMessage && (
                            <div className={`mb-4 text-center font-semibold text-lg ${formStatus === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                                {formMessage}
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={formStatus === 'sending'}
                            className="w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            {formStatus === 'sending' ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </section>


            {/* Footer */}
            <footer className="bg-gray-800 p-6 text-center text-gray-400 border-t border-gray-700 mt-auto">
                <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
                <p>Designed and Built with React & Tailwind CSS</p>
            </footer>

            {/* Toast Notification */}
            <Toast message={toastMessage} />
        </div>
    );
};

export default App;
