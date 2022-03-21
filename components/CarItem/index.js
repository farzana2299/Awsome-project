import React from 'react';
import {View, Text,ImageBackground,tagLineCTA} from 'react-native';
import styles from './styles';
import StyleButton from "../StyledButton";
const  CarItem = (props) => {
  const {name,tagLine,image,tagLineCTA}=props.car;
    return (
        <View style={styles.carContainer}>

        <ImageBackground 
          source={image}
          style={styles.image}
        />
        <View style={styles.titles}> 
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagLine} 
            &nbsp;  
            <Text style={styles.subtitleCTA}> 
              {tagLineCTA}
            </Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
        <StyleButton 
          type="primary"
          content={"Custom order"}
          onPress={() => {
          console.warn( data, "customer order was pressed");
       }}
        />

        <StyleButton 
         type="secondary"
         content={"Existing Inventory"}
         onPress={() => {
         console.warn( data, "Existing Inventory was pressed");
  }}
/>
        </View>



      </View>
    );   
    
};

export default CarItem;
