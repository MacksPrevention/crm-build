const API_URL = 'https://my-json-api-2qfm.onrender.com/api';

async function apiRequest(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Ошибка при запросе к API:', error);
    throw error;
  }
}

export default apiRequest;
