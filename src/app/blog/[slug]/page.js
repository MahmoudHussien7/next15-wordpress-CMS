"use client"; // لازم تكون Client Component عشان الـ useEffect
import { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import client from "@/lib/apollo-client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Breadcrumbs from "@/Components/Breadcrumbs";

export default function PostPage() {
  const params = useParams();
  const slug = params.slug;
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const { data } = await client.query({
        query: gql`
          query GetPostBySlug($slug: String!) {
            postBy(slug: $slug) {
              title
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        `,
        variables: { slug },
      });

      setPost(data.postBy);
    }

    fetchPost();
  }, [slug]);

  if (!post) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <Breadcrumbs />
      <h1>{post.title}</h1>

      {post.featuredImage && (
        <Image
          src={post.featuredImage.node.sourceUrl}
          alt={post.title}
          width={800}
          height={450}
          style={{ borderRadius: "10px", marginBottom: "20px" }}
        />
      )}

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
        style={{ color: "#333", lineHeight: "1.6" }}
      />
    </div>
  );
}
