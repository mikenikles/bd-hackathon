import React from 'react'
import moment from 'moment'

const TimelineEntry = ({
  timestamp,
  content,
  tags = [],
  media
}) => {
  return (
    <div className="c-timeline__entry">
      <p>
        {moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}<br />
        {content}
        {
          media && media.map((entry, idx) => {
            return <img key={idx} src={entry.src} alt=""/>
          })
        }
      </p>
      <p><strong>Tags:</strong> {tags.join(', ')}</p>
    </div>
  )
}

export default TimelineEntry
