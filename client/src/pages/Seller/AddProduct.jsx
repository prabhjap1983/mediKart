// import { useState} from "react";

// const AddProduct = () => {
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   };
//     return (
//         <div className="py-10 flex flex-col justify-between bg-white">
//             <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
//                 <div>
//                     <p className="text-base font-medium">Product Image</p>
//                     <div className="flex flex-wrap items-center gap-3 mt-2">
//                         {Array(4).fill('').map((_, index) => (
//                             <label key={index} htmlFor={`image${index}`}>
//                                 <input 
//                                 onChange={(e) => {
//                                     const updatedFiles = [...files];
//                                     updatedFiles[index] = e.target.files[0];
//                                     setFiles(updatedFiles);
//                                 }}
//                                 accept="image/*" type="file" id={`image${index}`} hidden />
//                                 <img className="max-w-24 cursor-pointer" src={files[index]? URL.createObjectURL(files[index]): asset.upload_area} alt="uploadArea" width={100} height={100} />
//                             </label>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="flex flex-col gap-1 max-w-md">
//                     <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
//                     <input id="product-name" type="text" onChange={(e) => setName(e.target.value)} placeholder="Type here" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
//                 </div>
//                 <div className="flex flex-col gap-1 max-w-md">
//                     <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
//                     <textarea id="product-description" rows={4}  onChange={(e) => setDescription(e.target.value)} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none" placeholder="Type here"></textarea>
//                 </div>
//                 <div className="w-full flex flex-col gap-1">
//                     <label className="text-base font-medium" htmlFor="category">Category</label>
//                     <select id="category"  onChange={(e) => setCategory(e.target.value)} className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40">
//                         <option value="">Select Category</option>
//                         {
//                             categories.map((category, index)) => (
//                                 <option key={index} value={category.path}> {category.path}</option>
//                             )
//                         )}
//                     </select>
//                 </div>
//                 <div className="flex items-center gap-5 flex-wrap">
//                     <div className="flex-1 flex flex-col gap-1 w-32">
//                         <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
//                         <input id="product-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
//                     </div>
//                     <div className="flex-1 flex flex-col gap-1 w-32">
//                         <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
//                         <input id="offer-price" type="number" placeholder="0" className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40" required />
//                     </div>
//                 </div>
//                 <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">ADD</button>
//             </form>
//         </div>
//     );
// };

// export default AddProduct

// import { useState } from "react";

// const AddProduct = () => {
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");

//   // ✅ define asset (you used asset.upload_area without declaration)
//   const asset = {
//     upload_area:
//       "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png",
//   };

//   // ✅ define categories (you used categories.map without declaration)
//   const categories = [
//     { path: "Electronics" },
//     { path: "Clothing" },
//     { path: "Accessories" },
//   ];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="py-10 flex flex-col justify-between bg-white">
//       <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
//         <div>
//           <p className="text-base font-medium">Product Image</p>
//           <div className="flex flex-wrap items-center gap-3 mt-2">
//             {Array(4)
//               .fill("")
//               .map((_, index) => (
//                 <label key={index} htmlFor={`image${index}`}>
//                   <input
//                     onChange={(e) => {
//                       const updatedFiles = [...files];
//                       updatedFiles[index] = e.target.files[0];
//                       setFiles(updatedFiles);
//                     }}
//                     accept="image/*"
//                     type="file"
//                     id={`image${index}`}
//                     hidden
//                   />
//                   <img
//                     className="max-w-24 cursor-pointer"
//                     src={
//                       files[index]
//                         ? URL.createObjectURL(files[index])
//                         : asset.upload_area
//                     }
//                     alt="uploadArea"
//                     width={100}
//                     height={100}
//                   />
//                 </label>
//               ))}
//           </div>
//         </div>

