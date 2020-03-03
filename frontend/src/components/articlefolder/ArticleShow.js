import React from 'react'
import axios from 'axios'
// import auth from '../auth/'
import { headers } from '../../lib/headers'

class ArticleShow extends React.Component {
  state = {
    article: null,
    save: false,
    text: '',
    articleOwner: '',
    data:{
    text: 'this'
    }
  }

  async componentDidMount() {
    const articleId = this.props.match.params.id
    try {
      console.log(articleId)
      const res = await axios.get(`/api/articles/${articleId}`)
      this.setState({ article: res.data })
    } catch(err) {
      console.log(err)
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const articleId = this.props.match.params.id
    try {
      console.log(articleId)
      await axios.post(`/api/articles/${articleId}/comments/`, this.state.data, headers)
      this.props.history.push(`/articles/${articleId}/comments/`)
      // this.setState({ data: null, text: '' })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  render() {
    const { article } = this.state
    if (!article) return null
    return(
      <div className="section">
      <div className="container">
        <div className="box">
        <h1 className='is-size-1'>{article.title}</h1>
        <h6>This article was written by {article.owner} at {article.date}</h6>
        <p>{article.text}</p>
      </div>
      </div>

      <div className="section">
      <div className="container">
      <div className="field">
            <label className="label">Add a Comment</label>
            <div className="control">
              <input 
                className="input"
                name="text"
                required
                placeholder="Share your thoughts!"
                onChange={this.handleChange}
                value={this.state.data.text}
              />
            </div>
            <button onClick={this.handleSubmit}>Submit Comment</button>
          </div>
          
      </div>
      </div>
      </div>
    )
  }

}

export default ArticleShow