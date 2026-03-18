/**
 * Validates an Indian mobile number.
 * Must be 10 digits and start with 6, 7, 8, or 9.
 */
export function isValidMobile(mobile: string): boolean {
  const mobileRegex = /^[6-9]\d{9}$/;
  return mobileRegex.test(mobile);
}

/**
 * Validates an Indian pincode.
 * Must be 6 digits and start with 1-9.
 */
export function isValidPincode(pincode: string): boolean {
  const pincodeRegex = /^[1-9][0-9]{5}$/;
  return pincodeRegex.test(pincode);
}

/**
 * Validates a 6-digit OTP.
 */
export function isValidOTP(otp: string): boolean {
  const otpRegex = /^\d{6}$/;
  return otpRegex.test(otp);
}
