const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/cart`;

const getToken = () => localStorage.getItem("token");

export const getCartAPI = async () => {
    const userId = localStorage.getItem("userId"); // ✅ get userId

    const res = await fetch(BASE_URL, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });

    return res.json();
};
export const addToCartAPI = async (data) => {
    const res = await fetch(`${BASE_URL}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(data)
    });
    return res.json();
};

export const updateCartAPI = async (data) => {
    const res = await fetch(`${BASE_URL}/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(data)
    });
    return res.json();
};

export const removeCartAPI = async (data) => {
    const res = await fetch(`${BASE_URL}/remove`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(data)
    });
    return res.json();
};