import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-700">

      {/* Page Header (Hero) */}
      <div className="relative bg-emerald-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Office Building Glass"
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/95 to-transparent"></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase border border-emerald-500/30">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mt-6">
            Contact Us
          </h1>
          <div className="w-24 h-1.5 bg-emerald-400 mx-auto mt-6 rounded-full shadow-md"></div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Column 1: Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Connect With Our Team</h2>
              <p className="text-gray-500 leading-relaxed">
                Whether you are a startup looking for lab spaces, a grassroots innovator seeking validation, or an investor looking to fund solutions, we are here to support you.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">

              {/* Phone Card */}
              <div className="flex items-start gap-4 bg-white border border-gray-150 p-6 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone Details</h4>
                  <p className="text-emerald-700 font-semibold text-base">9825061139</p>
                  <p className="text-xs text-gray-400 mt-1">Monday - Saturday : 10:00 AM to 07:00 PM</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 bg-white border border-gray-150 p-6 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                  <a href="mailto:bionest@sristiinnovations.com" className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors break-all text-base">
                    bionest@sristiinnovations.com
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Send us your queries anytime.</p>
                </div>
              </div>

              {/* Office Address Card */}
              <div className="flex items-start gap-4 bg-white border border-gray-150 p-6 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Office Address</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AES Boys Hostel Campus, Nr. Gujarat University Library & SBI Bank Navrangpura, Ahmedabad - 380009
                  </p>
                </div>
              </div>

              {/* Incubation Space Address Card */}
              <div className="flex items-start gap-4 bg-white border border-gray-150 p-6 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Incubation Space Address</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    SRISTI Innovations, C/O Grambharti Campus, Gandhinagar-Mahudi Rd, Gandhinagar, Gujarat - 382650
                  </p>
                </div>
              </div>

            </div>

          
          </div>

          {/* Column 2: Send Message Form (7 cols) */}
           <div className="lg:col-span-7 space-y-8">
           
          <div className="lg:col-span-7 bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-gray-400 text-sm mb-8">We will reply to your message as soon as possible.</p>

            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto animate-bounce">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-2xl
                 font-bold text-gray-950">Message Sent!</h4>
                <p className="text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
                  Thank you for contacting us. Your message has been routed to our support team and we will respond to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-200 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Inquiry regarding BioNEST lab usage"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-200 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all duration-200 resize-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-555 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>
            )}
                  </div>
              {/* Social Links */}
                

              <div className="space-y-3 pt-2 lg:col-span-7">
              <h4 className="font-bold text-gray-900 text-lg tracking-wider uppercase">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: FaFacebook, link: "https://www.facebook.com/sristiahmedabad/", color: "hover:bg-blue-600" },
                  { icon: FaXTwitter, link: "https://x.com/honeybee_report", color: "hover:bg-slate-800" },
                  { icon: FaInstagram, link: "https://www.instagram.com/prakrutikkheduthaat", color: "hover:bg-pink-600" },
                  { icon: FaYoutube, link: "https://www.youtube.com/channel/UCKuK6WYFkfwEjWCIKxI8MZA", color: "hover:bg-red-700" }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.link}
                      className={`w-16 h-16 rounded-xl bg-white border border-gray-150 flex items-center justify-center text-gray-400 hover:text-white hover:border-transparent ${social.color} transition-all duration-300 shadow-sm`}
                    >
                      <Icon size={28} />
                    </a>
                  );
                })}
              </div>
            </div>
</div>

        </div>

        {/* Map Embed Section */}
        <div className="mt-16 bg-white border border-gray-150 p-2 rounded-[2.5rem] shadow-sm">
          <div className="h-96 w-full rounded-[2rem] overflow-hidden">
            <iframe
              title="SRISTI Innovations Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29372.29564240452!2d72.5455422!3d23.040767899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f53fffffff%3A0x29386d81d5488a17!2sSRISTI!5e0!3m2!1sen!2sin!4v1780988099283!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              allowfullscreen="" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"></iframe>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
