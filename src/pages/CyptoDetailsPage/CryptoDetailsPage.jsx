import React, { useContext, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import { CryptoContext } from '../../contexts/CryptoContext'

function CryptoDetailsPage({  }) {
    const { cryptoData } = useContext(CryptoContext);
    const { id } = useParams();

    const product = useMemo(() => (
        cryptoData.find(item => item.id === id)
    ), [cryptoData, id]);

    return (
        <>
            <div>{product.id}</div>
            <div>{product.ath}</div>    
        </>



    )
}

export default CryptoDetailsPage