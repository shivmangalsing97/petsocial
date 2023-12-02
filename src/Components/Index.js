import React from 'react'
import LeftCard from './LeftCard'
export default function Index({childComponent }) {
  return (
    <div className="container">
      <div className="content">
          {childComponent}
          <LeftCard />
      </div>
    </div>
  )
}
