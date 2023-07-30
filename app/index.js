import { useState } from "react";
import { Stack } from "expo-router";
import Modal from "react-native-modal";
import { FlatList } from "react-native-gesture-handler";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";

import { Ordertab } from "../components";
import { COLORS, SIZES } from "../constants";
import AddOrderModal from "../components/modals/AddOrderModal";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Orders() {
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState([
    {
      status: "PENDING",
      customer: {
        name: "John",
        phoneNumber: "9876543210",
      },
      tableId: 3,
      dishes: [
        {
          name: "Pork Momo",
          quantity: 3,
          price: 150,
        },
        {
          name: "Beef Chowmein",
          quantity: 2,
          price: 130,
        },
      ],
    },
    // {
    //   status: "DONE",
    //   customer: {
    //     name: "Alice",
    //     phoneNumber: "9812345678",
    //   },
    //   tableId: 5,
    //   dishes: [
    //     {
    //       name: "Chicken Momo",
    //       quantity: 2,
    //       price: 120,
    //     },
    //     {
    //       name: "Shrimp Chowmein",
    //       quantity: 1,
    //       price: 140,
    //     },
    //   ],
    // },
    // {
    //   status: "PENDING",
    //   customer: {
    //     name: "Michael",
    //     phoneNumber: "9823423478",
    //   },
    //   tableId: 6,
    //   dishes: [
    //     {
    //       name: "Vegetable Momo",
    //       quantity: 1,
    //       price: 100,
    //     },
    //     {
    //       name: "Chicken Chowmein",
    //       quantity: 1,
    //       price: 120,
    //     },
    //   ],
    // },
    // {
    //   status: "DONE",
    //   customer: {
    //     name: "Sophia",
    //     phoneNumber: "9898989898",
    //   },
    //   tableId: 8,
    //   dishes: [
    //     {
    //       name: "Beef Momo",
    //       quantity: 2,
    //       price: 130,
    //     },
    //     {
    //       name: "Shrimp Chowmein",
    //       quantity: 1,
    //       price: 140,
    //     },
    //   ],
    // },
    // {
    //   status: "PENDING",
    //   customer: {
    //     name: "William",
    //     phoneNumber: "9812378901",
    //   },
    //   tableId: 10,
    //   dishes: [
    //     {
    //       name: "Chicken Momo",
    //       quantity: 1,
    //       price: 120,
    //     },
    //     {
    //       name: "Vegetable Chowmein",
    //       quantity: 1,
    //       price: 100,
    //     },
    //   ],
    // },
    // {
    //   status: "DONE",
    //   customer: {
    //     name: "Olivia",
    //     phoneNumber: "9876541230",
    //   },
    //   tableId: 12,
    //   dishes: [
    //     {
    //       name: "Pork Momo",
    //       quantity: 2,
    //       price: 150,
    //     },
    //     {
    //       name: "Chicken Chowmein",
    //       quantity: 1,
    //       price: 120,
    //     },
    //   ],
    // },
    // {
    //   status: "PENDING",
    //   customer: {
    //     name: "James",
    //     phoneNumber: "9812765432",
    //   },
    //   tableId: 14,
    //   dishes: [
    //     {
    //       name: "Vegetable Momo",
    //       quantity: 1,
    //       price: 100,
    //     },
    //     {
    //       name: "Chicken Chowmein",
    //       quantity: 1,
    //       price: 120,
    //     },
    //   ],
    // },
    // {
    //   status: "DONE",
    //   customer: {
    //     name: "Alexander",
    //     phoneNumber: "9808080808",
    //   },
    //   tableId: 16,
    //   dishes: [
    //     {
    //       name: "Pork Momo",
    //       quantity: 1,
    //       price: 150,
    //     },
    //     {
    //       name: "Shrimp Chowmein",
    //       quantity: 2,
    //       price: 140,
    //     },
    //   ],
    // },
    // {
    //   status: "PENDING",
    //   customer: {
    //     name: "Mia",
    //     phoneNumber: "9812345678",
    //   },
    //   tableId: 18,
    //   dishes: [
    //     {
    //       name: "Chicken Momo",
    //       quantity: 1,
    //       price: 120,
    //     },
    //     {
    //       name: "Vegetable Chowmein",
    //       quantity: 1,
    //       price: 100,
    //     },
    //   ],
    // },
    // {
    //   status: "DONE",
    //   customer: {
    //     name: "Daniel",
    //     phoneNumber: "9876543210",
    //   },
    //   tableId: 20,
    //   dishes: [
    //     {
    //       name: "Beef Momo",
    //       quantity: 2,
    //       price: 130,
    //     },
    //     {
    //       name: "Shrimp Chowmein",
    //       quantity: 1,
    //       price: 140,
    //     },
    //   ],
    // },
    // {
    //   status: "PENDING",
    //   customer: {
    //     name: "Isabella",
    //     phoneNumber: "9876543210",
    //   },
    //   tableId: 22,
    //   dishes: [
    //     {
    //       name: "Pork Momo",
    //       quantity: 2,
    //       price: 150,
    //     },
    //     {
    //       name: "Chicken Chowmein",
    //       quantity: 1,
    //       price: 120,
    //     },
    //   ],
    // },
    // {
    //   status: "DONE",
    //   customer: {
    //     name: "Joseph",
    //     phoneNumber: "9812345678",
    //   },
    //   tableId: 24,
    //   dishes: [
    //     {
    //       name: "Vegetable Momo",
    //       quantity: 1,
    //       price: 100,
    //     },
    //     {
    //       name: "Beef Chowmein",
    //       quantity: 1,
    //       price: 130,
    //     },
    //   ],
    // },
    // {
    //   status: "PENDING",
    //   customer: {
    //     name: "Evelyn",
    //     phoneNumber: "9876543210",
    //   },
    //   tableId: 26,
    //   dishes: [
    //     {
    //       name: "Chicken Momo",
    //       quantity: 2,
    //       price: 120,
    //     },
    //     {
    //       name: "Shrimp Chowmein",
    //       quantity: 1,
    //       price: 140,
    //     },
    //   ],
    // },
    // {
    //   status: "DONE",
    //   customer: {
    //     name: "Benjamin",
    //     phoneNumber: "9812345678",
    //   },
    //   tableId: 28,
    //   dishes: [
    //     {
    //       name: "Beef Momo",
    //       quantity: 1,
    //       price: 130,
    //     },
    //     {
    //       name: "Vegetable Chowmein",
    //       quantity: 1,
    //       price: 100,
    //     },
    //   ],
    // },
    // {
    //   status: "PENDING",
    //   customer: {
    //     name: "Charlotte",
    //     phoneNumber: "9876543210",
    //   },
    //   tableId: 30,
    //   dishes: [
    //     {
    //       name: "Pork Momo",
    //       quantity: 3,
    //       price: 150,
    //     },
    //     {
    //       name: "Chicken Chowmein",
    //       quantity: 1,
    //       price: 120,
    //     },
    //   ],
    // },
    // {
    //   status: "DONE",
    //   customer: {
    //     name: "Liam",
    //     phoneNumber: "9812345678",
    //   },
    //   tableId: 32,
    //   dishes: [
    //     {
    //       name: "Shrimp Momo",
    //       quantity: 1,
    //       price: 140,
    //     },
    //     {
    //       name: "Beef Chowmein",
    //       quantity: 1,
    //       price: 130,
    //     },
    //   ],
    // },
  ]);

  function addOrder(order) {
    setOrders([...orders, order]);
  }

  function updateOrder(index, status) {
    const newOrders = [...orders];
    newOrders[index].status = status;
    setOrders(newOrders);
  }

  function removeOrder(index) {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerBackButtonMenuEnabled: false,
          headerRight: () => (
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => setShowModal((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faPlus} size={25} />
            </TouchableOpacity>
          ),
          headerTitle: `${orders.length} Orders`,
        }}
      />

      <FlatList
        data={orders}
        renderItem={({ item, index }) => (
          <Ordertab
            key={item.tableId}
            order={item}
            index={index}
            removeOrder={removeOrder}
            updateOrder={updateOrder}
          />
        )}
      />

      <Modal isVisible={showModal}>
        <AddOrderModal
          addOrder={addOrder}
          closeModal={() => setShowModal(false)}
        />
      </Modal>
    </SafeAreaView>
  );
}
