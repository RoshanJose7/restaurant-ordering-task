import { StyleSheet } from "react-native";

import { SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  ctaColumn: {
    padding: SIZES.small,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  checkbox: {
    marginHorizontal: SIZES.medium,
  },
  deleteBtn: {
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: SIZES.medium,
    borderRadius: SIZES.medium,
  },
  content: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
  },
  detailsText: {
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
  dishBoldText: {
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
  priceDetails: {
    marginTop: SIZES.small,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default styles;
