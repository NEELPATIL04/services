export interface Post {
    id: string;
    title: string;
    content: string;
    author: string;
    labels: string[];
    likes: number;
    dislikes: number;
    comments: number;
    createdAt?: Date;
  }