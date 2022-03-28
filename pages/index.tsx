import Container from "../components/layouts/container";
import PostsList from "../components/posts/posts-list";
import Layout from "../components/layouts/layout";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import HeroSection from "../components/pages/home/hero-section";
import Link from "next/link";
import IconArrowRight from "../components/icons/icons-arrow-right";
import Meta from "../components/common/meta";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const latestPosts = allPosts.slice(0, 3);
  const pageMeta = {
    title: "Hi, I'm Irfan!",
    description: "Irfan Nurghiffari Muhajir's personal website",
    ogImage: "/assets/images/irfan.jpeg",
  };

  return (
    <>
      <Meta data={pageMeta} />
      <Layout>
        <Container>
          <div className="space-y-16">
            <HeroSection />
            {latestPosts.length > 0 && (
              <div>
                <PostsList title="Latest Posts" posts={latestPosts} />
                <div className="mt-4 font-medium">
                  <Link href="/posts">
                    <div className="flex items-center hover:cursor-pointer hover:underline">
                      <a className="mr-0.5">Read all post</a>
                      <IconArrowRight width="22" height="14" />
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "category",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
