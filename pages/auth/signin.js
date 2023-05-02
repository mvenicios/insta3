import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
//import "../module.css";

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-48"
          src="https://like4like.com/img/hero-x750.png"
          alt=""
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-52 object-cover"
                src="https://cdn.pixabay.com/photo/2021/07/19/08/13/instagram-6477472_960_720.png"
                alt="logo"
              />
              <p className="text-sm italic my-10 text-center">
                Bem vindo ao vidasnap
              </p>
              <button
                className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                Entrar com {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
