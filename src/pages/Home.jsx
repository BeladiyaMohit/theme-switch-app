import Header from "../components/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 dark:text-white transition-colors duration-300">
      <Header/>
      <h1 className="text-3xl font-bold pt-10">Dynamic Theme Switcher</h1>
      <main className="container mx-auto py-6">
          <h1 className="text-4xl">Welcome to MyApp</h1>
          <p className="mt-4">This is a sample application with a theme switcher.</p>
        </main>
    </div>
  )
}
