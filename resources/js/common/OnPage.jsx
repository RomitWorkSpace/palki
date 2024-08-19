import React from 'react'
import { Helmet } from 'react-helmet'

function OnPage({meta_title, keywords, meta_desc}) {
    return (
        <>
        <Helmet>
            <title>{meta_title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={ meta_desc } />
        </Helmet>
        </>
    )
}

export default OnPage
