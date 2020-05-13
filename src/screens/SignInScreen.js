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
  import firebase from '../firebase/Firebase'
  


function SignInScreen({navigation}) {

  const [email,setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [emailError, setEmailError] = useState('')
   const [passwordError, setPasswordError] = useState('')
   const [isLoading, setIsLoading] = useState('')

  

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
//--------------------------------Backend Part-----------------------------------------

const login = (navigate) =>{
  const Email=validateEmailAddress()
  const Password=validatePassWordField()
  console.warn(Email,Password)

try{  setIsLoading(true)

          firebase.auth().signInWithEmailAndPassword(Email,Password).then((res)=>{
            console.log(res);
            navigation.navigate('GroupScreen')
        

            alert("Logging Success !")

            
          }).catch(error=>alert(error.toString()))
          setIsLoading(false)
        }
catch(e){
  setIsLoading(false)
  alert(e)
}

  
}

  return (
    
<DismissKeyboard>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ImageBackground source= {Images.back} style={styles.background}></ImageBackground>
        <View style = {styles.view}>
        
            <SafeAreaView>
           
                <Image style ={styles.logo} source={Images.logo}></Image>
                
               <View style={styles.WelcomeText}>
                   <Text style={styles.Text}>{Strings.Welcome}</Text>
                   
               </View>
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
                </View>
                <TouchableOpacity
                  style={styles.button}>
                <Button title={Strings.Join} onPress={() => login()}  />

                </TouchableOpacity>
                
                
                 
                  <TouchableOpacity
                       style={styles.button}>
                       <Button title={Strings.Register} onPress={() => navigation.navigate('RegisterScreen')} />
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

export default SignInScreen