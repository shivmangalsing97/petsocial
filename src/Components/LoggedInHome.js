import React from 'react'
import Profile from './Profile'
import { Link } from "react-router-dom"
export default function LoggedInHome({childComponent}) {
    return (
        <div className="container">
            <div className="content">
                <div className="content_rgt">
                    <div className="rght_btn"> <span className="rght_btn_icon"><img src="images/btn_iconb.png" alt="up" /></span> <span className="btn_sep"><img src="images/btn_sep.png" alt="sep" /></span> <Link to="#">Upload Post</Link> </div>
                    <div className="rght_btn"> <span className="rght_btn_icon"><img src="images/btn_icona.png" alt="up" /></span> <span className="btn_sep"><img src="images/btn_sep.png" alt="sep" /></span> <Link to="#">Invite Friends</Link> </div>
                    <div className="rght_cate">
                        <div className="rght_cate_hd" id="rght_cat_bg">Categories</div>
                        <div className="rght_list">
                            <ul>
                                <li><Link to="#"><span className="list_icon"><img src="images/icon_01.png" alt="up1" /></span> Cats</Link></li>
                                <li><Link to="#"><span className="list_icon"><img src="images/icon_02.png" alt="up2" /></span> Dogs</Link></li>
                                <li><Link to="#"><span className="list_icon"><img src="images/icon_03.png" alt="up3" /></span> Birds</Link></li>
                                <li><Link to="#"><span className="list_icon"><img src="images/icon_04.png" alt="up4" /></span> Rabbit</Link></li>
                                <li><Link to="#"><span className="list_icon"><img src="images/icon_05.png" alt="up5" /></span> Others</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="rght_cate">
                        <div className="rght_cate_hd" id="opn_cat_bg">Featured</div>
                        <div className="sub_dwn">
                            <div className="feat_sec">
                                <div className="feat_sec_img"><img src="images/feat_img1.png" alt="Mytext1" /></div>
                                <div className="feat_txt">Lorem Ipusum Text</div>

                            </div>
                            <div className="feat_sec">
                                <div className="feat_sec_img"><img src="images/feat_img2.png" alt="Mytext2" /></div>
                                <div className="feat_txt">Lorem Ipusum Text</div>
                                <div className="btm_rgt">
                                    <div className="btm_arc">Dogs</div>
                                </div>
                            </div>
                            <div className="feat_sec">
                                <div className="feat_sec_img"><img src="images/feat_img3.png" alt="Mytext3" /></div>
                                <div className="feat_txt">Lorem Ipusum Text</div>
                                <div className="btm_rgt">
                                    <div className="btm_arc">Rabbits</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content_lft">
                    <div className="contnt_1">
                        <div className="list_1">
                            <ul>
                                <li>
                                    <input type="checkbox" className="chk_bx" />
                                    Friends</li>
                                <li>
                                    <input type="checkbox" className="chk_bx" />
                                    Flaged</li>
                            </ul>
                        </div>
                        <Profile />
                    </div>
                   { childComponent }
                </div>
            </div>
            <div className="clear"></div>
        </div>
    )
}
