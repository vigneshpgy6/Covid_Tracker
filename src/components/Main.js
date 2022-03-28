import React, { useEffect, useState } from 'react'

const Main = () => {

    const [codata,setcodata]=useState([]);

    async function getdata()
    {
        const res = await fetch('https://api.covid19api.com/summary')
        const res1= await res.json()
        console.log(res1.Countries)
        setcodata(res1.Countries)
        return res1;
    }

    useEffect(()=>{
        getdata();
    },[])
  return (
    <div className='container'> 
        <table className="table table-hover ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Country</th>
      <th scope="col">Total Confirmed</th>
      <th scope="col">Total Death </th>
      <th scope="col">New Confirmed</th>
      <th scope="col">New Deaths</th>
    </tr>
  </thead>
  <tbody>
      {codata.map((val,index)=>{
          return (
           <tr>
          
           <td key={index}>{val.Country}</td>
           <td key={index}>{val.TotalConfirmed}</td>
           <td key={index}>{val.TotalDeaths}</td>
           <td key={index}>{val.NewConfirmed}</td>
           <td key={index}>{val.NewDeaths}</td>

           
         </tr>
          );

      })}
      

     
    
   
  </tbody>
</table>

    </div>
  )
}

export default Main