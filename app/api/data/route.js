export async function GET(request) {
    const data = {
        name: 'Bob',
        age: 10,
        bio: 'Info about Bob'
    }
    return new Response(JSON.stringify(data))
}

export async function POST(request) {
    
    return new Response(request.body)
}