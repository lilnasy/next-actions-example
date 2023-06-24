"use server"

let count = 0

export async function getCount() {
    return count
}

export async function increment() {
    console.log("function ran here", ++count)
    return count
}

export async function decrement() {
    console.log("function ran here", --count)
    return count
}