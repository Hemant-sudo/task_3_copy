import React, { Component } from 'react'; 
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export default class App extends Component {
  render() {
    return (
      <ScrollView >
      <View style={{flex: 1, backgroundColor:'#ebe8e6'}}>



{/* ======================================================================== */}

       <View style={{flexDirection: 'row', justifyContent: 'space-between',  marginTop: '3%', }}>
        <Text style={{fontSize: 18, backgroundColor:'red', fontWeight: 'bold', marginLeft: '6%', height: '20%'  }}>Street Meat</Text>

        
        <View  style={{flexDirection: 'column', }} >
        <Text style={{marginRight: 20,}}>11/09/2019</Text>
        <Text style={{marginLeft: 11, marginTop:8,}}>09:30 pm</Text>
          </View>       
      </View> 


      <View  style={{flexDirection: 'row',}}> 
        <Text style={{marginLeft: '5%', marginTop: 5,fontSize: 18, fontWeight: 'bold'}}>Order Summary</Text>
      </View> 
{/* Momos */}
     

      <View style={{ flex: 1,  height: 350, marginLeft: '5%', marginRight: '5%', marginTop: 9, borderRadius: 10, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>

<View style={{  height: '91%', width: '91%',backgroundColor:'white'  }}>


      <View >
        <Text style={{fontSize: 20, fontWeight: 'bold',}}>Momos</Text>        
      </View>


      <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: '4%',  }}>
      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize: 15, fontWeight:'bold',}} >Quantity</Text>
      <Text style={{marginLeft: '10%'}}>02</Text>
      <Text style={{fontSize: 15, fontWeight:'bold',marginLeft: '10%'}} >Spice Level</Text>
      </View>
      
      <View style={{flexDirection: 'row'}}>
      <Image source={require('./image/chili.png')} style={{width: 10, height: 20,marginLeft:40  }}  />
        <Image source={require('./image/chili.png')} style={{width: 10, height: 20,  }}  />
        <Image source={require('./image/chili.png')} style={{width: 10, height: 20,  }}  />
        <Image source={require('./image/chili.png')} style={{width: 10, height: 20,  }}  />
      </View>
      
     
  

      </View>








      <View style={{flexDirection: 'row',  marginTop: '4%',justifyContent:'space-between',}}>
<View style={{ flexDirection: 'row',justifyContent:'space-between',}}>
<Text style={{fontSize: 15, fontWeight:'bold',}} >Convenience Fee</Text>
<Text >(10%)</Text>
</View>


<Text  style={{fontSize: 15,  marginLeft:40}}>₹20</Text>

</View>




<View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: '4%'}}>
<View style={{ flexDirection: 'row',justifyContent:'space-between',}}>
<Text style={{fontSize: 15, fontWeight:'bold',}} >GST</Text>
<Text>(10%)</Text>
</View>
<Text  style={{fontSize: 15,  marginLeft:0}}>₹20</Text>

</View>

     
<View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: '4%'}}>
<View style={{ flexDirection: 'row',justifyContent:'space-between',}}>
<Text style={{fontSize: 15, fontWeight:'bold',}} >Bag and Packing Fee</Text>
<Text >(10%)</Text>
</View>
<Text  style={{fontSize: 15,  }}>₹20</Text>

</View>



<View style={{flexDirection: 'row', justifyContent:'space-between', marginTop: '4%'}}>

<Text style={{fontSize: 15, fontWeight:'bold',}} >Total</Text>


<Text  style={{fontSize: 15,  }}>₹20</Text>

</View>



</View>


</View> 

{/* =========================================================================== */}

     <View style={{flexDirection: 'row', justifyContent: 'center',borderWidth: 2,height: 50, }}>
      <Text style={{marginTop: 12, fontSize:22}}>₹250</Text>
     </View> 



      <View>
  <Text style={{justifyContent:'center', paddingTop: 40, marginLeft: 135,  }}> Powered By</Text>
  </View> 



 <View  style={{flexDirection:'row'}}>

<TouchableOpacity style={{padding:12, marginTop: 12,
	backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderWidth: 2,width: '49%',
  borderColor: '#FF5733', marginLeft: 2
}}
		
		  >
			 <Text style={{ fontSize:20,
	color: '#FF5733',
	textAlign: 'center'}}>Back</Text>
		  </TouchableOpacity>

      <TouchableOpacity style={{padding:12, marginTop: 12,
	backgroundColor: '#FF5733',
borderTopRightRadius: 20,width: '49%',}}
		
		  >
			 <Text style={{ fontSize:20,
	color: '#ffffff',
	textAlign: 'center'}}>Continue</Text>
		  </TouchableOpacity>

  </View> 


 {/* ======================================================================== */}




         
  
 {/* ==========================================================     */}


  <View style={{ flex: 1,  height: 445, marginLeft: '5%', marginRight: '5%', marginTop: 30, borderRadius: 10, justifyContent: 'center', alignItems: 'center',backgroundColor:'white', marginTop: 30 }}>

