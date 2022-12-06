import React, {useEffect, useState} from 'react'

interface Props{
    stars:number;
}

const StarRating = ({stars}: Props) => {
  return (
    <div>
        {stars}/5
    </div>
  )
}

export default StarRating