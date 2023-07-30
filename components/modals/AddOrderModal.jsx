import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { styles } from "./addOrderModal.style";

export default function AddOrderModal({ addOrder, closeModal }) {
  // Customer Details State
  const [customerName, setCustomerName] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [tableId, setTableId] = useState();

  // Dish Details State
  const [dishName, setDishName] = useState("");
  const [dishQuantity, setDishQuantity] = useState("");
  const [dishPrice, setDishPrice] = useState("");

  // Order Summary State
  const [dishes, setDishes] = useState([]);
  const [total, setTotal] = useState("");

  function addDish() {
    const quantity = Number.parseInt(dishQuantity);
    const price = Number.parseInt(dishPrice);

    const dish = {
      name: dishName,
      quantity,
      price,
    };

    setTotal((prev) => prev + price * quantity);
    setDishes((prev) => [...prev, dish]);
    setDishName("");
    setDishQuantity("");
    setDishPrice("");
  }

  function createOrder() {
    const order = {
      status: "PENDING",
      customer: {
        name: customerName,
        phoneNumber: customerPhoneNumber,
      },
      tableId,
      dishes,
    };

    addOrder(order);

    setCustomerName("");
    setCustomerPhoneNumber("");
    setTableId("");
    setDishes([]);
    closeModal();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.boldText}>Customer Details</Text>

      <TextInput
        style={styles.input}
        value={customerName}
        onChangeText={setCustomerName}
        placeholder="John Doe"
        keyboardType="name-phone-pad"
      />
      <TextInput
        style={styles.input}
        value={customerPhoneNumber}
        onChangeText={setCustomerPhoneNumber}
        placeholder="1234567890"
        keyboardType="phone-pad"
        maxLength={10}
      />
      <TextInput
        style={styles.input}
        value={tableId}
        onChangeText={setTableId}
        placeholder="31"
        keyboardType="number-pad"
      />

      <Text style={styles.boldText}>Dish Details</Text>
      <TextInput
        style={styles.input}
        value={dishName}
        onChangeText={setDishName}
        placeholder="Masala Dosa"
        keyboardType="name-phone-pad"
      />
      <TextInput
        style={styles.input}
        value={dishPrice}
        onChangeText={setDishPrice}
        placeholder="70"
        keyboardType="number-pad"
      />
      <TextInput
        style={styles.input}
        value={dishQuantity}
        onChangeText={setDishQuantity}
        placeholder="1"
        keyboardType="number-pad"
      />

      <TouchableOpacity style={styles.addDishBtn} onPress={addDish}>
        <Text style={styles.addDishBtnText}>Add Dish</Text>
      </TouchableOpacity>

      <View style={styles.dishesPreviewContainer}>
        <Text style={styles.boldText}>Order Preview</Text>

        {dishes.map((item, index) => (
          <View key={`new-dish-${index}`} style={styles.dishContainer}>
            <Text style={styles.detailsText}>
              {index + 1}. {item.name}
            </Text>

            <Text style={styles.detailsText}>
              {item.quantity} x ₹{item.price}
            </Text>
          </View>
        ))}

        <View style={styles.priceDetails}>
          <Text style={styles.boldText}>Total: {total}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addOrderBtn} onPress={createOrder}>
        <Text style={styles.addDishBtnText}>Create Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