//         <div className="flex flex-col gap-1 max-w-md">
//           <label className="text-base font-medium" htmlFor="product-name">
//             Product Name
//           </label>
//           <input
//             id="product-name"
//             type="text"
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Type here"
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//             required
//           />
//         </div>

//         <div className="flex flex-col gap-1 max-w-md">
//           <label className="text-base font-medium" htmlFor="product-description">
//             Product Description
//           </label>
//           <textarea
//             id="product-description"
//             rows={4}
//             onChange={(e) => setDescription(e.target.value)}
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
//             placeholder="Type here"
//           ></textarea>
//         </div>

//         <div className="w-full flex flex-col gap-1">
//           <label className="text-base font-medium" htmlFor="category">
//             Category
//           </label>
//           <select
//             id="category"
//             onChange={(e) => setCategory(e.target.value)}
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//           >
//             <option value="">Select Category</option>
//             {categories.map((category, index) => (
//               <option key={index} value={category.path}>
//                 {category.path}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="flex items-center gap-5 flex-wrap">
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="product-price">
//               Product Price
//             </label>
//             <input
//               id="product-price"
//               type="number"
//               placeholder="0"
//               onChange={(e) => setPrice(e.target.value)}
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               required
//             />
//           </div>
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="offer-price">
//               Offer Price
//             </label>
//             <input
//               id="offer-price"
//               type="number"
//               placeholder="0"
//               onChange={(e) => setOfferPrice(e.target.value)}
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               required
//             />
//           </div>
//         </div>

//         <button className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded">
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;
// import { useState } from "react";

// const AddProduct = ({ categories = [], asset }) => {
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // TODO: Handle product submission
//     console.log({ name, price, description, category, offerPrice, files });
//   };

//   return (
//     <div className="py-10 flex flex-col justify-between bg-white">
//       <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
//         {/* Product Images */}
//         <div>
//           <p className="text-base font-medium">Product Image</p>
//           <div className="flex flex-wrap items-center gap-3 mt-2">
//             {Array(4)
//               .fill("")
//               .map((_, index) => (
//                 <label key={index} htmlFor={`image${index}`}>
//                   <input
//                     onChange={(e) => {
//                       const updatedFiles = [...files];
//                       updatedFiles[index] = e.target.files[0];
//                       setFiles(updatedFiles);
//                     }}
//                     accept="image/*"
//                     type="file"
//                     id={`image${index}`}
//                     hidden
//                   />
//                   <img
//                     className="max-w-24 cursor-pointer"
//                     src={
//                       files[index]
//                         ? URL.createObjectURL(files[index])
//                         : asset?.upload_area
//                     }
//                     alt={`uploadArea-${index}`}
//                     width={100}
//                     height={100}
//                   />
//                 </label>
//               ))}
//           </div>
//         </div>

//         {/* Product Name */}
//         <div className="flex flex-col gap-1 max-w-md">
//           <label className="text-base font-medium" htmlFor="product-name">
//             Product Name
//           </label>
//           <input
//             id="product-name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Type here"
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//             required
//           />
//         </div>

//         {/* Product Description */}
//         <div className="flex flex-col gap-1 max-w-md">
//           <label className="text-base font-medium" htmlFor="product-description">
//             Product Description
//           </label>
//           <textarea
//             id="product-description"
//             rows={4}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
//             placeholder="Type here"
//           ></textarea>
//         </div>

//         {/* Category */}
//         <div className="w-full flex flex-col gap-1">
//           <label className="text-base font-medium" htmlFor="category">
//             Category
//           </label>
//           <select
//   id="category"
//   value={category}
//   onChange={(e) => setCategory(e.target.value)}
//   className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
// >
//   <option value="">Select Category</option>
//   {categories.map((cat, index) => (
//     <option key={index} value={cat}>
//       {cat}
//     </option>
//   ))}
// </select>

//         </div>