<View style={{  height: '91%', width: '91%',backgroundColor:'white', }}>

  
 {/* ==========================================================     */}




  

  



     

   
   
    

   
    
  


<View style={{flexDirection: 'row', }}>
<Image source={require('./image/stm.png')} style={{width: 80, height: 80, marginTop: -40 ,  }}/>
<Text style={{fontSize: 19, fontWeight: 'bold', marginLeft: 12, marginTop: 0}}>Street Meat</Text>
</View>




<View style={{flexDirection: 'row',marginTop: 14,borderBottomColor:'white',borderBottomWidth:1, paddingBottom: 20 }}>
     <Image source={require('./image/checked.png')} style={{width: 40, height: 40, marginLeft: 15,}}/>
     <Text style={{marginLeft: 8, marginTop: 6,fontSize:18, fontWeight: 'bold'}}>Success</Text>

     </View>

     <View style={{flexDirection: 'column',paddingTop: 15,borderBottomColor:'white',borderBottomWidth:1,paddingBottom: 15}}>

<Text style={{fontSize:12, }}>Total Amount</Text>
<Text style={{fontSize:34, fontWeight: 'bold'}}>₹ 1360</Text>
</View>







<View style={{flexDirection: 'row',borderBottomColor:'white',paddingTop: 15,}}>
    <Text style={{fontSize: 18,fontWeight: 'bold', }}>TXN ID:</Text>
    <Text style={{fontSize: 18, marginLeft: 5}}>1235679926651</Text>
</View>

<View style={{flexDirection: 'row',borderBottomColor:'white',        borderBottomWidth:1,borderBottomColor:'white',paddingBottom: 15,}}> 
   <Text style={{fontSize: 18,fontWeight: 'bold',}}>Date:</Text>
    <Text style={{fontSize: 18,marginLeft: 2}}>11/09/2019, 09:30 pm</Text>
</View>

{/* ====================tip===and======donation========================= */}

<View style={{flexDirection: 'row', marginTop: 20,borderBottomColor:'white',borderBottomWidth:1, justifyContent: 'space-between',}}>
  
      

      <View style={{flexDirection:'row'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold',}} >Tip:</Text>
      <Text style={{fontSize: 18, marginTop: 3 ,marginLeft: 2}} > ₹ 100</Text>  
      </View>
        
          
    <Text style={{marginLeft: 130, marginTop: 6, fontWeight: 'bold'}}>Learn More </Text>
     
     

    </View>
          {/* ========================== */}

          <View style={{flexDirection: 'row', marginTop: 20,borderBottomColor:'white',borderBottomWidth:1,paddingBottom: 15, justifyContent: 'space-between'}}>
  
  <View style={{flexDirection: 'row'}}>
  <Text style={{fontSize: 18, fontWeight: 'bold',}} >Donation:</Text>
  <Text style={{fontSize: 18, marginTop: 3 ,marginLeft: 2}} > ₹ 100</Text> 
  </View>
       
<Text style={{marginLeft: '30%', marginTop: 6, fontWeight: 'bold'}}>Learn More </Text>

</View>


{/* ====================tip===and======donation=================== */}



    {/* ====================================================================== */}

    </View>
    </View>  

    {/* ====================================================================== */}

 <View  style={{flexDirection:'row', marginTop: 74}}>

<TouchableOpacity style={{padding:12, marginTop: 12,
	backgroundColor: 'white',
  borderTopLeftRadius: 20,
  borderWidth: 2,width: '50%',
  borderColor: '#FF5733', marginLeft: 2
}}
		
		  >
			 <Text style={{ fontSize:20,
	color: '#FF5733',
	textAlign: 'center'}}>Rate Us</Text>
		  </TouchableOpacity>

      <TouchableOpacity style={{padding:12, marginTop: 12,
	backgroundColor: '#FF5733',
borderTopRightRadius: 20,width: '50%',}}
		
		  >
			 <Text style={{ fontSize:20,
	color: '#ffffff',
	textAlign: 'center'}}>Done</Text>
		  </TouchableOpacity>

  </View>
    





        

  </View>
      </ScrollView>
    );
  }
}
