// "use client";

// import { loginUser, resetSuccess } from "@/store/authSlice";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";


// export default function LoginForm() {
//   const dispatch = useDispatch();
//   const { loading, error, success } = useSelector((state) => state.auth);
//   const router = useRouter();
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(credentials));
//   };

//    useEffect(() => {
//     if (success) {
//       Swal.fire({
//         icon: "success",
//         title: "Login Successful!",
//         text: "Welcome back 🎉",
//         confirmButtonText: "Go to Home",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           router.push("/"); 
//         }
//       });

//       // reset form
//       setCredentials({
//         username: "",
//         password: "",
//       });
//       dispatch(resetSuccess());
//     }

//     if (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Login Failed",
//         text: typeof error === "string" ? error : "Invalid username or password",
//       });
//     }
//   }, [success, error, dispatch]);

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
//             FSO Webinar
//           </h2>
//           <p className="text-xl text-gray-600 text-center">Welcome back!</p>

//           {/* Divider */}
//           <div className="mt-4 flex items-center justify-between">
//             <span className="border-b w-1/5 lg:w-2/5"></span>
//             <span className="text-xs text-center text-gray-500 uppercase">
//               Login
//             </span>
//             <span className="border-b w-1/5 lg:w-2/5"></span>
//           </div>

//           {/* Login Form */}
//           <form onSubmit={handleSubmit}>
//             <div className="mt-4">
//               <label className="block text-gray-700 text-sm font-bold mb-2">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 value={credentials.username}
//                 onChange={(e) =>
//                   setCredentials({ ...credentials, username: e.target.value })
//                 }
//                 required
//                 className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             <div className="mt-4">
//               <div className="flex justify-between">
//                 <label className="block text-gray-700 text-sm font-bold mb-2">
//                   Password
//                 </label>
//                 <a href="#" className="text-xs text-gray-500">
//                   Forget Password?
//                 </a>
//               </div>
//               <input
//                 type="password"
//                 name="password"
//                 value={credentials.password}
//                 onChange={(e) =>
//                   setCredentials({ ...credentials, password: e.target.value })
//                 }
//                 required
//                 className="bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:shadow-outline"
//               />
//             </div>

//             <div className="mt-8">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 disabled:opacity-50"
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </div>
//           </form>

//           {/* Error message */}
//           {error && (
//             <p className="mt-4 text-red-500 text-sm text-center">
//               {typeof error === "string"
//                 ? error
//                 : JSON.stringify(error)}
//             </p>
//           )}

//           {/* Sign up link */}
//           <div className="mt-4 flex items-center justify-between">
//             <span className="border-b w-1/5 md:w-1/4"></span>
//             <a href="/register" className="text-xs text-gray-500 uppercase">
//               or sign up
//             </a>
//             <span className="border-b w-1/5 md:w-1/4"></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