//         {/* Price & Offer Price */}
//         <div className="flex items-center gap-5 flex-wrap">
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="product-price">
//               Product Price
//             </label>
//             <input
//               id="product-price"
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               required
//             />
//           </div>
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="offer-price">
//               Offer Price
//             </label>
//             <input
//               id="offer-price"
//               type="number"
//               value={offerPrice}
//               onChange={(e) => setOfferPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               required
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded"
//         >
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;
// import { useState, useContext } from "react";
// import { AppContext } from "../../context/AppContext";
//  // ✅ import context

// const AddProduct = ({ asset }) => {
//   const { categories = [] } = useContext(AppContext); // ✅ fetch categories from AppContext
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // TODO: Handle product submission
//     console.log({ name, price, description, category, offerPrice, files });
//   };

//   return (
//     <div className="py-10 flex flex-col justify-between bg-white">
//       <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
//         {/* Product Images */}
//         <div>
//           <p className="text-base font-medium">Product Image</p>
//           <div className="flex flex-wrap items-center gap-3 mt-2">
//             {Array(4)
//               .fill("")
//               .map((_, index) => (
//                 <label key={index} htmlFor={`image${index}`}>
//                   <input
//                     onChange={(e) => {
//                       const updatedFiles = [...files];
//                       updatedFiles[index] = e.target.files[0];
//                       setFiles(updatedFiles);
//                     }}
//                     accept="image/*"
//                     type="file"
//                     id={`image${index}`}
//                     hidden
//                   />
//                   <img
//                     className="max-w-24 cursor-pointer"
//                     src={
//                       files[index]
//                         ? URL.createObjectURL(files[index])
//                         : asset?.upload_area
//                     }
//                     alt={`uploadArea-${index}`}
//                     width={100}
//                     height={100}
//                   />
//                 </label>
//               ))}
//           </div>
//         </div>

//         {/* Product Name */}
//         <div className="flex flex-col gap-1 max-w-md">
//           <label className="text-base font-medium" htmlFor="product-name">
//             Product Name
//           </label>
//           <input
//             id="product-name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Type here"
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//             required
//           />
//         </div>

//         {/* Product Description */}
//         <div className="flex flex-col gap-1 max-w-md">
//           <label className="text-base font-medium" htmlFor="product-description">
//             Product Description
//           </label>
//           <textarea
//             id="product-description"
//             rows={4}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
//             placeholder="Type here"
//           ></textarea>
//         </div>

//         {/* Category */}
//         <div className="w-full flex flex-col gap-1">
//           <label className="text-base font-medium" htmlFor="category">
//             Category
//           </label>
//           <select
//             id="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, index) => (
//               <option key={index} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Price & Offer Price */}
//         <div className="flex items-center gap-5 flex-wrap">
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="product-price">
//               Product Price
//             </label>
//             <input
//               id="product-price"
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               required
//             />
//           </div>
//           <div className="flex-1 flex flex-col gap-1 w-32">
//             <label className="text-base font-medium" htmlFor="offer-price">
//               Offer Price
//             </label>
//             <input
//               id="offer-price"
//               type="number"
//               value={offerPrice}
//               onChange={(e) => setOfferPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
//               required
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded"
//         >
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;
// import { useState, useContext } from "react";
// import { AppContext } from "../../context/AppContext";

// const AddProduct = ({ asset }) => {
//   const {axios} =useContext(AppContext);
//   const { categories = [] } = useContext(AppContext);
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");

//   const handleSubmit = async (e) => {
//     try {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("description", description);
//         formData.append("price", price);
//         formData.append("offerPrice", offerPrice);
//         formData.append("category", category);
//         for (let i = 0; i < files.length; i++) {
//             formData.append("image", files[i]);
//         }
//       const { data } = await axios.post("/api/product/add-product", formData);
//               if (data.success) {
//                   toast.success(data.message);
//                   setName("");
//                   setDescription("");
//                   setPrice("");
//                   setOfferPrice("");
//                   setCategory("");
//                   setFiles([]);
//               } else {
//                   toast.error(data.message);
//               }
//           } catch (error) {
//               toast.error(error.message);
//           }
//       };
    

