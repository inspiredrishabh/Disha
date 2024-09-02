import { atom } from "recoil";



export interface User {
    username: string;
    name: string;
    password: string;
}



export const user = atom<User>({
    key: "user",
    default:  {
        username: "",
        name: "",
        password: "",
    }
});