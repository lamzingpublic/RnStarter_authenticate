import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
 
  container: {
    flex:1,
    position:'relative'
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 8
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },

  headText: {
    fontSize: hp("2.5%")
  },
  subHeadText: {
    fontSize: hp("2.2%")
  },
  titleText: {
    fontSize: hp("2%")
  },
  subtitleText: {
    fontSize: hp("1.8%")
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  noShadow:{
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  ToastError: {
    backgroundColor: '#ef9a9a',
    color: '#d50000',
  },
  ToastInfo: {
    backgroundColor: '#90caf9',
    color: '#1565c0',
    alignSelf: 'baseline',
  },
  ToastSuccess: {
    backgroundColor: '#81c784',
    color: '#1b5e20',
  },
 
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  shadowLarge: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default styles;
