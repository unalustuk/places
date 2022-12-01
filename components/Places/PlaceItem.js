import { Image, View, Text, Pressable, StyleSheet } from "react-native"
import React from "react"

export default function PlaceItem({ place, onSelect }) {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{ uri: place.imageUri }} />
            <View>
                <Text>{place.title}</Text>
                <Text>{place.addres}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({})
