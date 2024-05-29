/* eslint-disable react/react-in-jsx-scope */
import { Typography } from "@mui/material"
import { BsCapslock } from "react-icons/bs"
import { ContentEmptyState } from "./styles"

const EmptyState = () => {
  return (
    <ContentEmptyState>
      <Typography
        variant='h4'
        gutterBottom
        sx={{ fontWeight: '500', color: '#d0d5dd', textAlign: 'justify', margin: '20px auto' }}
      >
        Selecciona tus favoritos
      </Typography>
      <BsCapslock style={{ color: '#d0d5dd', transform: 'rotate(180deg)' }} size={80} />
    </ContentEmptyState>
  )
}

export default EmptyState