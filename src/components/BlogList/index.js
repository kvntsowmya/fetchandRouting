import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogData: {},
    isLoader: true,
  }

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))

    this.setState({blogData: formattedData, isLoader: false})
  }

  render() {
    const {blogData, isLoader} = this.state

    return isLoader ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      blogData.map(item => <BlogItem blogItem={item} key={item.id} />)
    )
  }
}

export default BlogList
