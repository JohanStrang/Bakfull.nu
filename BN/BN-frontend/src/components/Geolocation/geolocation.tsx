import React from "react";
import { useGeolocated } from "react-geolocated";
import { BN_AdminService } from "../../services/BN_admin.service";

export const Geolocation = () => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

const bn_AdminService = new BN_AdminService ();

const FetchAdress = (lat: number, lon : number) => {
    bn_AdminService.fetchGeoAddress( lat, lon)
                };

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <table>
            <tbody>
                <tr>
                    <td>latitude</td>
                    <td>{coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{coords.longitude}</td>
                </tr>
            </tbody>
        </table>
        
    ) : (
        <div>Getting the location data&hellip; </div>
        
    );
};

export default Geolocation;