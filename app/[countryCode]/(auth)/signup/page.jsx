import { createUser } from '@/app/actions/actions'
import Link from 'next/link'
import React from 'react'

const SignUp = ({ params }) => {
    return (
        <div>
            <section className="bg-gray-50 rounded-lg shadow-lg dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-xl font-extrabold text-center tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white">Free Nextjs Ecommerce Website</h1>
                        <p className="mb-6 text-md font-normal text-gray-500 lg:text-lg dark:text-gray-400">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quis accusamus iste sunt illo aspernatur sequi necessitatibus nam? Tempora voluptatem reprehenderit pariatur autem nemo fugit sunt corrupti quas non, porro optio tenetur voluptas ipsum voluptatibus accusantium nesciunt repellat laboriosam odit error sed? Architecto rerum suscipit laborum dolorem, dicta aspernatur tenetur officiis consequatur hic aliquam corrupti fugit. Numquam dicta officiis eius repellat fugiat sequi repudiandae earum nemo dolorem. Omnis quibusdam excepturi aspernatur laborum, debitis unde nulla est delectus nemo amet, natus recusandae molestias aperiam laboriosam ratione. Nihil, molestiae hic iusto dolor officiis ullam repellendus voluptatum veritatis itaque quas culpa iure blanditiis.
                        </p>
                    </div>
                    <div>
                        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Sign up
                            </h2>
                            <form className="mt-8 space-y-6" action={createUser}>
                                <div>
                                    <input
                                        defaultValue={params.countryCode}
                                        type="text"
                                        name="locale"
                                        id="locale"
                                        className="absolute hidden bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder="Your name..." required />
                                </div>
                                <div>
                                    <label htmlFor="surname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your surname</label>
                                    <input type="text" name="surname" id="surname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder="Your surname..." required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500" required />
                                </div>

                                <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 sm:w-auto dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">
                                    Register</button>
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                    Have you an account?
                                    <Link href={`/${params.countryCode}/signin`} className="text-slate-600 hover:underline dark:text-slate-500 ps-2">
                                        Log in to your account</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default SignUp
