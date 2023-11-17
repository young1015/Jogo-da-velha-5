"use client"

import { table } from "console"
import { useState } from "react"

export default function Game() {

  const [tabela, setTabela] = useState(["","","","","","","","",""])
  const [jogador, setJogador] = useState("X")

  const [box, setBox] = useState({
    top:10,
    right:10,
    bottom:10,
    left:10
  })

  function mark(index: number) {

    if (tabela[index] != "") return

    tabela[index] = jogador
 
    if (jogador == "X") {
      setJogador("O")
    } else {
      setJogador("X")
    }
    
  }


  return (
      <>
      <div style={{top:`${box.top}px`, right:`${box.right}px`}} className="bg-black w-20 h-20 border border-green-500 rounded absolute right-0"></div>
      <div className="w-[10vw]">
        <button className="w-full">
          <span onClick={() => setBox({...box, top: box.top - 10})}  className="bg-red-500 p-2 hover:bg-red-400">
          ↑
          </span>
        </button>
        <div className="w-full flex justify-center ">
          <button onClick={() => setBox({...box, right: box.right + 10})} className="bg-red-500 p-2 hover:bg-red-400">←</button>
          <button onClick={() => setBox({...box, top: box.top + 10})} className="bg-red-500 p-2 hover:bg-red-400">↓</button>
          <button onClick={() => setBox({...box, right: box.right - 10})} className="bg-red-500 p-2 hover:bg-red-400">→</button>
        </div>
      </div>
        <table className="flex justify-center mt-5 text-center text-6xl ">
          <tbody>
            <tr className="">
              <td onClick={() => mark(0)} className="border-2 w-[100px] h-[100px] hover:bg-slate-500">
                {tabela[0]}
              </td>
              <td onClick={() => mark(1)} className="border-2 w-[100px] h-[100px] hover:bg-slate-500">
              {tabela[1]}
              </td>
              <td onClick={() => mark(2)} className="border-2 w-[100px] h-[100px] hover:bg-slate-500">
              {tabela[2]}
              </td>
            </tr>
            <tr>
              <td onClick={() => mark(3)} className="border-2 w-[100px] h-[100px] hover:bg-slate-500">
              {tabela[3]}
              </td>
              <td onClick={() => mark(4)} className="border-2 w-[100px] h-[100px] hover:bg-slate-500">
              {tabela[4]}
              </td>
              <td onClick={() => mark(5)} className="border-2 w-[100px] h-[100px] hover:bg-slate-500">
              {tabela[5]}
              </td>
            </tr>
            <tr>
              <td onClick={() => mark(6)} className="border-2 w-[100px] h-[100px] hover:bg-slate-500">
              {tabela[6]}
              </td>
              <td onClick={() => mark(7)} className="border-2 w-[100px] h-[100px] hover:bg-slate-500">
              {tabela[7]}
              </td>
              <td onClick={() => mark(8)} className="border-2 w-[100px] h-[100px] hover:bg-slate-500">
              {tabela[8]}
              </td>
            </tr>
          </tbody>
        </table>
      </>
  

  )
}

