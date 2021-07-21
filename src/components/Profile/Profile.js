import { Typography } from '@material-ui/core'
import React from 'react'

import './Profile.css'
import myImage from '../../assets/images/displayImage.jpg'
// import myImage from '../../assets/images/testImage.jpg'

const Profile = () => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>Toh Kai Feng</Typography>
                <Typography className='title'>Title</Typography>
            </div>

            <figure className='profile_image'>
                <img src={myImage} alt="" />
            </figure>

            <div className='profile_information'>
                Insert Timeline
                <br />
                <button>my button</button>
            </div>
        </div>
    )
}

export default Profile
