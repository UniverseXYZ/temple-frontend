import React from 'react';
import { Box, useClipboard } from '@chakra-ui/react';
import { Tooltip } from '@/components/ui';

interface Props {
  value: string;
  children?: React.ReactNode;
  tooltipVariant?: string;
}

export const CopyableText = (props: Props) => {
  //
  const { value, tooltipVariant, children } = props;

  const { hasCopied, onCopy } = useClipboard(value);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCopy();
  };

  return (
    <Tooltip
      label={hasCopied ? 'Copied!' : 'Copy'}
      openDelay={200}
      variant={tooltipVariant}
    >
      <Box as="span" cursor={'pointer'} onClick={(e) => handleCopy(e)}>
        {children}
      </Box>
    </Tooltip>
  );
};
