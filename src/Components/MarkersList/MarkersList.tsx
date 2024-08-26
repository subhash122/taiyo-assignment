import React from 'react'
import { Marker, Popup } from 'react-leaflet'

function MarkersList({ data }) {
    return (
        data.map((item, index) => (<Marker
            key={index}
            position={[item.lat, item.lng]}
        >
            <Popup>
                <p className="text-[#323232] font-medium">{item.country}</p>
                <p className="text-yellow-600 text-xs">Active: <span className="font-medium">{item.active}</span></p>
                <p className="text-red-600 text-xs">Deaths: <span className="font-medium">{item.deaths}</span></p>
                <p className="text-green-600 text-xs">Recovered: <span className="font-medium">{item.recovered}</span></p>
            </Popup>
        </Marker>))


    )
}

export default MarkersList