//   return (
//     <div className="py-10 flex flex-col items-center bg-gradient-to-br from-indigo-50 to-white min-h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="md:p-10 p-6 space-y-6 w-full max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-200"
//       >
//         {/* Title */}
//         <h2 className="text-2xl font-semibold text-gray-800 text-center">
//           Add New Product
//         </h2>

//         {/* Product Images */}
//         <div>
//           <p className="text-base font-medium text-gray-700">Product Images</p>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3">
//             {Array(4)
//               .fill("")
//               .map((_, index) => (
//                 <label
//                   key={index}
//                   htmlFor={`image${index}`}
//                   className="cursor-pointer"
//                 >
//                   <input
//                     onChange={(e) => {
//                       const updatedFiles = [...files];
//                       updatedFiles[index] = e.target.files[0];
//                       setFiles(updatedFiles);
//                     }}
//                     accept="image/*"
//                     type="file"
//                     id={`image${index}`}
//                     hidden
//                   />
//                   <div className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50 hover:border-indigo-400 transition">
//                     {files[index] ? (
//                       <img
//                         src={URL.createObjectURL(files[index])}
//                         alt={`upload-${index}`}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <img
//                         src={asset?.upload_area}
//                         alt={`placeholder-${index}`}
//                         className="w-10 h-10 opacity-70"
//                       />
//                     )}
//                   </div>
//                 </label>
//               ))}
//           </div>
//         </div>

//         {/* Product Name */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="product-name">
//             Product Name
//           </label>
//           <input
//             id="product-name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Type here"
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//             required
//           />
//         </div>

//         {/* Product Description */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="product-description">
//             Product Description
//           </label>
//           <textarea
//             id="product-description"
//             rows={5}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Type here"
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full resize-none focus:ring-2 focus:ring-indigo-400"
//           ></textarea>
//         </div>

//         {/* Category */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="category">
//             Category
//           </label>
//           <select
//             id="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, index) => (
//               <option key={index} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Price & Offer Price */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div className="flex flex-col gap-2">
//             <label className="text-base font-medium text-gray-700" htmlFor="product-price">
//               Product Price
//             </label>
//             <input
//               id="product-price"
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//               required
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <label className="text-base font-medium text-gray-700" htmlFor="offer-price">
//               Offer Price
//             </label>
//             <input
//               id="offer-price"
//               type="number"
//               value={offerPrice}
//               onChange={(e) => setOfferPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//               required
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition"
//         >
//           ADD PRODUCT
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;
// import { useState, useContext } from "react";
// import { AppContext } from "../../context/AppContext";
// import { toast } from "react-toastify"; // Add this import

// const AddProduct = ({ asset }) => {
//   const { axios } = useContext(AppContext);
//   const { categories = [] } = useContext(AppContext);
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");

//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault();
      
//       // Validation
//       if (!name || !price || !offerPrice || !description || !category) {
//         toast.error("Please fill all required fields");
//         return;
//       }

//       // Filter out empty file slots
//       const validFiles = files.filter(file => file !== undefined && file !== null);
      
//       if (validFiles.length === 0) {
//         toast.error("Please select at least one image");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("offerPrice", offerPrice);
//       formData.append("category", category);
      
//       // Append only valid files
//       validFiles.forEach(file => {
//         formData.append("image", file);
//       });

//       console.log("Submitting form data..."); // Debug log
      
//       const { data } = await axios.post("/api/product/add-product", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
      
//       if (data.success) {
//         toast.success(data.message);
//         // Reset form
//         setName("");
//         setDescription("");
//         setPrice("");
//         setOfferPrice("");
//         setCategory("");
//         setFiles([]);
//       } else {
//         toast.error(data.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error); // Debug log
//       toast.error(error.response?.data?.message || error.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="py-10 flex flex-col items-center bg-gradient-to-br from-indigo-50 to-white min-h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="md:p-10 p-6 space-y-6 w-full max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-200"
//       >
//         {/* Title */}
//         <h2 className="text-2xl font-semibold text-gray-800 text-center">
//           Add New Product
//         </h2>

