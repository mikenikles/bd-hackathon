import React from 'react'

const TimelineEntry = ({
  timestamp,
  content,
  tags = [],
  media
}) => {
  return (
    <div className="c-timeline__entry">
      <p>
        {timestamp}<br />
        {content}
        {
          media && media.map((entry, idx) => {
            return <img key={idx} src={entry.src} />
          })
        }
      </p>
      <p><strong>Tags:</strong> {tags.join(', ')}</p>
    </div>
  )
}

export default TimelineEntry
