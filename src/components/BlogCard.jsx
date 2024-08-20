import { Link } from "react-router-dom";
import placeholderImage from '../assets/404.jpg';

// eslint-disable-next-line react/prop-types
const BlogCard = ({blog}) => {

  const {title, cover_image, description, published_at, id} = blog;

  return (
    <Link to={`/blog/${id}`} className="max-w-sm mx-auto transition border-2 p-2 hover:scale-105 border-opacity-30 border-primary hover:border-secondary  group hover:no-underline focus:no-underline">
      <img className="object-cover w-full rounded h-44" src={cover_image || placeholderImage} />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
        <span className="text-xs">{new Date(published_at).toLocaleDateString()}</span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;