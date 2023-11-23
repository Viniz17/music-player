import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Background } from './style';

export default function Main() {
    return(
        <>
            <StatusBar style="light" />
            <Background />
        </>
    );
}
