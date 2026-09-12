const INQUIRY_API_URL = "https://script.google.com/macros/s/AKfycbzhGHIwDQqonlqaN-YGf_ghSe4BcI_ZOKJEvftUurcF-U_Cs5BOA5iH9sqCEM1uiWCKCw/exec"; // Replace with your Google Apps Script Web App URL

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
