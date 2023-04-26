// import axios from '../lib/axios'
import axios from 'axios'

//question create function
export const createReview = async reviewContent => {
  try {
    return (
      await axios.post('http://localhost:3003/api/rating/add', reviewContent)
    ).data
  } catch (err) {
    console.error(err)
  }
}

//question read function - all questions
export const readAllReview = async () => {
  try {
    return (await axios.get('http://localhost:3003/api/rating/get/all-reviews'))
      .data.data
  } catch (err) {
    console.error(err)
  }
}

//question update function
export const updateReview = async reviewContent => {
  try {
    return (
      await axios.put('http://localhost:3003/api/rating/edit', reviewContent)
    ).data
  } catch (err) {
    console.error(err)
  }
}

//question delete function
export const deleteReview = async reviewContent => {
  try {
    return await axios.delete(
      `http://localhost:3003/api/review/delete/${reviewContent._id}`,
    )
  } catch (err) {
    console.error(err)
  }
}
