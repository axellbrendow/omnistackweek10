import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

function Main()
{
    useEffect(() => {
        async function loadInitialPosition()
        {
            //
        }

        loadInitialPosition();
    }, []);

    return <MapView style={styles.map}/>;
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
});

export default Main;
