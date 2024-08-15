"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ContactInfo = ({ icon, title, description, link }) => {
  const controls = useAnimation();

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(167, 139, 250, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      onViewportEnter={() => controls.start({ opacity: 1, y: 0 })}
      className="flex items-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-md hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
    >
      <div className="mr-4 text-purple-400 text-2xl">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: '', lastName: '', email: '', phone: '', service: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const validateForm = () => {
    const newErrors = {};
    if (!formState.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formState.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!/^\S+@\S+\.\S+$/.test(formState.email)) newErrors.email = "Valid email is required";
    if (!/^\d{10}$/.test(formState.phone)) newErrors.phone = "Valid 10-digit phone number is required";
    if (!formState.service) newErrors.service = "Please select a service";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    // Simulating form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowThankYou(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setShowThankYou(false);
      setFormState({
        firstName: '', lastName: '', email: '', phone: '', service: '', message: ''
      });
      setCurrentStep(1);
    }, 5000);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <>
            <Input type="text" name="firstName" placeholder="First name" value={formState.firstName} onChange={handleInputChange} className="bg-gray-700/50 backdrop-blur-sm text-white" required />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            <Input type="text" name="lastName" placeholder="Last name" value={formState.lastName} onChange={handleInputChange} className="bg-gray-700/50 backdrop-blur-sm text-white" required />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </>
        );
      case 2:
        return (
          <>
            <Input type="email" name="email" placeholder="Email address" value={formState.email} onChange={handleInputChange} className="bg-gray-700/50 backdrop-blur-sm text-white" required />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <Input type="tel" name="phone" placeholder="Phone number" value={formState.phone} onChange={handleInputChange} className="bg-gray-700/50 backdrop-blur-sm text-white" required />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </>
        );
      case 3:
        return (
          <>
            <Select name="service" onValueChange={(value) => handleInputChange({ target: { name: 'service', value } })}>
              <SelectTrigger className="w-full bg-gray-700/50 backdrop-blur-sm text-white">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="fullstack">Full-Stack Software Engineer</SelectItem>
                  <SelectItem value="web">Web Developer</SelectItem>
                  <SelectItem value="ml">Machine Learning Engineer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
            <Textarea
              name="message"
              className="h-40 bg-gray-700/50 backdrop-blur-sm text-white"
              placeholder="Tell me about your project..."
              value={formState.message}
              onChange={handleInputChange}
              required
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-900 min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" style={{
        backgroundPosition: `${mousePosition.x / 5}px ${mousePosition.y / 5}px`
      }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let&apos;s create something amazing together
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {!showThankYou ? (
                <motion.form 
                  className="space-y-6 bg-gray-800/30 backdrop-blur-md p-8 rounded-xl shadow-lg"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="space-y-4">
                    {renderStep()}
                  </div>
                  <div className="flex justify-between mt-6">
                    {currentStep > 1 && (
                      <Button type="button" onClick={prevStep} className="bg-gray-600 hover:bg-gray-700">
                        Previous
                      </Button>
                    )}
                    {currentStep < 3 ? (
                      <Button type="button" onClick={nextStep} className="bg-purple-600 hover:bg-purple-700 ml-auto">
                        Next
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 ml-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <FaPaperPlane className="ml-2" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  className="bg-green-600/80 backdrop-blur-md p-8 rounded-xl shadow-lg text-white text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <h3 className="text-2xl font-bold mb-4">Thank you for your message!</h3>
                  <p>We&apos;ll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactInfo icon={<FaPhoneAlt />} title="Phone" description="(+1) 217 974 6228" link="tel:+12179746228" />
            <ContactInfo icon={<FaEnvelope />} title="School Email" description="kang0493@umn.edu" link="mailto:kang0493@umn.edu" />
            <ContactInfo icon={<FaEnvelope />} title="Personal Email" description="thkang091@gmail.com" link="mailto:thkang091@gmail.com" />
            <ContactInfo icon={<FaLinkedin />} title="LinkedIn" description="Connect with me" link="https://www.linkedin.com/in/taehoon-kang/" />
            <ContactInfo icon={<FaGithub />} title="GitHub" description="Check out my projects" link="https://github.com/thkang091"/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;