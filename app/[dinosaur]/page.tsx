"use client";
import React, { useEffect, useState } from 'react'
import { Dino } from '../types'
import Link from 'next/link'

type RouteParams = {params:Promise<{dinosaur:string}>}
export default function Dinosaur({params}:RouteParams){
    const [dino,setDino]=useState<Dino>({name:'',description:''});
    useEffect(()=>{
      (async()=>{
            const {dinosaur}=await params
            const res = await fetch(`/api/dinosaurs/${dinosaur}`)
            const data = await res.json()
            setDino(data)
        }
        )()
    },[])

  return (
    <main>
    <h1>{dino.name}</h1>
    <p>{dino.description}</p>
    <Link href="/">🠠 Back to all dinosaurs</Link>
  </main>
  )
}
