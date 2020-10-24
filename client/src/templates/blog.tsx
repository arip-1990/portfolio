import React from "react";

import blog from "../images/blog-img.jpg";

const Blog = () => {
    return (
        <section className="blog-section" id="blog">
            <h4>Blog Post</h4>
            <div className="blog">
                <img src={blog} alt="" />
                <div className="blog_body">
                    <a href="/">
                        <h6>Standard blog post with image</h6>
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur nos trud
                        exercitation ullamco.
                    </p>
                    <a href="/">Read more</a>
                </div>
                <div className="blog_footer">
                    <a href="/" className="icon-share" />
                    <a href="/" className="icon-comment">
                        20
                    </a>
                    <a href="/" className="icon-heart">
                        65
                    </a>
                </div>
            </div>
            <div className="blog">
                <img src={blog} alt="" />
                <div className="blog_body">
                    <a href="/">
                        <h6>Standard blog post with image</h6>
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur nos trud
                        exercitation ullamco.
                    </p>
                    <a href="/">Read more</a>
                </div>
                <div className="blog_footer">
                    <a href="/" className="icon-share" />
                    <a href="/" className="icon-comment">
                        20
                    </a>
                    <a href="/" className="icon-heart">
                        65
                    </a>
                </div>
            </div>
            <div className="blog">
                <img src={blog} alt="" />
                <div className="blog_body">
                    <a href="/">
                        <h6>Standard blog post with image</h6>
                    </a>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur nos trud
                        exercitation ullamco.
                    </p>
                    <a href="/">Read more</a>
                </div>
                <div className="blog_footer">
                    <a href="/" className="icon-share" />
                    <a href="/" className="icon-comment">
                        20
                    </a>
                    <a href="/" className="icon-heart">
                        65
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;
