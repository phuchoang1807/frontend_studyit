export default function DashboardHome() {
  return (
    <main className="max-w-7xl mx-auto px-4 pb-20">

      {/* HERO */}
      <section className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Explore, Share, & Master IT Knowledge
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Your hub for high-quality code, documentation, and projects. 
          Join a community of developers learning and building together.
        </p>

        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

          <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-xl flex items-center p-2 border border-slate-100 dark:border-slate-800">
            <input
              type="text"
              placeholder="Search Code, Docs, Projects..."
              className="flex-grow border-none focus:ring-0 text-lg bg-transparent px-4 outline-none"
            />
            <button className="bg-primary hover:bg-blue-600 text-white p-3 rounded-lg transition-colors">
              🔍
            </button>
          </div>
        </div>
      </section>

      {/* TRENDING CATEGORIES */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">
          Trending Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <CategoryCard
            title="Frontend Development"
            icon="💻"
            tags={["React", "Vue", "CSS"]}
          />

          <CategoryCard
            title="Backend Systems"
            icon="🗄️"
            tags={["Node.js", "Python", "Databases"]}
          />

          <CategoryCard
            title="Artificial Intelligence"
            icon="🧠"
            tags={["Machine Learning", "NLP", "Data Science"]}
          />

        </div>
      </section>

      {/* LATEST UPLOADS */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            Latest Uploads
          </h2>

          <a href="#" className="text-primary font-semibold hover:underline">
            Xem tất cả →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <UploadCard
            type="PDF"
            title="Advanced Python Concurrency Guide"
            tags={["#python", "#async"]}
            author="Sarah Connor"
            date="Oct 17, 2023"
            rating="4.8/5"
          />

          <UploadCard
            type="JS"
            title="React State Management Patterns"
            tags={["#react", "#redux"]}
            author="Mike Wazowski"
            date="Oct 15, 2023"
            rating="4.5/5"
          />

          <UploadCard
            type="Cheat"
            title="ML Algorithms Cheat Sheet"
            tags={["#ML", "#algorithms"]}
            author="Jane Doe"
            date="Oct 12, 2023"
            rating="4.9/5"
          />

          <UploadCard
            type="DOC"
            title="Microservices Architecture Guide"
            tags={["#cloud", "#scaling"]}
            author="Bob Smith"
            date="Oct 10, 2023"
            rating="4.7/5"
          />

          <UploadCard
            type="Script"
            title="Docker Compose Templates"
            tags={["#devops", "#docker"]}
            author="Alice Wonderland"
            date="Oct 08, 2023"
            rating="4.9/5"
          />

          <UploadCard
            type="API"
            title="Postman API Testing Best Practices"
            tags={["#testing", "#api"]}
            author="Tom Cat"
            date="Oct 05, 2023"
            rating="4.6/5"
          />

        </div>
      </section>

    </main>
  );
}


/* ================= COMPONENTS ================= */

function CategoryCard({ title, icon, tags }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-medium rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function UploadCard({ type, title, tags, author, date, rating }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 group hover:border-primary/50 transition-all">

      <div className="flex gap-4 mb-4">
        <div className="w-16 h-20 bg-slate-100 dark:bg-slate-800 rounded flex flex-col items-center justify-center">
          <span className="text-sm font-bold">{type}</span>
        </div>

        <div className="flex-grow">
          <h4 className="font-bold group-hover:text-primary transition-colors">
            {title}
          </h4>

          <div className="flex gap-2 mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs text-slate-500">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="text-[11px]">
          <p className="font-semibold">{author}</p>
          <p className="text-slate-400">{date}</p>
        </div>

        <div className="text-amber-500 text-xs font-bold">
          ⭐ {rating}
        </div>
      </div>

    </div>
  );
}