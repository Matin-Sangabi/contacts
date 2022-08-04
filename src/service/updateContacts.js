import { http } from "./httpRequest";

export function updateOneContacts (id , data) {
    return http.put(`/contacts/${id}` , data);
}