import { useEffect, useState } from "react";

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPostData(data.posts);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col p-2">
      {postData.length > 0 ? (
        postData.map((post, index) => (
          <div key={index}>
            <h1 className="text-[32px]">{post.title}</h1>
            <p className="text-[16px]">{post.body}</p>
            <div className="flex flex-col gap-2 sm:flex sm:flex-row sm:relative align-middle flex-wrap mt-1 pb-3 border-b ">
              <div className="flex gap-2 justify-center sm:absolute sm:right-0 ">
                {post.tags.map((tag, tagIndex) => (
                  <p
                    key={tagIndex}
                    className="text-[10px] px-2 border border-slate-700 rounded-xl"
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <div className="flex gap-2 justify-center">
                <p className="text-[10px] px-2 border border-slate-700 rounded-xl">
                  👍 {post.reactions.upvotes}
                </p>
                <p className="text-[10px] px-2 border border-slate-700 rounded-xl">
                  👎 {post.reactions.downvotes}
                </p>
                <p className="text-[10px] px-2 border border-slate-700 rounded-xl">
                  Views {post.views}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
}

export default App;
