import React from 'react'

interface ContainerProps {
  children: React.ReactNode
}

const Container = (props: ContainerProps) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-4 ">
      {props?.children}
    </div>
  )
}

export default Container
