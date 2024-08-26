import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import MarkersList from '../MarkersList/MarkersList';

function CovidMap({ data }) {
    const center = [52.227, 21.0];
    return (
        <div className="flex justify-center my-6" >
            <MapContainer center={center}
                zoom={4}
                scrollWheelZoom={true}
            >
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

                <MarkersList  data={data} />
            </MapContainer>
        </div>
    )
}

export default CovidMap
