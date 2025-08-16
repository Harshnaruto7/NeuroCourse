import CompanionCard from "@/components/card/companionCard";
import CompanionsList from "@/components/list/companionsList";
import CTA from "@/components/CTA";
import react from "react";




const Home = () => {

  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions </h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="467"
          name="Countsy the Number Wizard"
          topic="Derivatives and Integrals"
          subject="Maths "
          duration={35}
          color="#FFDA6E"
        />
        <CompanionCard
          id="789"
          name="Verba the vocabulary builder"
          topic="English Literature"
          subject="Language"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section">
        <CompanionsList />
        <CTA />
      </section>
    </main>
  );
}

export default Home;