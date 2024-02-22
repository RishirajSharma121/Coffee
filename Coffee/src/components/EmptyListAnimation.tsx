import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

interface EmptyListAnimationProp{
    title:string,
}

const EmptyListAnimation:React.FC<EmptyListAnimationProp> = ({title}) => {
  return (
      <View style={styles.EmptyCartContainer}>
          <LottieView
              autoPlay
              loop
              style={styles.LottieStyle}
              source={require('../lottie/coffeecup.json')}
          />
      <Text style={styles.title} >{ title }</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: "center",
  },
  LottieStyle: {
    height: 300,
  },
    title: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryOrangeHex,
        textAlign: 'center',
        fontSize:FONTSIZE.size_16
  },
});
export default EmptyListAnimation