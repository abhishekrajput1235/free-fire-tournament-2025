// import { motion } from "framer-motion";
// import {
//   Users,
//   Phone,
//   Mail,
//   User,
//   MessageCircle,
//   Flame,
//   CheckCircle,
// } from "lucide-react";
// import { useState, FormEvent } from "react";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     teamName: "",
//     leaderName: "",
//     whatsapp: "",
//     email: "",
//     numPlayers: "4",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("https://script.google.com/macros/s/AKfycbw5Hoh4NcTsVQrk5MkR8pdGlRvRGrcWNgYULORyb_2GVFVpApGKgse6fal0FvgI1VEE/exec", {
//         method: "POST",
//         mode: "no-cors", // required to avoid CORS error
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       // Optional: You won't get JSON response because of no-cors
//       console.log("Form submitted to Google Sheets:", formData);

//       setSubmitted(true);
//       setTimeout(() => {
//         setSubmitted(false);
//         setFormData({
//           teamName: "",
//           leaderName: "",
//           whatsapp: "",
//           email: "",
//           numPlayers: "4",
//         });
//       }, 5000);
//     } catch (error) {
//       console.error("❌ Submission error:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contacts = [
//     { name: "Vijay Rajput", number: "8303858043" },
//     { name: "Kaushal Rajput", number: "9336315325" },
//     { name: "Ankit Rajput", number: "6392669268" },
//   ];

//   return (
//     <section
//       id="registration"
//       className="py-20 sm:py-32 relative overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-glow-gradient opacity-20" />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-4">
//             <span className="text-fire-gradient glow-text">
//               Register Your Squad
//             </span>
//           </h2>
//           <div className="h-1 w-32 bg-fire-gradient mx-auto rounded-full shadow-fire-glow" />
//           <p className="mt-6 text-lg sm:text-xl text-gray-300">
//             Secure your spot in the ultimate battle
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
//           <motion.div
//             className="bg-black/70 backdrop-blur-sm border-2 border-fire-600/50 rounded-3xl p-8 sm:p-10 shadow-fire-glow"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="text-2xl sm:text-3xl font-bold text-fire-400 mb-8 flex items-center gap-3">
//               <Users className="w-8 h-8" />
//               Team Registration
//             </h3>

//             {submitted ? (
//               <motion.div
//                 className="text-center py-12"
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 animate-bounce" />
//                 <h4 className="text-2xl font-bold text-white mb-3">
//                   Registration Successful!
//                 </h4>
//                 <p className="text-gray-300 text-lg">
//                   Your team has been registered. We'll contact you soon!
//                 </p>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
//                     Team Name
//                   </label>
//                   <div className="relative">
//                     <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
//                     <input
//                       type="text"
//                       name="teamName"
//                       value={formData.teamName}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
//                       placeholder="Enter your team name"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
//                     Leader Name
//                   </label>
//                   <div className="relative">
//                     <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
//                     <input
//                       type="text"
//                       name="leaderName"
//                       value={formData.leaderName}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
//                       placeholder="Enter leader name"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
//                     WhatsApp Number
//                   </label>
//                   <div className="relative">
//                     <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
//                     <input
//                       type="tel"
//                       name="whatsapp"
//                       value={formData.whatsapp}
//                       onChange={handleChange}
//                       required
//                       pattern="[0-9]{10}"
//                       className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
//                       placeholder="10-digit mobile number"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
//                     Number of Players
//                   </label>
//                   <div className="relative">
//                     <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
//                     <select
//                       name="numPlayers"
//                       value={formData.numPlayers}
//                       onChange={handleChange}
//                       required
//                       className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all appearance-none cursor-pointer"
//                     >
//                       <option value="4">4 Players (Standard Squad)</option>
//                       <option value="5">5 Players (With Substitute)</option>
//                     </select>
//                   </div>
//                 </div>

