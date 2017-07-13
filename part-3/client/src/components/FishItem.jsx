import React from 'react'
import { Link } from 'react-router-dom'

export const FishItem = ( {name, rating} ) => (
  <li>
    <Link to={`/fishes/${name}`}>
      {name}
    </Link>
    {rating}
  </li>
)
