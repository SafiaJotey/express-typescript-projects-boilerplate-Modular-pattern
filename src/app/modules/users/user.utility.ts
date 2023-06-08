import { User } from './user.model'

//function to fetch the last created user id
export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({ createdAt: -1 })
    .lean()
  return lastUser?.id
}

// function for generate id for new user
export const generateUserId = async () => {
  const currentId = (await findLastUserId()) || '0'
  const incrementId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementId
}