//                 <motion.button
//                   type="submit"
//                   className="w-full bg-fire-gradient text-white font-bold text-lg uppercase py-4 rounded-xl shadow-fire-glow-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <Flame className="w-6 h-6 animate-fire-flicker" />
//                   Register Team
//                   <Flame className="w-6 h-6 animate-fire-flicker" />
//                 </motion.button>
//               </form>
//             )}
//           </motion.div>

//           <motion.div
//             className="space-y-6"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="bg-black/70 backdrop-blur-sm border-2 border-fire-600/50 rounded-3xl p-8 sm:p-10 shadow-fire-glow">
//               <h3 className="text-2xl sm:text-3xl font-bold text-fire-400 mb-8 flex items-center gap-3">
//                 <MessageCircle className="w-8 h-8" />
//                 Contact Us
//               </h3>

//               <div className="space-y-4">
//                 {contacts.map((contact, idx) => (
//                   <motion.a
//                     key={idx}
//                     href={`tel:${contact.number}`}
//                     className="block bg-black/50 border-2 border-fire-600/30 rounded-xl p-5 hover:border-fire-500 hover:shadow-fire-glow transition-all group"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-lg font-bold text-white mb-1">
//                           {contact.name}
//                         </p>
//                         <p className="text-fire-400 font-semibold flex items-center gap-2">
//                           <Phone className="w-4 h-4" />
//                           {contact.number}
//                         </p>
//                       </div>
//                       <div className="w-10 h-10 bg-fire-600/20 rounded-full flex items-center justify-center group-hover:bg-fire-600/40 transition-colors">
//                         <Phone className="w-5 h-5 text-fire-400" />
//                       </div>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>

//               <div className="mt-8 pt-8 border-t-2 border-fire-600/30">
//                 <p className="text-sm text-gray-400 leading-relaxed">
//                   Contact any of our organizers for registration assistance,
//                   queries, or support. We're here to help!
//                 </p>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-fire-600/20 to-yellow-600/20 backdrop-blur-sm border-2 border-yellow-500/50 rounded-3xl p-8 shadow-fire-glow">
//               <div className="text-center">
//                 <Flame className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-float" />
//                 <h4 className="text-xl font-bold text-white mb-2">
//                   Quick Registration
//                 </h4>
//                 <p className="text-gray-300 text-sm">
//                   Fill the form or call us directly to secure your spot!
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RegistrationForm;







