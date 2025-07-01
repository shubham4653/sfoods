import React,{useState,useRef} from "react";
import { View ,Text,StyleSheet,Dimensions,Image} from 'react-native';
import {colors,parameters,title} from "../../global/styles";
import * as Animatable from 'react-native-animatable';
import Swiper from "react-native-swiper";
import {Icon,Button,SocialIcon} from 'react-native-elements';


export default function SignInWelcomeScreen({navigation}){
    return(
        <View style={{flex:1}}>
            <View style={{flex:3,justifyContent:"flex-start",alignItems:"center",paddingTop:20,marginTop:20}}>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:"bold"}}>IN YOUR AREA</Text>
            </View>

            <View style={{flex:4,justifyContent:"center"}}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={{uri:"https://i.ibb.co/qLC3hwNL/pexels-julieaagaard-2097090.jpg"}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={{uri:"https://i.ibb.co/SwJTFbRw/pexels-bulbfish-1143754.jpg"}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{uri:"https://i.ibb.co/rDNQF6L/pexels-ash-craig-122861-376464.jpg"}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{uri:"https://i.ibb.co/8LNzbYfg/pexels-lum3n-44775-1410235.jpg"}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={{uri:"https://i.ibb.co/gZFSgf86/pexels-xmtnguyen-699953.jpg"}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{flex:4,justifyContent:"flex-end",marginHorizontal:20,marginBottom:20}}>
                <View style={{marginHorizontal:20, marginTop:30}}>
                    <Button
                        title="SIGN IN"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={()=>{
                            navigation.navigate("SignInScreen")
                        }}
                    />
                </View>
                <View style={{marginHorizontal:20,marginTop:30,marginBottom:20}}>
                    <Button 
                        title="Create an account"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View> 
            </View>

        </View>
    )
}

const styles= StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#9DD6EB"
    },
    slide2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#97CAE5"
    },
    slide3:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#92BBD9"
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.buttons,
        height:50,
        paddingHorizontal:20,
    },
    createButtonTitle:{
        color:colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    },
})