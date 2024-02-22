import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GrediantBGIcon from './GrediantBGIcon';
import ProfilePic from './ProfilePic';

interface HeaderBarProps{
    title?: string;
}

const HeaderBar:React.FC<HeaderBarProps> = ({title}) => {
  return (
      <View style={Styles.HeaderContainer}>
          <GrediantBGIcon name='menu' color={COLORS.primaryGreyHex} size={FONTSIZE.size_16}/>
          <Text style={Styles.HeaderText}>{ title }</Text>
          <ProfilePic/>
    </View>
  )
}
const Styles = StyleSheet.create({
    HeaderContainer: {
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_20,
        color:COLORS.primaryWhiteHex,
    }
})

export default HeaderBar