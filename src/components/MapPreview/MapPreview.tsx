import { Image, View } from 'react-native'
import React from 'react'
import styles from './MapPreview.style'
import { googleAPI } from '../../firebase'

const MapPreview = ({ location }: { location: any }) => {
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.0157904&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=${googleAPI.mapStatic}&signature=YOUR_SIGNATURE`

    return (
        <View style={styles.container}>
            <Image style={styles.mapImage} source={{uri: mapPreviewUrl}} />
        </View>
    )
}

export default MapPreview