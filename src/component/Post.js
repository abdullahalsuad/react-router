import React from 'react'

export default function Post({match}) {
    const {params} = match
    return (
        <div>
            this is a post component {params.category}
        </div>
    )
}
