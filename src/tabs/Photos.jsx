import { getPhotos } from 'apiService/photos';
import { Button, Form, Loader, PhotosGallery, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    setIsLoading(true);

    const getImages = async () => {
      try {
        const { photos, total_results } = await getPhotos(query, page);
        setImages(prev => [...prev, ...photos]);
        setTotal(total_results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const onSubmit = text => {
    setQuery(text);
    setImages([]);
    setPage(1);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <PhotosGallery photos={images} />
      {images.length > 0 && images.length < total && (
        <Button onClick={handleClick}>Load More</Button>
      )}
    </>
  );
};
