import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, author, topic, title, imageUrl, avatarUrl} = blogItem

  return (
    <Link to={`/blogs/${id}`}>
      <div className="blogItem-container">
        <img src={imageUrl} alt={`images${id}`} className="image-url" />
        <div className="description-container">
          <p className="item-title">{topic}</p>
          <p>{title}</p>
          <div className="avatar-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-image" />
            <p className="item-author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
