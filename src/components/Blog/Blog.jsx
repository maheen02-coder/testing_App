import React from "react";
import './Blog.css'

const Blog =() =>{
    return(
        <>
        <div className="Blog">
            <div className="left">
                <p>---Blog---</p>
                <h1>Recent Post</h1>
                <button className="Blog-btn">Click More</button>
            </div>
            <div className="Right">
                <h2>Brand Design That  <br/>
                    Helps The Company   <br/>
                    Grow</h2>
                <hr/>
                <h2>Fresh Design Ideas &<br/>
                Inspiration for 2026</h2>
            </div>
        </div>
        </>
    )
}

export default Blog;