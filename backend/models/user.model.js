// import mongoose from 'mongoose';

// const userSchema= new mnoogse.Schema({
//         name:{
//             type: string,
//             require: true,

//         },
//         email:{
//             type: string,
//             require: true,
//             unique: true,
//         },
//         email:{
//             type: string,
//             require: true,
//             unique: true,
//         },
//         password:{
//             type: String,
//             require: true,
//         },
//         cartItems:{
//             type:Object,
//             default: {}
//         },
//         {minimize: false}
// );

// const User = mongoose.model("User", userSchema);

// export default User;


import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String, // Capital S
      required: true, // 'required', not 'require'
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cartItems: {
      type: Object,
      default: {},
    },
  },
  { minimize: false } // Options go here, outside the schema fields
);

const User = mongoose.model("User", userSchema);

export default User;
