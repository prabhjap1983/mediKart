import User from "../models/user.model.js";

export const getCart = async (req, res) => {
  try {
    const userId = req.user;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    const cartItems = user.cartItems || {};

    res.status(200).json({
      success: true,
      cartItems,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};


// Update Cart 
export const updateCart = async (req, res) => {
  try {
    const userId = req.user;
    const { cartItems } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { cartItems },
      { new: true }
    ).populate("cartItems.productId");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found", success: false });
    }

    res.status(200).json({
      updatedUser,
      success: true,
      message: "Cart updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
