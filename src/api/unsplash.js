import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID qwR_u67WLATjxaT_j6_IbVvpU36klHUwdlvdwJyYZcY'
    }
});
