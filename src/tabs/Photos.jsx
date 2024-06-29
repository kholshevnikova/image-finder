import { getPhotos } from 'apiService/photos';
import { Form, Text } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getImages = async () => {
      try {
        const { photos, total_results } = await getPhotos(query, page);
        setImages(photos);
        setTotal(total_results);
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, [query, page]);

  const onSubmit = text => {
    setQuery(text);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
    </>
  );
};
