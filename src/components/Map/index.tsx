import React from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

interface IMap {
    width: number | string,
    height: number | string
}

const Map: React.FC<IMap> = ({ width, height }) => {

    function handleOpenRoutes() {
        window.open("https://goo.gl/maps/GdKctpAc7QJYqRqw7", '_blank');
    }

    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_kEY as string}
        >
            <GoogleMap
                mapContainerStyle={{ width, height }}
                options={{
                    mapTypeId: 'terrain',
                    streetViewControl: false,
                    disableDefaultUI: true, 
                    zoomControl: false,
                    styles: [
                        {
                            featureType: "poi",
                            "elementType": "labels.text.fill",
                            stylers: [{
                                color: "#bfbfbf",
                            }]
                        },
                        {
                            featureType: "poi",
                            "elementType": "labels.icon",
                            stylers: [{
                                color: "#bfbfbf",
                            }]
                        },
                        {
                            featureType: "road",
                            "elementType": "labels.text.fill",
                            stylers: [{
                                color: "#bfbfbf",
                            }]
                        }

                    ]
                }}
                center={{
                    lat: -10.9500413,
                    lng: -37.0648173
                }}
                zoom={18}
            >
                <Marker
                    animation
                    onClick={handleOpenRoutes}
                    icon={require('../../assets/img/icons/marker.svg')}
                    position={{
                        lat: -10.950202,
                        lng: -37.0649192
                    }}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;