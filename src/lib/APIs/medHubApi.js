//BASE URL
const BASE_URL = "http://localhost:3001/api/v1";

export const userLogin = async (verificationToken) => {
  try {
    console.log("Calling userLogin with token:", verificationToken);
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ verificationToken }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Response received from userLogin:", response);

    const data = await response.json();
    console.log("Data received from userLogin:", data);
    if (response.status === 200 || response.ok) {
      return data;
    }
    return data;
  } catch (error) {
    console.log("Error occurred in userLogin:", error);
    return { error: "something went wrong" };
  }
};

export const getCurrentUser = async () => {
    try {
        console.log("Fetching current user...");
        const response = await fetch(`${BASE_URL}/me`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("Response received:", response);
        const data = await response.json();
        if (response.status === 200 || response.ok) {
            console.log("Data retrieved successfully:", data);
            return data;
        }
        console.log("Error fetching data:", data);
        return data;
    } catch (error) {
        console.log("An error occurred:", error);
        return { error: "something went wrong" };
    }
}
export const logoutUser = async () => {
    try {
        console.log("Logging out user...");
        const response = await fetch(`${BASE_URL}/logout`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("Response received:", response);
        const data = await response.json();
        console.log("Data received:", data);
        if (response.status === 200 || response.ok) {
            console.log("Logout successful");
            return data;
        }
        console.log("Error logging out user:", data);
        return data;
    } catch (error) {
        console.log("An error occurred:", error);
        return { error: "something went wrong" };
    }
}
