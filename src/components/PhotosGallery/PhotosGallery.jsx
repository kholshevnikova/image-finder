import { PhotosGalleryItem } from 'components/index.js';
import { Grid } from '../Grid/Grid';

export const PhotosGallery = ({ photos }) => {
  return (
    <Grid>
      {photos.map(photo => (
        <PhotosGalleryItem key={photo.id} photo={photo} />
      ))}
    </Grid>
  );
};
