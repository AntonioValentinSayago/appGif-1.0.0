export const getGifs = async (category) => {
/* Fetching the data from the API. */
    const url = `https://api.giphy.com/v1/gifs/search?api_key=vLJiOZ6gLDp1L1dLoHJYZ60JWEP60Lh1&q=${category}&limit=1`;
    const resp = await fetch(url);
    const { data } = await resp.json();

/* Mapping the data from the API to the gifs array. */
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);

    return gifs;
}
