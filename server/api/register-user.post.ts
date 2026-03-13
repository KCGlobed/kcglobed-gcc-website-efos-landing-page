import { validateUser } from '../validators/user.validator'
import { saveUser } from '../services/user.service'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const error = validateUser(body)
    if (error) {
        return { success: false, message: error }
    }

    const userId = await saveUser(body)

    return {
        success: true,
        message: "User registered successfully",
        user_id: userId
    }
})