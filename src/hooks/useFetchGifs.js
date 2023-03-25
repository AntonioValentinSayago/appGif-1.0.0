import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {

/* Creating a state for the images and isLoading. */
const [images, setImages] = useState([]);
const [isLoading, setIsLoading] = useState( true);

/**
 * GetImages is an async function that gets the gifs from the category, 
 * sets the images to the new
 * images, and sets the isLoading to false.
 */
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading( false);
  }

  useEffect(() => {
    getImages();
  }, [])  ;


  return {

    images,
    isLoading

  }
}
