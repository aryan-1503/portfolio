'use client'

import React, {ReactNode, useEffect, useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image';
import aryanImage from "@/public/aryan.jpg"
import snapshare from "@/public/snapshare.png"
import deepfake from "@/public/deepfake.png"
import cancerwisepro from "@/public/cancerwisepro.png"
import back from "@/public/background.jpg"
import { SiNextdotjs, SiReact, SiNodedotjs,SiX, SiGithub ,SiExpress, SiDocker,SiGo, SiJavascript, SiTypescript, SiPython, SiMongodb, SiMysql, SiRedis } from 'react-icons/si'
import { FaAws, FaJava, FaLinkedin } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
export default function Component() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const projects = [
        { id: 1, image: snapshare, title: 'SnapShare',link: "https://snap-share-xi.vercel.app", description: 'Developed a platform that allows users to upload, view, and share images seamlessly. Integrated third-party APIs for generating QR codes and optimizing image fetching using AWS S3 and Redis for efficient image management.' },
        { id: 2, image: deepfake, title: 'Deepfake Detection',link: "https://github.com/aryan-1503/DeepfakeDetection", description: 'Engineered a machine learning model that accurately detects deepfake videos and images, aiming to combat misinformation and ensure the authenticity of media content shared online.' },
        { id: 3, image: cancerwisepro, title: 'CancerWise Pro',link: "https://skin-cancer-analysis.vercel.app/", description: 'Developed a machine learning model to detect early signs of cancer, enabling early diagnosis and improving treatment outcomes through timely intervention and advanced data analysis techniques.' },
    ]

    const [name, setName] = useState("AP");
    const [isExpanded, setIsExpanded] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        console.log(formData)
        try{
            const res = await axios.post("http://localhost:3000/api/send-email", formData)
            toast.success(res.data.message,{
                position: "top-right",
            })
        }catch (e) {
            console.log(e)
        }
    }

    const handleExploreProject = (projectLink : string) => {
        window.open(projectLink, '_blank', 'noopener,noreferrer');
    }

    useEffect(() => {
        const nameSequence : string[] = ["AP", "\u00A0AryanPanchal"];
        let index = 0;

        const interval = setInterval(() => {
            setName(nameSequence[index]);
            setIsExpanded(index === 1); // expand letter-spacing when index is 1
            index++;

            if (index >= nameSequence.length) {
                clearInterval(interval);  // Stop after the final state
            }
        }, 200);

        return () => clearInterval(interval);  // Clean up interval on unmount
    }, []);

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed text-white overflow-x-hidden"
            style={{ backgroundImage: `url(${back.src})` }}
        >
            <header className="fixed w-full z-10 bg-gray-800 bg-opacity-20 backdrop-blur-sm shadow-md">
                <div className="container relative mx-auto px-4 py-4 flex justify-around gap-20 items-center">
                    <div className="md:hidden absolute right-5 mt-4">
                        <Button variant="ghost" size="icon" className="z-20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </Button>
                    </div>
                    <nav className="hidden md:flex space-x-8 z-10 tracking-wider font-lato">
                        <NavItem href="#home">Home</NavItem>
                        <NavItem href="#about">About</NavItem>
                        <NavItem href="#tech-skills">Skills</NavItem>
                        <NavItem href="#projects">Projects</NavItem>
                        <NavItem href="#contact">Contact</NavItem>
                    </nav>
                </div>
            </header>
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.nav
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween' }}
                            className="fixed inset-y-0 right-0 w-64 bg-gray-800 p-4 z-20 shadow-lg glow-bg"
                        >
                            <div className="flex flex-col space-y-4">
                                <NavItem href="#home" onClick={handleCloseMenu}>Home</NavItem>
                                <NavItem href="#about" onClick={handleCloseMenu}>About</NavItem>
                                <NavItem href="#tech-skills" onClick={handleCloseMenu}>Skills</NavItem>
                                <NavItem href="#projects" onClick={handleCloseMenu}>Projects</NavItem>
                                <NavItem href="#contact" onClick={handleCloseMenu}>Contact</NavItem>
                            </div>
                        </motion.nav>
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-10"
                            onClick={handleCloseMenu}
                        />
                    </>
                )}
            </AnimatePresence>
            <main>
                <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r bg-gray-950 bg-opacity-50 text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0 }}
                        className="relative text-center px-4"
                    >
                        <motion.h1
                            className="text-3xl font-bold tracking-wide neon-head-text md:text-5xl sm:text-4xl font-dubai"
                            style={{ letterSpacing: isExpanded ? '0.5em' : 'normal', transition: 'letter-spacing 0.8s ease' }}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay:0.5 }}
                        >
                            {name}
                        </motion.h1>
                        <div className="absolute inset-0 flex mt-24 items-center justify-center">
                            <Button asChild className="glow-head-btn mt-8 sm:mt-6 sm:text-base">
                                <a href="#contact">Let&apos;s Connect</a>
                            </Button>
                        </div>
                    </motion.div>
                </section>
                <section id="about" className="py-20 bg-gray-900 bg-opacity-90">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-8 text-center neon-text">Who I Am</h2>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="md:w-1/2 mb-8 md:mb-0"
                            >
                                <Image
                                    src={aryanImage}
                                    alt="Aryan Panchal"
                                    width={1000}
                                    height={1000}
                                    className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg glow-img"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="md:w-1/2 grid place-items-center"
                            >
                                <p className="text-justify text-lg mb-4 w-5/6" style={{ fontFamily: "Dubai, sans-serif"}}>
                                    I&apos;m Aryan, a full-stack developer passionate about pushing the boundaries of web technology. With a strong foundation in React, Next.js, and backend technologies, I specialize in delivering seamless, modern applications.
                                </p>
                                <p className="text-justify text-lg w-5/6 font-dubai">
                                    Beyond coding, I enjoy exploring new tech trends, collaborating on open-source projects, and enhancing user experiences through thoughtful design and functionality.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <section id="tech-skills" className="py-20 bg-gray-950 bg-opacity-90">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-12 text-center neon-text">Technical Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-900 rounded-lg shadow-lg p-8 glow-card"
                            >
                                <h3 className="text-2xl text-center font-semibold mb-8 neon-text">Frontend</h3>
                                <div className="flex flex-col items-center justify-center gap-4 flex-wrap">
                                    <SiNextdotjs size={50} className="glow-img" title="Next.js" />
                                    <SiReact size={50} className="glow-img" title="React.js" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-900 rounded-lg shadow-lg p-8 glow-card"
                            >
                                <h3 className="text-2xl text-center font-semibold mb-8 neon-text">Backend</h3>
                                <div className="px-12 py-4 grid grid-cols-2 place-items-center gap-6">
                                    <SiNodedotjs size={50} className="glow-img" title="Node.js" />
                                    <SiExpress size={50} className="glow-img" title="Express.js" />
                                    <SiDocker size={50} className="glow-img" title="Docker" />
                                    <FaAws size={50} className="glow-img" title="AWS" />
                                    <SiMongodb size={50} className="glow-img" title="MongoDB" />
                                    <SiRedis size={50} className="glow-img" title="Redis" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-900 rounded-lg shadow-lg p-8 glow-card"
                            >
                                <h3 className="text-2xl text-center font-semibold mb-8 neon-text">Languages</h3>
                                <div className="px-12 py-4 grid grid-cols-2 place-items-center gap-6">
                                    <SiJavascript size={50} className="glow-img" title="JavaScript" />
                                    <SiTypescript size={50} className="glow-img" title="TypeScript" />
                                    <SiPython size={50} className="glow-img" title="Python" />
                                    <FaJava size={50} className="glow-img" title="Java" />
                                    <SiGo size={50} className="glow-img" title="Go" />
                                    <SiMysql size={50} className="glow-img" title="MySQL" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <section id="projects" className="py-20 bg-gray-900 bg-opacity-90">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-12 text-center neon-text">Featured Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg glow-card"
                                >
                                    <Image
                                        src={project.image.src}
                                        alt={project.title}
                                        width={1000}
                                        height={1000}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6 bg-gray-900 opacity-90 h-full">
                                        <h3 className="text-2xl font-semibold mb-2 text-white font-dubai">{project.title}</h3>
                                        <p className="text-gray-400 mb-4 text-lg font-dubai">{project.description}</p>
                                        <Button className="glow-btn" onClick={() => handleExploreProject(project.link)}>Explore Project</Button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="contact" className="py-20 bg-gray-950 bg-opacity-90">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-12 text-center neon-text">Reach Out</h2>
                        <div className="max-w-2xl mx-auto">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="glow-input" />
                                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="glow-input" />
                                <Textarea placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} className="glow-input" />
                                <Button type="submit" className="w-full glow-btn">Send Message</Button>
                                <Toaster />
                            </form>
                            <div className="mt-12 flex justify-center space-x-6">
                                <SocialIcon href="https://github.com/aryan-1503" icon={<SiGithub />} label="GitHub" />
                                <SocialIcon href="www.linkedin.com/in/aryan-panchal-82461b222" icon={<FaLinkedin />} label="LinkedIn" />
                                <SocialIcon href="https://x.com/a_panchal03?t=U-wM2RO0GjLPdArf8sB0Bw&s=09" icon={<SiX />} label="X" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-900 py-6">
                <div className="container mx-auto px-4 text-center">
                    <p>© 2024 Aryan Panchal. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

interface SocialIcon {
    href: string,
    icon: ReactNode,
    label: string
}


function NavItem({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    return (
        <a href={href} onClick={onClick} className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 hover:neon-hover">
            {children}
        </a>
    );
}



function SocialIcon({ href, icon, label } : SocialIcon) { 
    return ( 
        <a 
            href={href} 
            target="_blank" 
            className="text-2xl text-gray-400 hover:text-cyan-300 transition-colors duration-200 hover:neon-hover" 
            aria-label={label} >
                {icon} 
        </a> 
    ) 
}
