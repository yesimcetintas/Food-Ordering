import React from 'react'

const Title = ({addClass, children}) => {
  return (
    <div className={`${addClass} font-dancing font-bold`}>
      {children}
    </div>
  )
}

export default Title
