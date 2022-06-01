import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import '../styles/orphanatesMap.css';

import mapMarkerImg from '../../src/images/Local.svg' ;
import happyMapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number; 
    name: string;
}

function OrphanatesMap() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(() => {
        api.get('orphanages').then(Response => {
            setOrphanages(Response.data);
        })
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt=""/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>Salvador</strong>
                    <span>Bahia</span>
                </footer>
            </aside>

            {/* <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15567.583685609077!2d-38.3098511!3d-12.7202123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1602592720378!5m2!1spt-BR!2sbr" width="100%" height="100%" aria-hidden="false"></iframe>
            </div> */}

            <Map 
                center={[-12.7202123,-38.3098511]} // -12.9350943,-38.4269612
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >

                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                {orphanages.map(orphanage => {
                    return (
                        <Marker 
                            icon={happyMapIcon}
                            position={[orphanage.latitude,orphanage.longitude]}
                            key={orphanage.id}
                        >
                            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                                {orphanage.name}
                                <Link to={`orphanages/${orphanage.id}`}>
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>

            <Link to="orphanages/create" className="create-orphanate">
                <i className="fa fa-times" aria-hidden="true"></i>
            </Link>

        </div>
    );
}

export default OrphanatesMap;