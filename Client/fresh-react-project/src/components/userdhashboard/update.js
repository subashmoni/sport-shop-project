import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export function Updatedetails(){
    var {id}=useParams()
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[phone,setPhone]=useState('')
    const[email,setEmail]=useState('')
    const[city,setCity]=useState('')
    const[state,setState]=useState('')
    const[password,setPassword]=useState('')
    const[roll,setRoll]=useState('')
    useEffect(()=>{
        fetch("http://localhost:3005/getone/"+id)
        .then(data=>data.json())
        .then((res)=>{
            setFname(res[0].fname)
            setLname(res[0].lname)
            setPhone(res[0].phone)
            setEmail(res[0].email)
            setCity(res[0].city)
            setState(res[0].state)
            setPassword(res[0].password)
            setRoll(res[0].roll)
        })
    },[])
    function handleupdate(event){
        event.preventDefault()
        var fname=document.getElementById("fname").value 
        var lname=document.getElementById("lname").value 
        var phone=document.getElementById("phone").value 
        var email=document.getElementById("email").value 
        var city=document.getElementById("city").value 
        var state=document.getElementById("state").value 
        var password=document.getElementById("password").value 
        var roll=document.getElementById("roll").value
        var updatedetails={
            fname:fname,
            lname:lname,
            phone:phone,
            email:email,
            city:city,
            state:state,
            password:password,
            roll:roll
        }
        if(fname===''){
            alert("Enter the fname")
        }
        else{
            axios.put("http://localhost:3005/update/"+id,updatedetails)
            .then((res)=>{

                if(res.data.status==="error"){
                    alert("data are not update")
                    
                }
                else if(res.data.status==="success"){
                    alert("data are upadted")
                    window.location.href='/view'
                }
            })

        }
    }
    return(
        <>
            <h1>Update Details</h1>
            <form onSubmit={handleupdate}>
                <input type="text" id="fname"  placeholder="Enter the fname" value={fname}  /><br/>
                <input type="text" id="lname" placeholder="Enter the lname" value={lname} onChange={(updatedata)=>{setLname(updatedata.target.value)}}/><br/>
                <input type="text" id="phone" placeholder="Enter the phone " value={phone} onChange={(updatedata)=>{setPhone(updatedata.target.value)}}/><br/>
                <input type="text" id="email" placeholder="Enter the email " value={email} onChange={(updatedata)=>{setEmail(updatedata.target.value)}}/><br/>
                <input type="text" id="city" placeholder="Enter the city" value={city} onChange={(updatedata)=>{setCity(updatedata.target.value)}}/><br/>
                <input type="text" id="state" placeholder="Enter the state" value={state} onChange={(updatedata)=>{setState(updatedata.target.value)}}/><br/>
                <input type="password" id="password" placeholder="Enter the password" value={password} onChange={(updatedata)=>{setPassword(updatedata.target.value)}}/><br/>
                <select id="roll" value={roll} onChange={(updatedata)=>{setRoll(updatedata.target.value)}}>
                    <option>select the Roll</option>
                    <option value="owner">OWNER</option>
                    <option value="client">CLIENT</option>
                </select><br/>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </>
    );
}