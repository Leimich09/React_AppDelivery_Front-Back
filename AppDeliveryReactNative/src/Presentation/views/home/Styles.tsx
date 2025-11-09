import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'black',
},
imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    bottom: '30%'
},
form: {
    width: '100%',
    minHeight: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 30
},
formText: {
    fontWeight: 'bold',
    fontSize: 16
},
formIcon:{
    width: 25,
    height:25,
    marginTop:5
},
formInput:{
    flexDirection: 'row',
    marginTop: 30
},
formTextInput:{
    flex:1,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    marginLeft: 15
},
formRegister:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25
},
formRegisterText:{
    fontStyle: 'italic',
    color: 'green',
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    fontWeight: 'bold',
    marginLeft: 10
},
logoContainer:{
    position: 'absolute',
    alignSelf: 'center',
    top: '10%'
},
logoImage:{
    width: 180,
    height: 100
},
logoText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
},

});

export default HomeStyles;