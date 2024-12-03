import axios from "axios";

const logout = async () => {
    try {
        await axios.post("/api/logout"); // Отправляем запрос на API /logout
        window.location.reload(); // Обновляем страницу или выполняем перенаправление
    } catch (error) {
        console.error("Failed to logout:", error);
    }
}
export default logout;