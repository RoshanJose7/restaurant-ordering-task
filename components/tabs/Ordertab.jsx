import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import CheckBox from "expo-checkbox";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import styles from "./ordertab.style";

// Order Object Structure for Reference
//   status: "PENDING",
//   customer: {
//     name: "John",
//     phoneNumber: "9876543210",
//   },
//   tableId: 3,
//   dishes: [
//     {
//       name: "Pork Momo",
//       quantity: 3,
//       price: 150,
//     },
//     {
//       name: "Beef Chowmein",
//       quantity: 2,
//       price: 130,
//     },
//   ],

const Ordertab = ({ index, order, updateOrder, removeOrder }) => {
  // Total Price of the Order
  const [total, setTotal] = useState(0);
  // Order Completion Status
  const [isCompleted, setCompletion] = useState(order.status !== "PENDING");

  useEffect(() => {
    // Calculate Total Price of the Order
    let total = 0;

    order.dishes.forEach((dish) => {
      total += dish.price * dish.quantity;
    });

    setTotal(total);
  });

  return (
    <View style={styles.container}>
      <View style={styles.ctaColumn}>
        <CheckBox
          style={styles.checkbox}
          value={isCompleted}
          onValueChange={() => {
            setCompletion((prev) => {
              updateOrder(index, !prev ? "COMPLETED" : "PENDING");
              return !prev;
            });
          }}
        />

        {isCompleted ? null : (
          <TouchableOpacity
            style={styles.deleteBtn}
            onPress={() => removeOrder(index)}
          >
            <FontAwesomeIcon icon={faTrash} color="red" />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.details}>
        <View style={styles.content}>
          <Text style={styles.dishBoldText}>Table {order.tableId}</Text>
          <Text style={styles.detailsText}>{order.customer.name}</Text>
          <Text style={styles.detailsText}>{order.customer.phoneNumber}</Text>

          <FlatList
            data={order.dishes}
            renderItem={({ item, index }) => (
              <View style={styles.dishContainer}>
                <Text key={index} style={styles.detailsText}>
                  {index + 1}. {item.name}
                </Text>

                <Text
                  key={`${order.tableId}-dish-${index}`}
                  style={styles.detailsText}
                >
                  {item.quantity} x ₹{item.price}
                </Text>
              </View>
            )}
          />

          <View style={styles.priceDetails}>
            <Text style={styles.dishBoldText}>Total: {total}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Ordertab;
