import { useLoaderData } from "react-router-dom";
import placeholderImage from '../assets/404.jpg';
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";


const Content = () => {

  const blog = useLoaderData();
  const {title, cover_image, tags, url, body_html} = blog;

  return (
    <div className="className='mx-auto transition border-2 p-2  border-opacity-30   group hover:no-underline focus:no-underline">
      <img className="object-cover w-full rounded h-44" src={cover_image || placeholderImage} />
      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
        {
          tags.map((tag, idx) => {
            return (
              <a 
                key={idx}
                className="px-3 py-1 rounded-sm dark:bg-violet-600 dark:text-gray-50"
              >#{tag}</a>
            )
          })
        }
      </div>

      <div className="space-y-2">
        <a
          href={url}
          target="_blank"
          className="text-2xl font-semibold group-hover:underline group-focus:underline"
        >{title}</a>

        <div className="overflow-x-auto">
          <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
        </div>
        
      </div>
    </div>
  );
};

export default Content;