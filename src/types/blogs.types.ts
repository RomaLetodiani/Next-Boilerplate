export type BlogPost = {
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  href: string;
};
