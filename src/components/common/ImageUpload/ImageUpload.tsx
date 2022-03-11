import React, { FC, useState, useEffect } from 'react';
import { Box, Image, useColorMode, useToast } from '@chakra-ui/react';
import ImageUploading, { ImageType } from 'react-images-uploading';
import { useField } from 'formik';

import { CloseButton } from '@/components/common';
import { Tooltip } from '@/components/ui';
import { EditIcon } from '@/components/icons';

// local components
import { DashedBorder } from './compoentns/DashedBorder';
import { UploadIcon } from './compoentns/UploadIcon';

import cn from 'classnames';
import styles from './ImageUpload.module.sass';

interface Props {
  name: string;
}

export const ImageUpload: FC<Props> = (props) => {
  //
  const { name } = props;

  const { colorMode } = useColorMode();
  const toast = useToast();

  // TODO: Move logic to FormItem element
  const [field, meta, helpers] = useField({ name: name, type: 'file' });

  const [images, setImages] = useState<ImageType[]>([]);
  const isUploaded = images.length !== 0;

  // TODO: Refactoring
  useEffect(() => {
    if (field.value.length > 0) {
      setImages([{ data_url: field.value }]);
    } else {
      setImages([]);
    }
  }, []);

  const handleOnChange = (imageList: ImageType[]) => {
    // data for submit
    setImages(imageList);

    // TODO: Work only with single image
    if (helpers) {
      // TODO: Fix for empty value
      if (imageList.length === 0) {
        helpers.setValue('');
        return;
      }

      helpers.setValue(imageList[0]?.data_url);
    }
  };

  const onError = (errors: any) => {
    let title: string;

    if (errors.maxFileSize) {
      title = 'Max file size 2MB.';
    } else if (errors.acceptType) {
      title = 'Wrong file format.';
    } else if (errors.resolution) {
      title = 'Max file resolution 300x300';
    } else {
      title = 'Error! Something wrong...';
      console.error(errors);
    }

    toast({
      title: title,
      status: 'error',
      isClosable: true,
      position: 'bottom-right',
      duration: 5000,
    });
  };

  // TODO: Switch validation to Object literals
  // function getErrorTitle(errorKey) {
  //   let errors = {
  //     maxFileSize: 'Max file size 2MB',
  //     acceptType: 'File forma is incorrect',
  //     default: 'Error! Something wrong',
  //   };
  //   let title = errors[errorKey] || errors['default'];
  //   return title;
  // }

  return (
    <Box>
      <ImageUploading
        multiple={false}
        value={images}
        onChange={handleOnChange}
        maxNumber={1}
        dataURLKey="data_url"
        acceptType={['jpg', 'jpeg', 'gif', 'png', 'webp']}
        maxFileSize={2097152}
        resolutionType={'less'}
        resolutionWidth={332}
        resolutionHeight={332}
        onError={onError}
        inputProps={{ name: name }}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <Tooltip
            label="Upload image"
            placement="top"
            isDisabled={isUploaded || isDragging}
          >
            <div
              className={cn(
                styles.Container,
                isUploaded && styles.Uploaded,
                isDragging && styles.Dragging,
                colorMode === 'dark' && styles.Dark
              )}
            >
              <div
                className={styles.UploadArea}
                onClick={onImageUpload}
                {...dragProps}
              />

              <DashedBorder className={cn(styles.Border)} />

              <UploadIcon className={cn(styles.Icon, styles.IconUpload)} />

              {isUploaded && (
                <div className={styles.ImageContainer}>
                  <Image
                    className={styles.Image}
                    src={imageList[0].data_url}
                    alt="Image"
                  />
                  <Tooltip label="Remove image" placement="top">
                    <CloseButton
                      className={styles.Remove}
                      onClick={() => onImageRemove(0)}
                    />
                  </Tooltip>
                  <Tooltip label="Replace image" placement="top">
                    <Box
                      className={cn(styles.Overlay)}
                      onClick={() => onImageUpdate(0)}
                    >
                      <EditIcon className={cn(styles.EditIcon)} />
                    </Box>
                  </Tooltip>
                </div>
              )}
            </div>
          </Tooltip>
        )}
      </ImageUploading>
    </Box>
  );
};

ImageUploading.displayName = 'ImageUploading';
