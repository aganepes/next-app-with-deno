"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Dino } from "./types";

export default function Home() {
  const [dinos,setDinos]=useState<Dino[]>([])

  useEffect(()=>{
    (async()=>{
    const resp= await fetch('/api/dinosaurs')
    const dino = await resp.json() as Dino[]
    setDinos(dino)
    })()
  },[])
  
  return (
    <div >
      <h1>Welcome to the Dinosaur app</h1>
      <p>Click on a dinosaur below to learn more.</p>
      <ul>
        {dinos.map((data:Dino,index:number)=>{
          return (<li key={index}><Link href={`/${data.name.toLocaleLowerCase()}`}>{data.name}</Link></li>)
        })}
      </ul>
    </div>
  );
}
