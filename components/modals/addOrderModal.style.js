import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.xxLarge,
    marginHorizontal: SIZES.medium,
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.small,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  addDishBtn: {
    marginTop: SIZES.small,
    padding: SIZES.small,
    width: "100%",
    backgroundColor: COLORS.primary,
  },
  addDishBtnText: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
  dishesText: {
    fontSize: SIZES.medium,
  },
  dishContainer: {
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  boldText: {
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
  detailsText: {
    fontSize: SIZES.medium,
  },
  dishesPreviewContainer: {
    padding: SIZES.medium,
  },
  priceDetails: {
    marginTop: SIZES.large,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  addOrderBtn: {
    marginTop: SIZES.medium,
    marginBottom: SIZES.xxLarge,
    padding: SIZES.small,
    width: "100%",
    backgroundColor: COLORS.primary,
  },
});
