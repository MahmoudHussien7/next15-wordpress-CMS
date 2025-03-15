import { gql } from "@apollo/client";
import client from "@/lib/apollo-client";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/Components/Breadcrumbs";

export default async function BlogPage() {
  async function fetchPosts() {
    try {
      const { data } = await client.query({
        query: gql`
          query GetAllPosts {
            posts {
              nodes {
                title
                slug
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        `,
      });
      return data.posts.nodes;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return []; // Fallback to empty array
    }
  }

  const posts = await fetchPosts();

  return (
    <div className="container mx-auto px-4">
      <Breadcrumbs currentPage="Blog" />
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>

      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div
          className="posts-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {posts.map((post, index) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="post-card"
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                textDecoration: "none",
                color: "inherit",
                transition: "box-shadow 0.2s",
              }}
            >
              <h2
                className="font-mono font-extrabold text-white text-2xl p-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-200"
                style={{ marginBottom: "10px" }}
              >
                {post.title}
              </h2>

              {post.featuredImage?.node?.sourceUrl && (
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  width={300}
                  height={200}
                  style={{ borderRadius: "10px", marginBottom: "10px" }}
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority={index === 0} // Add priority only for the first post
                />
              )}

              <div
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
                style={{ color: "#666", marginBottom: "10px" }}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
