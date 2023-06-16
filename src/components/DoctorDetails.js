import React from 'react'
import { useParams } from 'react-router-dom'


function DoctorDetails() {
    const params = useParams()
    const userId = params.userId
  return (
    <div>
      Details of Doctor{userId}
    </div>
  )
}

export default DoctorDetails
