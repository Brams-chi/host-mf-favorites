/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { ContentCardsNews, ListItemCustom } from './styles'
import { Avatar, List, ListItemAvatar, ListItemText } from '@mui/material'

const ListFavoritesHeroes = (props) => {
  const { favorites } = props;

  return (
    <List>
      <ContentCardsNews>
        {favorites.map((hero) => (
          <ListItemCustom
            sx={{
              backgroundColor: '#f0f0f0',
              height: '90px',
              borderRadius: '15px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              padding: '20px',
              margin: '20px auto',
              textAlign: 'center',
              lineHeight: '160px',
            }}
            key={hero.id}
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={`${hero.thumbnail.path}/portrait_fantastic.${hero.thumbnail.extension}`}
            />
            </ListItemAvatar>
            <ListItemText
              primary={hero.title}
            />
          </ListItemCustom>
        ))}
      </ContentCardsNews>
    </List>
  )
}

export default ListFavoritesHeroes