// import { motion } from "framer-motion";
// import {
//   Users,
//   Phone,
//   Mail,
//   User,
//   MessageCircle,
//   Flame,
// } from "lucide-react";
// import { useState, FormEvent } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     teamName: "",
//     leaderName: "",
//     whatsapp: "",
//     email: "",
//     numPlayers: "4",
//   });

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     try {
//       await fetch(
//         "https://script.google.com/macros/s/AKfycbw5Hoh4NcTsVQrk5MkR8pdGlRvRGrcWNgYULORyb_2GVFVpApGKgse6fal0FvgI1VEE/exec",
//         {
//           method: "POST",
//           mode: "no-cors",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       toast.success("✅ Registration Successful!", {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//       });

//       setFormData({
//         teamName: "",
//         leaderName: "",
//         whatsapp: "",
//         email: "",
//         numPlayers: "4",
//       });
//     } catch (error) {
//       console.error("❌ Submission error:", error);
//       toast.error("❌ Something went wrong. Please try again.", {
//         position: "top-right",
//         autoClose: 5000,
//       });
//     }
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const contacts = [
//     { name: "Vijay Rajput", number: "8303858043" },
//     { name: "Kaushal Rajput", number: "9336315325" },
//     { name: "Ankit Rajput", number: "6392669268" },
//   ];

//   return (
//     <section id="registration" className="py-20 sm:py-32 relative overflow-hidden">
//       <ToastContainer /> {/* Toast container */}

//       <div className="absolute inset-0 bg-glow-gradient opacity-20" />
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-4">
//             <span className="text-fire-gradient glow-text">
//               Register Your Squad
//             </span>
//           </h2>
//           <div className="h-1 w-32 bg-fire-gradient mx-auto rounded-full shadow-fire-glow" />
//           <p className="mt-6 text-lg sm:text-xl text-gray-300">
//             Secure your spot in the ultimate battle
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
//           {/* Registration Form */}
//           <motion.div
//             className="bg-black/70 backdrop-blur-sm border-2 border-fire-600/50 rounded-3xl p-8 sm:p-10 shadow-fire-glow"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="text-2xl sm:text-3xl font-bold text-fire-400 mb-8 flex items-center gap-3">
//               <Users className="w-8 h-8" />
//               Team Registration
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
//                   Team Name
//                 </label>
//                 <div className="relative">
//                   <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
//                   <input
//                     type="text"
//                     name="teamName"
//                     value={formData.teamName}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
//                     placeholder="Enter your team name"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
//                   Leader Name
//                 </label>
//                 <div className="relative">
//                   <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
//                   <input
//                     type="text"
//                     name="leaderName"
//                     value={formData.leaderName}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
//                     placeholder="Enter leader name"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
//                   WhatsApp Number
//                 </label>
//                 <div className="relative">
//                   <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
//                   <input
//                     type="tel"
//                     name="whatsapp"
//                     value={formData.whatsapp}
//                     onChange={handleChange}
//                     required
//                     pattern="[0-9]{10}"
//                     className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
//                     placeholder="10-digit mobile number"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
//                   Number of Players
//                 </label>
//                 <div className="relative">
//                   <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
//                   <select
//                     name="numPlayers"
//                     value={formData.numPlayers}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all appearance-none cursor-pointer"
//                   >
//                     <option value="4">4 Players (Standard Squad)</option>
//                     <option value="5">5 Players (With Substitute)</option>
//                   </select>
//                 </div>
//               </div>

//               <motion.button
//                 type="submit"
//                 className="w-full bg-fire-gradient text-white font-bold text-lg uppercase py-4 rounded-xl shadow-fire-glow-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <Flame className="w-6 h-6 animate-fire-flicker" />
//                 Contact Us
//                 <Flame className="w-6 h-6 animate-fire-flicker" />
//               </motion.button>
//             </form>
//           </motion.div>

//           {/* Contact Section */}
//           <motion.div
//             className="space-y-6"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="bg-black/70 backdrop-blur-sm border-2 border-fire-600/50 rounded-3xl p-8 sm:p-10 shadow-fire-glow">
//               <h3 className="text-2xl sm:text-3xl font-bold text-fire-400 mb-8 flex items-center gap-3">
//                 <MessageCircle className="w-8 h-8" />
//                 Contact Us
//               </h3>

//               <div className="space-y-4">
//                 {contacts.map((contact, idx) => (
//                   <motion.a
//                     key={idx}
//                     href={`tel:${contact.number}`}
//                     className="block bg-black/50 border-2 border-fire-600/30 rounded-xl p-5 hover:border-fire-500 hover:shadow-fire-glow transition-all group"
//                     whileHover={{ x: 5 }}
//                   >
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-lg font-bold text-white mb-1">
//                           {contact.name}
//                         </p>
//                         <p className="text-fire-400 font-semibold flex items-center gap-2">
//                           <Phone className="w-4 h-4" />
//                           {contact.number}
//                         </p>
//                       </div>
//                       <div className="w-10 h-10 bg-fire-600/20 rounded-full flex items-center justify-center group-hover:bg-fire-600/40 transition-colors">
//                         <Phone className="w-5 h-5 text-fire-400" />
//                       </div>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>

//               <div className="mt-8 pt-8 border-t-2 border-fire-600/30">
//                 <p className="text-sm text-gray-400 leading-relaxed">
//                   Contact any of our organizers for registration assistance,
//                   queries, or support. We're here to help!
//                 </p>
//               </div>
//             </div>

//             <div className="bg-gradient-to-br from-fire-600/20 to-yellow-600/20 backdrop-blur-sm border-2 border-yellow-500/50 rounded-3xl p-8 shadow-fire-glow">
//               <div className="text-center">
//                 <Flame className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-float" />
//                 <h4 className="text-xl font-bold text-white mb-2">
//                   Quick Registration
//                 </h4>
//                 <p className="text-gray-300 text-sm">
//                   Fill the form or call us directly to secure your spot!
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default RegistrationForm;




import { motion } from "framer-motion";
import { User, Phone, Mail, MessageCircle, Flame } from "lucide-react";
import { useState, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw5Hoh4NcTsVQrk5MkR8pdGlRvRGrcWNgYULORyb_2GVFVpApGKgse6fal0FvgI1VEE/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      toast.success("✅ Your query has been submitted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Submission error:", error);
      toast.error("❌ Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contacts = [
    { name: "Vijay Rajput", number: "8303858043" },
    { name: "Kaushal Rajput", number: "9336315325" },
    { name: "Ankit Rajput", number: "6392669268" },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      <ToastContainer />

      <div className="absolute inset-0 bg-glow-gradient opacity-20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase mb-4">
            <span className="text-fire-gradient glow-text">Contact Us</span>
          </h2>
          <div className="h-1 w-32 bg-fire-gradient mx-auto rounded-full shadow-fire-glow" />
          <p className="mt-6 text-lg sm:text-xl text-gray-300">
            Have a question? Reach out to us!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="bg-black/70 backdrop-blur-sm border-2 border-fire-600/50 rounded-3xl p-8 sm:p-10 shadow-fire-glow"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-fire-400 mb-8 flex items-center gap-3">
              <MessageCircle className="w-8 h-8" />
              Send a Query
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-fire-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit mobile number"
                    className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl pl-12 pr-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject of your query"
                  className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl px-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  rows={5}
                  className="w-full bg-black/50 border-2 border-fire-600/30 rounded-xl px-4 py-3 text-white focus:border-fire-500 focus:outline-none focus:ring-2 focus:ring-fire-500/50 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-fire-gradient text-white font-bold text-lg uppercase py-4 rounded-xl shadow-fire-glow-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Flame className="w-6 h-6 animate-fire-flicker" />
                Submit Query
                <Flame className="w-6 h-6 animate-fire-flicker" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black/70 backdrop-blur-sm border-2 border-fire-600/50 rounded-3xl p-8 sm:p-10 shadow-fire-glow">
              <h3 className="text-2xl sm:text-3xl font-bold text-fire-400 mb-8 flex items-center gap-3">
                <MessageCircle className="w-8 h-8" />
                Contact Info
              </h3>

              <div className="space-y-4">
                {contacts.map((contact, idx) => (
                  <motion.a
                    key={idx}
                    href={`tel:${contact.number}`}
                    className="block bg-black/50 border-2 border-fire-600/30 rounded-xl p-5 hover:border-fire-500 hover:shadow-fire-glow transition-all group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg font-bold text-white mb-1">
                          {contact.name}
                        </p>
                        <p className="text-fire-400 font-semibold flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {contact.number}
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-fire-600/20 rounded-full flex items-center justify-center group-hover:bg-fire-600/40 transition-colors">
                        <Phone className="w-5 h-5 text-fire-400" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t-2 border-fire-600/30">
                <p className="text-sm text-gray-400 leading-relaxed">
                  Reach out to any of our organizers for queries, assistance, or support. We're here to help!
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-fire-600/20 to-yellow-600/20 backdrop-blur-sm border-2 border-yellow-500/50 rounded-3xl p-8 shadow-fire-glow">
              <div className="text-center">
                <Flame className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-float" />
                <h4 className="text-xl font-bold text-white mb-2">Quick Contact</h4>
                <p className="text-gray-300 text-sm">
                  Fill the form or call us directly to get in touch!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