//         {/* Product Images */}
//         <div>
//           <p className="text-base font-medium text-gray-700">
//             Product Images <span className="text-red-500">*</span>
//           </p>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3">
//             {Array(4)
//               .fill("")
//               .map((_, index) => (
//                 <label
//                   key={index}
//                   htmlFor={`image${index}`}
//                   className="cursor-pointer"
//                 >
//                   <input
//                     onChange={(e) => {
//                       const updatedFiles = [...files];
//                       updatedFiles[index] = e.target.files[0];
//                       setFiles(updatedFiles);
//                     }}
//                     accept="image/*"
//                     type="file"
//                     id={`image${index}`}
//                     hidden
//                   />
//                   <div className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50 hover:border-indigo-400 transition">
//                     {files[index] ? (
//                       <img
//                         src={URL.createObjectURL(files[index])}
//                         alt={`upload-${index}`}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <img
//                         src={asset?.upload_area}
//                         alt={`placeholder-${index}`}
//                         className="w-10 h-10 opacity-70"
//                       />
//                     )}
//                   </div>
//                 </label>
//               ))}
//           </div>
//         </div>

//         {/* Product Name */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="product-name">
//             Product Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             id="product-name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Type here"
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//             required
//           />
//         </div>

//         {/* Product Description */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="product-description">
//             Product Description <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             id="product-description"
//             rows={5}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Type here"
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full resize-none focus:ring-2 focus:ring-indigo-400"
//             required
//           ></textarea>
//         </div>

//         {/* Category */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="category">
//             Category <span className="text-red-500">*</span>
//           </label>
//           <select
//             id="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, index) => (
//               <option key={index} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Price & Offer Price */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div className="flex flex-col gap-2">
//             <label className="text-base font-medium text-gray-700" htmlFor="product-price">
//               Product Price <span className="text-red-500">*</span>
//             </label>
//             <input
//               id="product-price"
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//               required
//               min="0"
//               step="0.01"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <label className="text-base font-medium text-gray-700" htmlFor="offer-price">
//               Offer Price <span className="text-red-500">*</span>
//             </label>
//             <input
//               id="offer-price"
//               type="number"
//               value={offerPrice}
//               onChange={(e) => setOfferPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//               required
//               min="0"
//               step="0.01"
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           ADD PRODUCT
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;

// import { useState, useContext } from "react";
// import { AppContext } from "../../context/AppContext";
// import { toast } from "react-toastify"; // Add this import

// const AddProduct = ({ asset }) => {
//   const { axios } = useContext(AppContext);
//   const { categories = [] } = useContext(AppContext);
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");

//   const handleSubmit = async (e) => {
//     try {
//       e.preventDefault();
      
//       // Validation
//       if (!name || !price || !offerPrice || !description || !category) {
//         toast.error("Please fill all required fields");
//         setIsSubmitting(false);
//         return;
//       }

//       // Filter out empty file slots
//       const validFiles = files.filter(file => file !== undefined && file !== null);
      
//       if (validFiles.length === 0) {
//         toast.error("Please select at least one image");
//         setIsSubmitting(false);
//         return;
//       }

//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("offerPrice", offerPrice);
//       formData.append("category", category);
      
//       // Append only valid files
//       validFiles.forEach(file => {
//         formData.append("image", file);
//       });

//       console.log("Submitting form data..."); // Debug log
      
//       const { data } = await axios.post("/api/product/add-product", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
      
