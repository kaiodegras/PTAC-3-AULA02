import next from "next";

export default async function Home() {
  const resposta = await fetch("https://back-end-ifms-git-main-kaios-projects-276abb8f.vercel.app/campi", {
    next:{
        rivalidate: 1
    }
  });

  const campus = await resposta.json();
  return (
    <main>
      <h1>Home</h1>
      {campus.map((campi) => (
        <div>
          <p>{campi.nome_campus}</p>
        </div>
      ))}
    </main>
  );
}
