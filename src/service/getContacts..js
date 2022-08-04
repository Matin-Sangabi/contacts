import { http } from "./httpRequest";

export function getAllContacts() {
    return http.get("/contacts");
}