
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);
 
  return (
    <Form method='POST' className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Content
        </label>
        <textarea
          rows="5"
          type="text"
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more about your self"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          name="reactions"
          rows="5"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your hashtags here
        </label>
        <input
          type="text"
          rows="5"
          className="form-control"
          id="tags"
          name="tags"
          placeholder="Please Enter your hashtags here using space between them"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        post
      </button>
    </Form>
  );
};

export async function createPostAction (data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // addPost(post);
      console.log(post);
     
    });
  return redirect('/');
};

export default CreatePost;
