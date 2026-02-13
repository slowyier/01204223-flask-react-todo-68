import './App.css'

import { useState } from 'react'


function TodoItem({todo, toggleDone, deleteTodo, addNewComment}) {
    const [newComment, setNewComment] = useState("");
  return (
    <li key={todo.id}>
            <span className={todo.done ? "done" : ""}>{todo.title}</span>
            <button onClick={() => {toggleDone(todo.id)}}>Toggle</button>
            <button onClick={() => {deleteTodo(todo.id)}}>❌</button>
            {(todo.comments?.length === 0) && (<><br /><b>No comments</b></>)}
            {(todo.comments) && (todo.comments.length > 0) && (
              <>
                <br />
                <b>Comments ({todo.comments.length || 0}):</b>
                <ul>
                  {todo.comments.map(comment => (
                    <li key={comment.id}>{comment.message}</li>
                  ))}
                </ul>
              </>
            )}
            <div className="new-comment-forms">
              <input
                type="text"
                value={newComment}
                onChange={(e) => {
                  const value = e.target.value;
                  setNewComments(value);
                }}
              />
              <button onClick={() => {                         // แก้ส่วนนี้
          addNewComment(todo.id, newComment);
          setNewComment("");
        }}>Add Comment</button>
            </div>
          </li>
  )
}

export default TodoItem