//       if (data.success) {
//         toast.success(data.message);
//         // Reset form
//         setName("");
//         setDescription("");
//         setPrice("");
//         setOfferPrice("");
//         setCategory("");
//         setFiles([]);
//       } else {
//         toast.error(data.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error); // Debug log
//       toast.error(error.response?.data?.message || error.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="py-10 flex flex-col items-center bg-gradient-to-br from-indigo-50 to-white min-h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="md:p-10 p-6 space-y-6 w-full max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-200"
//       >
//         {/* Title */}
//         <h2 className="text-2xl font-semibold text-gray-800 text-center">
//           Add New Product
//         </h2>

//         {/* Product Images */}
//         <div>
//           <p className="text-base font-medium text-gray-700">
//             Product Images <span className="text-red-500">*</span>
//           </p>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3">
//             {Array(4)
//               .fill("")
//               .map((_, index) => (
//                 <label
//                   key={index}
//                   htmlFor={`image${index}`}
//                   className="cursor-pointer"
//                 >
//                   <input
//                     onChange={(e) => {
//                       const updatedFiles = [...files];
//                       updatedFiles[index] = e.target.files[0];
//                       setFiles(updatedFiles);
//                     }}
//                     accept="image/*"
//                     type="file"
//                     id={`image${index}`}
//                     hidden
//                   />
//                   <div className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50 hover:border-indigo-400 transition">
//                     {files[index] ? (
//                       <img
//                         src={URL.createObjectURL(files[index])}
//                         alt={`upload-${index}`}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <img
//                         src={asset?.upload_area}
//                         alt={`placeholder-${index}`}
//                         className="w-10 h-10 opacity-70"
//                       />
//                     )}
//                   </div>
//                 </label>
//               ))}
//           </div>
//         </div>

//         {/* Product Name */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="product-name">
//             Product Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             id="product-name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Type here"
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//             required
//           />
//         </div>

//         {/* Product Description */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="product-description">
//             Product Description <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             id="product-description"
//             rows={5}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Type here"
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full resize-none focus:ring-2 focus:ring-indigo-400"
//             required
//           ></textarea>
//         </div>

//         {/* Category */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="category">
//             Category <span className="text-red-500">*</span>
//           </label>
//           <select
//             id="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, index) => (
//               <option key={index} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Price & Offer Price */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div className="flex flex-col gap-2">
//             <label className="text-base font-medium text-gray-700" htmlFor="product-price">
//               Product Price <span className="text-red-500">*</span>
//             </label>
//             <input
//               id="product-price"
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//               required
//               min="0"
//               step="0.01"
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <label className="text-base font-medium text-gray-700" htmlFor="offer-price">
//               Offer Price <span className="text-red-500">*</span>
//             </label>
//             <input
//               id="offer-price"
//               type="number"
//               value={offerPrice}
//               onChange={(e) => setOfferPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//               required
//               min="0"
//               step="0.01"
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           ADD PRODUCT
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;

// import { useState, useContext } from "react";
// import { AppContext } from "../../context/AppContext";
// import { toast } from "react-toastify";

// const AddProduct = ({ asset }) => {
//   const { axios } = useContext(AppContext);
//   const { categories = [] } = useContext(AppContext);
//   const [files, setFiles] = useState([]);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [offerPrice, setOfferPrice] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Prevent multiple submissions
//     if (isSubmitting) {
//       return;
//     }

//     try {
//       setIsSubmitting(true);
      
//       // Validation
//       if (!name || !price || !offerPrice || !description || !category) {
//         toast.error("Please fill all required fields");
//         return;
//       }

//       // Filter out empty file slots
//       const validFiles = files.filter(file => file !== undefined && file !== null);
      
//       if (validFiles.length === 0) {
//         toast.error("Please select at least one image");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("offerPrice", offerPrice);
//       formData.append("category", category);
      
//       // Append only valid files
//       validFiles.forEach(file => {
//         formData.append("image", file);
//       });

//       console.log("Submitting form data..."); // Debug log
      
//       const response = await axios.post("/api/product/add-product", formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
      
