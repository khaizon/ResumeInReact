import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';

import './CustomTimeline.css'
import { Typography } from '@material-ui/core';

const CustomTimeline = ({ title, children, icon }) => {
  return (
    <Timeline className={"timeline"}>
      {/* Item Header */}
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>
            {icon}
          </TimelineDot>

          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}

      {/* Remaining Items */}
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>

    </Timeline>
  )
}

export const CustomTimelineSeparator = () => {

  return (
    <TimelineSeparator className={'separator_padding'}>
      <TimelineDot className={"timeline_dot"} variant="outlined"/>
      <TimelineConnector />
    </TimelineSeparator>
  )

}

export default CustomTimeline
