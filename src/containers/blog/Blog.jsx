import React from 'react';
import "./blog.css";
import { Article } from "../../components";
import {Rectangle01, Rectangle02, Rectangle03, Rectangle04, Rectangle05 } from "./imports";

const Blog = () => {
  return (
    <div className="gpt3__blg section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={Rectangle01} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explores how is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={Rectangle02} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explores how is?"/>
          <Article imgUrl={Rectangle03} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explores how is?"/>
          <Article imgUrl={Rectangle04} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explores how is?"/>
          <Article imgUrl={Rectangle05} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explores how is?"/>
        </div>
      </div>
    </div>
  )
}

export default Blog;