//       console.log("Full response:", response); // Debug log
//       console.log("Response data:", response.data); // Debug log
      
//       // Check response structure
//       if (response && response.data) {
//         if (response.data.success) {
//           toast.success(response.data.message || "Product added successfully!");
//           // Reset form
//           setName("");
//           setDescription("");
//           setPrice("");
//           setOfferPrice("");
//           setCategory("");
//           setFiles([]);
//         } else {
//           toast.error(response.data.message || "Failed to add product");
//         }
//       } else {
//         toast.error("Invalid response from server");
//       }
      
//     } catch (error) {
//       console.error("Error submitting form:", error); // Debug log
//       console.error("Error response:", error.response); // Debug log
      
//       if (error.response && error.response.data) {
//         toast.error(error.response.data.message || "Something went wrong");
//       } else {
//         toast.error(error.message || "Network error occurred");
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="py-10 flex flex-col items-center bg-gradient-to-br from-indigo-50 to-white min-h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="md:p-10 p-6 space-y-6 w-full max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-200"
//       >
//         {/* Title */}
//         <h2 className="text-2xl font-semibold text-gray-800 text-center">
//           Add New Product
//         </h2>

//         {/* Product Images */}
//         <div>
//           <p className="text-base font-medium text-gray-700">
//             Product Images <span className="text-red-500">*</span>
//           </p>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3">
//             {Array(4)
//               .fill("")
//               .map((_, index) => (
//                 <label
//                   key={index}
//                   htmlFor={`image${index}`}
//                   className="cursor-pointer"
//                 >
//                   <input
//                     onChange={(e) => {
//                       const updatedFiles = [...files];
//                       updatedFiles[index] = e.target.files[0];
//                       setFiles(updatedFiles);
//                     }}
//                     accept="image/*"
//                     type="file"
//                     id={`image${index}`}
//                     hidden
//                   />
//                   <div className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50 hover:border-indigo-400 transition">
//                     {files[index] ? (
//                       <img
//                         src={URL.createObjectURL(files[index])}
//                         alt={`upload-${index}`}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <img
//                         src={asset?.upload_area}
//                         alt={`placeholder-${index}`}
//                         className="w-10 h-10 opacity-70"
//                       />
//                     )}
//                   </div>
//                 </label>
//               ))}
//           </div>
//         </div>

//         {/* Product Name */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="product-name">
//             Product Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             id="product-name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Type here"
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//             required
//             disabled={isSubmitting}
//           />
//         </div>

//         {/* Product Description */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="product-description">
//             Product Description <span className="text-red-500">*</span>
//           </label>
//           <textarea
//             id="product-description"
//             rows={5}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Type here"
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full resize-none focus:ring-2 focus:ring-indigo-400"
//             required
//             disabled={isSubmitting}
//           ></textarea>
//         </div>

