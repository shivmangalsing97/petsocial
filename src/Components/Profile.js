import React from 'react'
import { Link } from "react-router-dom"

export default function Profile() {
  return (
    <div className="timeline_div">
      <div className="timeline_div1">
        <div className="profile_pic">
          <img alt="My Awesome 1" src="images/timeline_img1.png" />
          <div className="profile_text"><Link to="#">Change Profile Pic</Link></div>
        </div>
        <div className="profile_info">
          <div className="edit_div"><Link to="#">Edit <img alt="My Awesome" src="images/timeline_img.png" /></Link></div>
          <div className="profile_form">
            <ul>
              <li>
                <div className="div_name1">Name :</div>
                <div className="div_name2">Stefiney Gibbs</div>
              </li>
              <li>
                <div className="div_name1">Sex :</div>
                <div className="div_name2">Female</div>
              </li>
              <li>
                <div className="div_name1">Description :</div>
                <div className="div_name3">This is an example of Link comment. You can create as many comments like this one
                  or sub comments as you like and manage all of your content inside Account.</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="timeline_div2">
        <ul>
          <li><Link to="/timeline" className="active">Timeline      </Link></li>
          <li><Link to="/about">About    </Link></li>
          <li><Link to="/album">Album  </Link></li>
          <li><Link to="/pets"> Pets  </Link></li>
          <li><Link to="/myuploads">My Uploads </Link></li>
        </ul>
      </div>
    </div>
  )
}
