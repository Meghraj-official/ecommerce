import React from 'react'
import FilledStarIcon from '../icons/FilledStarIcon'
import EmptyStarIcon from '../icons/EmptyStarIcon'

interface RatingProps {
  rating: number
}

const Rating = (props: RatingProps) => {
  const { rating } = props
  return (
    <div className="flex">
      {Array.from({
        length: parseInt(rating?.toString())
      }).map((_, index) => (
        <FilledStarIcon key={index} />
      ))}
      {Array.from({
        length: 5 - parseInt(rating?.toString())
      }).map((_, index) => (
        <EmptyStarIcon key={index} />
      ))}
    </div>
  )
}

export default Rating
