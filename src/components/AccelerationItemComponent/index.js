import React, { useState, useEffect, useMemo } from 'react';

import { View, Text, Image } from 'react-native';

import { parseISO, format } from 'date-fns';

import styles from './styles';

const AccelerationComponent = ({ item }) => {
    const [imageSource, setImageSource] = useState('https://cdn3.iconfinder.com/data/icons/abstract-1/512/no_image-512.png');
    
    useEffect(() => {
        if(item.banner_url != ""){
            setImageSource(item.banner_url);
        }
    }, [])

    const dateParsed = useMemo(() => {
        return format(parseISO(item.subscription_finish_at), "dd'/'MM'/'yyyy");
    }, [item.subscription_finish_at]);
    
    return (
        <View style={styles.Container}>
            <Image 
                style={ styles.Banner } 
                source={{ uri: imageSource }} 
            />
            <View style={ styles.TextContainer }>
                <Text style={ styles.ItemName}>{ item.name }</Text>
                <Text style={ styles.ItemLocation}>{ item.location }</Text>
                <Text style={ styles.ItemDate }>{ dateParsed }</Text>
            </View>
        </View>
    );
}

export default AccelerationComponent;