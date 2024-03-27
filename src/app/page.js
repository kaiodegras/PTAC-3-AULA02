import next from "next";
import Image from "next/image";

export default async function Home() {
  const resposta = await fetch("https://back-end-ifms-git-main-kaios-projects-276abb8f.vercel.app/campi", {
    next:{
        rivalidate: 1
    }
  });

  const campus = await resposta.json();
  return (
    <main>
    <h1>Home!!</h1>
    {campus.map((campi) => (
      <div key={campi.id}>
        <Image
          src={campi.image_url}
          alt={`Imagem do campus ${campi.nome_campus}`}
          width={500}
          height={300}
        />
        <p>{campi.nome_campus}</p>
      </div>
    ))}
  </main>
  );
}
