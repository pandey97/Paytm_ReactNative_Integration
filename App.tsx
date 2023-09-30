import React from 'react'
import { View, Button } from 'react-native'
import AllInOneSDKManager from 'paytm_allinone_react-native';
import { generateToken } from './Service';
import { CALLBACK_URL, MID, URL_SCHEME } from './Constant';

const Payment = () => {

  const payNow = async () => {

    let orderId = '7688677868766734984';
    let amt = 101;
   
    const token = await generateToken(orderId, amt);

    try {
      AllInOneSDKManager.startTransaction(
        orderId,
        MID,
        token,
        amt.toFixed(2),
        CALLBACK_URL+orderId,
        true,
        true,
        URL_SCHEME
      )
      .then((result) => {
        console.log("gateway response", result);
      })
      .catch((err) => {
        console.log("gateway error",err);
      });
    } catch (error) {
      console.log("try catch error",error)
    }
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Button 
      title="Create Payment"
      onPress={payNow}
      />
    </View>
  )
}

export default Payment
