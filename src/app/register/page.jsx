// "use client";

// import { registerUser } from "@/store/authSlice";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";


// export default function RegisterForm() {
//   const dispatch = useDispatch(); 
//    const router = useRouter();
//   const { loading, error, success } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     first_name: "",
//     last_name: "",
//     role: "attendee", // default role
//     password: "",
//     re_password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.re_password) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Passwords do not match!",
//       });
//       return;
//     }

//     dispatch(registerUser(formData));
//   };

//    useEffect(() => {
//     if (success) {
//       Swal.fire({
//         icon: "success",
//         title: "Registration Successful!",
//         text: "You can now login with your credentials.",
//         confirmButtonText: "Go to Login",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           router.push("/login"); 
//         }
//       });

//       // reset form
//       setFormData({
//         username: "",
//         email: "",
//         first_name: "",
//         last_name: "",
//         role: "attendee",
//         password: "",
//         re_password: "",
//       });
//     }

//     if (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Registration Failed",
//         text: typeof error === "string" ? error : "Something went wrong",
//       });
//     }
//   }, [success, error]);

//   return (
//     <div className="py-16">
//       <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
//         {/* Left side image */}
//         <div
//           className="hidden lg:block lg:w-1/2 bg-cover"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80')",
//           }}
//         ></div>

//         {/* Right side form */}
//         <div className="w-full p-8 lg:w-1/2">
//           <h2 className="text-2xl font-semibold text-gray-700 text-center">
//             Fso Webinar
//           </h2>
//           <p className="text-xl text-gray-600 text-center">
//             Create your account
//           </p>

//           {/* Divider */}
//           <div className="mt-4 flex items-center justify-between">
//             <span className="border-b w-1/5 lg:w-1/4"></span>
//             <span className="text-xs text-center text-gray-500 uppercase">
//               Register with email
//             </span>
//             <span className="border-b w-1/5 lg:w-1/4"></span>
//           </div>

//           {/* Register Form */}
//           <form onSubmit={handleSubmit}>
//             {/* Username */}
//             <div className="mt-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             {/* Email */}
//             <div className="mt-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             {/* First Name */}
//             <div className="mt-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="first_name"
//                 value={formData.first_name}
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             {/* Last Name */}
//             <div className="mt-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="last_name"
//                 value={formData.last_name}
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             {/* Role */}
//             <div className="mt-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Role
//               </label>
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:shadow-outline"
//               >
//                 <option value="attendee">Attendee</option>
//                 <option value="admin">Admin</option>
//                 <option value="superadmin">Super Admin</option>
//               </select>
//             </div>

//             {/* Password */}
//             <div className="mt-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             {/* Re-enter Password */}
//             <div className="mt-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Re-enter Password
//               </label>
//               <input
//                 type="password"
//                 name="re_password"
//                 value={formData.re_password}
//                 onChange={handleChange}
//                 required
//                 className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             {/* Submit */}
//             <div className="mt-8">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 disabled:opacity-50"
//               >
//                 {loading ? "Registering..." : "Register"}
//               </button>
//             </div>
//           </form>

//           {/* Error */}
//           {error && (
//             <p className="mt-4 text-red-500 text-sm text-center">
//               {typeof error === "string"
//                 ? error
//                 : JSON.stringify(error)}
//             </p>
//           )}

//           {/* Link to login */}
//           <div className="mt-4 flex items-center justify-between">
//             <span className="border-b w-1/5 md:w-1/5"></span>
//             <a href="/login" className="text-xs text-gray-500 uppercase">
//               Already have an account? Sign in
//             </a>
//             <span className="border-b w-1/5 md:w-1/5"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
