import React, { useEffect, useState } from "react";
import Button from "../../components/button/button";
import Layout from "../../components/layout";
import Container from "../../components/container";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import IconButton from "../../components/iconbutton/iconbutton";

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  const [fontSize, setFontSize] = useState("40");

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setFontSize("32");
      } else {
        setFontSize("40");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const prototypeLink =
    postData.prototype === postData.prototype ? postData.prototype : null;

  return (
    <Layout pageTitle={postData.title}>
      <Container>
        <main>
          <div className="post-date">
            <Date dateString={postData.date} />
          </div>

          <div className="post-title sticky">
            <h1 style={{ fontSize: `${fontSize}px` }}>
              {postData.title}
              <IconButton
                icon="link"
                clickedLabel="Link copied"
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
              >
                Copy link
              </IconButton>
            </h1>
          </div>
          <h2 className="post-description">{postData.description}</h2>

          <div className="post-img">
            {prototypeLink && (
              <Button link={prototypeLink} newWindow>
                Open prototype
              </Button>
            )}
            <img src={postData.image} />
          </div>

          <article>
            <div
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              className="post-content"
            />
          </article>
        </main>
      </Container>
    </Layout>
  );
}
