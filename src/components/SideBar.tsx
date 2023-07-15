import { useState } from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
const SideBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');

  return (
    <Stack direction="row" sx={{ overflowY: "auto", height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' }, }}>
      {categories.map((category) => {
        return (
          <button
            className="category-btn"
            style={{ background: category.name === selectedCategory ? '#FC1503' : '#000', color: 'snow' }}
            key={category.name}
          >
            <span style={{ color: category.name === selectedCategory ? 'snow' : '#FC1503', marginRight: '15px' }}>{category.icon}</span>
            <span style={{ opacity: category.name === selectedCategory ? '1' : '0.7' }}>{category.name}</span>
          </button>
        )
      })}
    </Stack>
  )
}

export default SideBar
