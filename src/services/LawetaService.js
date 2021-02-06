import http from "../http-common";

class LawetaService {
    contact() {
        return http.get("/contact");
    }
    sendEmail(data) {
        return http.post(`/send`, data);
    }
}

export default new LawetaService();