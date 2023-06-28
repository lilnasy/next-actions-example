"use server"

let count = 0

export const getCount = async () => count
export const increment = async () => ++count
export const decrement = async () => --count
