import React from 'react'
import PostCard from './PostCard'

export default function Timeline() {

    const timeline = [{
        id: 1,
        postTitle: "User Interface PSD Source files Web Designing for web",
        postCategeory: "CATS",
        postUser: "Steave Waugh",
        postDate: "02 Jan 2014",
        postTime: "11:15am",
        likeCount: "4",
        commentCount: "4"
    },
    {
        id: 2,
        postTitle: "User Interface PSD Source files Web Designing for web",
        postCategeory: "CATS",
        postUser: "Steave Waugh",
        postDate: "02 Jan 2014",
        postTime: "11:15am",
        likeCount: "4",
        commentCount: "4"
    },
    {
        id: 3,
        postTitle: "User Interface PSD Source files Web Designing for web",
        postCategeory: "CATS",
        postUser: "Steave Waugh",
        postDate: "02 Jan 2014",
        postTime: "11:15am",
        likeCount: "4",
        commentCount: "4"
    },
    {
        id: 4,
        postTitle: "User Interface PSD Source files Web Designing for web",
        postCategeory: "CATS",
        postUser: "Steave Waugh",
        postDate: "02 Jan 2014",
        postTime: "11:15am",
        likeCount: "4",
        commentCount: "4"
    },
    {
        id: 5,
        postTitle: "User Interface PSD Source files Web Designing for web",
        postCategeory: "CATS",
        postUser: "Steave Waugh",
        postDate: "02 Jan 2014",
        postTime: "11:15am",
        likeCount: "4",
        commentCount: "4"
    }
    ]


    return (
        <>
        {
        timeline.map((element)=>{
           return <PostCard key={element.id} postTitle={element.postTitle} postCategeory={element.postCategeory} postUser={element.postUser} postDate= {element.postDate} postTime={element.postTime} likeCount={element.likeCount} commentCount={element.commentCount}  />
        })
        }
            
        </>
    )
}
