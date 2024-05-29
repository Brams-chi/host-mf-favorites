
import { Grid, ListItem, styled } from "@mui/material"

export const ContentCardsNews = styled(Grid)(() => ({
  width: '100%',
  display: "grid",
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  margin: '60px auto',
}))

export const ListItemCustom = styled(ListItem)(() => ({
  width: '90%',
  margin: '0px auto',
}))

export const ContentEmptyState = styled('div')(() => ({
  display: "flex",
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '25px',
}))
