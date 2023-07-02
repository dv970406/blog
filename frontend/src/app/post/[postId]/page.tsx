import MarkdownViewer from "@/components/templates/post/MarkdownViewer";
import React from "react";

const PostDetailPage = () => {
  const content = `dsa

dsadas

~~~javascript
const dsa= 
~~~

![image-20230702133740307](https://raw.githubusercontent.com/dv970406/blog-images/main/images/image-20230702133740307.png)

`;
  return (
    <>
      <MarkdownViewer content={content} />
    </>
  );
};

export default PostDetailPage;
