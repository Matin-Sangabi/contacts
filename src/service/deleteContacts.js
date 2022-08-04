import { http } from "./httpRequest";

export function DeleteContacts (id) {
    return http.delete(`/contacts/${id}`)
}