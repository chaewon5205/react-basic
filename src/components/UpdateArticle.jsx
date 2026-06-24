import { useState } from "react";

function UpdateArticle({ title, desc, difficulty, onSubmit }) {
  console.log("UpdateArticle render");
  const [content, setContent] = useState({
    title: title,
    desc: desc,
    difficulty: difficulty,
  });
  // const [newTitle, setNewTitle] = useState(title);
  // const [newDesc, setNewDesc] = useState(desc);

  // const handleTitleChange = e => {
  //   setNewTitle(e.target.value);
  // };
  // const handleDescChange = e => {
  //   setNewDesc(e.target.value);
  // };

  const handleChange = e => {
    const { name, value } = e.target;
    setContent(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <h2>Update Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit(content.title, content.desc, content.difficulty);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" value={content.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc" value={content.desc} onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="difficulty">difficulty</label>

          <select name="difficulty" id="difficulty" value={content.difficulty} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}
export default UpdateArticle;
