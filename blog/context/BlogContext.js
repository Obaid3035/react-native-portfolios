import createDataContext from "./createDataContext";


const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blog_post':
			return [...state, {
				id: Math.floor(Math.random() * 99999),
				title: action.payload.title,
				content: action.payload.content
			}]
		case 'update_blog_post':
			return state.map((el) => {
				console.log(action.payload.id, el.id)
				if (action.payload.id === el.id) {

					return {...el, title: action.payload.title, content: action.payload.content}
				} else return el
			})
		case 'delete_blog_post':
			return state.filter((blogPost) => blogPost.id !== action.payload)
		default:
			return state
	}
}

const addBlogPost = dispatch => {
	return (title, content) => {
		dispatch(
			{
				type: 'add_blog_post',
				payload: {
					title,
					content
				}
			});
	}
}

const updateBlogPost = dispatch => {
	return (id, title, content) => {
		dispatch(
			{
				type: 'update_blog_post',
				payload: {
					id,
					title,
					content
				}
			});
	}
}

const deleteBlogPost = dispatch => {
	return (id) => {
		dispatch({type: 'delete_blog_post', payload: id})
	}
}


export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost, updateBlogPost}, [])
