// import jwt from "jsonwebtoken";



// export const sellerLogin = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (
//             email === process.env.SELLER_EMAIL &&
//             password === process.env.SELLER_PASSWORD
//         ) {
//             const token = jwt.sign({ email }, process.env.JWT_SECRET, {
//                 expiresIn: "7d",
//             });
//             res.cookie("sellerToken",token),{

//             httpOnly: true,
//             secure: process.env.NODE_ENV == "production", // ✅ fixed error
//             sameSite: process.env.NODE_ENV == "production"? "none":"strict",
//             maxAge: 7 * 24 * 60 * 60 * 1000,

//             };
//             res.status(200).json({ message: "Login successful", token });
//         }
//     } catch (error) {
//         console.error("Error in sellerLogin:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export const sellerLogout = async (req, res) => {
//     try {
//         res.clearCookie("sellerToken", {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === "production",
//             sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
//         });
//         res.status(200).json({ message: "Logout successful", success: true });
//     } catch (error) {
//         console.error("Error in sellerLogout:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };



// export const isAuthSeller = (req, res) => {
//     try {
//         res.status(200).json({
//             success: true,
//         });
//     } catch (error) {
//         console.error("Error in isAuthSeller:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };



import jwt from "jsonwebtoken";

export const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.SELLER_EMAIL &&
      password === process.env.SELLER_PASSWORD
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      // ✅ fixed cookie options (removed comma issue)
      res.cookie("sellerToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      // ✅ added success field
      return res.status(200).json({
        success: true,
        message: "Login successful",
        token,
      });
    }

    // ✅ handle invalid credentials
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  } catch (error) {
    console.error("Error in sellerLogin:", error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    res.status(200).json({ message: "Logout successful", success: true });
  } catch (error) {
    console.error("Error in sellerLogout:", error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

export const isAuthSeller = (req, res) => {
  try {
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error("Error in isAuthSeller:", error);
    res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
