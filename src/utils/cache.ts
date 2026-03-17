const cache = new Map<string, any>();

export const getFromCache = (key: string) => cache.get(key);

export const setToCache = (key: string, value: any) => cache.set(key, value);