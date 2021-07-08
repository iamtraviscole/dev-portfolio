import React from 'react'

export default function PageHeader(props) {
  return (
    <div className='PageHeader'>
      <div className='PageHeader__header'>
        <span className='PageHeader__header-particle'></span>
        <div className='PageHeader__header-heading'>
          <h1>{props.heading}</h1>
          {props.icon ? <span>{<props.icon />}</span> : ''}
        </div>
      </div>
    </div>
  )
}
