import React from 'react';
import { BlogHero } from '../components/blog/BlogHero';
import { FeaturedArticle } from '../components/blog/FeaturedArticle';
import { ArticleGrid } from '../components/blog/ArticleGrid';
import { BlogCTA } from '../components/blog/BlogCTA';

interface BlogPageProps {
  onBookClick: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onBookClick }) => {
  return (
    <div className="w-full bg-[#FFFDF8] text-[#24190F] min-h-screen">
      {/* 01. Blog Hero */}
      <BlogHero />

      {/* 02. Featured Article */}
      <FeaturedArticle />

      {/* 03 & 04. Latest Articles + Browse By Topic */}
      <ArticleGrid />

      {/* 05. Final CTA */}
      <BlogCTA onBookClick={onBookClick} />
    </div>
  );
};
