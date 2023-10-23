import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="md:hidden"/>
            <span className="orange_gradient text-center"> AI Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Motanya is an open-source AI prompting tool for mrdern world to discover, create and share prompts
        </p>
        <Feed />
    </section>
  )
}

export default Home