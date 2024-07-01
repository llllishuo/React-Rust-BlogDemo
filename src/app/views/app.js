import { get_article_list_by_user_id } from "../api/server";
import BlogPost from "./blog";
import "../css/app.css";
export default function App() {
  return (
    <body>
      {/* <BlogPost/> */}
      <BlogList />
    </body>
  );
}
function blog_item_onClick({ id }) {
  console.log("qwe");
}

async function BlogList() {
  let list = await get_article_list_by_user_id("01");
  return (
    <div>
      {list.map((i) => (
        <div key={i}>
          <button>{i.title}</button>
        </div>
      ))}
    </div>
  );
}
