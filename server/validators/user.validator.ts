export function validateUser(data: any) {
    if (!data.first_name || !data.last_name) {
        return "First and last name are required"
    }

    if (!data.dob || !data.gender) {
        return "DOB and gender are required"
    }

    if (!data.email || !data.mobile) {
        return "Email and mobile are required"
    }

    if (Number(data.cgpa) < 6.0) {
        return "Minimum CGPA is 6.0"
    }

    return null
}