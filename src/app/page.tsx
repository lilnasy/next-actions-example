import { cookies } from 'next/headers'

// Server action defined inside a Server Component
export default function ({ productId }) {
    
    async function handleSubmit(data : FormData) {
        "use server"
        const name = data.get('name')
        console.log({ data, productId })
    }
    
    return <form action={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
    </form>
}