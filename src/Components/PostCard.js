import React from 'react'
import { Link } from "react-router-dom"

export default function PostCard({postTitle, postCategeory, postUser, postDate, postTime, likeCount, commentCount }) {
    return (
        <div className="contnt_2">
            <div className="div_a">
                <div className="div_title">{postTitle}</div>
                <div className="btm_rgt">
                    <div className="btm_arc">{postCategeory}</div>
                </div>
                <div className="div_top">
                    <div className="div_top_lft"><img src="images/img_6.png" />{postUser}</div>
                    <div className="div_top_rgt"><span className="span_date">{postDate}</span><span className="span_time">{postTime}</span></div>
                </div>
                <div className="div_image"><img src="images/lft_img.png" alt="pet" /></div>
                <div className="div_btm">
                    <div className="btm_list">
                        <ul>
                            <li><Link to="#"><span className="btn_icon"><img src="images/icon_001.png" alt="share" /></span>Share</Link></li>
                            <li><Link to="#"><span className="btn_icon"><img src="images/icon_002.png" alt="share" /></span>Flag</Link></li>
                            <li><Link to="#"><span className="btn_icon"><img src="images/icon_003.png" alt="share" /></span>{likeCount} Likes</Link></li>
                            <li><Link to="#"><span className="btn_icon"><img src="images/icon_004.png" alt="share" /></span>{commentCount} Comments</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
