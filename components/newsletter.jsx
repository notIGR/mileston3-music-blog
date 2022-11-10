
export default function Newsletter() {
    return(
        <section className="bg-gray mt-20">
            <div className="container mx-auto md:px-20 py-16 text-center">
                <h1 className="font-bold text 3xl">Sub to our newsletter!</h1>
                <div className="py-4">
                    <input type="email" className="shadow border rounded w-9/12 py-3 px=3 text-gray-800 focus:outline-none focus:shadow-outline cursor-pointer" placeholder="Enter Your Email" />
                </div>
                <button type="submit"className="bg-gray-400 px-20 py-3 rounded-full text-gray-5 text-xl"> Subscribe</button>
            </div>
        </section>
    )
}