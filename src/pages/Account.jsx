import React, { useState, useEffect } from "react";
import { selectCurrentUser } from "store/selector/authSelector";
import { useSelector } from "react-redux";
import { getUserOrders } from "services/Api";

const Order = () => {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getUserOrders(currentUser?._id).then((res) => {
      console.log("getUserOrders", res);
      setOrders(res?.data);
    });
  }, []);

  return (
    <>
      <div class="container mx-auto py-8">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 class="text-gray-900 title-font text-lg font-medium">Orders</h1>
          <div class="flex flex-col">
            {orders?.length > 0 && (
              <div>
                {orders.map((order) => (
                  <div
                    key={order._id}
                    className="flex space-between justify-between my-4 p-4 bg-white rounded shadow-md text-gray-900 title-font text-lg font-medium"
                  >
                    <div className="order-1">
                      <p>Tracking ID: {order._id}</p>
                      <p>
                        Paid At:{" "}
                        {new Date(order.paidAt).toLocaleDateString(undefined, {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                      <p>Total Price: {order.totalPrice}</p>
                      <ul>
                        {order.orderItems.map((item) => (
                          <div key={item._id}>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                          </div>
                        ))}
                      </ul>
                    </div>
                    <div className="order-2">
                      {order.orderItems.map((item) => (
                        <img
                          key={item?._id}
                          src={item?.image}
                          alt="Product"
                          className="h-[8.3125rem]"
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
