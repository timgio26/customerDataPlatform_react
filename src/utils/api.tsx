import axios from "axios";

// const beurl = import.meta.env.VITE_API_URL
const beurl = "http://localhost:8081"

export async function getAllCustomer() {
    const resp = await axios.get(`${beurl}/api/CDP/customer`)
    return resp.data
}
type NewCustomerDto = {
    Name:string;
    PhoneNumber:string;
}
export async function CreateNewCustomer(data:NewCustomerDto){
    const resp = await axios.post(`${beurl}/api/CDP/customer`,data)
    return resp.data
}

export async function GetCustomer(id:string){
    const resp = await axios.get(`${beurl}/api/CDP/customer/${id}`)
    return resp.data
}

type NewAddressDto = {
    customerId:string;
    alamat:string;
    kategori:string;
}

export async function CreateNewAddress(data:NewAddressDto){
    const resp = await axios.post(`${beurl}/api/CDP/address`,data)
    return resp.data
}

type NewServiceDto = {
  addressId: string;
  keluhan: string;
  tindakan: string;
  hasil: string;
};

export async function CreateNewService(data:NewServiceDto){
    const resp = await axios.post(`${beurl}/api/CDP/service`,data)
    return resp.data
}
