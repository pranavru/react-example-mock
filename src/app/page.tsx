import styles from './page.module.css'
import * as React from 'react';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main className={styles.main}>
      {'React Notes App'}
      <Button variant="contained">Hello world</Button>;
    </main>
  )
}
