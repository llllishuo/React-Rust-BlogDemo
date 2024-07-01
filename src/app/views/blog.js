import "../css/blog.css";
import { get_article_by_id } from "../api/server.js";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useParams } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const items = ["返回", "MenghanStudio", "***"];
  return (
    <header className="nav">
      <div className="nav_back" key="">
        {/* <image></image> */}
        {items[0]}
      </div>
      <div className="nav_home" key="">
        {items[1]}
      </div>
      <div className="nav_item" key="">
        {items[2]}
      </div>
    </header>
  );
}

function AuthorInfo(v) {
  let src = "/public/header_img.jpg";
  return (
    <div className="author-info">
      <p>test</p>
    </div>
  );
}

function Tags(v) {
  console.log("[debug] tags: " + v.tags);
  return (
    <div className="tags">
      <div>标签：</div>
      {/* 文章标签 */}
      {v.tags.map((tag) => (
        <div key={tag}>{tag}</div>
      ))}
    </div>
  );
}

function Article(props) {
  // console.log( "[debug] props.content is "+ typeof props.content);
  // console.log( "[debug] props.content : "+ props.content);
  return (
    <div>
      <ReactMarkdown className="md_title" children={props.title} />
      <ReactMarkdown
        className="md_content"
        children={props.content}
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={dark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
}

export async function BlogPost() {
  // let { id } = useParams();
  let id = "101";
  const article = await get_article_by_id(id);
  console.log(article);
  return (
    <div className="md_main_vertical">
      <div className="md_main_horizontal">
        <Article title={article.title} content={article.content} />
      </div>
    </div>
  );
}
