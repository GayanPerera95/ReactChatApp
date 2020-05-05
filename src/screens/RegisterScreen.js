import React,{ useState , useEffect} from 'react';
import {StyleSheet, View, Text,Image,SafeAreaView,Alert, KeyboardAvoidingView,TouchableOpacity,ImageBackground} from 'react-native';
 import Button from '../components/Button'
import Strings from '../const/String'
 import Images from '../const/Images'
 import Constants from '../const/Constants'
 import Utility from '../utils/Utility'
 import DismissKeyboard from '../components/DismissKeyboard'
import EmailTextFiled from '../components/EmailTextField'
 import PasswordTextFiled from '../components/PassWordTextField'
 import Color from '../utils/Colors'
 import * as EmailValidator from 'email-validator'
 import PhoneTextFiled from '../components/PhoneTextField'
  import firebase from '../firebase/Firebase'



function RegisterScreen({navigation}) {

  const [email,setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [emailError, setEmailError] = useState('')
   const [passwordError, setPasswordError] = useState('')
   const [isLoading, setIsLoading] = useState('')
   const[phone,setPhone] = useState ('')
   const [phoneError,setPhoneError] = useState('')

 

const validateEmailAddress = () => {
  setEmail(email)

  const isValidEmail= EmailValidator.validate(email);
      isValidEmail ? setEmailError(''):setEmailError(Strings.InvalidEmailAddress)
    
      return email
  }
  

const validatePassWordField = () => {
      const isValidPassword = Utility.isValidField(password)
      isValidPassword ? setPasswordError('') : setPasswordError(Strings.PasswordFieldEmpty)
       return password

}

const validatePhoneField = () => {
  const isValidPhone = Utility.isValidField(phone)
  isValidPhone ? setPhoneError('') : setPhoneError(Strings.PhoneFieldEmpty)

   return phone

}
//--------------------------------Backend Part-----------------------------------------

const login = () =>{
  const Email=validateEmailAddress()
  const Password=validatePassWordField()
  const Phone =validatePhoneField()
  console.warn(Email,Password,Phone)

  

try{  setIsLoading(true)

          firebase.auth().createUserWithEmailAndPassword(Email,Password).then((res)=>{
            console.log(res);
            

            alert("register Success !")

            
          }).catch(error=>alert("register failed !"))
          setIsLoading(false)
        }
catch(e){
  setIsLoading(false)
  alert(e)
}

//firebase.database().ref('Test/001').set({
//  Email:'gayanmadu@gmail.com',
//  PassWord: '123456'
    
//}).then(() => {
  //console.log('Insert');
//}).catch((error) => {
  //console.log(error);
//})

  
}

  return (
    
<DismissKeyboard>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ImageBackground source= {Images.back} style={styles.background}></ImageBackground>
        <View style = {styles.view}>
        
            <SafeAreaView>
                <View>
                <EmailTextFiled
                    term={email}
                    error={emailError}
                    placeholder={Strings.EmailPlaceHolder}
                    onTermChange={newEmail =>setEmail(newEmail)}
                   onValidateEmailAddress={validateEmailAddress}

                />

            <PasswordTextFiled
                    term={password}
                    error={passwordError}
                    placeholder={Strings.PasswordPlaceHolder}
                    onTermChange={newPassword =>setPassword(newPassword)}
                    onValidatePassword={validatePassWordField}

                />
                <PhoneTextFiled
                   term={phone}
                    error={phoneError}
                    placeholder={Strings.PhonePlaceHolder}
                    onTermChange={newPhone =>setPhone(newPhone)}
                    onValidatePassword={validatePhoneField}
                />
                </View>
                <TouchableOpacity
                  style={styles.button}>
                <Button title={Strings.Register} onPress={() => login()}  />

                </TouchableOpacity>
                
                
                 
                  <TouchableOpacity
                       style={styles.button}>
                       <Button title={Strings.Sign} onPress={() => navigation.navigate('SignInScreen')} />
                   </TouchableOpacity> 
            
            </SafeAreaView>
        </View>
        </KeyboardAvoidingView>

    </DismissKeyboard>
   
  
              )}

const styles = StyleSheet.create({
 logo: {
   alignSelf: 'center',
   margin : 0.04 * Constants.screenHeight,
   height:100,
   width:100,
 },
 background:{
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
  height:800,
  width:800
  
 },
 container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor:Color.theme,
    flexDirection: "column"
 },
 button: {
  alignItems: 'center',
  backgroundColor: 'transparent',
  padding: 10
},
Text:{
    color:"blue",
    fontSize:30,
    textAlign:'center',
    fontFamily: 'sans-serif',
    fontStyle: 'italic'

    
    
},
view: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center'
}
})
 


export default RegisterScreen
