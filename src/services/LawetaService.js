import http from "../http-common";

class LawetaService {
    contact() {
        return http.get("/contact");
    }
}

export default new LawetaService();