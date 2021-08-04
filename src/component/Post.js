import React from 'react'
import { useParams } from 'react-router'
export default function Post() {
    const {category} = useParams
    return (
        <div>
            this is a post component {category}
        </div>
    )
}
