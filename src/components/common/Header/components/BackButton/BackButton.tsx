import React from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@/components/icons';

export const BackButton = () => {
  //
  const navigate = useNavigate();
  const match = useMatch('/');

  return (
    <>
      {!match ? (
        <Button
          variant="ghost"
          leftIcon={<ArrowLeftIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      ) : null}
    </>
  );
};
