import { useState } from "react"
export function NewTodoForm({onSubmit}){
    const [newItem,setNewItem]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        if (newItem === '') return 
        onSubmit(newItem)
        setNewItem('')
    }


    return(
        <form className='items-center flex justify-center flex-col'onSubmit={handleSubmit}>
            <div className=" justify-center flex flex-col items-center py-6">
                <label htmlFor="item" className='py-3 mr-56 text-2xl'>New Item</label>
                <input type="text" id="item" value={newItem} onChange={e=>setNewItem(e.target.value)} className=" w-80 h-8 text-black" />
            </div>
            <button className=" w-28 bg-sky-400 bg-opacity-30 hover:bg-sky-500">ADD</button>
        </form>
    )
} 