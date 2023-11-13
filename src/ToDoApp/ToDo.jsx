import React,{useState,Fragment} from 'react'

const ToDo = () => {
let [inputValue,setInputValue]=useState("");
let [listItems,setListItems]=useState([]);
let [editIndex,setEditIndex]=useState(null);




let handleChange=(e)=>{
  setInputValue(e.target.value);
}

  let handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputValue);
  }

  let handleAdd=()=>{
    if(inputValue!==""){
      if(editIndex!==null){
        listItems[editIndex]=inputValue;
        setEditIndex(null)
      }
      else{
    setListItems([...listItems,inputValue])
      }

    setInputValue("")
    }
  }

  let handleDelete=(id)=>{
    let newList=listItems.filter((val,index)=>{
    return index!==id
    })
    setListItems(newList)
  }

    let handleEdit=(id)=>{
    setInputValue(listItems[id])
    setEditIndex(id);
}


  
  return (
    <>
    <h1>ToDO App</h1>
    <form onSubmit={handleSubmit} autoComplete='off' >
      <input type="text" name="EnterValue" id="value" onChange={handleChange}/>
      <button onClick={ handleAdd}>{editIndex==null?"Add Items":"Update Items"}</button>

    </form>

    <section>
      
        {listItems.map((val,index)=>{
            return(
              <Fragment key={index}>
                  <h3>{val}</h3>
                <button onClick={()=>{handleEdit(index)}}>Edit</button>
                <button onClick={()=>{handleDelete(index)}}>Delete</button>

              </Fragment>
            )
        })}
      
    </section>

    <button onClick={()=>setListItems([])}>Clear All</button>
    </>
  )
}

export default ToDo