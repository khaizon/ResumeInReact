import {  Typography } from '@material-ui/core'
import { PersonOutlineOutlined } from '@material-ui/icons'
import React from 'react'

import myImage from '../../assets/images/displayImage.jpg'
import resumeData from '../../utils/resumeData'

import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/CustomTimeline'
import './Profile.css'
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";


const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem >
        <CustomTimelineSeparator />

        <TimelineContent className={"timeline_content"}>
            {link ?
                (<Typography className="timelineItem_text">
                    <span>{title}</span>
                    <a href={link} target="_blank"> {text}</a>
                </Typography>)
                : (
                    <Typography className="timelineItem_text">
                        <span>{title}: </span>{text}
                    </Typography>
                )}
        </TimelineContent>
    </TimelineItem>
)

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src={myImage} alt="" />
            </figure>

            <div className='profile_information'>
                <CustomTimeline icon={<PersonOutlineOutlined />}>
                    <CustomTimelineItem title="Name" text={resumeData.Name}/>
                    <CustomTimelineItem title="Title" text={resumeData.Title}/>
                    <CustomTimelineItem title="Email" text={resumeData.Email}/>
                    <CustomTimelineItem title="Birthday" text={resumeData.Birthday}/>
                    {Object.keys(resumeData.socials).map(key => (
                        <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link}/>
                    ))}
                </CustomTimeline>
                <br />
                <button>my button</button>
            </div>
        </div>
    )
}

export default Profile
