import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProjectDetails = ({data}) => {
    const {project} = useParams();
  return (
    <div>{project}</div>
  )
}

export default SingleProjectDetails