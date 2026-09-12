const INQUIRY_API_URL = import.meta.env.VITE_INQUIRY_API_URL;

export const submitInquiry = async ({
  name,
  phone,
  pilgrims,
  message,
}) => {
  const data = new URLSearchParams();

  data.append("name", name);
  data.append("phone", phone);
  data.append("travellers", pilgrims);
  data.append("message", message || "");

  const response = await fetch(INQUIRY_API_URL, {
    method: "POST",
    body: data,
  });

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message || "Failed to submit inquiry");
  }

  return result;
};
