import axios from "axios";

export async function getAllCustomer() {
    const resp = await axios.get("https://localhost:7199/api/CDP/customer")
    return resp.data
}
type NewCustomerDto = {
    Name:string;
    PhoneNumber:string;
}
export async function CreateNewCustomer(data:NewCustomerDto){
    const resp = await axios.post("https://localhost:7199/api/CDP/customer",data)
    return resp.data
}

export async function GetCustomer(id:string){
    const resp = await axios.get(`https://localhost:7199/api/CDP/customer/${id}`)
    return resp.data
}
