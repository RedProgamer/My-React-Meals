import DescriptionCard from "./UI/DescriptionCard";

function Home() {
    return (
        <section className="flex border-none justify-center items-center h-[70vh] border-2 bg-home-image bg-blend-darken bg-center bg-cover bg-no-repeat">
            <DescriptionCard />
        </section>        
    );
}

export default Home;