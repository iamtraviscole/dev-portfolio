import PropTypes from 'prop-types'

export default function PageHeader(props) {
  return (
    <div className='PageHeader'>
      <div className='PageHeader__header'>
        <div className='PageHeader__header-particle'>&there4;</div>
        <div className='PageHeader__header-heading'>
          <div className='PageHeader__header-heading-corners'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1>{props.heading}</h1>
          {props.icon && <span>{props.icon}</span>}
        </div>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  heading: PropTypes.string,
  icon: PropTypes.element
}
