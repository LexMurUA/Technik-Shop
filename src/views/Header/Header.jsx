import { useState } from 'react'
import './Header.css'
const list = [1,2,34,5,6,7,8]
export const Header = ()=>{
    const [myList,setMylist]=useState(list)
    function del(or){
        setMylist(myList.filter(num=>num!=er))
    //     const newList = [...myList]
    //     newList.splice(or,1)
    //    setMylist(newList)
    }

//     return(
//         <header>
//             <ul>
//                 {myList.map((num,idx)=>(
//                     <li key={idx}><span onClick={()=>del(idx)}>X</span><span>{idx}</span> {num}</li>
//                 ))}
//             </ul>


//         </header>
//     )
// }
// export const Header = ()=>{
//     const [myList,setMylist]=useState(list)
//     function del(er){
//         setMylist(myList.filter(num=>num!=er))
//     }

    return(
        <header>
            <ul>
                {myList.map((num,idx)=>(
                    <li key={idx}><span onClick={()=>del(num)}>X</span> {num}</li>
                ))}
            </ul>


        </header>
    )
}