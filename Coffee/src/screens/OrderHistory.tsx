import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useStore } from "../store/store";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";
import HeaderBar from "../components/HeaderBar";
import EmptyListAnimation from "../components/EmptyListAnimation";
import PopUpAnimation from "../components/PopUpAnimation";
import OrderHistoryCart from "../components/OrderHistoryCart";

const OrderHistory = ({navigation}:any) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  
  const TabBarHeight = useBottomTabBarHeight();
  const navigationHandler = ({ index, id, type }: any) => {
    navigation.push('Details',{index,id, type})
  };
  const buttonPressHendler = () => {
    setShowAnimation(true);
    setTimeout(()=>{setShowAnimation(false)},3000)
};
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      {showAnimation ? (
        <PopUpAnimation
          style={styles.LottieAnimation}
          source={require("../lottie/download.json")}
        />
      ) : (
        <></>
      )}
      <ScrollView
        contentContainerStyle={styles.ScrollVIewFlex}
        showsVerticalScrollIndicator={false}>
        <View
          style={[styles.SclollViewInnerView, { marginBottom: TabBarHeight }]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Order History" />
            {OrderHistoryList.length == 0 ? (
              <EmptyListAnimation title={"No Order History"} />
            ) : (
              <View style={styles.ListItemContainer}>
                {OrderHistoryList.map((data: any, index: any) => (
                  <OrderHistoryCart
                    key={index.toString()}
                    navigationHandler={navigationHandler}
                    CartList={data.CartList}
                    CartListPrice={data.CartListPrice}
                    OrderDate={data.OrderDate}
                  />
                ))}
              </View>
            )}
          </View>
          {OrderHistoryList.length > 0 ? <TouchableOpacity style={styles.dawnloadButton 
          } onPress={()=>{buttonPressHendler()}}
          ><Text style={styles.Dawnload}>Dawnload</Text>
            
          </TouchableOpacity>:<></>}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  LottieAnimation: {
    height: 250,
  },
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollVIewFlex: {
    flexGrow: 1,
  },
  SclollViewInnerView: {
    flex: 1,
    justifyContent: "space-between",
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_30,
  },
  dawnloadButton: {
    margin: SPACING.space_20,
    backgroundColor: COLORS.primaryOrangeHex,
    alignItems: "center",
    justifyContent: "center",
    height: SPACING.space_36 * 2,
    borderRadius: BORDERRADIUS.radius_20,
  },
  Dawnload: {
    margin: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color:COLORS.primaryWhiteHex
  },
});

export default OrderHistory;
