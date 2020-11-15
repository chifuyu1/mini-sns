// export const baseUrl = `http://localhost:3010`;
export const baseUrl = process.env.NODE_ENV === 'production' ? `https://api.chifuyu.site/` : `http://localhost:3010`;
