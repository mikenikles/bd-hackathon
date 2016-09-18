import React from 'react'

const TimelineEntry = ({
  timestamp,
  content,
  tags = [],
  media
}) => {
  return (
    <div>
      <p>
        {timestamp}<br />
        {content}
        {
          media && media.map((entry) => {
            return <img src={entry.src} />
          })
        }
      </p>
      <p><strong>Tags:</strong> {tags.join(', ')}</p>
    </div>
  )
}

export default TimelineEntry
