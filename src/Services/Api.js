import {Client} from './Client'
export async function registerUser(data)
{
    await Client("register","POST",data,null)
}
export async function AddProperty(data)
{
    await Client("AddProperty","POST",data,null)
}
export async function getProperties()
{
    const response=await Client("GetProperty","GET",null,null)
    console.log(response)
    return response.data;
}
export async function userlogin(data)
{
    const response=await Client("login","POST",data,null)
    console.log(response)
    return response.data;
}
export async function getOwner(data)
{
    console.log(data)
    const response=await Client("getOwner","POST",data,null)
    console.log(response);
    return response.data;
}
export async function getMyProperties(data)
{
    const response=await Client("getMyProperties","POST",data,null)
    console.log(response)
    return response.data;
}