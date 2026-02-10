const AboutPage = () =>{
    return (
        <div className="max-w-5xl mx-auto py-16 px-2 bg-gray-900 text-start">
            {/* Intro */}
            <div className="flex flex-col items-center gap-10 mb-12 md:flex-row md:items-start">
                <img src="/images/profile.jpg" alt="profile" className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"/>
                <div>
                    <h1 className="text-3xl font-bold-text-white mb-2">
                        Hey, I'm Ralph 👋
                    </h1>
                    <p className="text-gray-300 text-lg">I'm a passionate web developer who loves to build friendly web experiences and help others become confident, modern developers.</p>
                </div> 
            </div>
            {/* Bio */}
            <div className="mb-12">
                <h2 className="text-2xl font-semi-bold text-white mb-4">My Mission</h2>
                <p className="text-gray-300 leading-relaxed">My mission is to build websites and applications that are genuinely welcoming and intuitive
                     for everyone who uses them. I create accessible, high-performing digital experiences that serve people first.
                     also believe in making modern web development more approachable.
                     <br /><br />
                     Through teaching and mentoring, I help other developers gain the practical skills and confidence needed to build excellent solutions themselves.
                     My goal is to encourage a focus on both technical quality and thoughtful, human-centered design.</p>
            </div>
            {/* Tech Stack */}
            <div className="mb-12">
                <h2 className="text-2xl font-semi-bold text-white mb-4">🚀 Tech I Use</h2>
                <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                    {[
                        'React',
                        'Next.js',
                        'Vue',
                        'Tailwind CSS',
                        'Node.js',
                        'Laravel',
                        'Prisma',
                        'MongoDB',
                        'PostgreSQL',
                        'Appwrite',
                        'Docker'
                    ].map(tech =>
                        <li key={tech} className="bg-gray-700 px-3 py-1 rounded-md">{tech}</li>
                    )}
                </ul>
            </div>
        </div>
    )       
}
export default AboutPage