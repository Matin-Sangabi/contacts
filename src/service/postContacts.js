import { http } from "./httpRequest";

export function postAllContacts (data) {
    return http.post("/contacts" , data);
}