//         {/* Category */}
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-medium text-gray-700" htmlFor="category">
//             Category <span className="text-red-500">*</span>
//           </label>
//           <select
//             id="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//             required
//             disabled={isSubmitting}
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, index) => (
//               <option key={index} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Price & Offer Price */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div className="flex flex-col gap-2">
//             <label className="text-base font-medium text-gray-700" htmlFor="product-price">
//               Product Price <span className="text-red-500">*</span>
//             </label>
//             <input
//               id="product-price"
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//               required
//               min="0"
//               step="0.01"
//               disabled={isSubmitting}
//             />
//           </div>
//           <div className="flex flex-col gap-2">
//             <label className="text-base font-medium text-gray-700" htmlFor="offer-price">
//               Offer Price <span className="text-red-500">*</span>
//             </label>
//             <input
//               id="offer-price"
//               type="number"
//               value={offerPrice}
//               onChange={(e) => setOfferPrice(e.target.value)}
//               placeholder="0"
//               className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
//               required
//               min="0"
//               step="0.01"
//               disabled={isSubmitting}
//             />
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {isSubmitting ? "ADDING PRODUCT..." : "ADD PRODUCT"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;

import { useState, useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const AddProduct = ({ asset }) => {
  const { axios } = useContext(AppContext);
  const { categories = [] } = useContext(AppContext);

  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      // Validation
      if (!name || !price || !offerPrice || !description || !category) {
        toast.error("Please fill all required fields");
        return;
      }

      const validFiles = files.filter((file) => file !== undefined && file !== null);
      if (validFiles.length === 0) {
        toast.error("Please select at least one image");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("offerPrice", offerPrice);
      formData.append("category", category);
      validFiles.forEach((file) => formData.append("image", file));

      const response = await axios.post("/api/product/add-product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response && response.data) {
        if (response.data.success) {
          // ✅ Show success banner
          setSuccessMessage("Product added successfully!");
          formRef.current?.scrollIntoView({ behavior: "smooth" });

          // Reset form
          setName("");
          setDescription("");
          setPrice("");
          setOfferPrice("");
          setCategory("");
          setFiles([]);

          // Hide banner after 5s
          setTimeout(() => setSuccessMessage(""), 5000);
        } else {
          toast.error(response.data.message || "Failed to add product");
        }
      } else {
        toast.error("Invalid response from server");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-10 flex flex-col items-center bg-gradient-to-br from-indigo-50 to-white min-h-screen">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="md:p-10 p-6 space-y-6 w-full max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-200"
      >
        {/* ✅ Success Banner */}
        {successMessage && (
          <div className="p-3 mb-4 rounded-lg bg-green-100 text-green-700 text-center font-medium">
            {successMessage}
          </div>
        )}

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Add New Product
        </h2>

        {/* Product Images */}
        <div>
          <p className="text-base font-medium text-gray-700">
            Product Images <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`image${index}`} className="cursor-pointer">
                  <input
                    onChange={(e) => {
                      const updatedFiles = [...files];
                      updatedFiles[index] = e.target.files[0];
                      setFiles(updatedFiles);
                    }}
                    accept="image/*"
                    type="file"
                    id={`image${index}`}
                    hidden
                  />
                  <div className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50 hover:border-indigo-400 transition">
                    {files[index] ? (
                      <img
                        src={URL.createObjectURL(files[index])}
                        alt={`upload-${index}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={asset?.upload_area}
                        alt={`placeholder-${index}`}
                        className="w-10 h-10 opacity-70"
                      />
                    )}
                  </div>
                </label>
              ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-gray-700" htmlFor="product-name">
            Product Name <span className="text-red-500">*</span>
          </label>
          <input
            id="product-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type here"
            className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-2">
          <label
            className="text-base font-medium text-gray-700"
            htmlFor="product-description"
          >
            Product Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="product-description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Type here"
            className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full resize-none focus:ring-2 focus:ring-indigo-400"
            required
            disabled={isSubmitting}
          ></textarea>
        </div>

        {/* Category */}
        <div className="flex flex-col gap-2">
          <label className="text-base font-medium text-gray-700" htmlFor="category">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
            required
            disabled={isSubmitting}
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Price & Offer Price */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-gray-700" htmlFor="product-price">
              Product Price <span className="text-red-500">*</span>
            </label>
            <input
              id="product-price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="0"
              className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
              required
              min="0"
              step="0.01"
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-base font-medium text-gray-700" htmlFor="offer-price">
              Offer Price <span className="text-red-500">*</span>
            </label>
            <input
              id="offer-price"
              type="number"
              value={offerPrice}
              onChange={(e) => setOfferPrice(e.target.value)}
              placeholder="0"
              className="outline-none py-2.5 px-3 rounded-lg border border-gray-300 w-full focus:ring-2 focus:ring-indigo-400"
              required
              min="0"
              step="0.01"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "ADDING PRODUCT..." : "ADD PRODUCT"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
