import React from 'react'
import { View ,Text } from 'react-native'
import ListKos from '../components/ListKos'
export default function Kos() {
    return (
        <View style={{paddingHorizontal:31, flex:1 , flexDirection:'column'}}>
            <ListKos />
        </View>
    )
}
