// import Order from "../models/order.model.js";
// import Product from "../models/product.model.js";


// export const placeOrderCOD = async (req, res) => {
//   try {
//     const userId = req.user;
//     const { items, address } = req.body;

//     if (!items || !address) {
//       return res.status(400).json({
//         message: "Items and address are required",
//         success: false,
//       });
//     }

  
//     let amount = await items.reduce(async (acc, item) => {
//       const product = await Product.findById(item.product);
//       if (!product) throw new Error("Product not found: " + item.product);
//       return (await acc) + product.offerPrice * item.quantity;
//     }, 0);


//     const order = await Order.create({
//       userId,
//       items,
//       address,
//       amount,
//       paymentType: "COD",
//       isPaid: false,
//       status: "order Placed",
//     });

//     res.status(201).json({
//       message: "Order placed successfully",
//       success: true,
//       order,
//     });
//   } catch (error) {
//     console.error("Error placing order:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


// export const getUserOrders = async (req, res) => {
//   try {
//     const userId = req.user?._id;
//     if (!userId) {
//       return res.status(401).json({ success: false, message: "Unauthorized" });
//     }

//     const orders = await Order.find({ userId }).populate("items.product address");
//     return res.status(200).json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching user orders:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server Error: " + error.message,
//     });
//   }
// };


// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({
//       $or: [{ paymentType: "COD" }, { isPaid: true }],
//     })
//       .populate("items.product address")
//       .sort({ createdAt: -1 });

//     res.status(200).json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching all orders:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
import Order from "../models/order.model.js";
import Product from "../models/product.model.js";

export const placeOrderCOD = async (req, res) => {
  try {
    const userId = req.user;
    const { items, address } = req.body;

    if (!items || !address) {
      return res.status(400).json({
        message: "Items and address are required",
        success: false,
      });
    }

    // Properly calculate total amount using effective price
    let amount = 0;
    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) throw new Error("Product not found: " + item.product);

      // Use offerPrice if > 0, otherwise use regular price
      const effectivePrice = product.offerPrice > 0 ? product.offerPrice : product.price;

      amount += effectivePrice * item.quantity;
    }

    // Add tax (2%)
    const TAX_RATE = 0.02;
    amount = amount + amount * TAX_RATE;

    // Round to 2 decimal places to avoid floating point errors
    amount = Math.round(amount * 100) / 100;

    // Create the order
    const order = await Order.create({
      userId,
      items,
      address,
      amount,
      paymentType: "COD",
      isPaid: false,
      status: "order Placed",
    });

    res.status(201).json({
      message: "Order placed successfully",
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const orders = await Order.find({ userId }).populate("items.product address");
    return res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    return res.status(500).json({
      success: false,
      message: "Server Error: " + error.message,
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      $or: [{ paymentType: "COD" }, { isPaid: true }],
    })
      .populate("items.product address")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching all orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// import Order from "../models/order.model.js";
// import Product from "../models/product.model.js";

// export const placeOrderCOD = async (req, res) => {
//   try {
//     const userId = req.user;
//     const { items, address } = req.body;

//     if (!items || !address) {
//       return res.status(400).json({
//         message: "Items and address are required",
//         success: false,
//       });
//     }

//     // Properly calculate total amount using effective price
//     let amount = 0;
//     for (const item of items) {
//       const product = await Product.findById(item.product);
//       if (!product) throw new Error("Product not found: " + item.product);

//       // Use offerPrice if > 0, otherwise use regular price
//       const effectivePrice = product.offerPrice > 0 ? product.offerPrice : product.price;

//       amount += effectivePrice * item.quantity;
//     }

//     // Round to 2 decimal places to avoid floating point errors
//     amount = Math.round(amount * 100) / 100;

//     // Create the order
//     const order = await Order.create({
//       userId,
//       items,
//       address,
//       amount,
//       paymentType: "COD",
//       isPaid: false,
//       status: "order Placed",
//     });

//     res.status(201).json({
//       message: "Order placed successfully",
//       success: true,
//       order,
//     });
//   } catch (error) {
//     console.error("Error placing order:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const getUserOrders = async (req, res) => {
//   try {
//     const userId = req.user?._id;
//     if (!userId) {
//       return res.status(401).json({ success: false, message: "Unauthorized" });
//     }

//     const orders = await Order.find({ userId }).populate("items.product address");
//     return res.status(200).json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching user orders:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server Error: " + error.message,
//     });
//   }
// };

// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({
//       $or: [{ paymentType: "COD" }, { isPaid: true }],
//     })
//       .populate("items.product address")
//       .sort({ createdAt: -1 });

//     res.status(200).json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching all orders:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// import Order from "../models/order.model.js";
// import Product from "../models/product.model.js";

// export const placeOrderCOD = async (req, res) => {
//   try {
//     const userId = req.user;
//     const { items, address } = req.body;

//     if (!items || !address) {
//       return res.status(400).json({
//         message: "Items and address are required",
//         success: false,
//       });
//     }

//     // Properly calculate total amount using for..of loop
//     let amount = 0;
//     for (const item of items) {
//       const product = await Product.findById(item.product);
//       if (!product) throw new Error("Product not found: " + item.product);
//       amount += product.offerPrice * item.quantity;
//     }

//     // Round to 2 decimal places to avoid floating point errors
//     amount = Math.round(amount * 100) / 100;

//     // Create the order
//     const order = await Order.create({
//       userId,
//       items,
//       address,
//       amount,
//       paymentType: "COD",
//       isPaid: false,
//       status: "order Placed",
//     });

//     res.status(201).json({
//       message: "Order placed successfully",
//       success: true,
//       order,
//     });
//   } catch (error) {
//     console.error("Error placing order:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const getUserOrders = async (req, res) => {
//   try {
//     const userId = req.user?._id;
//     if (!userId) {
//       return res.status(401).json({ success: false, message: "Unauthorized" });
//     }

//     const orders = await Order.find({ userId }).populate("items.product address");
//     return res.status(200).json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching user orders:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server Error: " + error.message,
//     });
//   }
// };

// export const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find({
//       $or: [{ paymentType: "COD" }, { isPaid: true }],
//     })
//       .populate("items.product address")
//       .sort({ createdAt: -1 });

//     res.status(200).json({ success: true, orders });
//   } catch (error) {
//     console.error("Error fetching all orders:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
