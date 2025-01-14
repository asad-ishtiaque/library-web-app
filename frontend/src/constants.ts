
interface ServiceKeys {
  baseUrl: string | undefined;
}

export const serviceKeys: ServiceKeys = {
  baseUrl: import.meta.env.VITE_BASE_URL,
};
